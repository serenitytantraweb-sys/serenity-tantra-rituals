// State management
const state = {
  services: [],
  blogPosts: [],
  isLoadingServices: true,
  isLoadingBlog: true,
  selectedServiceId: '',
  isMobileMenuOpen: false,
  toastQueue: [],
  activeToasts: 0,
  maxToasts: 3
};

// Utility: Show toast notification with queue management
function showToast(title, description, variant = 'default') {
  const toastData = { title, description, variant };
  
  if (state.activeToasts >= state.maxToasts) {
    state.toastQueue.push(toastData);
    return;
  }
  
  displayToast(toastData);
}

function displayToast({ title, description, variant }) {
  const container = document.getElementById('toast-container');
  state.activeToasts++;
  
  const toast = document.createElement('div');
  toast.className = `toast ${variant === 'destructive' ? 'toast-destructive' : ''}`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'assertive');
  toast.setAttribute('aria-atomic', 'true');
  
  toast.innerHTML = `
    <div class="toast-title">${escapeHtml(title)}</div>
    ${description ? `<div class="toast-description">${escapeHtml(description)}</div>` : ''}
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slide-in 0.3s ease-out reverse';
    setTimeout(() => {
      if (container.contains(toast)) {
        container.removeChild(toast);
      }
      state.activeToasts--;
      
      // Process queue
      if (state.toastQueue.length > 0) {
        const nextToast = state.toastQueue.shift();
        displayToast(nextToast);
      }
    }, 300);
  }, 5000);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Utility: Scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
  }
}

// Navigation: Handle scroll effect
function handleNavScroll() {
  const nav = document.getElementById('main-nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  state.isMobileMenuOpen = !state.isMobileMenuOpen;
  const menu = document.getElementById('mobile-menu');
  const toggle = document.getElementById('mobile-menu-toggle');
  const menuIcon = toggle.querySelector('.menu-icon');
  const closeIcon = toggle.querySelector('.close-icon');
  
  if (state.isMobileMenuOpen) {
    menu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}

function closeMobileMenu() {
  if (state.isMobileMenuOpen) {
    toggleMobileMenu();
  }
}

// Hero: Canvas particle animation
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  let particles = [];
  let mouse = { x: 0, y: 0 };
  let animationFrameId;
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particleCount = 80;
    particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedY: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.5 + 0.3,
      hue: Math.random() * 20 + 35
    }));
  }
  
  function handleMouseMove(e) {
    mouse = { x: e.clientX, y: e.clientY };
  }
  
  function animate() {
    ctx.fillStyle = 'rgba(7, 7, 7, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.y -= particle.speedY;
      
      if (particle.y < -10) {
        particle.y = canvas.height + 10;
        particle.x = Math.random() * canvas.width;
      }
      
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.x -= (dx / distance) * force * 2;
        particle.y -= (dy / distance) * force * 2;
      }
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${particle.hue}, 45%, 55%, ${particle.opacity})`;
      ctx.fill();
      
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      gradient.addColorStop(0, `hsla(${particle.hue}, 45%, 55%, ${particle.opacity * 0.3})`);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fill();
    });
    
    animationFrameId = requestAnimationFrame(animate);
  }
  
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', handleMouseMove);
  animate();
  
  return () => {
    window.removeEventListener('resize', resize);
    window.removeEventListener('mousemove', handleMouseMove);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  };
}

// API: Fetch services
async function fetchServices() {
  try {
    const response = await fetch('/api/services');
    if (!response.ok) throw new Error('Failed to fetch services');
    const services = await response.json();
    state.services = services;
    state.isLoadingServices = false;
    renderServices();
    populateServiceSelect();
  } catch (error) {
    console.error('Error fetching services:', error);
    state.isLoadingServices = false;
    renderServices();
  }
}

// API: Fetch blog posts
async function fetchBlogPosts() {
  try {
    const response = await fetch('/api/blog');
    if (!response.ok) throw new Error('Failed to fetch blog posts');
    const posts = await response.json();
    state.blogPosts = posts;
    state.isLoadingBlog = false;
    renderBlogPosts();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    state.isLoadingBlog = false;
    renderBlogPosts();
  }
}

// Render: Services
function renderServices() {
  const grid = document.getElementById('services-grid');
  
  if (state.isLoadingServices) {
    return;
  }
  
  if (state.services.length === 0) {
    grid.innerHTML = '<p style="text-align: center; color: var(--muted-foreground); grid-column: 1/-1;">Nenhum serviço disponível no momento.</p>';
    return;
  }
  
  grid.innerHTML = state.services.map(service => {
    const priceInReais = (service.price / 100).toFixed(2);
    return `
      <div class="card service-card hover-card" data-testid="card-service-${service.id}">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="0.5" opacity="0.5" />
          </svg>
        </div>
        
        <h3 class="service-title" data-testid="text-service-name-${service.id}">${service.name}</h3>
        
        <p class="service-description" data-testid="text-service-description-${service.id}">${service.description}</p>
        
        <div class="service-meta">
          <div class="service-meta-item" data-testid="text-service-duration-${service.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>${service.duration} min</span>
          </div>
          <div class="service-meta-item" data-testid="text-service-price-${service.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <span>R$ ${priceInReais}</span>
          </div>
        </div>
        
        <button class="btn btn-primary btn-full" onclick="handleScheduleClick('${service.id}')" data-testid="button-schedule-${service.id}">
          Agendar Sessão
        </button>
      </div>
    `;
  }).join('');
}

// Render: Blog posts
function renderBlogPosts() {
  const grid = document.getElementById('blog-grid');
  
  if (state.isLoadingBlog) {
    return;
  }
  
  if (state.blogPosts.length === 0) {
    grid.innerHTML = '<div style="text-align: center; color: var(--muted-foreground); grid-column: 1/-1; padding: 3rem 0;"><p>Novos conteúdos em breve...</p></div>';
    return;
  }
  
  const postsToShow = state.blogPosts.slice(0, 6);
  
  grid.innerHTML = postsToShow.map(post => {
    const formattedDate = post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      : '';
    
    return `
      <div class="blog-card" data-testid="card-blog-${post.id}" onclick="showBlogDetail('${post.id}')">
        ${post.imageUrl ? `
          <div class="blog-image-wrapper">
            <img src="${post.imageUrl}" alt="${post.title}" class="blog-image" data-testid="img-blog-${post.id}">
          </div>
        ` : ''}
        
        <div class="blog-content">
          <span class="blog-badge" data-testid="badge-blog-category-${post.id}">${post.category}</span>
          
          <h3 class="blog-title" data-testid="text-blog-title-${post.id}">${post.title}</h3>
          
          <p class="blog-excerpt" data-testid="text-blog-excerpt-${post.id}">${post.excerpt}</p>
          
          <div class="blog-meta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span data-testid="text-blog-date-${post.id}">${formattedDate}</span>
          </div>
          
          <button class="blog-read-more" data-testid="button-blog-read-${post.id}" onclick="event.stopPropagation(); showBlogDetail('${post.id}')">Ler mais →</button>
        </div>
      </div>
    `;
  }).join('');
}

// Show blog detail in modal
function showBlogDetail(postId) {
  const post = state.blogPosts.find(p => p.id === postId);
  if (!post) return;
  
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    : '';
  
  // Create modal
  const modal = document.createElement('div');
  modal.className = 'blog-modal';
  modal.innerHTML = `
    <div class="blog-modal-backdrop"></div>
    <div class="blog-modal-content">
      <button class="blog-modal-close" data-testid="button-blog-modal-close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      
      ${post.imageUrl ? `
        <img src="${post.imageUrl}" alt="${post.title}" class="blog-modal-image">
      ` : ''}
      
      <div class="blog-modal-body">
        <span class="blog-badge">${post.category}</span>
        <h2 class="blog-modal-title">${post.title}</h2>
        <div class="blog-modal-meta">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span>${formattedDate}</span>
        </div>
        <div class="blog-modal-content-text">${escapeHtml(post.content).replace(/\n/g, '<br>')}</div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  function closeModal() {
    modal.style.animation = 'fade-out 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(modal);
      document.body.style.overflow = '';
    }, 300);
  }
  
  // Event listeners
  modal.querySelector('.blog-modal-close').addEventListener('click', closeModal);
  modal.querySelector('.blog-modal-backdrop').addEventListener('click', closeModal);
  
  // Keyboard navigation
  function handleKeyboard(e) {
    if (e.key === 'Escape') closeModal();
  }
  
  document.addEventListener('keydown', handleKeyboard);
  modal.addEventListener('remove', () => {
    document.removeEventListener('keydown', handleKeyboard);
  });
}

// Populate service select in scheduling form
function populateServiceSelect() {
  const select = document.getElementById('schedule-service');
  
  select.innerHTML = '<option value="">Selecione um serviço</option>' +
    state.services.map(service => 
      `<option value="${service.id}">${service.name}</option>`
    ).join('');
  
  if (state.selectedServiceId) {
    select.value = state.selectedServiceId;
  }
}

// Handle schedule click
function handleScheduleClick(serviceId) {
  state.selectedServiceId = serviceId;
  populateServiceSelect();
  scrollToSection('schedule');
}

// Form: Schedule submission
async function handleScheduleSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const submitButton = document.getElementById('schedule-submit');
  
  const serviceId = document.getElementById('schedule-service').value;
  const clientName = document.getElementById('schedule-name').value;
  const clientEmail = document.getElementById('schedule-email').value;
  const clientPhone = document.getElementById('schedule-phone').value;
  const dateValue = document.getElementById('schedule-date').value;
  const timeValue = document.getElementById('schedule-time').value;
  const notes = document.getElementById('schedule-notes').value;
  
  // Validation
  if (!serviceId) {
    showToast('Campos Obrigatórios', 'Selecione um serviço', 'destructive');
    return;
  }
  
  if (!clientName || clientName.length < 2) {
    showToast('Nome Inválido', 'Nome deve ter pelo menos 2 caracteres', 'destructive');
    return;
  }
  
  if (!clientEmail || !clientEmail.includes('@')) {
    showToast('Email Inválido', 'Por favor, insira um email válido', 'destructive');
    return;
  }
  
  if (!clientPhone || clientPhone.length < 10) {
    showToast('Telefone Inválido', 'Telefone deve ter pelo menos 10 dígitos', 'destructive');
    return;
  }
  
  if (!dateValue || !timeValue) {
    showToast('Data/Hora Obrigatórios', 'Selecione data e horário', 'destructive');
    return;
  }
  
  // Combine date and time into ISO string
  const [hours, minutes] = timeValue.split(':').map(Number);
  const appointmentDate = new Date(dateValue);
  appointmentDate.setHours(hours, minutes, 0, 0);
  const appointmentDateISO = appointmentDate.toISOString().slice(0, 19);
  
  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';
  
  try {
    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        serviceId,
        clientName,
        clientEmail,
        clientPhone,
        appointmentDate: appointmentDateISO,
        notes: notes || undefined
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      
      // Handle specific error cases
      if (response.status === 409) {
        throw new Error('⏰ Horário já ocupado! Por favor, escolha outro horário disponível.');
      } else if (response.status === 404) {
        throw new Error('Serviço não encontrado. Por favor, recarregue a página.');
      } else if (response.status === 400) {
        throw new Error(error.details ? error.details[0].message : error.error || 'Dados inválidos');
      }
      
      throw new Error(error.error || 'Erro ao agendar');
    }
    
    showToast('✨ Agendamento Confirmado!', 'Você receberá um email de confirmação em breve. Aguardamos você!');
    form.reset();
    state.selectedServiceId = '';
    scrollToSection('hero');
  } catch (error) {
    showToast('Erro ao Agendar', error.message || 'Ocorreu um erro. Por favor, tente novamente.', 'destructive');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Confirmar Agendamento';
  }
}

// Form: Contact submission
async function handleContactSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const submitButton = document.getElementById('contact-submit');
  
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const phone = document.getElementById('contact-phone').value;
  const subject = document.getElementById('contact-subject').value;
  const message = document.getElementById('contact-message').value;
  
  // Validation
  if (!name || !email || !subject || !message) {
    showToast('Campos Obrigatórios', 'Por favor, preencha todos os campos.', 'destructive');
    return;
  }
  
  if (message.length < 20) {
    showToast('Mensagem Muito Curta', 'A mensagem deve ter pelo menos 20 caracteres.', 'destructive');
    return;
  }
  
  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao enviar');
    }
    
    showToast('✉️ Mensagem Enviada!', 'Recebemos sua mensagem e retornaremos em breve.');
    form.reset();
  } catch (error) {
    showToast('Erro ao Enviar', error.message || 'Ocorreu um erro. Por favor, tente novamente.', 'destructive');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Enviar Mensagem';
  }
}

// Set minimum date for scheduling
function setMinimumDate() {
  const dateInput = document.getElementById('schedule-date');
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];
  dateInput.setAttribute('min', minDate);
}

// Gallery lightbox
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      openLightbox(index);
    });
  });
}

function openLightbox(index) {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const images = Array.from(galleryItems).map(img => ({
    src: img.src,
    alt: img.alt
  }));
  
  // Create lightbox
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-content">
      <button class="lightbox-close" data-testid="button-lightbox-close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <button class="lightbox-prev" data-testid="button-lightbox-prev">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button class="lightbox-next" data-testid="button-lightbox-next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
      <img src="${images[index].src}" alt="${images[index].alt}" class="lightbox-image" data-testid="img-lightbox">
      <div class="lightbox-counter">${index + 1} / ${images.length}</div>
    </div>
  `;
  
  document.body.appendChild(lightbox);
  document.body.style.overflow = 'hidden';
  
  let currentIndex = index;
  
  function updateImage() {
    const img = lightbox.querySelector('.lightbox-image');
    const counter = lightbox.querySelector('.lightbox-counter');
    img.src = images[currentIndex].src;
    img.alt = images[currentIndex].alt;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
  }
  
  function closeLightbox() {
    lightbox.style.animation = 'fade-out 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(lightbox);
      document.body.style.overflow = '';
    }, 300);
  }
  
  // Event listeners
  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
  
  lightbox.querySelector('.lightbox-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });
  
  lightbox.querySelector('.lightbox-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
  
  // Keyboard navigation
  function handleKeyboard(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    }
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    }
  }
  
  document.addEventListener('keydown', handleKeyboard);
  lightbox.addEventListener('remove', () => {
    document.removeEventListener('keydown', handleKeyboard);
  });
}

// Initialize app
function init() {
  // Navigation scroll effect
  window.addEventListener('scroll', handleNavScroll);
  
  // Mobile menu toggle
  document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMobileMenu);
  
  // Logo click - scroll to hero
  document.querySelector('[data-testid="button-logo"]').addEventListener('click', () => {
    scrollToSection('hero');
  });
  
  // Navigation links
  document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      const section = e.currentTarget.getAttribute('data-section');
      scrollToSection(section);
    });
  });
  
  // Forms
  document.getElementById('schedule-form').addEventListener('submit', handleScheduleSubmit);
  document.getElementById('contact-form').addEventListener('submit', handleContactSubmit);
  
  // Set minimum date for scheduling
  setMinimumDate();
  
  // Initialize hero canvas
  initHeroCanvas();
  
  // Initialize gallery lightbox
  initGalleryLightbox();
  
  // Fetch data
  fetchServices();
  fetchBlogPosts();
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
