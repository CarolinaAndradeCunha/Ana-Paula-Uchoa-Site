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
