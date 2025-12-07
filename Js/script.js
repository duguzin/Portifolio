// ===== CONFIGURAÇÕES GLOBAIS =====
const config = {
  breakpoints: {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1280
  }
};

// ===== GERENCIAMENTO DE TEMA - VERSÃO CORRIGIDA =====
const toggleButton = document.getElementById('tema-toggle');
const mobileTemaToggle = document.getElementById('mobileTemaToggle');
const body = document.body;

// Inicializar tema ao carregar a página
function inicializarTema() {
  const temaSalvo = localStorage.getItem("tema");
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  console.log('Tema salvo:', temaSalvo);
  console.log('Prefere escuro:', prefersDark);
  
  // Limpar qualquer classe de tema existente
  body.classList.remove('tema-escuro');
  
  // Aplicar tema baseado na preferência salva ou no sistema
  if (temaSalvo === "escuro" || (temaSalvo === null && prefersDark)) {
    body.classList.add('tema-escuro');
    console.log('Aplicando tema escuro');
  } else {
    body.classList.remove('tema-escuro');
    console.log('Aplicando tema claro');
  }
  
  // Atualizar ícones
  atualizarIconesTema();
}

// Atualizar apenas os ícones
function atualizarIconesTema() {
  const temaEscuro = body.classList.contains('tema-escuro');
  
  console.log('Atualizando ícones. Tema escuro?', temaEscuro);
  
  // Atualizar ícone do botão desktop
  const icon = temaEscuro ? 'fa-sun' : 'fa-moon';
  if (toggleButton) {
    toggleButton.innerHTML = `<i class="fas ${icon}"></i>`;
    console.log('Ícone desktop:', icon);
  }
  
  // Atualizar texto e ícone do botão mobile
  if (mobileTemaToggle) {
    mobileTemaToggle.innerHTML = `<i class="fas ${icon}"></i> ${temaEscuro ? 'Tema Claro' : 'Tema Escuro'}`;
    console.log('Ícone mobile:', icon);
  }
}

// Alternar tema completo
function alternarTema() {
  console.log('Alternando tema...');
  console.log('Classe antes:', body.classList.toString());
  
  body.classList.toggle('tema-escuro');
  
  console.log('Classe depois:', body.classList.toString());
  console.log('Tema escuro agora?', body.classList.contains('tema-escuro'));
  
  // Salvar preferência
  const temaEscuro = body.classList.contains('tema-escuro');
  localStorage.setItem("tema", temaEscuro ? "escuro" : "claro");
  
  console.log('Tema salvo:', localStorage.getItem("tema"));
  
  // Atualizar ícones
  atualizarIconesTema();
  
  // Forçar repaint para garantir que as mudanças sejam visíveis
  document.documentElement.style.display = 'none';
  document.documentElement.offsetHeight; // Trigger reflow
  document.documentElement.style.display = '';
}

// Configurar event listeners
function configurarEventosTema() {
  // Botão desktop
  toggleButton.addEventListener("click", alternarTema);
  
  // Botão mobile
  if (mobileTemaToggle) {
    mobileTemaToggle.addEventListener("click", () => {
      alternarTema();
      // Fechar menu mobile após alterar tema
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        fecharMenuMobile();
      }
    });
  }
  
  // Escutar mudanças na preferência do sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Só aplicar se não houver tema salvo
    if (!localStorage.getItem("tema")) {
      if (e.matches) {
        body.classList.add('tema-escuro');
      } else {
        body.classList.remove('tema-escuro');
      }
      atualizarIconesTema();
    }
  });
}

// Inicializar tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM carregado, inicializando tema...');
  inicializarTema();
  configurarEventosTema();
  
  // Log para debug
  console.log('Corpo HTML:', body.outerHTML.substring(0, 200) + '...');
  console.log('Toggle button:', toggleButton.outerHTML);
});

// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function abrirMenuMobile() {
  mobileMenu.classList.add('active');
  mobileMenuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}

function fecharMenuMobile() {
  mobileMenu.classList.remove('active');
  mobileMenuOverlay.classList.remove('active');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

menuToggle?.addEventListener('click', abrirMenuMobile);
menuClose?.addEventListener('click', fecharMenuMobile);
mobileMenuOverlay?.addEventListener('click', fecharMenuMobile);

// Fechar menu ao clicar em um link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', fecharMenuMobile);
});

// Fechar menu com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
    fecharMenuMobile();
  }
});

// Fechar menu ao redimensionar para desktop
function handleResize() {
  if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
    fecharMenuMobile();
  }
  
  // Re-inicializar Swiper se necessário
  if (modal.classList.contains('show') && swiperInstance) {
    swiperInstance.update();
  }
  
  // Ajustar formas para telas pequenas
  adjustShapes();
}

// ===== NAVEGAÇÃO SUAVE E ATIVAÇÃO DE LINKS =====
function atualizarLinkAtivo() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      // Atualizar links desktop
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
      
      // Atualizar links mobile
      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Navegação suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      
      // Fechar menu mobile se aberto
      if (mobileMenu.classList.contains('active')) {
        fecharMenuMobile();
      }
      
      // Scroll suave
      const headerHeight = document.querySelector('.nav-bar').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== BOTÃO VOLTAR AO TOPO =====
const backToTop = document.getElementById('backToTop');

function toggleBackToTop() {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

backToTop?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== MODAL DE PROJETOS =====
let swiperInstance = null;
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const closeModalBtn = document.querySelector('.close-modal');

// Dados dos projetos
const projetos = {

  cultivamais: {
    titulo: "CultivaMais - E-commerce Agrícola",
    descricao: "Plataforma de e-commerce especializada para pequenos agricultores venderem seus produtos diretamente aos consumidores. Sistema completo com catálogo de produtos, carrinho de compras, checkout seguro e painel administrativo. Inclui sistema de avaliações, rastreamento de pedidos e integração com correios.",
    midia: [
      { 
        type: 'image', 
        src: 'Imagens/CultivaMais/Imagens/foto-1.png', 
        alt: 'Página inicial do e-commerce' 
      },
      { 
        type: 'image', 
        src: 'Imagens/CultivaMais/Imagens/foto-2.png', 
        alt: 'Catálogo de Produto' 
      },
      { 
        type: 'youtube', 
        src: 'https://www.youtube.com/embed/MdgFU4I6zS8', 
        thumbnail: 'Imagens/CultivaMais/Imagens/foto-2.png',
        alt: 'Tour completo pela plataforma' 
      }
    ],
    tecnologias: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery"],
    links: [
      { type: 'github', url: 'https://github.com/duguzin/CultivaMais-V2', text: 'Ver código no GitHub' },
      { type: 'demo', url: '', text: 'Ver demonstração' }
    ],
    features: [
      "Catálogo de produtos com filtros",
      "Carrinho de compras",
      "Checkou",
      "Painel administrativo"
    ]
  },

  guia360: {
    titulo: "Guia360 - Plataforma Educacional",
    descricao: "Sistema educacional completo para auxiliar estudantes na preparação para vestibulares e concursos.",
    midia: [
      { 
        type: 'image', 
        src: './Imagens/Guia360/Imagens/foto-1.png', 
        alt: 'Página Inicial' 
      },
      { 
        type: 'image', 
        src: './Imagens/Guia360/Imagens/foto-2.png', 
        alt: 'Página Aulão' 
      },
      { 
        type: 'image', 
        src: './Imagens/Guia360/Imagens/foto-3.png', 
        alt: 'Página Simulados' 
      },
      { 
        type: 'youtube', 
        src: 'https://www.youtube.com/embed/Q4ukvCQg1gQ', 
        thumbnail: './Imagens/Guia360/Imagens/foto-1.png',
        alt: 'Demonstração da plataforma educacional' 
      }
    ],
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    links: [
      { type: 'github', url: 'https://github.com/duguzin/Guia360-V2', text: 'Ver código no GitHub' },
      { type: 'demo', url: 'https://duguzin.github.io/Guia360-V2', text: 'Ver demonstração' }
    ],
    features: [
      "Videoaulas",
      "Simulados",
      "Plano de estudos adaptativo"
    ]
  },

  fitbattle: {
    titulo: "FitBattle - App Gamificado de Exercícios",
    descricao: "Aplicativo móvel gamificado com temática medieval para motivar prática de exercícios físicos. Os usuários enfrentam desafios, participam de batalhas e sobem de nível ao completar exercícios. Integrado com wearables e com sistema de recompensas e rankings.",
    midia: [
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-1.jpeg', alt: '' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-2.jpeg', alt: '' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-3.jpeg', alt: '' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-4.jpeg', alt: '' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-5.jpeg', alt: '' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-6.jpeg', alt: '' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-7.jpeg', alt: '' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-8.jpeg', alt: '' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-9.jpeg', alt: '' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-10.jpeg', alt: '' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-11.jpeg', alt: '' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-12.jpeg', alt: '' },
      { type: 'image', src: './Imagens/FitBattle/Imagens/foto-13.jpeg', alt: '' },
      { 
        type: 'youtube', 
        src: 'https://www.youtube.com/embed/bnOwb9DLsL8', 
        thumbnail: './Imagens/FitBattle/Imagens/foto-3.jpeg',
        alt: 'Gameplay completo do FitBattle' 
      }
    ],
    tecnologias: ["Flutter", "Dart", "Firebase", "Firestore", "Firebase Auth"],
    links: [
      { type: 'github', url: '', text: 'Ver código no GitHub' },
      { type: 'demo', url: '', text: 'Em breve na Play Store' }
    ],
    features: [
      "Desafios diários e semanais",
      "Sistema de batalhas",
      "Sistema de conquistas e recompensas",
      "Ranking global e entre amigos",
      "Modo offline para treinos"
    ]
  },

  bancodigital: {
    titulo: "Banco Digital Python",
    descricao: "Sistema bancário digital completo desenvolvido com Python/Flask no back-end e JavaScript puro no front-end. Inclui todas as operações bancárias básicas: criação de conta, depósitos, saques, transferências, extrato e investimentos.",
    midia: [
      { type: 'image', src: './Imagens/BancoDigitalPython/Imagens/foto-1.png', alt: 'Tela de Login' },
      { type: 'image', src: './Imagens/BancoDigitalPython/Imagens/foto-2.png', alt: 'Tela de Cadastro' },
      { type: 'image', src: './Imagens/BancoDigitalPython/Imagens/foto-3.png', alt: 'Dashboard da conta bancária' },
      { 
        type: 'youtube', 
        src: 'https://www.youtube.com/embed/q3AduCtIXV4', 
        thumbnail: './Imagens/BancoDigitalPython/Imagens/foto-3.png',
        alt: 'Demonstração completa das funcionalidades' 
      }
    ],
    tecnologias: ["HTML5", "CSS3", "Python", "Flask", "REST API", "JavaScript"],
    links: [
      { type: 'github', url: 'https://github.com/duguzin/BancoDigitalPython', text: 'Ver código no GitHub' },
      { type: 'demo', url: 'https://github.com/duguzin/BancoDigitalPython', text: 'Testar demonstração' }
    ],
    features: [
      "Criação de conta",
      "Depósitos, saques e transferências",
      "Extrato",
    ]
  },

  milkmoo: {
    titulo: "MilkMoo - Sistema de Sorveteria",
    descricao: "Desenvolvi um sistema completo de painel de atendimento para a faculdade, criando a sorveteria fictícia MilkMoo com três telas integradas: cliente, atendente e painel de TV. O cliente gera a senha, o atendente controla a fila com chamada por voz e a TV exibe tudo em tempo real. O projeto é 100% frontend, usa LocalStorage para comunicação e tem visual cartoon com modo festa. Tecnologias: HTML, CSS, JS, Bootstrap, Web Speech API e Canvas.",
    midia: [
      { type: 'image', src: './Imagens/MilkMoo/Imagens/foto-1.png', alt: '' },
      { type: 'image', src: './Imagens/MilkMoo/Imagens/foto-2.png', alt: '' },
      { type: 'image', src: './Imagens/MilkMoo/Imagens/foto-3.png', alt: '' },
      { type: 'image', src: './Imagens/MilkMoo/Imagens/foto-4.png', alt: '' },
      { type: 'image', src: './Imagens/MilkMoo/Imagens/foto-5.png', alt: '' },
      { type: 'image', src: './Imagens/MilkMoo/Imagens/foto-6.png', alt: '' },
      { 
        type: 'youtube', 
        src: 'https://www.youtube.com/embed/QRz-Wo3-cIs', 
        thumbnail: './Imagens/MilkMoo/Imagens/foto-1.png',
        alt: 'Demonstração do sistema em operação' 
      }
    ],
    tecnologias: ["JavaScript", "HTML5 Canvas", "CSS3", "Bootstrap", "Web Speech API"],
    links: [
      { type: 'github', url: 'https://github.com/duguzin/milkmoo', text: 'Ver código no GitHub' },
      { type: 'demo', url: 'https://milkmoo.demo.com', text: 'Testar demonstração' }
    ],
    features: [
      "Geração de senhas pelo cliente ao escolher o produto",
      "Chamada por voz das senhas no painel do atendente",
      "Exibição em tempo real no painel de TV",
      "Sincronização entre as 3 telas usando apenas LocalStorage",
      "Modo Festa com efeitos visuais",
      "Histórico de senhas chamadas",
      "Simulação completa do fluxo de atendimento (cliente → atendente → TV)"
    ]
  }
};


// Inicializar Swiper
function initSwiper() {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }
  
  swiperInstance = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    }
  });
}

// Abrir modal
document.querySelectorAll(".project-btn").forEach(button => {
  button.addEventListener("click", () => {
    const projetoId = button.dataset.projeto;
    const data = projetos[projetoId];

    if (data) {
      // Configurar modal
      document.getElementById("modal-title").textContent = data.titulo;
      document.getElementById("modal-desc").textContent = data.descricao;
      
      // Configurar mídia
      const mediaContainer = document.getElementById("modal-media");
      const thumbnailsContainer = document.getElementById("modal-thumbnails");
      mediaContainer.innerHTML = "";
      thumbnailsContainer.innerHTML = "";
      
      data.midia.forEach((item, index) => {
  // Slide principal
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  
  if (item.type === 'image') {
    slide.innerHTML = `<img src="${item.src}" alt="${item.alt}" loading="lazy">`;
  } else if (item.type === 'video') {
    const posterAttr = item.poster ? `poster="${item.poster}"` : '';
    slide.innerHTML = `
      <video controls playsinline preload="metadata" ${posterAttr}>
        <source src="${item.src}" type="video/mp4">
        Seu navegador não suporta o elemento de vídeo.
      </video>
    `;
  } else if (item.type === 'youtube') {
    // Renderizar iframe do YouTube
    slide.innerHTML = `
      <div class="youtube-container">
        <iframe 
          width="100%" 
          height="100%" 
          src="${item.src}?rel=0&showinfo=0" 
          title="${item.alt}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    `;
  }
  
  mediaContainer.appendChild(slide);
  
  // Miniaturas
  const thumbnail = document.createElement('div');
  thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
  thumbnail.dataset.index = index;

  let thumbnailContent = '';
  
  if (item.type === 'image') {
    thumbnailContent = `<img src="${item.src}" alt="${item.alt}" loading="lazy">`;
  } else if (item.type === 'video' || item.type === 'youtube') {
    const thumbSrc = item.thumbnail || item.poster || '';
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

      // Configurar tecnologias
      const techTags = document.getElementById("modal-tech-tags");
      techTags.innerHTML = "";
      data.tecnologias.forEach(tech => {
        const tag = document.createElement("span");
        tag.className = "skill-tag";
        tag.textContent = tech;
        techTags.appendChild(tag);
      });
      
      // Configurar links
      const linksContainer = document.getElementById("modal-links");
      linksContainer.innerHTML = "";
      data.links.forEach(link => {
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
      
      // Configurar features
      const featuresContainer = document.getElementById("modal-features");
      featuresContainer.innerHTML = `
        <h4><i class="fas fa-star"></i> Funcionalidades Principais</h4>
        <ul class="feature-list">
          ${data.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      `;
      
      // Abrir modal
      abrirModal();
    }
  });
});

function updateActiveThumbnail(index) {
  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

function abrirModal() {
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  
  // Inicializar Swiper
  setTimeout(() => {
    initSwiper();
    
    // Configurar evento de mudança de slide
    swiperInstance.on('slideChange', function() {
      updateActiveThumbnail(this.activeIndex);
    });
  }, 100);
  
  // Foco no modal para acessibilidade
  modal.setAttribute('tabindex', '-1');
  modal.focus();
}

function fecharModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
  
  // Pausar vídeos
  document.querySelectorAll('#modal-media video').forEach(video => {
    video.pause();
  });
  
  // Destruir Swiper
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

// Eventos para fechar modal
closeModal?.addEventListener("click", fecharModal);
closeModalBtn?.addEventListener("click", fecharModal);

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    fecharModal();
  }
});

// Fechar modal ao clicar fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    fecharModal();
  }
});

// ===== EFETO DE DIGITAÇÃO =====
const typewriterText = document.querySelector('.typewriter p');
const texts = [
  "Desenvolvedor Web & Técnico em Eletrônica",
  "Criando soluções com código e circuitos",
  "Especialista em Flutter & Python",
  "Transformando ideias em realidade"
];

let currentTextIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isPaused = false;

function typeWriter() {
  if (isPaused) return;
  
  const currentText = texts[currentTextIndex];
  
  if (!isDeleting && charIndex < currentText.length) {
    typewriterText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeWriter, 50);
  } else if (isDeleting && charIndex > 0) {
    typewriterText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeWriter, 30);
  } else {
    isDeleting = !isDeleting;
    
    if (!isDeleting) {
      currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
    
    setTimeout(typeWriter, isDeleting ? 1500 : 500);
  }
}

// Pausar animação quando não visível
function handleVisibilityChange() {
  if (document.hidden) {
    isPaused = true;
  } else {
    isPaused = false;
    typeWriter();
  }
}

// ===== ANIMAÇÃO AO ROLAR =====
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

// Observar elementos
document.querySelectorAll('.about-card, .project-card, .contact-card, .hero, .section-header').forEach(el => {
  observer.observe(el);
});

// ===== OTIMIZAÇÕES DE PERFORMANCE =====
function debounce(func, wait) {
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

// ===== AJUSTE DAS FORMAS DE FUNDO =====
function adjustShapes() {
  const shapes = document.querySelectorAll('.shape');
  const width = window.innerWidth;
  
  if (width <= 480) {
    // Telas muito pequenas - esconder algumas formas
    shapes.forEach((shape, index) => {
      if (index >= 3) {
        shape.style.display = 'none';
      } else {
        shape.style.transform = 'scale(0.4)';
      }
    });
  } else if (width <= 768) {
    // Telas pequenas - reduzir tamanho
    shapes.forEach(shape => {
      shape.style.transform = 'scale(0.6)';
      shape.style.display = 'block';
    });
  } else if (width >= 1440) {
    // Telas grandes - aumentar tamanho
    shapes.forEach(shape => {
      shape.style.transform = 'scale(1.2)';
    });
  } else {
    // Telas médias - tamanho normal
    shapes.forEach(shape => {
      shape.style.transform = 'scale(1)';
      shape.style.display = 'block';
    });
  }
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
  // Iniciar animações
  setTimeout(typeWriter, 1000);
  
  // Configurar eventos de scroll
  window.addEventListener('scroll', debounce(() => {
    atualizarLinkAtivo();
    toggleBackToTop();
  }, 10));
  
  // Configurar visibilidade da página
  document.addEventListener('visibilitychange', handleVisibilityChange);
  
  // Detectar redimensionamento
  window.addEventListener('resize', debounce(() => {
    handleResize();
    adjustShapes();
  }, 250));
  
  // Inicializar estado
  atualizarLinkAtivo();
  toggleBackToTop();
  adjustShapes();
  
  // Inicializar links ativos
  document.querySelectorAll('.nav-links a, .mobile-nav-link').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('.nav-links a, .mobile-nav-link').forEach(l => {
        l.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});

// ===== TOUCH SUPPORT =====
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const swipeDistance = touchEndY - touchStartY;
  
  // Swipe para baixo para fechar modal
  if (modal.classList.contains('show') && swipeDistance > swipeThreshold) {
    fecharModal();
  }
}

// ===== CONTADOR DE VISITAS (OPCIONAL) =====
function updateVisitCount() {
  if (!localStorage.getItem('visitCount')) {
    localStorage.setItem('visitCount', '1');
  } else {
    let count = parseInt(localStorage.getItem('visitCount'));
    count++;
    localStorage.setItem('visitCount', count.toString());
  }
}

// Executar ao carregar
updateVisitCount();