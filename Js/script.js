// ==============================================
// CONFIGURAÇÕES GLOBAIS
// ==============================================
const config = {
  breakpoints: {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1280
  }
};

// Dados dos projetos
const projetos = {
  // ... (mantenha seus dados de projetos aqui exatamente como estavam)
  cultivamais: {
    titulo: "CultivaMais - E-commerce Agrícola",
    descricao: "Plataforma de e-commerce especializada para pequenos agricultores venderem seus produtos diretamente aos consumidores.",
    midia: [
      { type: 'image', src: 'Imagens/CultivaMais/Imagens/foto-1.png', alt: 'Página inicial do e-commerce' },
      { type: 'image', src: 'Imagens/CultivaMais/Imagens/foto-2.png', alt: 'Catálogo de Produto' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/MdgFU4I6zS8', thumbnail: 'Imagens/CultivaMais/Imagens/foto-2.png', alt: 'Tour completo pela plataforma' }
    ],
    tecnologias: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery"],
    links: [
      { type: 'github', url: 'https://github.com/duguzin/CultivaMais-V2', text: 'Ver código no GitHub' },
      { type: 'demo', url: '', text: 'Ver demonstração' }
    ],
    features: ["Catálogo de produtos com filtros", "Carrinho de compras", "Checkou", "Painel administrativo"]
  },

  guia360: {
    titulo: "Guia360 - Plataforma Educacional",
    descricao: "Sistema educacional completo para auxiliar estudantes na preparação para vestibulares e concursos.",
    midia: [
      { type: 'image', src: './Imagens/Guia360/Imagens/foto-1.png', alt: 'Página Inicial' },
      { type: 'image', src: './Imagens/Guia360/Imagens/foto-2.png', alt: 'Página Aulão' },
      { type: 'image', src: './Imagens/Guia360/Imagens/foto-3.png', alt: 'Página Simulados' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/Q4ukvCQg1gQ', thumbnail: './Imagens/Guia360/Imagens/foto-1.png', alt: 'Demonstração da plataforma educacional' }
    ],
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    links: [
      { type: 'github', url: 'https://github.com/duguzin/Guia360-V2', text: 'Ver código no GitHub' },
      { type: 'demo', url: 'https://duguzin.github.io/Guia360-V2', text: 'Ver demonstração' }
    ],
    features: ["Videoaulas", "Simulados", "Plano de estudos adaptativo"]
  },

  fitbattle: {
    titulo: "FitBattle - App Gamificado de Exercícios",
    descricao: "Aplicativo móvel gamificado com temática medieval para motivar prática de exercícios físicos.",
    midia: [
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-1.jpeg', alt: 'Tela inicial do app' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-2.jpeg', alt: 'Tela de desafios' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-3.jpeg', alt: 'Tela de perfil' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/bnOwb9DLsL8', thumbnail: './Imagens/FitBattle/Imagens/foto-3.jpeg', alt: 'Gameplay completo do FitBattle' }
    ],
    tecnologias: ["Flutter", "Dart", "Firebase", "Firestore", "Firebase Auth"],
    links: [
      { type: 'github', url: '', text: 'Ver código no GitHub' },
      { type: 'demo', url: '', text: 'Em breve na Play Store' }
    ],
    features: ["Desafios diários e semanais", "Sistema de batalhas", "Sistema de conquistas e recompensas", "Ranking global e entre amigos", "Modo offline para treinos"]
  },

  bancodigital: {
    titulo: "Banco Digital Python",
    descricao: "Sistema bancário digital completo desenvolvido com Python/Flask no back-end e JavaScript puro no front-end.",
    midia: [
      { type: 'image', src: './Imagens/BancoDigitalPython/Imagens/foto-1.png', alt: 'Tela de Login' },
      { type: 'image', src: './Imagens/BancoDigitalPython/Imagens/foto-2.png', alt: 'Tela de Cadastro' },
      { type: 'image', src: './Imagens/BancoDigitalPython/Imagens/foto-3.png', alt: 'Dashboard da conta bancária' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/q3AduCtIXV4', thumbnail: './Imagens/BancoDigitalPython/Imagens/foto-3.png', alt: 'Demonstração completa das funcionalidades' }
    ],
    tecnologias: ["HTML5", "CSS3", "Python", "Flask", "REST API", "JavaScript"],
    links: [
      { type: 'github', url: 'https://github.com/duguzin/BancoDigitalPython', text: 'Ver código no GitHub' },
      { type: 'demo', url: 'https://github.com/duguzin/BancoDigitalPython', text: 'Testar demonstração' }
    ],
    features: ["Criação de conta", "Depósitos, saques e transferências", "Extrato"]
  },

  milkmoo: {
    titulo: "MilkMoo - Sistema de Sorveteria",
    descricao: "Sistema completo de painel de atendimento para sorveteria fictícia com três telas integradas.",
    midia: [
      { type: 'image', src: './Imagens/MilkMoo/Imagens/foto-1.png', alt: 'Tela do cliente' },
      { type: 'image', src: './Imagens/MilkMoo/Imagens/foto-2.png', alt: 'Tela do atendente' },
      { type: 'image', src: './Imagens/MilkMoo/Imagens/foto-3.png', alt: 'Painel de TV' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/QRz-Wo3-cIs', thumbnail: './Imagens/MilkMoo/Imagens/foto-1.png', alt: 'Demonstração do sistema em operação' }
    ],
    tecnologias: ["JavaScript", "HTML5 Canvas", "CSS3", "Bootstrap", "Web Speech API"],
    links: [
      { type: 'github', url: 'https://github.com/duguzin/milkmoo', text: 'Ver código no GitHub' },
      { type: 'demo', url: 'https://milkmoo.demo.com', text: 'Testar demonstração' }
    ],
    features: [
      "Geração de senhas pelo cliente",
      "Chamada por voz das senhas",
      "Exibição em tempo real no painel de TV",
      "Sincronização entre as 3 telas usando LocalStorage",
      "Modo Festa com efeitos visuais"
    ]
  }
};

// ==============================================
// GERENCIAMENTO DE TEMA
// ==============================================
class ThemeManager {
  constructor() {
    this.toggleButton = document.getElementById('tema-toggle');
    this.mobileTemaToggle = document.getElementById('mobileTemaToggle');
    this.body = document.body;
    
    this.initialize();
  }
  
  initialize() {
    this.loadTheme();
    this.bindEvents();
  }
  
  loadTheme() {
    const temaSalvo = localStorage.getItem("tema");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (temaSalvo === "escuro" || (temaSalvo === null && prefersDark)) {
      this.body.classList.add('tema-escuro');
    } else {
      this.body.classList.remove('tema-escuro');
    }
    
    this.updateThemeIcons();
  }
  
  updateThemeIcons() {
    const temaEscuro = this.body.classList.contains('tema-escuro');
    const icon = temaEscuro ? 'fa-sun' : 'fa-moon';
    
    if (this.toggleButton) {
      this.toggleButton.innerHTML = `<i class="fas ${icon}"></i>`;
    }
    
    if (this.mobileTemaToggle) {
      this.mobileTemaToggle.innerHTML = `<i class="fas ${icon}"></i> ${temaEscuro ? 'Tema Claro' : 'Tema Escuro'}`;
    }
  }
  
  toggleTheme() {
    this.body.classList.toggle('tema-escuro');
    
    const temaEscuro = this.body.classList.contains('tema-escuro');
    localStorage.setItem("tema", temaEscuro ? "escuro" : "claro");
    
    this.updateThemeIcons();
  }
  
  bindEvents() {
    if (this.toggleButton) {
      this.toggleButton.addEventListener("click", () => this.toggleTheme());
    }
    
    if (this.mobileTemaToggle) {
      this.mobileTemaToggle.addEventListener("click", () => {
        this.toggleTheme();
        MobileMenu.close();
      });
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem("tema")) {
        if (e.matches) {
          this.body.classList.add('tema-escuro');
        } else {
          this.body.classList.remove('tema-escuro');
        }
        this.updateThemeIcons();
      }
    });
  }
}

// ==============================================
// MENU MOBILE
// ==============================================
class MobileMenu {
  static init() {
    this.menuToggle = document.getElementById('menuToggle');
    this.menuClose = document.getElementById('menuClose');
    this.mobileMenu = document.getElementById('mobileMenu');
    this.mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    this.bindEvents();
  }
  
  static bindEvents() {
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => this.open());
    }
    
    if (this.menuClose) {
      this.menuClose.addEventListener('click', () => this.close());
    }
    
    if (this.mobileMenuOverlay) {
      this.mobileMenuOverlay.addEventListener('click', () => this.close());
    }
    
    this.mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => this.close());
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileMenu.classList.contains('active')) {
        this.close();
      }
    });
  }
  
  static open() {
    if (this.mobileMenu) {
      this.mobileMenu.classList.add('active');
    }
    if (this.mobileMenuOverlay) {
      this.mobileMenuOverlay.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }
  
  static close() {
    if (this.mobileMenu) {
      this.mobileMenu.classList.remove('active');
    }
    if (this.mobileMenuOverlay) {
      this.mobileMenuOverlay.classList.remove('active');
    }
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }
}

// ==============================================
// NAVEGAÇÃO
// ==============================================
class Navigation {
  static init() {
    this.backToTop = document.getElementById('backToTop');
    this.footerBackToTop = document.getElementById('footerBackToTop');
    
    this.bindEvents();
    this.setupSmoothScrolling();
  }
  
  static setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          
          MobileMenu.close();
          
          const headerHeight = document.querySelector('.nav-bar')?.offsetHeight || 0;
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  static bindEvents() {
    if (this.backToTop) {
      this.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    
    if (this.footerBackToTop) {
      this.footerBackToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    
    window.addEventListener('scroll', Utils.debounce(() => {
      this.updateActiveLinks();
      this.toggleBackToTop();
    }, 10));
  }
  
  static updateActiveLinks() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
        
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  static toggleBackToTop() {
    if (this.backToTop) {
      if (window.scrollY > 300) {
        this.backToTop.classList.add('visible');
      } else {
        this.backToTop.classList.remove('visible');
      }
    }
    
    if (this.footerBackToTop) {
      if (window.scrollY > 500) {
        this.footerBackToTop.style.opacity = '1';
        this.footerBackToTop.style.visibility = 'visible';
        this.footerBackToTop.style.transform = 'translateY(0)';
      } else {
        this.footerBackToTop.style.opacity = '0';
        this.footerBackToTop.style.visibility = 'hidden';
        this.footerBackToTop.style.transform = 'translateY(20px)';
      }
    }
  }
}

// ==============================================
// MODAL DE PROJETOS
// ==============================================
class ProjectModal {
  static init() {
    this.modal = document.getElementById('modal');
    this.closeModal = document.querySelector('.close');
    this.closeModalBtn = document.querySelector('.close-modal');
    this.swiperInstance = null;
    
    this.lastScrollPosition = 0;
    this.modalOpenedFromPosition = 0;
    
    this.bindEvents();
    this.setupProjectButtons();
  }
  
  static bindEvents() {
    if (this.closeModal) {
      this.closeModal.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.close();
      });
    }
    
    if (this.closeModalBtn) {
      this.closeModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.close();
      });
    }
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('show')) {
        e.preventDefault();
        e.stopPropagation();
        this.close();
      }
    });
    
    this.modal.addEventListener('wheel', (e) => {
      if (this.modal.classList.contains('show')) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, { passive: false });
    
    this.modal.addEventListener('touchmove', (e) => {
      if (this.modal.classList.contains('show')) {
        const modalContent = this.modal.querySelector('.modal-content');
        const isScrollable = modalContent.scrollHeight > modalContent.clientHeight;
        
        if (!isScrollable || e.target === this.modal) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    }, { passive: false });
  }
  
  static setupProjectButtons() {
    document.querySelectorAll(".project-btn").forEach(button => {
      button.addEventListener("click", () => {
        const projetoId = button.dataset.projeto;
        const data = projetos[projetoId];
        
        if (data) {
          this.open(data);
        }
      });
    });
  }
  
  static open(projectData) {
    this.modalOpenedFromPosition = window.scrollY || document.documentElement.scrollTop;
    
    document.getElementById("modal-title").textContent = projectData.titulo;
    document.getElementById("modal-desc").textContent = projectData.descricao;
    
    this.setupMedia(projectData.midia);
    this.setupTechnologies(projectData.tecnologias);
    this.setupLinks(projectData.links);
    this.setupFeatures(projectData.features);
    
    this.modal.classList.add("show");
    document.body.classList.add('modal-open');
    
    this.lastScrollPosition = this.modalOpenedFromPosition;
    
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${this.modalOpenedFromPosition}px`;
    
    setTimeout(() => {
      this.initSwiper();
    }, 100);
  }
  
  static close() {
    this.modal.classList.remove("show");
    document.body.classList.remove('modal-open');
    
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    
    document.querySelectorAll('#modal-media video').forEach(video => {
      video.pause();
    });
    
    document.querySelectorAll('#modal-media iframe').forEach(iframe => {
      const src = iframe.src;
      iframe.src = '';
      setTimeout(() => {
        iframe.src = src.replace('autoplay=1', '');
      }, 100);
    });
    
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }
    
    setTimeout(() => {
      window.scrollTo({
        top: this.lastScrollPosition,
        behavior: 'auto'
      });
    }, 20);
  }
  
  static setupMedia(mediaItems) {
    const mediaContainer = document.getElementById("modal-media");
    const thumbnailsContainer = document.getElementById("modal-thumbnails");
    
    mediaContainer.innerHTML = "";
    thumbnailsContainer.innerHTML = "";
    
    mediaItems.forEach((item, index) => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      
      if (item.type === 'image') {
        slide.innerHTML = `<img src="${item.src}" alt="${item.alt}" loading="lazy">`;
      } else if (item.type === 'youtube') {
        slide.innerHTML = `
          <div class="youtube-container">
            <iframe 
              width="100%" 
              height="100%" 
              src="${item.src}?rel=0&showinfo=0&modestbranding=1" 
              title="${item.alt}" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        `;
      }
      
      mediaContainer.appendChild(slide);
      
      const thumbnail = document.createElement('div');
      thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
      thumbnail.dataset.index = index;
      thumbnail.setAttribute('role', 'button');
      thumbnail.setAttribute('tabindex', '0');
      thumbnail.setAttribute('aria-label', `Ver ${item.alt || 'imagem'}`);
      
      let thumbnailContent = '';
      
      if (item.type === 'image') {
        thumbnailContent = `<img src="${item.src}" alt="${item.alt}" loading="lazy">`;
      } else if (item.type === 'youtube') {
        const thumbSrc = item.thumbnail || '';
        if (thumbSrc) {
          thumbnailContent = `<img src="${thumbSrc}" alt="Thumbnail: ${item.alt}" loading="lazy">`;
        } else {
          thumbnailContent = `
            <div class="video-thumbnail">
              <i class="fas fa-play"></i>
              <span>Vídeo</span>
            </div>
          `;
        }
      }
      
      thumbnail.innerHTML = thumbnailContent;
      thumbnailsContainer.appendChild(thumbnail);
    });
  }
  
  static setupTechnologies(technologies) {
    const techTags = document.getElementById("modal-tech-tags");
    techTags.innerHTML = "";
    
    technologies.forEach(tech => {
      const tag = document.createElement("span");
      tag.className = "skill-tag";
      tag.textContent = tech;
      techTags.appendChild(tag);
    });
  }
  
  static setupLinks(links) {
    const linksContainer = document.getElementById("modal-links");
    linksContainer.innerHTML = "";
    
    links.forEach(link => {
      const linkElement = document.createElement("a");
      linkElement.href = link.url;
      linkElement.target = "_blank";
      linkElement.rel = "noopener noreferrer";
      linkElement.className = `project-link ${link.type}`;
      linkElement.innerHTML = `
        ${link.type === 'github' ? '<i class="fab fa-github"></i>' : ''}
        ${link.type === 'demo' ? '<i class="fas fa-external-link-alt"></i>' : ''}
        ${link.text}
      `;
      linksContainer.appendChild(linkElement);
    });
  }
  
  static setupFeatures(features) {
    const featuresContainer = document.getElementById("modal-features");
    featuresContainer.innerHTML = `
      <h4><i class="fas fa-star"></i> Funcionalidades Principais</h4>
      <ul class="feature-list">
        ${features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    `;
  }
  
  static initSwiper() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
    }
    
    this.swiperInstance = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
      allowTouchMove: true,
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: { spaceBetween: 20 },
        768: { spaceBetween: 30 },
        1024: { spaceBetween: 40 },
      }
    });
    
    this.setupThumbnailEvents();
  }
  
  static setupThumbnailEvents() {
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.swiperInstance) {
          this.swiperInstance.slideTo(index);
          this.updateActiveThumbnail(index);
        }
      });
      
      thumb.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && this.swiperInstance) {
          e.preventDefault();
          e.stopPropagation();
          this.swiperInstance.slideTo(index);
          this.updateActiveThumbnail(index);
        }
      });
    });
    
    if (this.swiperInstance) {
      this.swiperInstance.on('slideChange', () => {
        this.updateActiveThumbnail(this.swiperInstance.activeIndex);
      });
    }
  }
  
  static updateActiveThumbnail(index) {
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
  }
}

// ==============================================
// DUOFLOW GAME - COM AS MELHORIAS SOLICITADAS
// ==============================================
class DuoFlowGame {
  constructor() {
    this.startScreen = document.getElementById('duoflowStart');
    this.gameScreen = document.getElementById('duoflowGame');
    this.completeScreen = document.getElementById('duoflowComplete');
    
    // Botões
    this.startButton = document.getElementById('startDuoflow');
    this.runBothButton = document.getElementById('runBoth');
    this.resetButton = document.getElementById('resetDuoflow');
    this.playAgainButton = document.getElementById('playAgainDuo');
    this.electricButton = document.getElementById('startElectric');
    this.runCodeButton = document.getElementById('runCode');
    this.helloBlock = document.getElementById('helloBlock');
    this.codeTerminal = document.getElementById('codeTerminal');
    
    // Containers de simulação para scroll
    this.flowContainers = document.querySelectorAll('.flow-container');
    
    // Estado do jogo
    this.electricCompleted = false;
    this.codeCompleted = false;
    this.isRunningBoth = false;
    this.electricRunning = false;
    this.codeRunning = false;
    this.electricActive = false;
    
    // Variáveis para drag & drop COM HOLD TO DRAG
    this.isDragging = false;
    this.isReadyToDrag = false;
    this.holdTimer = null;
    this.holdDuration = 500; // 0.5 segundos para segurar
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.blockOffsetX = 0;
    this.blockOffsetY = 0;
    this.initialTouchY = 0;
    this.blockOriginalPosition = null;
    
    // Partículas
    this.electronInterval = null;
    this.electronParticles = [];
    
    this.initialize();
  }
  
  initialize() {
    console.log('🚀 Inicializando DuoFlow...');
    
    // Mostrar tela inicial
    this.showScreen(this.startScreen);
    
    // Salvar posição original do bloco
    this.saveBlockOriginalPosition();
    
    // Inicializar drag & drop com hold to drag
    this.initHoldToDrag();
    
    // Adicionar estilos CSS
    this.addCustomStyles();
    
    // Configurar eventos
    this.bindEvents();
    
    // Resetar estado inicial
    this.resetGameState();
  }
  
  // ===== FUNÇÃO PARA SCROLLAR PARA AS SIMULAÇÕES =====
  scrollToSimulations() {
    console.log('📱 Scroll para simulações...');
    
    // Pequeno delay para DOM se atualizar
    setTimeout(() => {
      if (this.flowContainers.length > 0) {
        console.log('🎯 Encontrei containers de simulação');
        
        // Scroll para o primeiro container
        this.flowContainers[0].scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
        
        // Highlight visual
        this.flowContainers.forEach(container => {
          container.style.boxShadow = '0 0 30px rgba(var(--primary-rgb), 0.4)';
          container.style.transform = 'scale(1.02)';
          container.style.transition = 'all 0.5s ease';
          
          setTimeout(() => {
            container.style.boxShadow = '';
            container.style.transform = '';
          }, 2000);
        });
      }
    }, 300);
  }
  
  // ===== CONTROLE DE TELAS =====
  showScreen(screen) {
    document.querySelectorAll('.duoflow-screen').forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none';
    });
    
    screen.style.display = 'block';
    setTimeout(() => {
      screen.classList.add('active');
      
      // Se for a tela do jogo, scroll para simulações
      if (screen === this.gameScreen) {
        setTimeout(() => {
          this.scrollToSimulations();
        }, 500);
      }
    }, 50);
  }
  
  // ===== HOLD TO DRAG - NOVO SISTEMA =====
  saveBlockOriginalPosition() {
    if (!this.helloBlock) return;
    
    const rect = this.helloBlock.getBoundingClientRect();
    this.blockOriginalPosition = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    };
  }
  
  initHoldToDrag() {
    if (!this.helloBlock || !this.codeTerminal) return;
    
    // Remover draggable padrão
    this.helloBlock.removeAttribute('draggable');
    
    // ===== DESKTOP =====
    this.helloBlock.addEventListener('mousedown', (e) => {
      if (this.helloBlock.classList.contains('used')) return;
      
      e.preventDefault();
      console.log('🖱️ Mouse down - iniciando hold timer');
      
      // Iniciar timer para hold
      this.holdTimer = setTimeout(() => {
        console.log('✅ Hold completado - iniciando drag');
        this.startDrag(e.clientX, e.clientY, 'mouse');
      }, this.holdDuration);
      
      // Feedback visual de hold
      this.helloBlock.classList.add('holding');
      this.helloBlock.style.transform = 'scale(0.98)';
      this.helloBlock.style.boxShadow = '0 0 20px rgba(54, 209, 220, 0.4)';
    });
    
    // Cancelar hold se mouse sair
    this.helloBlock.addEventListener('mouseup', () => {
      this.cancelHold();
    });
    
    this.helloBlock.addEventListener('mouseleave', () => {
      this.cancelHold();
    });
    
    // Movimento do mouse durante drag
    document.addEventListener('mousemove', (e) => {
      if (this.isDragging && this.isReadyToDrag) {
        e.preventDefault();
        this.handleDragMove(e.clientX, e.clientY);
      }
    });
    
    // Soltar mouse
    document.addEventListener('mouseup', (e) => {
      if (this.isDragging) {
        this.handleDrop(e.clientX, e.clientY);
      }
    });
    
    // ===== MOBILE =====
    this.helloBlock.addEventListener('touchstart', (e) => {
      if (this.helloBlock.classList.contains('used')) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      const touch = e.touches[0];
      console.log('📱 Touch start - iniciando hold timer');
      
      // Iniciar timer para hold
      this.holdTimer = setTimeout(() => {
        console.log('✅ Hold completado - iniciando drag mobile');
        this.startDrag(touch.clientX, touch.clientY, 'touch');
      }, this.holdDuration);
      
      // Feedback visual
      this.helloBlock.classList.add('holding');
      this.helloBlock.style.transform = 'scale(0.98)';
      this.helloBlock.style.boxShadow = '0 0 20px rgba(54, 209, 220, 0.4)';
      
      // Desabilitar scroll
      this.disablePageScroll();
      
    }, { passive: false });
    
    // Movimento do toque
    this.helloBlock.addEventListener('touchmove', (e) => {
      if (this.isDragging && this.isReadyToDrag) {
        e.preventDefault();
        e.stopPropagation();
        
        const touch = e.touches[0];
        this.handleDragMove(touch.clientX, touch.clientY);
      }
    }, { passive: false });
    
    // Soltar toque
    this.helloBlock.addEventListener('touchend', (e) => {
      if (this.isDragging) {
        e.preventDefault();
        e.stopPropagation();
        
        const touch = e.changedTouches[0];
        this.handleDrop(touch.clientX, touch.clientY);
      } else {
        this.cancelHold();
      }
      
      this.enablePageScroll();
    }, { passive: false });
    
    // Cancelar toque
    this.helloBlock.addEventListener('touchcancel', () => {
      this.cancelHold();
      this.enablePageScroll();
    });
  }
  
  cancelHold() {
    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
      this.holdTimer = null;
      console.log('❌ Hold cancelado');
    }
    
    // Resetar feedback visual
    this.helloBlock.classList.remove('holding');
    this.helloBlock.style.transform = '';
    this.helloBlock.style.boxShadow = '';
    
    this.isReadyToDrag = false;
  }
  
  startDrag(clientX, clientY, inputType) {
    if (this.helloBlock.classList.contains('used')) return;
    
    const rect = this.helloBlock.getBoundingClientRect();
    
    // Calcular offset
    this.blockOffsetX = clientX - rect.left;
    this.blockOffsetY = clientY - rect.top;
    
    // Configurar estado de drag
    this.isDragging = true;
    this.isReadyToDrag = true;
    
    // Preparar bloco para drag
    this.helloBlock.style.position = 'fixed';
    this.helloBlock.style.left = `${rect.left}px`;
    this.helloBlock.style.top = `${rect.top}px`;
    this.helloBlock.style.width = `${rect.width}px`;
    this.helloBlock.style.height = `${rect.height}px`;
    this.helloBlock.style.zIndex = '10000';
    this.helloBlock.style.opacity = '0.95';
    this.helloBlock.style.transform = 'scale(0.95) rotate(2deg)';
    this.helloBlock.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)';
    this.helloBlock.style.transition = 'transform 0.1s, box-shadow 0.1s';
    this.helloBlock.style.cursor = 'grabbing';
    this.helloBlock.style.touchAction = 'none';
    
    // Feedback visual
    this.helloBlock.classList.add('dragging');
    this.helloBlock.classList.remove('holding');
    
    console.log(`🎮 Drag iniciado via ${inputType}`);
  }
  
  handleDragMove(clientX, clientY) {
    if (!this.isDragging || !this.isReadyToDrag) return;
    
    const x = clientX - this.blockOffsetX;
    const y = clientY - this.blockOffsetY;
    
    // Atualizar posição
    this.helloBlock.style.left = `${x}px`;
    this.helloBlock.style.top = `${y}px`;
    
    // Verificar se está sobre o terminal
    const terminalRect = this.codeTerminal.getBoundingClientRect();
    const isOverTerminal = clientX >= terminalRect.left && 
                          clientX <= terminalRect.right &&
                          clientY >= terminalRect.top && 
                          clientY <= terminalRect.bottom;
    
    // Feedback visual
    if (isOverTerminal) {
      this.helloBlock.style.transform = 'scale(0.85) rotate(0deg)';
      this.helloBlock.style.boxShadow = '0 0 40px rgba(54, 209, 220, 0.8)';
      this.codeTerminal.classList.add('drop-hover');
    } else {
      this.helloBlock.style.transform = 'scale(0.95) rotate(2deg)';
      this.helloBlock.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)';
      this.codeTerminal.classList.remove('drop-hover');
    }
  }
  
  handleDrop(clientX, clientY) {
    if (!this.isDragging) return;
    
    console.log('🎯 Soltando bloco...');
    
    const terminalRect = this.codeTerminal.getBoundingClientRect();
    const isOverTerminal = clientX >= terminalRect.left && 
                          clientX <= terminalRect.right &&
                          clientY >= terminalRect.top && 
                          clientY <= terminalRect.bottom;
    
    if (isOverTerminal) {
      console.log('✅ Bloco solto sobre o terminal');
      this.dropBlockIntoTerminal();
    } else {
      console.log('❌ Bloco solto fora do terminal');
      this.returnBlockToOriginalPosition();
    }
    
    // Resetar estado
    this.isDragging = false;
    this.isReadyToDrag = false;
    this.holdTimer = null;
    
    // Remover feedback
    this.helloBlock.classList.remove('dragging');
    this.codeTerminal.classList.remove('drop-hover');
    
    this.enablePageScroll();
  }
  
  // ===== CONTROLE DE SCROLL =====
  disablePageScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    document.documentElement.style.overflow = 'hidden';
  }
  
  enablePageScroll() {
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    document.documentElement.style.overflow = '';
  }
  
  // ===== ANIMAÇÃO DO BLOCO =====
  dropBlockIntoTerminal() {
    if (!this.helloBlock || !this.codeTerminal) return;
    
    const terminalRect = this.codeTerminal.getBoundingClientRect();
    const terminalCenterX = terminalRect.left + (terminalRect.width / 2);
    const terminalCenterY = terminalRect.top + (terminalRect.height / 2);
    
    // Feedback visual
    this.codeTerminal.classList.add('terminal-active');
    
    // Animar bloco para o centro do terminal
    this.helloBlock.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease';
    this.helloBlock.style.left = `${terminalCenterX - (this.helloBlock.offsetWidth / 2)}px`;
    this.helloBlock.style.top = `${terminalCenterY - (this.helloBlock.offsetHeight / 2)}px`;
    this.helloBlock.style.transform = 'scale(0.4) rotate(0deg)';
    this.helloBlock.style.opacity = '0';
    this.helloBlock.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
    
    // Após animação
    setTimeout(() => {
      this.helloBlock.style.display = 'none';
      this.runCodeButton.disabled = false;
      this.helloBlock.classList.add('used');
      
      // Atualizar status
      const codeStatus = document.getElementById('codeStatus');
      if (codeStatus) {
        codeStatus.textContent = 'Código pronto para executar!';
        codeStatus.style.color = '#FF9800';
      }
      
      // Mostrar comando
      const inputText = document.getElementById('inputText');
      if (inputText) {
        inputText.textContent = 'print("Hello World")';
        inputText.style.color = '#4EC9B0';
        inputText.style.fontWeight = 'bold';
      }
      
      // Efeito de digitação
      this.simulateTypingEffect();
      
    }, 600);
  }
  
  returnBlockToOriginalPosition() {
    if (!this.blockOriginalPosition) return;
    
    console.log('↩️ Retornando bloco à posição original...');
    
    // Animar de volta
    this.helloBlock.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    this.helloBlock.style.left = `${this.blockOriginalPosition.left}px`;
    this.helloBlock.style.top = `${this.blockOriginalPosition.top}px`;
    this.helloBlock.style.transform = 'scale(1) rotate(0deg)';
    this.helloBlock.style.opacity = '1';
    this.helloBlock.style.boxShadow = '0 8px 25px rgba(54, 209, 220, 0.4)';
    
    // Após animação, resetar
    setTimeout(() => {
      this.resetBlockState();
    }, 500);
  }
  
  resetBlockState() {
    if (!this.helloBlock) return;
    
    this.helloBlock.style.position = '';
    this.helloBlock.style.left = '';
    this.helloBlock.style.top = '';
    this.helloBlock.style.width = '';
    this.helloBlock.style.height = '';
    this.helloBlock.style.zIndex = '';
    this.helloBlock.style.opacity = '';
    this.helloBlock.style.transform = '';
    this.helloBlock.style.boxShadow = '';
    this.helloBlock.style.transition = '';
    this.helloBlock.style.display = '';
    this.helloBlock.style.cursor = '';
    this.helloBlock.style.touchAction = '';
    
    this.helloBlock.classList.remove('dragging', 'holding');
    this.enablePageScroll();
  }
  
  // ===== EFEITO DE DIGITAÇÃO =====
  simulateTypingEffect() {
    const inputText = document.getElementById('inputText');
    if (!inputText) return;
    
    const command = 'print("Hello World")';
    let i = 0;
    
    inputText.textContent = '';
    inputText.style.color = '#4EC9B0';
    
    const typeChar = () => {
      if (i < command.length) {
        inputText.textContent += command.charAt(i);
        i++;
        setTimeout(typeChar, 50);
      } else {
        const cursor = document.createElement('span');
        cursor.className = 'blinking-cursor';
        cursor.textContent = '_';
        inputText.appendChild(cursor);
      }
    };
    
    setTimeout(typeChar, 300);
  }
  
  // ===== FLUXO ELÉTRICO =====
  startElectricFlow() {
    if (this.electricActive || this.electricRunning || this.electricCompleted) return;
    
    this.electricActive = true;
    this.electricRunning = true;
    
    const electricWire = document.getElementById('electricWire');
    const electricLamp = document.getElementById('electricLamp');
    const electricStatus = document.getElementById('electricStatus');
    
    electricStatus.textContent = 'Fluxo iniciado...';
    this.electricButton.disabled = true;
    this.electricButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Fluindo...';
    
    electricWire.classList.add('wire-active');
    
    this.electronInterval = setInterval(() => {
      this.createElectronParticle();
    }, 300);
    
    setTimeout(() => {
      clearInterval(this.electronInterval);
      this.electronInterval = null;
      
      setTimeout(() => {
        electricLamp.classList.add('lit');
        electricStatus.textContent = 'Lâmpada acesa!';
        electricStatus.style.color = '#4CAF50';
        this.electricButton.innerHTML = '<i class="fas fa-check"></i> Concluído';
        
        this.electricCompleted = true;
        this.electricRunning = false;
        this.electricActive = false;
        
        this.updateProgress(1);
        this.checkBothCompleted();
      }, 2000);
    }, 4000);
  }
  
  createElectronParticle() {
    const wireVisual = document.getElementById('electricWire');
    if (!wireVisual) return;
    
    const particle = document.createElement('div');
    particle.className = 'electron-particle';
    particle.innerHTML = '⚡';
    
    const randomY = Math.random() * 20 - 10;
    particle.style.top = `calc(50% + ${randomY}px)`;
    particle.style.left = '-20px';
    const size = 0.7 + Math.random() * 0.6;
    particle.style.fontSize = `${size}rem`;
    particle.style.opacity = (0.5 + Math.random() * 0.5).toString();
    
    wireVisual.appendChild(particle);
    this.electronParticles.push(particle);
    this.animateElectronParticle(particle);
  }
  
  animateElectronParticle(particle) {
    const wireVisual = document.getElementById('electricWire');
    if (!wireVisual) return;
    
    setTimeout(() => {
      const duration = 2000 + Math.random() * 2000;
      const startTime = Date.now();
      const wireWidth = wireVisual.offsetWidth;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 2);
        const position = -20 + easedProgress * (wireWidth + 40);
        
        particle.style.left = `${position}px`;
        particle.style.opacity = (0.8 * (1 - progress * 0.7)).toString();
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          particle.remove();
          this.electronParticles = this.electronParticles.filter(p => p !== particle);
        }
      };
      
      requestAnimationFrame(animate);
    }, Math.random() * 500);
  }
  
  clearElectronParticles() {
    this.electronParticles.forEach(particle => particle.remove());
    this.electronParticles = [];
    if (this.electronInterval) {
      clearInterval(this.electronInterval);
      this.electronInterval = null;
    }
  }
  
  // ===== FLUXO DE CÓDIGO =====
  runCodeFlow() {
    if (this.codeRunning || this.codeCompleted) return;
    
    this.codeRunning = true;
    this.runCodeButton.disabled = true;
    
    const terminalOutput = document.getElementById('terminalOutput');
    const inputText = document.getElementById('inputText');
    const codeStatus = document.getElementById('codeStatus');
    
    codeStatus.textContent = 'Executando código...';
    this.runCodeButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Executando...';
    
    this.codeTerminal.classList.add('terminal-active');
    
    setTimeout(() => {
      const resultLine = document.createElement('div');
      resultLine.className = 'terminal-line';
      resultLine.textContent = 'Hello World';
      resultLine.style.color = '#4CAF50';
      resultLine.style.fontWeight = 'bold';
      resultLine.style.fontSize = '1.1em';
      
      terminalOutput.appendChild(resultLine);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      
      setTimeout(() => {
        inputText.textContent = '_';
        codeStatus.textContent = 'Código executado!';
        codeStatus.style.color = '#2196F3';
        this.runCodeButton.innerHTML = '<i class="fas fa-check"></i> Concluído';
        
        this.codeCompleted = true;
        this.codeRunning = false;
        
        this.updateProgress(2);
        this.checkBothCompleted();
      }, 1500);
    }, 1000);
  }
  
  // ===== CONTROLE DE PROGRESSO =====
  updateProgress(step) {
    const progressSteps = document.querySelectorAll('.progress-step');
    
    progressSteps.forEach(stepEl => {
      stepEl.classList.remove('active');
    });
    
    for (let i = 0; i <= step; i++) {
      if (progressSteps[i]) {
        progressSteps[i].classList.add('active');
      }
    }
  }
  
  checkBothCompleted() {
    if (this.electricCompleted && this.codeCompleted) {
      this.updateProgress(3);
      
      setTimeout(() => {
        this.showScreen(this.completeScreen);
      }, 1500);
    }
  }
  
  // ===== RESET DO JOGO =====
  resetGameState() {
    // Resetar variáveis
    this.electricCompleted = false;
    this.codeCompleted = false;
    this.isRunningBoth = false;
    this.electricRunning = false;
    this.codeRunning = false;
    this.electricActive = false;
    this.isDragging = false;
    this.isReadyToDrag = false;
    
    // Limpar partículas
    this.clearElectronParticles();
    
    // Resetar elementos elétricos
    const electricWire = document.getElementById('electricWire');
    const electricLamp = document.getElementById('electricLamp');
    const electricStatus = document.getElementById('electricStatus');
    
    if (electricWire) electricWire.classList.remove('wire-active');
    if (electricLamp) {
      electricLamp.classList.remove('lit');
      electricLamp.style.animation = '';
    }
    if (electricStatus) {
      electricStatus.textContent = 'Aguardando...';
      electricStatus.style.color = '';
    }
    
    // Resetar botão elétrico
    if (this.electricButton) {
      this.electricButton.disabled = false;
      this.electricButton.innerHTML = '<i class="fas fa-play"></i> Iniciar Fluxo';
    }
    
    // Resetar elementos de código
    const terminalOutput = document.getElementById('terminalOutput');
    const inputText = document.getElementById('inputText');
    const codeStatus = document.getElementById('codeStatus');
    
    if (this.codeTerminal) this.codeTerminal.classList.remove('terminal-active');
    if (terminalOutput) {
      const lines = terminalOutput.querySelectorAll('.terminal-line');
      for (let i = 2; i < lines.length; i++) {
        lines[i].remove();
      }
    }
    if (inputText) inputText.textContent = '_';
    if (codeStatus) {
      codeStatus.textContent = 'Aguardando...';
      codeStatus.style.color = '';
    }
    
    // Resetar botão de código
    if (this.runCodeButton) {
      this.runCodeButton.disabled = true;
      this.runCodeButton.innerHTML = '<i class="fas fa-play-circle"></i> Executar';
    }
    
    // Resetar bloco de código
    if (this.helloBlock) {
      this.helloBlock.classList.remove('used');
      this.helloBlock.style.cursor = 'pointer';
      this.resetBlockState();
      this.saveBlockOriginalPosition();
    }
    
    // Resetar botão Executar Ambos
    if (this.runBothButton) {
      this.runBothButton.disabled = false;
      this.runBothButton.innerHTML = '<i class="fas fa-play"></i> Executar Ambos';
    }
    
    // Resetar progresso
    this.updateProgress(0);
  }
  
  // ===== EVENT LISTENERS =====
  bindEvents() {
    // Botão "Ver Paralelo" - SCROLL PARA SIMULAÇÕES
    if (this.startButton) {
      this.startButton.addEventListener('click', () => {
        console.log('🎮 Ver Paralelo clicado - indo para jogo');
        this.showScreen(this.gameScreen);
        this.resetGameState();
        
        // Scroll automático para simulações
        setTimeout(() => {
          this.scrollToSimulations();
        }, 300);
      });
    }
    
    // Botão "Reiniciar" - SCROLL PARA SIMULAÇÕES
    if (this.resetButton) {
      this.resetButton.addEventListener('click', () => {
        console.log('🔄 Reiniciar clicado');
        this.resetGameState();
        
        // Scroll para simulações
        setTimeout(() => {
          this.scrollToSimulations();
        }, 100);
      });
    }
    
    // Botão "Executar Ambos" - SCROLL PARA SIMULAÇÕES
    if (this.runBothButton) {
      this.runBothButton.addEventListener('click', () => {
        console.log('⚡ Executar Ambos clicado');
        this.isRunningBoth = true;
        this.runBothButton.disabled = true;
        const originalText = this.runBothButton.innerHTML;
        this.runBothButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Executando...';
        
        // Scroll para simulações primeiro
        this.scrollToSimulations();
        
        // Simular drag & drop
        if (!this.helloBlock.classList.contains('used')) {
          setTimeout(() => {
            this.dropBlockIntoTerminal();
          }, 800);
        }
        
        // Executar fluxos
        setTimeout(() => {
          if (!this.electricRunning && !this.electricCompleted) {
            this.startElectricFlow();
          }
          
          setTimeout(() => {
            if (!this.codeRunning && !this.codeCompleted) {
              this.runCodeFlow();
            }
          }, 1500);
        }, 1200);
        
        setTimeout(() => {
          this.runBothButton.disabled = false;
          this.runBothButton.innerHTML = originalText;
          this.isRunningBoth = false;
        }, 4000);
      });
    }
    
    // Botão "Iniciar Fluxo"
    if (this.electricButton) {
      this.electricButton.addEventListener('click', () => {
        if (!this.electricRunning && !this.electricCompleted) {
          this.startElectricFlow();
        }
      });
    }
    
    // Botão "Executar Código"
    if (this.runCodeButton) {
      this.runCodeButton.addEventListener('click', () => {
        if (!this.codeRunning && !this.codeCompleted) {
          this.runCodeFlow();
        }
      });
    }
    
    // Botão "Ver Novamente"
    if (this.playAgainButton) {
      this.playAgainButton.addEventListener('click', () => {
        this.initialize();
      });
    }
    
    // Botão "Aprender Mais"
    document.getElementById('learnMore')?.addEventListener('click', () => {
      document.getElementById('learnModal').classList.add('active');
    });
    
    document.getElementById('closeLearnModal')?.addEventListener('click', () => {
      document.getElementById('learnModal').classList.remove('active');
    });
    
    document.getElementById('closeLearnModalBtn')?.addEventListener('click', () => {
      document.getElementById('learnModal').classList.remove('active');
    });
  }
  
  // ===== ESTILOS CSS ADICIONAIS =====
  addCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .blinking-cursor {
        display: inline-block;
        width: 2px;
        margin-left: 2px;
        animation: blink 1s infinite;
        color: #4EC9B0;
      }
      
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      
      .drop-hover {
        border-color: #36d1dc !important;
        box-shadow: 0 0 20px rgba(54, 209, 220, 0.4) !important;
        transition: all 0.3s ease !important;
      }
      
      .code-block-duo.dragging {
        cursor: grabbing !important;
        user-select: none !important;
      }
      
      .code-block-duo.holding {
        cursor: move !important;
        user-select: none !important;
        transition: transform 0.2s, box-shadow 0.2s !important;
      }
      
      .electron-particle {
        position: absolute;
        font-size: 0.9rem;
        filter: drop-shadow(0 0 8px rgba(255, 255, 0, 0.8));
        z-index: 5;
        pointer-events: none;
      }
      
      /* Pulse animation for hold feedback */
      @keyframes pulse-hold {
        0% { transform: scale(1); }
        50% { transform: scale(0.98); }
        100% { transform: scale(1); }
      }
      
      .code-block-duo.holding {
        animation: pulse-hold 0.5s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  }
}

// ==============================================
// ANIMAÇÃO DE DIGITAÇÃO (TYPEWRITER)
// ==============================================
class Typewriter {
  constructor() {
    this.typewriterText = document.querySelector('.typewriter p');
    this.texts = [
      "Técnico em Desenvolvimento de Sistemas",
      "Eletricista de Manutenção Eletroeletrônica",
      "Criando soluções com código e circuitos",
      "Transformando ideias em realidade"
    ];
    
    this.currentTextIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.isPaused = false;
    
    this.initialize();
  }
  
  initialize() {
    setTimeout(() => this.type(), 1000);
    
    document.addEventListener('visibilitychange', () => {
      this.isPaused = document.hidden;
      if (!this.isPaused) this.type();
    });
  }
  
  type() {
    if (this.isPaused) return;
    
    const currentText = this.texts[this.currentTextIndex];
    
    if (!this.isDeleting && this.charIndex < currentText.length) {
      this.typewriterText.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
      setTimeout(() => this.type(), 50);
    } else if (this.isDeleting && this.charIndex > 0) {
      this.typewriterText.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.type(), 30);
    } else {
      this.isDeleting = !this.isDeleting;
      
      if (!this.isDeleting) {
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      }
      
      setTimeout(() => this.type(), this.isDeleting ? 1500 : 500);
    }
  }
}

// ==============================================
// ANIMAÇÃO AO ROLAR (INTERSECTION OBSERVER)
// ==============================================
class ScrollAnimations {
  static init() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.about-card, .project-card, .contact-card, .hero, .section-header').forEach(el => {
      observer.observe(el);
    });
  }
}

// ==============================================
// ANIMAÇÃO DO FOOTER
// ==============================================
class FooterAnimations {
  static init() {
    const footerElements = document.querySelectorAll('.footer-column, .tech-badge, .social-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 100);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    footerElements.forEach(el => {
      observer.observe(el);
    });
  }
}

// ==============================================
// UTILITÁRIOS
// ==============================================
class Utils {
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  static adjustShapes() {
    const shapes = document.querySelectorAll('.shape');
    const width = window.innerWidth;
    
    if (width <= 480) {
      shapes.forEach((shape, index) => {
        if (index >= 3) {
          shape.style.display = 'none';
        } else {
          shape.style.transform = 'scale(0.4)';
        }
      });
    } else if (width <= 768) {
      shapes.forEach(shape => {
        shape.style.transform = 'scale(0.6)';
        shape.style.display = 'block';
      });
    } else if (width >= 1440) {
      shapes.forEach(shape => {
        shape.style.transform = 'scale(1.2)';
      });
    } else {
      shapes.forEach(shape => {
        shape.style.transform = 'scale(1)';
        shape.style.display = 'block';
      });
    }
  }
  
  static handleResize() {
    if (window.innerWidth > 768 && document.getElementById('mobileMenu')?.classList.contains('active')) {
      MobileMenu.close();
    }
    
    const modal = document.getElementById('modal');
    if (modal?.classList.contains('show') && ProjectModal.swiperInstance) {
      ProjectModal.swiperInstance.update();
    }
    
    this.adjustShapes();
  }
}

// ==============================================
// CONTADOR DE VISITAS
// ==============================================
class VisitCounter {
  static update() {
    if (!localStorage.getItem('visitCount')) {
      localStorage.setItem('visitCount', '1');
    } else {
      let count = parseInt(localStorage.getItem('visitCount'));
      count++;
      localStorage.setItem('visitCount', count.toString());
    }
  }
}

// ==============================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ==============================================
class App {
  static init() {
    console.log('🚀 Inicializando aplicação...');
    
    new ThemeManager();
    MobileMenu.init();
    Navigation.init();
    ProjectModal.init();
    
    if (document.getElementById('duoflowStart')) {
      window.duoFlowGame = new DuoFlowGame();
    }
    
    new Typewriter();
    ScrollAnimations.init();
    FooterAnimations.init();
    
    this.setupEventListeners();
    VisitCounter.update();
    
    Navigation.updateActiveLinks();
    Navigation.toggleBackToTop();
    Utils.adjustShapes();
    
    console.log('✅ Aplicação inicializada com sucesso!');
  }
  
  static setupEventListeners() {
    window.addEventListener('resize', Utils.debounce(() => {
      Utils.handleResize();
      Utils.adjustShapes();
    }, 250));
    
    document.querySelectorAll('.nav-links a, .mobile-nav-link').forEach(link => {
      link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a, .mobile-nav-link').forEach(l => {
          l.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }
}

// ==============================================
// INICIAR APLICAÇÃO
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

// Expor para debug
window.App = App;
window.DuoFlowGame = DuoFlowGame;