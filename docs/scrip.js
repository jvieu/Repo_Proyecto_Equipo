// Animación suave de aparición para las secciones de la webstory

const elementos = document.querySelectorAll(
  ".section, .remix-slide, .iframe-card, .card, .side-image-card"
);

elementos.forEach((elemento) => {
  elemento.classList.add("fade-in");
});

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

elementos.forEach((elemento) => {
  observer.observe(elemento);
});
