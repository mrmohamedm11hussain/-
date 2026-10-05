/* =========================
   START BUTTON
========================= */

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  document.querySelector(".intro").scrollIntoView({
    behavior: "smooth"
  });
});


/* =========================
   RESTART
========================= */

const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }

      });

    },
    {
      threshold: 0.15
    }
  );


revealElements.forEach(element => {
  observer.observe(element);
});


/* =========================
   COUNTERS
========================= */

const counters =
  document.querySelectorAll("[data-count]");

const counterObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target =
          Number(counter.dataset.count);

        let current = 0;

        const duration = 1600;
        const stepTime =
          duration / target;

        const timer = setInterval(() => {

          current++;

          counter.textContent =
            current.toLocaleString("ar-EG");

          if (current >= target) {
            clearInterval(timer);
          }

        }, Math.max(stepTime, 8));

        counterObserver.unobserve(counter);

      });

    },
    {
      threshold: 0.7
    }
  );


counters.forEach(counter => {
  counterObserver.observe(counter);
});


/* =========================
   PARTICLES
========================= */

const canvas =
  document.getElementById("particles");

const ctx =
  canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

  canvas.width =
    window.innerWidth;

  canvas.height =
    window.innerHeight;
}

resizeCanvas();

window.addEventListener(
  "resize",
  resizeCanvas
);


function createParticles() {

  particles = [];

  const amount =
    Math.min(
      100,
      Math.floor(window.innerWidth / 10)
    );

  for (let i = 0; i < amount; i++) {

    particles.push({

      x: Math.random() *
        canvas.width,

      y: Math.random() *
        canvas.height,

      size:
        Math.random() * 1.7 + .3,

      speed:
        Math.random() * .35 + .05,

      opacity:
        Math.random() * .6 + .2

    });

  }
}

createParticles();


function animateParticles() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  particles.forEach(p => {

    p.y -= p.speed;

    if (p.y < 0) {
      p.y = canvas.height;
      p.x =
        Math.random() *
        canvas.width;
    }

    ctx.beginPath();

    ctx.arc(
      p.x,
      p.y,
      p.size,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      `rgba(255,255,255,${p.opacity})`;

    ctx.fill();

  });

  requestAnimationFrame(
    animateParticles
  );
}

animateParticles();


/* =========================
   PARALLAX
========================= */

window.addEventListener(
  "scroll",
  () => {

    const hero =
      document.querySelector(".hero-content");

    const scroll =
      window.scrollY;

    if (scroll < window.innerHeight) {

      hero.style.transform =
        `translateY(${scroll * .18}px)`;

      hero.style.opacity =
        Math.max(
          0,
          1 - scroll / 600
        );
    }

  }
);
