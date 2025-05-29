document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
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

const photos = document.querySelectorAll('.carousel-photo');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.modal-close');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

if (photos.length >= 5) {
  let positions = [0, 1, 2, 3, 4];

  function updateCarousel() {
    photos.forEach(photo => {
      photo.classList.remove(
        'main-photo',
        'left-small',
        'right-small',
        'left-hidden',
        'right-hidden'
      );
    });

    photos[positions[0]].classList.add('left-hidden');
    photos[positions[1]].classList.add('left-small');
    photos[positions[2]].classList.add('main-photo');
    photos[positions[3]].classList.add('right-small');
    photos[positions[4]].classList.add('right-hidden');
  }

  function rotateRight() {
    positions.unshift(positions.pop());
    updateCarousel();
  }

  function rotateLeft() {
    positions.push(positions.shift());
    updateCarousel();
  }

  leftArrow.addEventListener('click', rotateLeft);
  rightArrow.addEventListener('click', rotateRight);

  photos.forEach(photo => {
    photo.addEventListener('click', () => {
      if (photo.classList.contains('main-photo')) {
        modalImg.src = photo.src;
        modal.classList.remove('hidden');
      }
    });
  });

  updateCarousel();
}

if (modal && modalImg && closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
}
