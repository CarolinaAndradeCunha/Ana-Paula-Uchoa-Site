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

function moverCarrossel(direcao) {
  const itens = document.querySelectorAll('.carrossel-item');
  itens[indiceAtual].classList.remove('ativo');

  indiceAtual = (indiceAtual + direcao + itens.length) % itens.length;

  itens[indiceAtual].classList.add('ativo');
}
