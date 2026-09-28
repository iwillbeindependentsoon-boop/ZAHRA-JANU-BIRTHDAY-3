document.addEventListener("DOMContentLoaded", () => {
  // Open the birthday surprise
  const buttons = [...document.querySelectorAll("button, a")];

  const surpriseButton = buttons.find(el =>
    el.textContent.trim().toLowerCase().includes("open your surprise")
  );

  if (surpriseButton) {
    surpriseButton.addEventListener("click", () => {
      const openingScreen =
        document.querySelector(".opening-screen") ||
        document.querySelector(".intro") ||
        document.querySelector("#opening");

      const mainContent =
        document.querySelector(".main-content") ||
        document.querySelector("#main-content") ||
        document.querySelector("main");

      if (openingScreen) {
        openingScreen.classList.add("hidden");
        openingScreen.style.display = "none";
      }

      if (mainContent) {
        mainContent.classList.remove("hidden");
        mainContent.style.display = "";
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      createConfetti();
    });
  }

  // Photo lightbox
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");

      overlay.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,.92);
        display:flex;
        align-items:center;
        justify-content:center;
        z-index:99999;
        padding:20px;
        cursor:pointer;
      `;

      const enlarged = document.createElement("img");
      enlarged.src = img.src;

      enlarged.style.cssText = `
        max-width:95%;
        max-height:90%;
        object-fit:contain;
        border-radius:16px;
        box-shadow:0 10px 50px rgba(0,0,0,.5);
      `;

      overlay.appendChild(enlarged);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => overlay.remove());
    });
  });

  // Confetti
  function createConfetti() {
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement("span");

      piece.style.position = "fixed";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.top = "-20px";
      piece.style.width = "8px";
      piece.style.height = "8px";
      piece.style.background =
        ["#f5c76b", "#e8a9b8", "#ffffff", "#b76e79"][
          Math.floor(Math.random() * 4)
        ];
      piece.style.zIndex = "100000";
      piece.style.borderRadius = "2px";
      piece.style.pointerEvents = "none";

      document.body.appendChild(piece);

      const duration = 2000 + Math.random() * 2500;

      piece.animate(
        [
          {
            transform: "translateY(0) rotate(0deg)",
            opacity: 1
          },
          {
            transform:
              "translateY(110vh) rotate(" +
              (Math.random() * 720 - 360) +
              "deg)",
            opacity: 0
          }
        ],
        {
          duration: duration,
          easing: "ease-out"
        }
      ).onfinish = () => piece.remove();
    }
  }
});
