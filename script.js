let currentPage = 1;
const totalPages = 9;

function showPage(pageNumber) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(`page${pageNumber}`);

  if (target) {
    target.classList.add("active");
    currentPage = pageNumber;
    updateProgress();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
}

function answerAndNext(answer) {
  console.log("Selected:", answer);

  createHeartBurst();

  setTimeout(() => {
    nextPage();
  }, 350);
}

function updateProgress() {
  const progress = document.getElementById("progressText");

  if (progress) {
    progress.textContent = `${currentPage} / ${totalPages}`;
  }
}

function restartExperience() {
  showPage(1);
}

function createFloatingHeart() {
  const container = document.getElementById("hearts-container");

  if (!container) return;

  const heart = document.createElement("span");
  heart.className = "floating-heart";

  const hearts = ["❤️", "💗", "💕", "🌸", "✨"];
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";

  const duration = 5 + Math.random() * 5;
  heart.style.animationDuration = duration + "s";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

function createHeartBurst() {
  const container = document.getElementById("hearts-container");

  if (!container) return;

  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("span");

    heart.textContent = "💗";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "20px";
    heart.style.transition = "all 0.7s ease";
    heart.style.opacity = "1";

    const x = (Math.random() - 0.5) * 280;
    const y = (Math.random() - 0.5) * 280;

    container.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform =
        `translate(${x}px, ${y}px) scale(${0.7 + Math.random()})`;
      heart.style.opacity = "0";
    });

    setTimeout(() => {
      heart.remove();
    }, 800);
  }
}

setInterval(createFloatingHeart, 900);

document.addEventListener("DOMContentLoaded", () => {
  updateProgress();
});
