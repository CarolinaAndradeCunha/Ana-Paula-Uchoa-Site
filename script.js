// Rolagem suave ao clicar nos links âncora
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

// Revelar elementos ao rolar
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

// Efeito ao carregar a página
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Modal de imagem (galeria)
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

// Impede que clique na imagem feche o modal
modalImg.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Botão de fechar (X)
fechar.onclick = () => {
  modal.style.display = "none";
};

// Fecha o modal ao clicar fora da imagem
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
