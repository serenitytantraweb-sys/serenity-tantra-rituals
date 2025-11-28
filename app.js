const services = [
  {
    id: 'harmony-relax',
    name: 'Harmony Relax',
    price: '50€',
    shortDescription: 'Massagem relaxante profunda para liberar tensões e renovar energia.',
    fullDescription: 'Mergulhe em uma experiência de serenidade com a nossa massagem Harmony Relax. Aproveite uma hora completa de técnicas profundas de relaxamento, aplicadas em uma marquesa especialmente projetada para o seu conforto. Em um ambiente acolhedor e envolvente, cada movimento é pensado para liberar tensões e renovar sua energia. Permita-se um descanso total e alcance um estado de paz interior com o Harmony Relax.',
    duration: '60 min',
    environment: 'Marquesa',
    icon: 'relax'
  },
  {
    id: 'therapeutic-relax',
    name: 'Therapeutic Relax',
    price: '80€',
    shortDescription: 'Massagem terapêutica para aliviar tensões profundas e contraturas.',
    fullDescription: 'Nossa massagem Deep Healing Therapy foi desenvolvida para aliviar tensões profundas, liberar contraturas e melhorar a mobilidade muscular. Feita em uma marquesa, utiliza técnicas específicas que trabalham sobre pontos de grande rigidez. Durante uma hora, manobras firmes e pausadas ajudam a desfazer nós musculares, melhorar a circulação e restaurar o equilíbrio natural do corpo. Ideal para quem sofre de estresse, dores musculares, má postura ou sobrecarga física.',
    duration: '60 min',
    environment: 'Marquesa',
    icon: 'therapeutic'
  },
  {
    id: 'divine-energy',
    name: 'Divine Energy Massage',
    subtitle: 'Massagem Tântrica',
    price: '130€',
    shortDescription: 'Fusão entre sabedoria tântrica e energia divina para conexão interior.',
    fullDescription: 'O Divine Energy Massage é uma fusão entre sabedoria tântrica e energia divina. Realizado em tatami, com música suave e luzes quentes, ativa canais energéticos através de toques conscientes e profundos. Promove conexão interior, liberação emocional e bem-estar integral, levando o paciente a um estado de harmonia e plenitude.',
    duration: '90 min',
    environment: 'Tatami',
    icon: 'energy'
  },
  {
    id: 'nuru-essence',
    name: 'Nuru Essence Massage',
    price: '160€',
    shortDescription: 'Deslizamento corporal com óleo quente para relaxação profunda.',
    fullDescription: 'O Nuru Essence Massage une deslizamento corporal e calor do óleo quente em um tatami, criando uma atmosfera de calma, sensualidade e conexão. Durante uma hora, o contato pele com pele e o óleo quente produzem um deslizamento envolvente que libera tensões e induz profunda relaxação e bem-estar.',
    duration: '60 min',
    environment: 'Tatami',
    icon: 'nuru'
  },
  {
    id: 'lingam-yoni',
    name: 'Massagem Lingam-Yoni',
    price: '80€',
    shortDescription: 'Técnica tântrica para equilibrar energia sexual e emocional.',
    fullDescription: 'Técnica terapêutica da tradição tântrica que busca equilibrar energia sexual e emocional, promovendo bem-estar e conexão interior. Realizada com respeito e consciência, trabalha zonas energéticas íntimas para liberar tensões acumuladas, desbloquear emoções e ampliar sensibilidade corporal. Ajuda a relaxar a musculatura profunda, harmonizar energia sexual, melhorar circulação, promover calma e fortalecer o autoconhecimento. A experiência vai além de uma massagem tradicional, sendo um convite à cura e expansão vital.',
    duration: '60 min',
    environment: 'Tatami',
    icon: 'tantric'
  },
  {
    id: 'armonia-podal',
    name: 'Armonía Sensual Podal',
    price: '140€',
    shortDescription: 'Relaxamento focado nos pés com estimulação de pontos nervosos.',
    fullDescription: 'Uma experiência única de relaxamento e prazer focada nos pés. Movimentos suaves e técnicas especializadas estimulam pontos nervosos, promovendo circulação, alívio da fadiga e revitalização dos sentidos. Em atmosfera tranquila, cada sessão se transforma em um momento de equilíbrio e renovação sensorial.',
    duration: '60 min',
    environment: 'Marquesa',
    icon: 'feet'
  },
  {
    id: 'armonia-sentidos',
    name: 'Armonía de Sentidos',
    price: '100€',
    shortDescription: 'Viagem sensorial com técnicas que despertam e harmonizam os sentidos.',
    fullDescription: 'Uma viagem sensorial realizada em marquesa ao longo de uma hora, com toque delicado e técnicas que despertam e harmonizam os sentidos. A terapeuta utiliza movimentos precisos para liberar tensões, reduzir estresse e fortalecer a conexão corpo–mente. A experiência é envolvente, elegante e profundamente relaxante.',
    duration: '60 min',
    environment: 'Marquesa',
    icon: 'senses'
  },
  {
    id: 'lomi-lomi',
    name: 'Lomi Lomi Serenidad',
    price: '70€',
    shortDescription: 'Massagem havaiana com movimentos fluidos como ondas do mar.',
    fullDescription: 'Inspirado no oceano, o Lomi Lomi Serenidad utiliza antebraços para criar movimentos fluidos e contínuos, como ondas do mar. Em uma marquesa, o ambiente transmite paz e harmonia enquanto tensões são aliviadas e a energia vital restaurada, promovendo um estado profundo de tranquilidade.',
    duration: '60 min',
    environment: 'Marquesa',
    icon: 'waves'
  },
  {
    id: 'ritual-velas',
    name: 'Ritual Terapêutico com Velas',
    price: '70€',
    shortDescription: 'Massagem com cera quente de velas especiais para hidratação e relaxamento.',
    fullDescription: 'Massagem de uma hora realizada com cera quente de velas especiais, que hidrata a peau enquanto técnicas relaxantes aliviam tensões e restauram a energia. Um ritual sensorial que revitaliza corpo e mente em clima de serenidade.',
    duration: '60 min',
    environment: 'Marquesa',
    icon: 'candle'
  },
  {
    id: 'reflexologia',
    name: 'Reflexologia Vital Balance',
    price: '40€',
    shortDescription: 'Estimulação de pontos reflexos nos pés relacionados a órgãos internos.',
    fullDescription: 'Terapia realizada na marquesa que estimula pontos reflexos nos pés relacionados a órgãos internos. Pressões rítmicas liberam tensões, melhoram a circulação e equilibram a energia interna. Ideal para quem busca relaxamento profundo, alívio do estresse e ativação dos processos naturais de autocura.',
    duration: '50 min',
    environment: 'Marquesa',
    icon: 'reflexology'
  },
  {
    id: 'glow-relax',
    name: 'Glow & Relax Ritual',
    price: '150€',
    shortDescription: 'Ritual completo com esfoliação corporal, facial e massagem relaxante.',
    fullDescription: 'Ritual completo que inclui 40 minutos de esfoliação corporal, 20 minutos de esfoliação facial com hidratação e 50 minutos de massagem relaxante. Proporciona renovação intensa, pele radiante e sensação plena de bem-estar e revitalização.',
    duration: '110 min',
    environment: 'Marquesa',
    icon: 'glow'
  }
];

const espacoImages = [
  { src: 'espaco1.jpg', alt: 'Entrada acolhedora do espaço' },
  { src: 'espaco2.jpg', alt: 'Corredor com iluminação ambiente' },
  { src: 'espaco3.jpg', alt: 'Sala de massagem com marquesa' },
  { src: 'espaco4.jpg', alt: 'Ambiente tatami com decoração budista' },
  { src: 'espaco5.jpg', alt: 'Tatami com iluminação suave' },
  { src: 'espaco6.jpg', alt: 'Detalhes do espaço de relaxamento' }
];

const icons = {
  relax: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  therapeutic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  energy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
  nuru: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  tantric: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v12M6 12h12"/></svg>',
  feet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5C4 18.12 5.12 17 6.5 17H17.5c1.38 0 2.5 1.12 2.5 2.5v0c0 1.38-1.12 2.5-2.5 2.5H6.5C5.12 22 4 20.88 4 19.5z"/><path d="M6 17V8a6 6 0 1 1 12 0v9"/></svg>',
  senses: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
  waves: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 6c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></svg>',
  candle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18h6v4H9z"/><path d="M10 18V8h4v10"/><path d="M12 8c1.5-2 1.5-4 0-6-1.5 2-1.5 4 0 6z"/></svg>',
  reflexology: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="14" rx="8" ry="6"/><circle cx="12" cy="6" r="4"/></svg>',
  glow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
};

function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = services.map((service, index) => `
    <div class="service-card reveal reveal-delay-${(index % 4) + 1}" data-service-id="${service.id}">
      <div class="service-header">
        <div class="service-icon">
          ${icons[service.icon] || icons.relax}
        </div>
        <span class="service-price">${service.price}</span>
      </div>
      <h3 class="service-title">${service.name}</h3>
      ${service.subtitle ? `<span class="service-subtitle">${service.subtitle}</span>` : ''}
      <p class="service-description">${service.shortDescription}</p>
      <div class="service-meta">
        <div class="service-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <span>${service.duration}</span>
        </div>
        <div class="service-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span>${service.environment}</span>
        </div>
      </div>
      <div class="service-footer">
        <button class="btn btn-ghost">Ler mais →</button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const serviceId = card.dataset.serviceId;
      openServiceModal(serviceId);
    });
  });
}

function openServiceModal(serviceId) {
  const service = services.find(s => s.id === serviceId);
  if (!service) return;

  const modal = document.getElementById('service-modal');
  const modalIcon = modal.querySelector('.modal-icon');
  const modalTitle = modal.querySelector('.modal-title');
  const modalPrice = modal.querySelector('.modal-price');
  const modalMeta = modal.querySelector('.modal-meta');
  const modalDescription = modal.querySelector('.modal-description');
  const modalCta = modal.querySelector('.modal-cta');

  modalIcon.innerHTML = icons[service.icon] || icons.relax;
  modalTitle.textContent = service.name;
  modalPrice.textContent = service.price;
  modalMeta.innerHTML = `
    <div class="modal-meta-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
      <span>${service.duration}</span>
    </div>
    <div class="modal-meta-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      <span>${service.environment}</span>
    </div>
  `;
  modalDescription.innerHTML = `<p>${service.fullDescription}</p>`;
  
  // Atualizar o botão CTA para agendar este serviço específico
  modalCta.innerHTML = `Agendar ${service.name}`;
  modalCta.dataset.serviceId = serviceId;
  modalCta.dataset.serviceName = service.name;
  modalCta.dataset.servicePrice = service.price.replace('€', '');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  const modal = document.getElementById('service-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

let currentSlide = 0;
let slidesPerView = 1;

function initCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.getElementById('carousel-dots');
  if (!track || !dotsContainer) return;

  track.innerHTML = espacoImages.map(img => `
    <div class="carousel-slide">
      <img src="${img.src}" alt="${img.alt}" class="carousel-image" loading="lazy">
    </div>
  `).join('');

  updateSlidesPerView();
  const totalSlides = Math.ceil(espacoImages.length / slidesPerView);
  
  dotsContainer.innerHTML = Array.from({ length: totalSlides }, (_, i) => `
    <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>
  `).join('');

  dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.index));
    });
  });

  document.getElementById('carousel-prev')?.addEventListener('click', prevSlide);
  document.getElementById('carousel-next')?.addEventListener('click', nextSlide);

  window.addEventListener('resize', () => {
    updateSlidesPerView();
    updateCarousel();
  });

  let touchStartX = 0;
  let touchEndX = 0;
  
  track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  }
}

function updateSlidesPerView() {
  if (window.innerWidth >= 1024) {
    slidesPerView = 3;
  } else if (window.innerWidth >= 768) {
    slidesPerView = 2;
  } else {
    slidesPerView = 1;
  }
}

function updateCarousel() {
  const track = document.getElementById('carousel-track');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!track) return;

  const slideWidth = 100 / slidesPerView;
  track.style.transform = `translateX(-${currentSlide * slideWidth}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  const totalSlides = Math.ceil(espacoImages.length / slidesPerView);
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  const totalSlides = Math.ceil(espacoImages.length / slidesPerView);
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function populateServiceSelect() {
  const select = document.getElementById('service');
  if (!select) return;

  select.innerHTML = '<option value="">Selecione um serviço</option>' +
    services.map(s => `<option value="${s.id}">${s.name} - ${s.price}</option>`).join('');
}

function initNavigation() {
  const nav = document.getElementById('main-nav');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  mobileToggle?.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

function initModal() {
  const modal = document.getElementById('service-modal');
  const closeBtn = document.getElementById('modal-close');
  const backdrop = modal?.querySelector('.modal-backdrop');
  const modalCta = modal?.querySelector('.modal-cta');

  closeBtn?.addEventListener('click', closeServiceModal);
  backdrop?.addEventListener('click', closeServiceModal);
  
  // Modificar este evento para ir para o agendamento
  modalCta?.addEventListener('click', function() {
    const serviceId = this.dataset.serviceId;
    const serviceName = this.dataset.serviceName;
    const servicePrice = this.dataset.servicePrice;
    
    if (serviceId && serviceName && servicePrice) {
      // Fechar modal
      closeServiceModal();
      
      // Ir para a seção de agendamento
      goToBookingSection(serviceId, serviceName, servicePrice);
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeServiceModal();
    }
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    if (!data.name || !data.email) {
      showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        showToast('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      showToast('Erro ao enviar mensagem. Tente novamente.', 'error');
    }
  });
}

function showToast(message, type = 'default') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-title">${type === 'success' ? 'Sucesso!' : type === 'error' ? 'Erro' : 'Aviso'}</div>
    <div class="toast-description">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => {
      if (container.contains(toast)) {
        container.removeChild(toast);
      }
    }, 300);
  }, 5000);
}

function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const particleCount = 40;
  
  for (let i = 0; i < particleCount; i++) {
    createParticle(container);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  const size = Math.random() * 5 + 2;
  const left = Math.random() * 100;
  const duration = Math.random() * 20 + 15;
  const delay = Math.random() * 20;
  const hue = Math.random() * 20 + 35;
  
  particle.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${left}%;
    background: hsla(${hue}, 60%, 60%, ${Math.random() * 0.4 + 0.2});
    animation-duration: ${duration}s;
    animation-delay: -${delay}s;
    box-shadow: 0 0 ${size * 2}px hsla(${hue}, 60%, 60%, 0.3);
  `;
  
  container.appendChild(particle);
}

function initLotusPetals() {
  const container = document.createElement('div');
  container.className = 'lotus-petals';
  document.body.appendChild(container);

  function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'lotus-petal';
    
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;
    const size = Math.random() * 15 + 10;
    const rotation = Math.random() * 360;
    
    petal.style.cssText = `
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      transform: rotate(${rotation}deg);
    `;
    
    container.appendChild(petal);

    setTimeout(() => {
      if (container.contains(petal)) {
        container.removeChild(petal);
      }
    }, (duration + delay) * 1000);
  }

  for (let i = 0; i < 5; i++) {
    createPetal();
  }

  setInterval(() => {
    if (document.querySelectorAll('.lotus-petal').length < 15) {
      createPetal();
    }
  }, 2000);
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  document.querySelectorAll('.section-header, .about-image-wrapper, .about-content, .contact-info, .contact-form-wrapper, .carousel-container').forEach((el, index) => {
    el.classList.add('reveal');
    if (index % 2 === 0) el.classList.add('reveal-delay-1');
    else el.classList.add('reveal-delay-2');
    observer.observe(el);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// FUNÇÕES PARA AGENDAMENTO AUTOMÁTICO
function goToBookingSection(serviceId, serviceName, servicePrice) {
  // Scroll suave para a seção de agendamento
  const agendamentoSection = document.getElementById('agendamento');
  if (agendamentoSection) {
    const headerOffset = 80;
    const elementPosition = agendamentoSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Aguardar um pouco para o scroll completar antes de selecionar o serviço
    setTimeout(() => {
      selectServiceInBookingForm(serviceId, serviceName, servicePrice);
    }, 800);
  }
}

function selectServiceInBookingForm(serviceId, serviceName, servicePrice) {
  // Encontrar o card do serviço no formulário de agendamento
  const serviceCards = document.querySelectorAll('.service-selection-card');
  
  let serviceFound = false;
  
  serviceCards.forEach(card => {
    if (card.dataset.service === serviceName) {
      // Simular clique no card
      card.click();
      serviceFound = true;
      
      // Ir automaticamente para o próximo passo após selecionar o serviço
      setTimeout(() => {
        const nextButton = document.querySelector('.step-1 .booking-next-btn');
        if (nextButton && !nextButton.disabled) {
          nextButton.click();
        }
      }, 500);
    }
  });

  if (!serviceFound) {
    showToast('Serviço não encontrado no formulário de agendamento.', 'error');
  }
}

// FORMULÁRIO DE AGENDAMENTO - CORRIGIDO
function initBookingForm() {
  // Dados do agendamento
  let bookingData = {
    service: '',
    price: '',
    serviceId: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  };

  // Elementos DOM
  const steps = document.querySelectorAll('.booking-step');
  const progressSteps = document.querySelectorAll('.progress-step');
  const serviceGrid = document.getElementById('service-selection-grid');
  const nextButtons = document.querySelectorAll('.booking-next-btn');
  const backButtons = document.querySelectorAll('.booking-back-btn');
  const confirmButton = document.querySelector('.booking-confirm-btn');
  const timeSlotsContainer = document.getElementById('time-slots');
  const bookingDateInput = document.getElementById('booking-date');
  const customerForm = document.getElementById('customer-form');
  const confirmationMessage = document.getElementById('confirmation-message');

  // Funções internas do formulário de agendamento
  function loadServicesToForm() {
    if (!serviceGrid) return;
    
    serviceGrid.innerHTML = services.map(service => `
      <div class="service-selection-card" 
           data-service="${service.name}" 
           data-price="${service.price.replace('€', '')}"
           data-service-id="${service.id}"
           data-duration="${service.duration}">
        <div class="selection-check"></div>
        <h4>${service.name}</h4>
        <p class="selection-price">${service.price}</p>
        <p class="selection-duration">${service.duration}</p>
        <p class="selection-desc">${service.shortDescription}</p>
      </div>
    `).join('');

    // Adicionar event listeners aos cards de serviço
    document.querySelectorAll('.service-selection-card').forEach(card => {
      card.addEventListener('click', () => {
        // Remover seleção anterior
        document.querySelectorAll('.service-selection-card').forEach(c => c.classList.remove('selected'));
        
        // Selecionar novo card
        card.classList.add('selected');
        
        // Atualizar dados
        bookingData.service = card.dataset.service;
        bookingData.price = card.dataset.price + '€';
        bookingData.serviceId = card.dataset.serviceId;
        
        // Ativar botão próximo
        const nextBtn = document.querySelector('.step-1 .booking-next-btn');
        if (nextBtn) nextBtn.disabled = false;
        
        // Se já tiver data selecionada, recarregar horários com a nova duração
        if (bookingData.date) {
          loadTimeSlotsForDate(bookingData.date);
        }
      });
    });
  }

  function generateTimeSlots(busyTimes = []) {
    if (!timeSlotsContainer) return;
    
    // Horários fixos
    const timeSlots = [
        '10:00', '11:00', '12:00',
        '14:00', '15:00', '16:00',
        '17:00', '18:00', '19:00'
    ];
    
    // Calcular duração do serviço selecionado
    let serviceDuration = 60; // padrão 60 minutos
    if (bookingData.serviceId) {
        const service = services.find(s => s.id === bookingData.serviceId);
        if (service && service.duration) {
            const durationMatch = service.duration.match(/(\d+)\s*min/);
            if (durationMatch) {
                serviceDuration = parseInt(durationMatch[1]);
            }
        }
    }
    
    // Calcular horas necessárias baseado na duração
    const hoursNeeded = Math.ceil(serviceDuration / 60);
    
    console.log('🕒 Gerando horários:', {
        serviceDuration,
        hoursNeeded,
        busyTimes
    });
    
    // Gerar HTML dos horários
    timeSlotsContainer.innerHTML = timeSlots.map(time => {
        // Verificar se este horário e os próximos estão disponíveis
        let isBusy = false;
        let conflictReason = '';
        
        // Verificar se o horário atual está ocupado
        if (busyTimes.includes(time)) {
            isBusy = true;
            conflictReason = 'Horário inicial ocupado';
        } else {
            // Verificar se os próximos horários necessários estão disponíveis
            const [hours, minutes] = time.split(':').map(Number);
            
            for (let i = 1; i < hoursNeeded; i++) {
                const nextHour = hours + i;
                if (nextHour > 20) { // Limite máximo 20h
                    isBusy = true;
                    conflictReason = 'Fora do horário de funcionamento';
                    break;
                }
                
                const nextTime = `${String(nextHour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
                if (busyTimes.includes(nextTime)) {
                    isBusy = true;
                    conflictReason = `Horário ${nextTime} ocupado`;
                    break;
                }
            }
        }
        
        return `
            <div class="time-slot ${isBusy ? 'busy' : ''}" 
                 data-time="${time}"
                 data-duration="${serviceDuration}"
                 ${isBusy ? `title="${conflictReason}" disabled style="opacity: 0.4; cursor: not-allowed; background-color: rgba(100, 100, 100, 0.5);"` : ''}>
                ${time}
                ${hoursNeeded > 1 ? `<span class="duration-badge">${hoursNeeded}h</span>` : ''}
                ${isBusy ? '<span class="unavailable-badge">Indisponível</span>' : ''}
            </div>
        `;
    }).join('');
    
    // Adicionar event listeners apenas aos horários disponíveis
    document.querySelectorAll('.time-slot:not(.busy)').forEach(slot => {
        slot.addEventListener('click', function() {
            // Remover seleção anterior
            document.querySelectorAll('.time-slot').forEach(s => {
                s.classList.remove('selected');
            });
            
            // Selecionar novo horário
            this.classList.add('selected');
            bookingData.time = this.dataset.time;
            
            // Ativar botão próximo
            const nextBtn = document.querySelector('.step-3 .booking-next-btn');
            if (nextBtn) {
                nextBtn.disabled = !bookingData.date;
            }
        });
    });
    
    // Adicionar event listeners aos horários ocupados
    document.querySelectorAll('.time-slot.busy').forEach(slot => {
        slot.addEventListener('click', function() {
            const conflictReason = this.getAttribute('title') || 'Horário indisponível';
            showToast(conflictReason, 'error');
        });
    });
  }

  /**
   * Carrega horários para uma data específica considerando a duração do serviço
   */
  async function loadTimeSlotsForDate(selectedDate) {
    if (!timeSlotsContainer) return;
    
    // Mostrar loading
    timeSlotsContainer.innerHTML = '<p style="text-align: center; color: var(--secondary-gold);">Verificando disponibilidade...</p>';

    try {
        // Consultar disponibilidade
        const response = await fetch(`/api/availability?date=${selectedDate}`);
        const data = await response.json();

        if (data.success) {
            // Gerar horários considerando a duração
            generateTimeSlots(data.busyTimes || []);
        } else {
            throw new Error(data.error || 'Erro ao consultar disponibilidade');
        }
    } catch (error) {
        console.error('Erro ao carregar horários:', error);
        showToast('Erro ao consultar disponibilidade. Gerando horários padrão.', 'error');
        
        // Gerar horários padrão em caso de erro
        generateTimeSlots([]);
    }
  }

  function goToNextStep() {
    const currentStep = document.querySelector('.booking-step.active');
    const currentStepNumber = parseInt(currentStep.className.match(/step-(\d)/)[1]);
    const nextStepNumber = currentStepNumber + 1;
    
    // Atualizar dados no resumo se for o último passo
    if (nextStepNumber === 4) {
      updateSummary();
    }
    
    // Mudar passo
    currentStep.classList.remove('active');
    document.querySelector(`.step-${nextStepNumber}`).classList.add('active');
    
    // Atualizar progresso
    updateProgress(nextStepNumber);
  }

  function goToPreviousStep() {
    const currentStep = document.querySelector('.booking-step.active');
    const currentStepNumber = parseInt(currentStep.className.match(/step-(\d)/)[1]);
    const prevStepNumber = currentStepNumber - 1;
    
    // Mudar passo
    currentStep.classList.remove('active');
    document.querySelector(`.step-${prevStepNumber}`).classList.add('active');
    
    // Atualizar progresso
    updateProgress(prevStepNumber);
  }

  function updateProgress(stepNumber) {
    progressSteps.forEach(step => {
      step.classList.remove('active');
      if (parseInt(step.dataset.step) <= stepNumber) {
        step.classList.add('active');
      }
    });
  }

  function updateSummary() {
    // Coletar dados do formulário
    bookingData.name = document.getElementById('customer-name').value;
    bookingData.email = document.getElementById('customer-email').value;
    bookingData.phone = document.getElementById('customer-phone').value;
    
    // Atualizar resumo
    document.getElementById('summary-service').textContent = bookingData.service;
    document.getElementById('summary-price').textContent = bookingData.price;
    document.getElementById('summary-name').textContent = bookingData.name;
    document.getElementById('summary-email').textContent = bookingData.email;
    document.getElementById('summary-phone').textContent = bookingData.phone;
    document.getElementById('summary-date').textContent = formatDate(bookingData.date);
    document.getElementById('summary-time').textContent = bookingData.time;
    
    // Adicionar informação de duração
    const service = services.find(s => s.id === bookingData.serviceId);
    if (service) {
        const durationElement = document.getElementById('summary-duration') || document.createElement('div');
        durationElement.id = 'summary-duration';
        durationElement.innerHTML = `<strong>Duração:</strong> ${service.duration}`;
        durationElement.style.marginTop = '10px';
        durationElement.style.padding = '5px';
        durationElement.style.background = 'rgba(255,215,0,0.1)';
        durationElement.style.borderRadius = '5px';
        
        const summaryContent = document.querySelector('.booking-summary-content');
        if (summaryContent && !document.getElementById('summary-duration')) {
            summaryContent.appendChild(durationElement);
        }
    }
  }

  function formatDate(dateString) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  }

  async function confirmBooking() {
    try {
        // Coletar dados completos
        updateSummary();
        
        // Mostrar loading
        const confirmBtn = document.querySelector('.booking-confirm-btn');
        const originalText = confirmBtn.textContent;
        confirmBtn.innerHTML = '<span class="loading-spinner"></span>Processando...';
        confirmBtn.disabled = true;
        
        // Preparar dados no formato correto
        const bookingPayload = {
            services: [{ 
                name: bookingData.service, 
                price: parseFloat(bookingData.price.replace('€', '')) 
            }],
            totalPrice: parseFloat(bookingData.price.replace('€', '')),
            name: bookingData.name,
            email: bookingData.email,
            phone: bookingData.phone,
            date: bookingData.date,
            time: bookingData.time
        };

        console.log('📤 Enviando agendamento:', bookingPayload);
        
        // Enviar para API
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingPayload)
        });

        const result = await response.json();

        if (result.success) {
            // Mostrar mensagem de confirmação
            if (confirmationMessage) {
                confirmationMessage.classList.add('active');
            }
            
            // Esconder botões
            const bookingButtons = document.querySelector('.step-4 .booking-buttons');
            if (bookingButtons) {
                bookingButtons.style.display = 'none';
            }
            
            // Atualizar status do calendário
            const calendarStatus = document.getElementById('calendar-status');
            if (calendarStatus) {
                calendarStatus.textContent = result.message || 'Agendamento confirmado com sucesso!';
                calendarStatus.style.color = 'var(--secondary-gold)';
            }
            
            showToast('Agendamento confirmado com sucesso!', 'success');
            
            // Resetar formulário após 5 segundos
            setTimeout(() => {
                resetBookingForm();
            }, 5000);
        } else {
            throw new Error(result.message || 'Erro ao confirmar agendamento');
        }
    } catch (error) {
        console.error('Erro ao confirmar agendamento:', error);
        showToast(error.message || 'Erro ao confirmar agendamento. Tente novamente.', 'error');
    } finally {
        // Restaurar botão em caso de erro
        const confirmBtn = document.querySelector('.booking-confirm-btn');
        if (confirmBtn) {
            confirmBtn.textContent = 'Confirmar Agendamento';
            confirmBtn.disabled = false;
        }
    }
  }

  function resetBookingForm() {
    // Voltar para o primeiro passo
    document.querySelectorAll('.booking-step').forEach(step => step.classList.remove('active'));
    document.querySelector('.step-1').classList.add('active');
    
    // Resetar progresso
    document.querySelectorAll('.progress-step').forEach(step => step.classList.remove('active'));
    document.querySelector('[data-step="1"]').classList.add('active');
    
    // Limpar seleções
    document.querySelectorAll('.service-selection-card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('selected'));
    
    // Limpar formulário
    if (customerForm) customerForm.reset();
    if (bookingDateInput) bookingDateInput.value = '';
    if (timeSlotsContainer) timeSlotsContainer.innerHTML = '';
    
    // Esconder mensagem de confirmação
    if (confirmationMessage) confirmationMessage.classList.remove('active');
    
    // Mostrar botões novamente
    const bookingButtons = document.querySelector('.step-4 .booking-buttons');
    if (bookingButtons) bookingButtons.style.display = 'flex';
    
    // Resetar dados
    bookingData = {
        service: '',
        price: '',
        serviceId: '',
        name: '',
        email: '',
        phone: '',
        date: '',
        time: ''
    };
  }

  function setupEventListeners() {
    // Validação do formulário de dados
    customerForm?.addEventListener('input', () => {
      const name = document.getElementById('customer-name').value;
      const email = document.getElementById('customer-email').value;
      const phone = document.getElementById('customer-phone').value;
      
      const nextBtn = document.querySelector('.step-2 .booking-next-btn');
      if (nextBtn) {
        nextBtn.disabled = !(name && email && phone);
      }
    });

    // Seleção de data - CONSULTAR DISPONIBILIDADE
    bookingDateInput?.addEventListener('change', async function() {
      const selectedDate = this.value;
      
      if (!selectedDate) {
        bookingData.date = '';
        const nextBtn = document.querySelector('.step-3 .booking-next-btn');
        if (nextBtn) nextBtn.disabled = true;
        return;
      }

      bookingData.date = selectedDate;
      
      // Carregar horários considerando a duração do serviço
      await loadTimeSlotsForDate(selectedDate);
      
      // Verificar se há horário selecionado
      const nextBtn = document.querySelector('.step-3 .booking-next-btn');
      if (nextBtn) {
        nextBtn.disabled = !bookingData.time;
      }
    });

    // Botões próximo
    nextButtons.forEach(button => {
      button.addEventListener('click', goToNextStep);
    });

    // Botões voltar
    backButtons.forEach(button => {
      button.addEventListener('click', goToPreviousStep);
    });

    // Botão confirmar
    confirmButton?.addEventListener('click', confirmBooking);
  }

  // Inicialização
  function init() {
    // Configurar data mínima (hoje)
    const today = new Date().toISOString().split('T')[0];
    if (bookingDateInput) bookingDateInput.min = today;
    
    // Carregar serviços no formulário
    loadServicesToForm();
    
    // Gerar horários disponíveis (inicialmente vazios)
    generateTimeSlots();
    
    // Configurar event listeners
    setupEventListeners();
  }

  // Inicializar quando DOM estiver pronto
  if (document.getElementById('agendamento')) {
    init();
  }
}

// Função principal de inicialização
function init() {
  initNavigation();
  renderServices();
  initCarousel();
  populateServiceSelect();
  initModal();
  initContactForm();
  initParticles();
  initLotusPetals();
  initScrollReveal();
  initSmoothScroll();
  initBookingForm(); // Formulário de agendamento

  setInterval(() => {
    nextSlide();
  }, 5000);
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);