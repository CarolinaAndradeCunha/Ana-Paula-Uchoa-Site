 document.addEventListener("DOMContentLoaded", () => {
      const botoes = document.querySelectorAll(".seta");
      const carrossel = document.querySelector(".carrossel");
      const itens = document.querySelectorAll(".carrossel-item");

      let indice = 0;

      function mostrarItem(index) {
        itens.forEach(item => item.classList.remove("ativo"));
        itens[index].classList.add("ativo");
      }

      function moverCarrossel(direcao) {
        indice = (indice + direcao + itens.length) % itens.length;
        mostrarItem(indice);
      }

      botoes.forEach(btn => {
        btn.addEventListener("click", () => {
          moverCarrossel(btn.classList.contains("esquerda") ? -1 : 1);
        });
      });

      const elementos = document.querySelectorAll('.reveal-on-scroll');

      const observer = new IntersectionObserver(entradas => {
        entradas.forEach(entrada => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('aparecer');
          }
        });
      }, {
        threshold: 0.1
      });

      elementos.forEach(el => observer.observe(el));
    });
