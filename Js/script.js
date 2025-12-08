// ===== CONFIGURAÇÕES GLOBAIS =====
const config = {
  breakpoints: {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1280
  }
};

// ===== GERENCIAMENTO DE TEMA =====
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
    allowTouchMove: true,
    preventClicks: true,
    preventClicksPropagation: true,
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

// Função para atualizar thumbnail ativa
function updateActiveThumbnail(index) {
  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
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
        
        // Miniaturas
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.dataset.index = index;
        thumbnail.setAttribute('role', 'button');
        thumbnail.setAttribute('tabindex', '0');
        thumbnail.setAttribute('aria-label', `Ver ${item.alt || 'imagem'}`);

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
      
      // Depois de inicializar o Swiper, configurar eventos das thumbnails
      setTimeout(() => {
        // Adicionar evento de clique nas thumbnails
        document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
          thumb.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevenir propagação do clique
            if (swiperInstance) {
              swiperInstance.slideTo(index);
              updateActiveThumbnail(index);
            }
          });
          
          // Suporte para teclado
          thumb.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              if (swiperInstance) {
                swiperInstance.slideTo(index);
                updateActiveThumbnail(index);
              }
            }
          });
        });
        
        // Atualizar thumbnail ativa quando o slide mudar
        if (swiperInstance) {
          swiperInstance.on('slideChange', function() {
            updateActiveThumbnail(this.activeIndex);
          });
        }
      }, 150);
    }
  });
});

// Função para prevenir scroll acidental
function preventScrollPropagation(e) {
  e.stopPropagation();
}

function abrirModal() {
  modal.classList.add("show");
  document.body.classList.add('modal-open');
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  
  // Prevenir scroll dentro do modal (exceto no conteúdo)
  const modalContent = document.querySelector('.modal-content');
  modalContent.addEventListener('wheel', preventScrollPropagation, { passive: false });
  modalContent.addEventListener('touchmove', preventScrollPropagation, { passive: false });
  
  // Prevenir que cliques dentro do modal fechem ele
  modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  
  // Inicializar Swiper
  setTimeout(() => {
    initSwiper();
  }, 100);
  
  // Foco no modal para acessibilidade
  modal.setAttribute('tabindex', '-1');
  modal.focus();
}

function fecharModal() {
  modal.classList.remove("show");
  document.body.classList.remove('modal-open');
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
  
  // Remover event listeners de prevenção
  const modalContent = document.querySelector('.modal-content');
  modalContent.removeEventListener('wheel', preventScrollPropagation);
  modalContent.removeEventListener('touchmove', preventScrollPropagation);
  
  // Pausar vídeos
  document.querySelectorAll('#modal-media video').forEach(video => {
    video.pause();
  });
  
  // Parar vídeos do YouTube
  document.querySelectorAll('#modal-media iframe').forEach(iframe => {
    const src = iframe.src;
    iframe.src = ''; // Parar o vídeo
    setTimeout(() => {
      iframe.src = src.replace('autoplay=1', ''); // Remover autoplay se houver
    }, 100);
  });
  
  // Destruir Swiper
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

// Eventos para fechar modal - apenas nos elementos corretos
closeModal?.addEventListener("click", fecharModal);
closeModalBtn?.addEventListener("click", fecharModal);

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    fecharModal();
  }
});

// Fechar modal ao clicar fora (apenas no overlay)
modal.addEventListener("click", (e) => {
  // Só fechar se clicar diretamente no overlay (background escuro)
  // e não em nenhum elemento filho
  if (e.target === modal) {
    fecharModal();
  }
});

// Prevenir que cliques dentro do carrossel fechem o modal
document.querySelectorAll('.swiper-container, .swiper-slide, .swiper-wrapper, .media-carousel, .media-thumbnails').forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// ===== EFETO DE DIGITAÇÃO =====
const typewriterText = document.querySelector('.typewriter p');
const texts = [
  "Técnico em Desenvolvimento de Sistemas",
  "Eletricista de Manutenção Eletroeletrônica",
  "Criando soluções com código e circuitos",
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

// ===== TOUCH SUPPORT ATUALIZADO =====
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  touchEndY = e.changedTouches[0].screenY;
  
  // Só processar swipe se o modal estiver aberto
  if (modal.classList.contains('show')) {
    const swipeThreshold = 100; // Aumentei o threshold para evitar fechamento acidental
    const swipeDistance = touchEndY - touchStartY;
    
    // Verificar se é um swipe para baixo significativo
    // e se o conteúdo do modal não está scrolável ou está no topo
    const modalContent = document.querySelector('.modal-content');
    const isAtTop = modalContent.scrollTop === 0;
    
    if (swipeDistance > swipeThreshold && isAtTop) {
      fecharModal();
    }
  }
}, { passive: true });

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

// ===== BOTÃO DE VOLTAR AO TOPO DO FOOTER =====
const footerBackToTop = document.getElementById('footerBackToTop');

if (footerBackToTop) {
  footerBackToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Mostrar/ocultar botão baseado no scroll
  window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 500) {
      footerBackToTop.style.opacity = '1';
      footerBackToTop.style.visibility = 'visible';
      footerBackToTop.style.transform = 'translateY(0)';
    } else {
      footerBackToTop.style.opacity = '0';
      footerBackToTop.style.visibility = 'hidden';
      footerBackToTop.style.transform = 'translateY(20px)';
    }
  }, 10));

  // Estado inicial
  footerBackToTop.style.transition = 'all 0.3s ease';
  footerBackToTop.style.opacity = '0';
  footerBackToTop.style.visibility = 'hidden';
  footerBackToTop.style.transform = 'translateY(20px)';
}

// ===== ANIMAÇÃO DE ENTRADA DOS ELEMENTOS DO FOOTER =====
function animateFooterElements() {
  const footerElements = document.querySelectorAll('.footer-column, .tech-badge, .social-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, index * 100); // Delay escalonado
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

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  animateFooterElements();
});



// ===== DUOFLOW - CONTROLE DE ETAPAS =====

document.addEventListener('DOMContentLoaded', function() {
  console.log('DuoFlow iniciando...');
  
  // Elementos principais
  const startScreen = document.getElementById('duoflowStart');
  const gameScreen = document.getElementById('duoflowGame');
  const completeScreen = document.getElementById('duoflowComplete');
  const startButton = document.getElementById('startDuoflow');
  const runBothButton = document.getElementById('runBoth');
  const resetButton = document.getElementById('resetDuoflow');
  const playAgainButton = document.getElementById('playAgainDuo');
  const electricButton = document.getElementById('startElectric');
  const runCodeButton = document.getElementById('runCode');
  const helloBlock = document.getElementById('helloBlock');
  const codeTerminal = document.getElementById('codeTerminal');
  
  // Variáveis de estado
  let electricCompleted = false;
  let codeCompleted = false;
  let isRunningBoth = false;
  let electricRunning = false;
  let codeRunning = false;
  
  // Variáveis para sistema de partículas
  let electronInterval = null;
  let electronParticles = [];
  let electricActive = false;
  
  // ===== FUNÇÕES DE CONTROLE DE TELAS =====
  
  function showScreen(screen) {
    console.log('Mostrando tela:', screen.id);
    
    // Esconde todas as telas
    document.querySelectorAll('.duoflow-screen').forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none';
    });
    
    // Mostra a tela solicitada
    screen.style.display = 'block';
    setTimeout(() => {
      screen.classList.add('active');
    }, 50);
    
    // Debug: verificar estado
    console.log('Estado atual: start=', startScreen.classList.contains('active'), 
                'game=', gameScreen.classList.contains('active'),
                'complete=', completeScreen.classList.contains('active'));
  }
  
  // ===== FUNÇÃO PARA SCROLLAR PARA OS CARDS =====
  
  function scrollToSimulationCards() {
    console.log('Scroll para cards de simulação...');
    
    // Garantir que estamos na tela do jogo
    if (!gameScreen.classList.contains('active')) {
      console.log('Não está na tela do jogo, mudando...');
      showScreen(gameScreen);
    }
    
    // Pequeno delay para DOM se atualizar
    setTimeout(() => {
      // Encontrar os containers de fluxo
      const flowContainers = document.querySelectorAll('.flow-container');
      
      if (flowContainers.length > 0) {
        console.log('Encontrei', flowContainers.length, 'containers de fluxo');
        
        // Scroll para o primeiro container
        flowContainers[0].scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
        
        // Highlight visual
        flowContainers.forEach(container => {
          container.style.boxShadow = '0 0 30px rgba(var(--primary-rgb), 0.4)';
          setTimeout(() => {
            container.style.boxShadow = '';
          }, 1500);
        });
        
      } else {
        console.log('Não encontrei containers, tentando o main...');
        // Fallback para o container principal
        const mainContainer = document.querySelector('.duoflow-main');
        if (mainContainer) {
          mainContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, 100);
  }
  
  // ===== INICIALIZAÇÃO =====
  
  function initializeGame() {
    console.log('Inicializando DuoFlow...');
    
    // Mostrar apenas a tela inicial
    showScreen(startScreen);
    
    // Garantir que as outras telas estejam escondidas
    gameScreen.style.display = 'none';
    gameScreen.classList.remove('active');
    completeScreen.style.display = 'none';
    completeScreen.classList.remove('active');
    
    // Resetar estado
    resetGameState();
  }
  
  // Inicializar o jogo
  initializeGame();
  
  // ===== EVENT LISTENERS =====
  
  // 1. Botão "Ver Paralelo"
  startButton.addEventListener('click', function() {
    console.log('--- Ver Paralelo clicado ---');
    showScreen(gameScreen);
    resetGameState();
    animateGameStart();
    
    // Scroll em mobile
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        gameScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  });
  
  // 2. Botão "Reiniciar"
  resetButton.addEventListener('click', function() {
    console.log('--- Reiniciar clicado ---');
    initializeGame();
  });
  
  // 3. Botão "Executar Ambos" - SCROLL + SIMULAÇÕES
  runBothButton.addEventListener('click', function() {
    console.log('--- Executar Ambos clicado ---');
    
    isRunningBoth = true;
    
    // Primeiro scroll para os cards
    scrollToSimulationCards();
    
    // Feedback visual
    runBothButton.disabled = true;
    const originalText = runBothButton.innerHTML;
    runBothButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Executando...';
    
    // Delay para scroll completar, depois executar
    setTimeout(() => {
      console.log('Iniciando simulações...');
      
      // Executar elétrico primeiro
      if (!electricRunning && !electricCompleted) {
        startElectricFlow();
      }
      
      // Executar código depois de um delay
      setTimeout(() => {
        if (!codeRunning && !codeCompleted) {
          // Primeiro simular drag & drop do bloco
          simulateCodeBlockDrop();
          
          // Depois executar o código
          setTimeout(() => {
            runCodeFlow();
          }, 800);
        }
      }, 1000);
      
      // Restaurar botão depois de um tempo
      setTimeout(() => {
        runBothButton.disabled = false;
        runBothButton.innerHTML = originalText;
        isRunningBoth = false;
      }, 3000);
      
    }, 800); // Tempo para scroll completar
  });
  
  // 4. Botão "Iniciar Fluxo" individual
  electricButton.addEventListener('click', function() {
    console.log('--- Iniciar Fluxo Elétrico clicado ---');
    if (!electricRunning && !electricCompleted) {
      startElectricFlow();
    }
  });
  
  // 5. Botão "Executar Código" individual
  runCodeButton.addEventListener('click', function() {
    console.log('--- Executar Código clicado ---');
    if (!codeRunning && !codeCompleted) {
      runCodeFlow();
    }
  });
  
  // 6. Botão "Ver Novamente"
  playAgainButton.addEventListener('click', function() {
    console.log('--- Ver Novamente clicado ---');
    initializeGame();
  });
  
  // 7. Botão "Aprender Mais"
  document.getElementById('learnMore')?.addEventListener('click', function() {
    console.log('--- Aprender Mais clicado ---');
    document.getElementById('learnModal').classList.add('active');
  });
  
  // 8. Botões para fechar modal
  document.getElementById('closeLearnModal')?.addEventListener('click', function() {
    document.getElementById('learnModal').classList.remove('active');
  });
  
  document.getElementById('closeLearnModalBtn')?.addEventListener('click', function() {
    document.getElementById('learnModal').classList.remove('active');
  });
  
  // ===== NOVAS FUNÇÕES DO FLUXO ELÉTRICO COM MÚLTIPLOS ELÉTRONS =====
  
  // Criar múltiplas partículas de elétrons
  function createElectronParticle() {
    const wireVisual = document.getElementById('electricWire');
    if (!wireVisual) return null;
    
    const particle = document.createElement('div');
    particle.className = 'electron-particle';
    particle.innerHTML = '⚡';
    
    // Posição aleatória no eixo Y
    const randomY = Math.random() * 20 - 10;
    particle.style.top = `calc(50% + ${randomY}px)`;
    particle.style.left = '-20px';
    
    // Tamanho aleatório
    const size = 0.7 + Math.random() * 0.6;
    particle.style.fontSize = `${size}rem`;
    
    // Opacidade aleatória
    particle.style.opacity = (0.5 + Math.random() * 0.5).toString();
    
    // Atraso aleatório para animação
    const delay = Math.random() * 0.5;
    
    wireVisual.appendChild(particle);
    electronParticles.push(particle);
    
    // Animar partícula
    animateElectronParticle(particle, delay);
    
    return particle;
  }
  
  // Animar partícula de elétron
  function animateElectronParticle(particle, delay = 0) {
    const wireVisual = document.getElementById('electricWire');
    if (!wireVisual) return;
    
    setTimeout(() => {
      const duration = 2000 + Math.random() * 2000; // 2-4 segundos
      const startTime = Date.now();
      const wireWidth = wireVisual.offsetWidth;
      
      function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Movimento com easing
        const easedProgress = 1 - Math.pow(1 - progress, 2);
        const position = -20 + easedProgress * (wireWidth + 40);
        
        // Efeito de oscilação
        const oscillation = Math.sin(progress * Math.PI * 8) * 3;
        
        particle.style.left = `${position}px`;
        particle.style.transform = `translateY(-50%) translateY(${oscillation}px)`;
        particle.style.opacity = (0.8 * (1 - progress * 0.7)).toString();
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Remover partícula
          particle.remove();
          electronParticles = electronParticles.filter(p => p !== particle);
        }
      }
      
      requestAnimationFrame(animate);
    }, delay * 1000);
  }
  
  // Limpar partículas
  function clearElectronParticles() {
    electronParticles.forEach(particle => particle.remove());
    electronParticles = [];
    if (electronInterval) {
      clearInterval(electronInterval);
      electronInterval = null;
    }
  }
  
  // Iniciar fluxo elétrico com MÚLTIPLOS elétrons
  function startElectricFlow() {
    if (electricActive || electricRunning || electricCompleted) return;
    
    console.log('⚡ Iniciando fluxo elétrico com múltiplos elétrons...');
    electricActive = true;
    electricRunning = true;
    
    const electricWire = document.getElementById('electricWire');
    const electricLamp = document.getElementById('electricLamp');
    const electricStatus = document.getElementById('electricStatus');
    
    // Atualizar status
    electricStatus.textContent = 'Fluxo iniciado...';
    electricButton.disabled = true;
    electricButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Fluindo...';
    
    // Ativar visual do fio
    electricWire.classList.add('wire-active');
    
    // Criar MUITAS partículas de elétrons
    electronInterval = setInterval(() => {
      // Criar 3-5 partículas por ciclo
      const count = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
        createElectronParticle();
      }
    }, 300); // Novos elétrons a cada 300ms
    
    // Parar criação após 4 segundos e acender lâmpada
    setTimeout(() => {
      clearInterval(electronInterval);
      electronInterval = null;
      
      // Esperar últimas partículas chegarem
      setTimeout(() => {
        // Acender lâmpada
        electricLamp.classList.add('lit');
        
        // Efeito de brilho
        electricLamp.style.animation = 'lampPulse 1.5s infinite alternate';
        
        // Atualizar status
        electricStatus.textContent = 'Lâmpada acesa!';
        electricStatus.style.color = '#4CAF50';
        electricButton.innerHTML = '<i class="fas fa-check"></i> Concluído';
        
        // Marcar como completado
        electricCompleted = true;
        electricRunning = false;
        electricActive = false;
        
        console.log('Fluxo elétrico COMPLETADO com múltiplos elétrons');
        
        // Atualizar progresso
        updateProgress(1);
        
        // Verificar conclusão
        checkBothCompleted();
      }, 2000);
    }, 4000);
  }
  
  // ===== FUNÇÕES DO FLUXO DE CÓDIGO =====
  
  function simulateCodeBlockDrop() {
    console.log('Simulando drag & drop do bloco de código...');
    
    // Se o bloco ainda não foi usado
    if (!helloBlock.classList.contains('used')) {
      // Marcar como usado
      helloBlock.classList.add('used');
      helloBlock.style.cursor = 'default';
      
      // Ativar botão Executar
      runCodeButton.disabled = false;
      
      // Atualizar status
      const codeStatus = document.getElementById('codeStatus');
      codeStatus.textContent = 'Código pronto para executar!';
      codeStatus.style.color = '#FF9800';
      
      // Feedback visual no terminal
      codeTerminal.classList.add('drop-success');
      setTimeout(() => {
        codeTerminal.classList.remove('drop-success');
      }, 500);
    }
  }
  
  function runCodeFlow() {
    if (codeRunning || codeCompleted) return;
    
    console.log('Iniciando execução de código...');
    codeRunning = true;
    runCodeButton.disabled = true;
    
    const terminalOutput = document.getElementById('terminalOutput');
    const inputText = document.getElementById('inputText');
    const codeStatus = document.getElementById('codeStatus');
    
    // Atualizar status
    codeStatus.textContent = 'Executando código...';
    runCodeButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Executando...';
    
    // Ativar terminal
    codeTerminal.classList.add('terminal-active');
    
    // Mostrar comando
    inputText.textContent = 'print("Hello World")';
    
    // Simular execução
    setTimeout(() => {
      // Adicionar resultado
      const resultLine = document.createElement('div');
      resultLine.className = 'terminal-line';
      resultLine.textContent = 'Hello World';
      resultLine.style.color = '#4CAF50';
      resultLine.style.fontWeight = 'bold';
      resultLine.style.fontSize = '1.1em';
      
      terminalOutput.appendChild(resultLine);
      
      // Scroll no terminal
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      
      // MANTER O HELLO WORLD POR 10 SEGUNDOS ANTES DE ATUALIZAR STATUS
      setTimeout(() => {
        inputText.textContent = '_';
        
        // Atualizar status
        codeStatus.textContent = 'Código executado!';
        codeStatus.style.color = '#2196F3';
        runCodeButton.innerHTML = '<i class="fas fa-check"></i> Concluído';
        
        // Marcar como completado
        codeCompleted = true;
        codeRunning = false;
        
        console.log('Código COMPLETADO');
        
        // Atualizar progresso
        updateProgress(2);
        
        // Verificar conclusão
        checkBothCompleted();
      }, 10000); // AUMENTADO PARA 10 SEGUNDOS
    }, 1000);
  }
  
  // ===== FUNÇÕES AUXILIARES =====
  
  function resetGameState() {
    console.log('Resetando estado do jogo...');
    
    // Resetar variáveis
    electricCompleted = false;
    codeCompleted = false;
    isRunningBoth = false;
    electricRunning = false;
    codeRunning = false;
    electricActive = false;
    
    // Limpar partículas de elétrons
    clearElectronParticles();
    
    // Resetar elementos elétricos
    const electricWire = document.getElementById('electricWire');
    const electricLamp = document.getElementById('electricLamp');
    const electricStatus = document.getElementById('electricStatus');
    
    if (electricWire) {
      electricWire.classList.remove('wire-active');
      // Limpar partículas
      const particles = electricWire.querySelectorAll('.electron-particle');
      particles.forEach(p => p.remove());
    }
    if (electricLamp) {
      electricLamp.classList.remove('lit');
      electricLamp.style.animation = '';
    }
    if (electricStatus) {
      electricStatus.textContent = 'Aguardando...';
      electricStatus.style.color = '';
    }
    
    // Resetar botão elétrico
    if (electricButton) {
      electricButton.disabled = false;
      electricButton.innerHTML = '<i class="fas fa-play"></i> Iniciar Fluxo';
    }
    
    // Resetar elementos de código
    const terminalOutput = document.getElementById('terminalOutput');
    const inputText = document.getElementById('inputText');
    const codeStatus = document.getElementById('codeStatus');
    
    if (codeTerminal) {
      codeTerminal.classList.remove('terminal-active');
      codeTerminal.classList.remove('drop-success');
    }
    if (terminalOutput) {
      // Manter apenas as duas primeiras linhas
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
    if (runCodeButton) {
      runCodeButton.disabled = true;
      runCodeButton.innerHTML = '<i class="fas fa-play-circle"></i> Executar';
    }
    
    // Resetar bloco de código
    if (helloBlock) {
      helloBlock.classList.remove('used');
      helloBlock.style.cursor = 'grab';
    }
    
    // Resetar botão Executar Ambos
    if (runBothButton) {
      runBothButton.disabled = false;
      runBothButton.innerHTML = '<i class="fas fa-play"></i> Executar Ambos';
    }
    
    // Resetar progresso
    updateProgress(0);
  }
  
  function updateProgress(step) {
    const progressSteps = document.querySelectorAll('.progress-step');
    
    // Remover active de todos
    progressSteps.forEach(stepEl => {
      stepEl.classList.remove('active');
    });
    
    // Ativar até o passo atual
    for (let i = 0; i <= step; i++) {
      if (progressSteps[i]) {
        progressSteps[i].classList.add('active');
      }
    }
    
    console.log('Progresso atualizado para passo:', step);
  }
  
  // FUNÇÃO CRÍTICA: Só mostra conclusão se AMBOS completarem
  function checkBothCompleted() {
    console.log('Verificando conclusão. Elétrico:', electricCompleted, 'Código:', codeCompleted);
    
    if (electricCompleted && codeCompleted) {
      console.log('AMBOS COMPLETOS! Mostrando tela de conclusão...');
      
      // Atualizar progresso final
      updateProgress(3);
      
      // Delay para mostrar conclusão
      setTimeout(() => {
        showScreen(completeScreen);
        animateSuccessScreen();
        
        console.log('Tela de conclusão mostrada!');
        
        // Scroll em mobile
        if (window.innerWidth <= 768) {
          setTimeout(() => {
            completeScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
      }, 1500);
    } else {
      console.log('Ainda não completou ambos. Aguardando...');
    }
  }
  
  function animateGameStart() {
    console.log('Animando início do jogo...');
    
    // Animar entrada dos containers
    const flowContainers = document.querySelectorAll('.flow-container');
    flowContainers.forEach((container, index) => {
      setTimeout(() => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          container.style.opacity = '1';
          container.style.transform = 'translateY(0)';
          container.style.transition = 'all 0.5s ease';
        }, 100);
      }, index * 200);
    });
    
    updateProgress(0);
  }
  
  function animateSuccessScreen() {
    console.log('Animando tela de sucesso...');
    
    // Animar ícones
    const successIcons = document.querySelectorAll('.success-icon');
    successIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.transform = 'scale(0)';
        icon.style.opacity = '0';
        
        setTimeout(() => {
          icon.style.transform = 'scale(1)';
          icon.style.opacity = '1';
          icon.style.transition = 'all 0.5s ease';
        }, 100);
      }, index * 300);
    });
    
    // Animar cards de insight
    const insightCards = document.querySelectorAll('.insight-card');
    insightCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          card.style.transition = 'all 0.5s ease';
        }, 100);
      }, 600 + (index * 200));
    });
  }
  
  // ===== DRAG & DROP =====
  
  if (helloBlock && codeTerminal) {
    helloBlock.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/plain', 'helloBlock');
      this.classList.add('dragging');
    });
    
    helloBlock.addEventListener('dragend', function() {
      this.classList.remove('dragging');
    });
    
    codeTerminal.addEventListener('dragover', function(e) {
      e.preventDefault();
      this.classList.add('drop-success');
    });
    
    codeTerminal.addEventListener('dragleave', function() {
      this.classList.remove('drop-success');
    });
    
    codeTerminal.addEventListener('drop', function(e) {
      e.preventDefault();
      this.classList.remove('drop-success');
      
      // Ativar botão Executar
      runCodeButton.disabled = false;
      
      // Marcar bloco como usado
      helloBlock.classList.add('used');
      helloBlock.style.cursor = 'default';
      
      // Atualizar status
      const codeStatus = document.getElementById('codeStatus');
      codeStatus.textContent = 'Código pronto para executar!';
      codeStatus.style.color = '#FF9800';
      
      console.log('Bloco arrastado para o terminal!');
    });
  }
  
  // ===== TOUCH SUPPORT CORRIGIDO =====
  
  if ('ontouchstart' in window && helloBlock && codeTerminal) {
    let touchStartX = 0;
    let touchStartY = 0;
    let isDragging = false;
    let initialScrollY = 0;
    
    helloBlock.addEventListener('touchstart', function(e) {
      if (this.classList.contains('used')) return;
      
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isDragging = false;
      initialScrollY = window.scrollY;
      
      this.style.transform = 'scale(0.95)';
      
      // PREVINE SCROLL DA PÁGINA DURANTE DRAG
      e.preventDefault();
      
      // Adiciona classe que previne scroll
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    }, { passive: false });
    
    helloBlock.addEventListener('touchmove', function(e) {
      if (this.classList.contains('used')) return;
      
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      
      if (Math.abs(touchX - touchStartX) > 10 || Math.abs(touchY - touchStartY) > 10) {
        isDragging = true;
        this.style.opacity = '0.7';
        this.style.transform = 'translate(' + (touchX - touchStartX) + 'px, ' + (touchY - touchStartY) + 'px) scale(0.95)';
        
        // Mantém a posição do scroll fixa
        window.scrollTo(0, initialScrollY);
        
        // Previne o scroll da página
        e.preventDefault();
      }
    }, { passive: false });
    
    helloBlock.addEventListener('touchend', function(e) {
      if (!isDragging || this.classList.contains('used')) return;
      
      const terminalRect = codeTerminal.getBoundingClientRect();
      const touchX = e.changedTouches[0].clientX;
      const touchY = e.changedTouches[0].clientY;
      
      if (touchX >= terminalRect.left && touchX <= terminalRect.right &&
          touchY >= terminalRect.top && touchY <= terminalRect.bottom) {
        
        runCodeButton.disabled = false;
        helloBlock.classList.add('used');
        helloBlock.style.cursor = 'default';
        
        const codeStatus = document.getElementById('codeStatus');
        codeStatus.textContent = 'Código pronto para executar!';
        codeStatus.style.color = '#FF9800';
        
        codeTerminal.classList.add('drop-success');
        setTimeout(() => {
          codeTerminal.classList.remove('drop-success');
        }, 500);
      }
      
      this.style.opacity = '';
      this.style.transform = '';
      
      // RESTAURA SCROLL DA PÁGINA
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    });
    
    // Previne scroll acidental quando tocar no bloco
    helloBlock.addEventListener('touchmove', function(e) {
      if (isDragging) {
        e.preventDefault();
      }
    }, { passive: false });
  }
  
  // ===== DEBUG =====
  
  console.log('DuoFlow carregado com sucesso!');
  
  // Expor funções para debug
  window.duoflowDebug = {
    reset: () => resetGameState(),
    runElectric: () => startElectricFlow(),
    runCode: () => runCodeFlow(),
    showStart: () => showScreen(startScreen),
    showGame: () => showScreen(gameScreen),
    showComplete: () => showScreen(completeScreen),
    scrollToCards: () => scrollToSimulationCards(),
    clearParticles: () => clearElectronParticles(),
    createParticle: () => createElectronParticle(),
    checkState: () => {
      console.log('Estado atual:');
      console.log('- Elétrico completo:', electricCompleted);
      console.log('- Código completo:', codeCompleted);
      console.log('- Executando ambos:', isRunningBoth);
      console.log('- Partículas ativas:', electronParticles.length);
    }
  };
});