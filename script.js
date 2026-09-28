document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     REVEAL ANIMATIONS
  ----------------------------- */

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  reveals.forEach(element => {
    observer.observe(element);
  });


  /* -----------------------------
     PHOTO LIGHTBOX
  ----------------------------- */

  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  const photos = document.querySelectorAll(".photo-card img");

  photos.forEach(photo => {

    photo.addEventListener("click", () => {

      if (!modal || !modalImage) return;

      modalImage.src = photo.src;
      modal.classList.add("open");

    });

  });

  if (closeModal) {

    closeModal.addEventListener("click", () => {
      modal.classList.remove("open");
    });

  }

  if (modal) {

    modal.addEventListener("click", event => {

      if (event.target === modal) {
        modal.classList.remove("open");
      }

    });

  }


  /* -----------------------------
     FINAL CELEBRATION
  ----------------------------- */

  const celebrateButton =
    document.getElementById("celebrateBtn");

  const finalMessage =
    document.getElementById("finalMessage");

  if (celebrateButton) {

    celebrateButton.addEventListener("click", () => {

      if (finalMessage) {
        finalMessage.classList.add("show");
      }

      createSparkles();

      celebrateButton.innerHTML =
        "<span>For Zahra ♡</span><b>✦</b>";

      celebrateButton.disabled = true;

    });

  }


  /* -----------------------------
     SMALL SPARKLE EFFECT
  ----------------------------- */

  function createSparkles() {

    for (let i = 0; i < 70; i++) {

      const sparkle = document.createElement("div");

      sparkle.className = "spark";

      sparkle.style.left =
        Math.random() * 100 + "vw";

      sparkle.style.top =
        Math.random() * 100 + "vh";

      sparkle.style.setProperty(
        "--x",
        (Math.random() * 300 - 150) + "px"
      );

      sparkle.style.setProperty(
        "--y",
        (Math.random() * 500 - 250) + "px"
      );

      sparkle.style.animationDelay =
        Math.random() * .5 + "s";

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 2200);

    }

  }

});
