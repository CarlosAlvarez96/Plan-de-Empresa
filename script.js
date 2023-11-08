document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides[currentSlide].style.display = "none";
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  nextSlide(); // Mostrar la primera imagen inmediatamente al cargar la página
  setInterval(nextSlide, 7000); // Cambiar la imagen cada 7 segundos (7000 ms)
});
