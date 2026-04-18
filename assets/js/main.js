document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('dishCarousel');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
  const reservationForm = document.getElementById('reservationForm');
  const reservationStatus = document.getElementById('reservationStatus');
  const revealItems = document.querySelectorAll('.reveal');

  if (document.body) {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        document.body.classList.add('is-ready');
      });
    });
  }

  if (carousel && prevBtn && nextBtn) {
    const getScrollAmount = function () {
      const card = carousel.querySelector('article');
      return card ? card.getBoundingClientRect().width + 24 : 320;
    };

    prevBtn.addEventListener('click', function () {
      carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', function () {
      carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });
  }

  if (menuToggle && mobileMenu) {
    const setMenuState = function (isOpen) {
      mobileMenu.dataset.open = String(isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    menuToggle.addEventListener('click', function () {
      setMenuState(mobileMenu.dataset.open !== 'true');
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuState(false);
      });
    });
  }

  if (reservationForm && reservationStatus) {
    reservationForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(reservationForm);
      const guestName = formData.get('name');
      reservationStatus.textContent = 'Solicitud recibida para ' + guestName + '. Te contactaremos dentro de las próximas 2 horas.';
      reservationForm.reset();
    });
  }

  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  }
});