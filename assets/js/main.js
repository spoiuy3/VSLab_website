(function () {
  // ===== existing: mobile nav toggle =====
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const year = document.querySelector("#year");

  if (year) year.textContent = new Date().getFullYear();

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
    });

    document.addEventListener("click", (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const inside = nav.contains(t) || toggle.contains(t);
      if (!inside && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "메뉴 열기");
      }
    });
  }

  // ===== NEW: hero carousel =====
  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".carousel__track");
  const slides = Array.from(carousel.querySelectorAll(".carousel__slide"));
  const prevBtn = carousel.querySelector(".carousel__btn--prev");
  const nextBtn = carousel.querySelector(".carousel__btn--next");
  const dots = Array.from(carousel.querySelectorAll(".carousel__dot"));

  if (!track || slides.length === 0) return;

  let index = 0;
  let timer = null;
  const autoplay = carousel.dataset.autoplay === "true";
  const interval = Number(carousel.dataset.interval || 5000);

  function setActive(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;

    slides.forEach((s, k) => s.classList.toggle("is-active", k === index));
    dots.forEach((d, k) => d.classList.toggle("is-active", k === index));
  }

  function next() { setActive(index + 1); }
  function prev() { setActive(index - 1); }

  function start() {
    if (!autoplay) return;
    stop();
    timer = window.setInterval(next, interval);
  }

  function stop() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  // buttons
  if (nextBtn) nextBtn.addEventListener("click", () => { next(); start(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prev(); start(); });

  // dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { setActive(i); start(); });
  });

  // pause on hover/focus (좋은 UX)
  const viewport = carousel.querySelector(".carousel__viewport");
  if (viewport) {
    viewport.addEventListener("mouseenter", stop);
    viewport.addEventListener("mouseleave", start);
    viewport.addEventListener("focusin", stop);
    viewport.addEventListener("focusout", start);
  }

  // init
  setActive(0);
  start();
})();
