document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      })
    }
  })
})

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal')
    }
  })
})

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
  observer.observe(el)
})

window.addEventListener('load', () => {
  document.body.classList.add('loaded')
})

let indiceAtual = 0;

const carrosselContainer = document.querySelector('.carrossel-container');
const carrosselList = document.querySelector('#carrossel-list');
const itens = document.querySelectorAll('.carrossel-item');
const btnPrev = document.querySelector('.carrossel-btn-prev');
const btnNext = document.querySelector('.carrossel-btn-next');

function atualizarCarrossel() {
  const total = itens.length;

  itens.forEach((item, i) => {
    item.classList.remove('ativo', 'anterior', 'proximo');

    if (i === indiceAtual) {
      item.classList.add('ativo');
    } else if (i === (indiceAtual - 1 + total) % total) {
      item.classList.add('anterior');
    } else if (i === (indiceAtual + 1) % total) {
      item.classList.add('proximo');
    }
  });
}

btnPrev.addEventListener('click', () => {
  indiceAtual = (indiceAtual - 1 + itens.length) % itens.length;
  atualizarCarrossel();
});

btnNext.addEventListener('click', () => {
  indiceAtual = (indiceAtual + 1) % itens.length;
  atualizarCarrossel();
});

itens.forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('ativo')) {
      const urlImg = item.style.backgroundImage.slice(5, -2); 
      window.open(urlImg, '_blank');
    }
  });
});

atualizarCarrossel();
