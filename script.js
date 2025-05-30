document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
});

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
  observer.observe(el);
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagem-ampliada");
const imagens = document.querySelectorAll(".imagem-espaco");
const fechar = document.querySelector(".fechar");

imagens.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt; // cópia do alt para acessibilidade
  });
});

modalImg.addEventListener("click", (e) => {
  e.stopPropagation();
});

fechar.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
