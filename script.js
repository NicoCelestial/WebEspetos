// Año en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Carrusel (destacados)
const track = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function slideWidth() {
  return track.clientWidth;
}

prevBtn.addEventListener("click", () => {
  track.scrollBy({ left: -slideWidth(), behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  track.scrollBy({ left: slideWidth(), behavior: "smooth" });
});

// Swipe en móvil
let startX = 0;
track.addEventListener(
  "touchstart",
  (e) => (startX = e.touches[0].clientX),
  { passive: true }
);

track.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (Math.abs(diff) > 45) {
    track.scrollBy({
      left: diff > 0 ? -slideWidth() : slideWidth(),
      behavior: "smooth",
    });
  }
});

// Formulario demo (no envía, solo muestra mensaje)
const contactForm = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  status.style.display = "block";
  status.textContent =
    "✅ Mensaje preparado (demo). En una web real, esto se enviaría a vuestro email/CRM.";
  contactForm.reset();
});

// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Cerrar menú al pulsar un enlace (móvil)
  mainNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}


