document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       BEGIN EXPERIENCE
    ===================================== */

    const beginBtn =
        document.getElementById("beginBtn");

    if (beginBtn) {

        beginBtn.addEventListener("click", () => {

            beginBtn.innerHTML =
                "<span>OPENING...</span><b>✦</b>";

            setTimeout(() => {
                window.location.href = "letter.html";
            }, 700);

        });

    }


    /* =====================================
       DUA SLIDER
    ===================================== */

    const duaCards =
        document.querySelectorAll(".dua-card");

    const nextDua =
        document.getElementById("nextDua");

    let currentDua = 0;

    if (nextDua && duaCards.length) {

        nextDua.addEventListener("click", () => {

            duaCards[currentDua]
                .classList.remove("active-dua");

            currentDua++;

            if (currentDua >= duaCards.length) {

                window.location.href =
                    "wishes.html";

                return;
            }

            duaCards[currentDua]
                .classList.add("active-dua");

            if (
                currentDua ===
                duaCards.length - 1
            ) {
                nextDua.innerHTML =
                    "<span>FINISH DUAS</span><b>→</b>";
            }

        });

    }


    /* =====================================
       WISHES
    ===================================== */

    const wishButtons =
        document.querySelectorAll(".wish-box");

    const wishText =
        document.getElementById("wishText");

    const wishes = [

        "May you always have more reasons to smile than reasons to worry.",

        "May the people around you value your heart, your presence and your kindness.",

        "May you have the courage to walk away from anything that isn't good for your peace.",

        "May you become the person you dream about becoming.",

        "May beautiful opportunities find you in places you never expected.",

        "May Allah make your future even more beautiful than you imagined."

    ];

    wishButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            wishButtons.forEach(item => {
                item.classList.remove("selected");
            });

            button.classList.add("selected");

            if (wishText) {

                wishText.style.opacity = "0";

                setTimeout(() => {

                    wishText.textContent =
                        wishes[index];

                    wishText.style.opacity = "1";

                }, 180);

            }

        });

    });


    /* =====================================
       FINAL SURPRISE
    ===================================== */

    const surpriseBtn =
        document.getElementById("surpriseBtn");

    const finalReveal =
        document.getElementById("finalReveal");

    const finalNext =
        document.querySelector(".final-next");

    if (surpriseBtn) {

        surpriseBtn.addEventListener("click", () => {

            surpriseBtn.style.display =
                "none";

            if (finalReveal) {
                finalReveal.classList.add("show");
            }

            if (finalNext) {
                finalNext.classList.add("show");
            }

            createParticles();

        });

    }


    /* =====================================
       GOLD PARTICLES
    ===================================== */

    function createParticles() {

        for (let i = 0; i < 80; i++) {

            const particle =
                document.createElement("span");

            particle.style.position =
                "fixed";

            particle.style.width =
                "5px";

            particle.style.height =
                "5px";

            particle.style.borderRadius =
                "50%";

            particle.style.background =
                "#f0d58f";

            particle.style.left =
                Math.random() * 100 + "vw";

            particle.style.top =
                Math.random() * 100 + "vh";

            particle.style.pointerEvents =
                "none";

            particle.style.zIndex =
                "200";

            particle.style.boxShadow =
                "0 0 15px #cba45c";

            document.body.appendChild(
                particle
            );

            const x =
                (Math.random() * 400) - 200;

            const y =
                (Math.random() * 500) - 250;

            particle.animate(

                [
                    {
                        opacity: 1,
                        transform: "translate(0,0)"
                    },

                    {
                        opacity: 0,
                        transform:
                            `translate(${x}px,${y}px)`
                    }
                ],

                {
                    duration:
                        1500 +
                        Math.random() * 1800,

                    easing: "ease-out"
                }

            ).onfinish = () => {
                particle.remove();
            };

        }

    }


    /* =====================================
       TOUCH SWIPE FOR DUAS
    ===================================== */

    let touchStartX = 0;

    document.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.touches[0].clientX;

        },
        { passive: true }
    );

    document.addEventListener(
        "touchend",
        event => {

            const touchEndX =
                event.changedTouches[0].clientX;

            const distance =
                touchEndX - touchStartX;

            if (
                Math.abs(distance) > 80 &&
                distance < 0 &&
                nextDua
            ) {
                nextDua.click();
            }

        },
        { passive: true }
    );

});
