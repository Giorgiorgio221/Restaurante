document.addEventListener('DOMContentLoaded', function() {
  // Menu Mobile
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  
  mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  // Scroll suave para links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (this.getAttribute('href') === '#') return;
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Fechar menu mobile se aberto
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
      }
    });
  });

  // Slideshow do Hero
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }
  
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  // Mudar slide a cada 5 segundos
  setInterval(nextSlide, 5000);

  // Categorias do Menu
  const categoryBtns = document.querySelectorAll('.category-btn');
  const menuCategories = document.querySelectorAll('.menu-category');
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      // Atualizar botões ativos
      categoryBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Mostrar categoria selecionada
      menuCategories.forEach(cat => {
        cat.classList.remove('active');
        if (cat.id === category) {
          cat.classList.add('active');
        }
      });
    });
  });

  // Formulário de Reserva
  const reservationForm = document.getElementById('reservation-form');
  const reservationSuccess = document.getElementById('reservation-success');
  const newReservationBtn = document.getElementById('new-reservation-btn');
  
  if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simular envio do formulário
      setTimeout(() => {
        reservationForm.style.display = 'none';
        reservationSuccess.style.display = 'block';
      }, 1000);
    });
  }
  
  newReservationBtn.addEventListener('click', function() {
    reservationSuccess.style.display = 'none';
    reservationForm.style.display = 'block';
    reservationForm.reset();
    window.scrollTo({
      top: reservationForm.offsetTop - 70,
      behavior: 'smooth'
    });
  });

  // Mostrar/ocultar detalhes da ocasião
  const ocasiaoSelect = document.getElementById('ocasiao');
  const detalhesOcasiao = document.getElementById('detalhes-ocasiao');
  
  ocasiaoSelect.addEventListener('change', function() {
    detalhesOcasiao.style.display = this.value === 'outra' ? 'block' : 'none';
  });

  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Animação ao rolar a página
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.about-container, .menu-section, .shop-section, .reservation-section, .contact-container');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Adicionar estilos iniciais para animação
  document.querySelectorAll('.about-container, .menu-section, .shop-section, .reservation-section, .contact-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Executar uma vez ao carregar
});