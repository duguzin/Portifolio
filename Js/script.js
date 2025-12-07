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








// ===== DUOFLOW GAME - ATUALIZADO =====
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎮 DuoFlow Game carregando...');
  
  // Elementos principais
  const startScreen = document.getElementById('duoflowStart');
  const gameScreen = document.getElementById('duoflowGame');
  const completeScreen = document.getElementById('duoflowComplete');
  
  const startBtn = document.getElementById('startDuoflow');
  const resetBtn = document.getElementById('resetDuoflow');
  const runBothBtn = document.getElementById('runBoth');
  const playAgainBtn = document.getElementById('playAgainDuo');
  const learnBtn = document.getElementById('learnMore');
  
  // Elementos elétricos
  const startElectricBtn = document.getElementById('startElectric');
  const electron = document.getElementById('movingElectron');
  const electricLamp = document.getElementById('electricLamp');
  const electricWire = document.getElementById('electricWire');
  const electricStatus = document.getElementById('electricStatus');
  const wireVisual = document.querySelector('.wire-visual');
  
  // Elementos de código
  const helloBlock = document.getElementById('helloBlock');
  const codeTerminal = document.getElementById('codeTerminal');
  const terminalOutput = document.getElementById('terminalOutput');
  const runCodeBtn = document.getElementById('runCode');
  const codeStatus = document.getElementById('codeStatus');
  
  // Progresso
  const progressSteps = document.querySelectorAll('.progress-step');
  
  // Estado do jogo
  let electricActive = false;
  let codeActive = false;
  let blockUsed = false;
  let electronParticles = [];
  let electronInterval = null;
  
  // ===== FUNÇÕES PRINCIPAIS =====
  
  // Mudar tela
  function showScreen(screenName) {
    document.querySelectorAll('.duoflow-screen').forEach(screen => {
      screen.classList.remove('active');
    });
    
    switch(screenName) {
      case 'start': startScreen.classList.add('active'); break;
      case 'game': gameScreen.classList.add('active'); resetGame(); break;
      case 'complete': completeScreen.classList.add('active'); break;
    }
  }
  
  // Resetar jogo
  function resetGame() {
    console.log('🔄 Resetando jogo...');
    
    // Resetar estado
    electricActive = false;
    codeActive = false;
    blockUsed = false;
    
    // Limpar partículas
    clearElectronParticles();
    
    // Resetar elementos elétricos
    electron.style.left = '-20px';
    electricLamp.classList.remove('lit');
    electricWire.classList.remove('wire-active');
    electricStatus.textContent = 'Aguardando...';
    electricStatus.style.color = '';
    startElectricBtn.disabled = false;
    startElectricBtn.innerHTML = '<i class="fas fa-play"></i> Iniciar Fluxo';
    
    // Resetar elementos de código
    helloBlock.classList.remove('used');
    helloBlock.style.opacity = '1';
    helloBlock.style.transform = '';
    helloBlock.style.transition = '';
    helloBlock.style.display = 'block';
    terminalOutput.innerHTML = `
      <div class="terminal-line">&gt; Sistema pronto...</div>
      <div class="terminal-line">&gt; Aguardando comando...</div>
    `;
    codeTerminal.classList.remove('terminal-active');
    codeStatus.textContent = 'Aguardando código...';
    codeStatus.style.color = '';
    runCodeBtn.disabled = true;
    
    // Resetar progresso
    progressSteps.forEach(step => step.classList.remove('active'));
    progressSteps[0].classList.add('active');
  }
  
  // Criar múltiplas partículas de elétrons
  function createElectronParticle() {
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
    if (electricActive) return;
    
    console.log('⚡ Iniciando fluxo elétrico...');
    electricActive = true;
    startElectricBtn.disabled = true;
    startElectricBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Fluindo...';
    electricStatus.textContent = 'Elétrons fluindo...';
    electricStatus.style.color = '#4CAF50';
    
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
        const lampIcon = electricLamp.querySelector('.part-icon');
        lampIcon.style.animation = 'lampPulse 1s infinite alternate';
        
        electricStatus.textContent = 'Lâmpada acesa!';
        startElectricBtn.innerHTML = '<i class="fas fa-check"></i> Concluído';
        
        // Atualizar progresso
        updateProgress(1);
        checkBothComplete();
      }, 2000);
    }, 4000);
  }
  
  // Executar código
  function executeCode() {
    if (!blockUsed) return;
    
    console.log('💻 Executando código...');
    codeActive = true;
    runCodeBtn.disabled = true;
    runCodeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Executando...';
    codeStatus.textContent = 'Processando...';
    codeStatus.style.color = '#2196F3';
    codeTerminal.classList.add('terminal-active');
    
    const steps = [
      { delay: 1000, text: '&gt; Compilando código...' },
      { delay: 1200, text: '&gt; Inicializando runtime...' },
      { delay: 800, text: '&gt; Executando print()...' },
      { delay: 1000, text: '&gt; Hello World!' }
    ];
    
    let stepIndex = 0;
    
    function executeNextStep() {
      if (stepIndex >= steps.length) {
        setTimeout(() => {
          codeStatus.textContent = 'Hello World impresso!';
          runCodeBtn.innerHTML = '<i class="fas fa-check"></i> Concluído';
          
          // Atualizar progresso
          updateProgress(2);
          checkBothComplete();
        }, 500);
        return;
      }
      
      const step = steps[stepIndex];
      
      setTimeout(() => {
        const newLine = document.createElement('div');
        newLine.className = 'terminal-line';
        
        if (stepIndex === steps.length - 1) {
          // Animar "Hello World!" letra por letra
          newLine.textContent = '&gt; ';
          terminalOutput.appendChild(newLine);
          typeText(newLine, 'Hello World!', 120, () => {
            stepIndex++;
            executeNextStep();
          });
        } else {
          newLine.textContent = step.text;
          newLine.style.animation = 'typing 1.2s steps(20, end)';
          terminalOutput.appendChild(newLine);
          stepIndex++;
          executeNextStep();
        }
        
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }, step.delay);
    }
    
    executeNextStep();
  }
  
  // Efeito de digitação
  function typeText(element, text, speed, callback) {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent = '&gt; ' + text.substring(0, i + 1);
        i++;
      } else {
        clearInterval(typeInterval);
        if (callback) callback();
      }
    }, speed);
  }
  
  // Executar ambos
  function executeBoth() {
    console.log('🎯 Executando ambos...');
    
    startElectricFlow();
    
    if (!blockUsed) {
      useCodeBlock();
      setTimeout(() => {
        executeCode();
      }, 2000);
    } else {
      executeCode();
    }
  }
  
  // Usar bloco de código - AGORA DESAPARECE
  function useCodeBlock() {
    console.log('📦 Usando bloco de código...');
    blockUsed = true;
    helloBlock.classList.add('used');
    
    const terminalRect = codeTerminal.getBoundingClientRect();
    const blockRect = helloBlock.getBoundingClientRect();
    
    // Calcular posição (centro do terminal)
    const finalX = terminalRect.left - blockRect.left + (terminalRect.width / 2) - (blockRect.width / 2);
    const finalY = terminalRect.top - blockRect.top + 30;
    
    // Animação de voo e desaparecimento
    helloBlock.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
    helloBlock.style.transform = `translate(${finalX}px, ${finalY}px) scale(0.5)`;
    helloBlock.style.opacity = '0';
    
    // Esconder completamente após animação
    setTimeout(() => {
      helloBlock.style.display = 'none';
      codeStatus.textContent = 'Bloco carregado no terminal';
      runCodeBtn.disabled = false;
      
      // Feedback visual no terminal
      codeTerminal.style.animation = 'successFlash 0.5s';
      setTimeout(() => {
        codeTerminal.style.animation = '';
      }, 500);
    }, 800);
  }
  
  // Atualizar progresso
  function updateProgress(stepIndex) {
    progressSteps.forEach(step => step.classList.remove('active'));
    for (let i = 0; i <= stepIndex; i++) {
      if (progressSteps[i]) progressSteps[i].classList.add('active');
    }
  }
  
  // Verificar conclusão
  function checkBothComplete() {
    if (electricActive && codeActive) {
      setTimeout(() => {
        showScreen('complete');
      }, 2000);
    }
  }
  
  // ===== EVENT LISTENERS =====
  startBtn.addEventListener('click', () => showScreen('game'));
  resetBtn.addEventListener('click', resetGame);
  runBothBtn.addEventListener('click', executeBoth);
  playAgainBtn.addEventListener('click', () => showScreen('game'));
  
  // No início do JS, adicione:
const learnModal = document.getElementById('learnModal');
const closeLearnModal = document.getElementById('closeLearnModal');
const closeLearnModalBtn = document.getElementById('closeLearnModalBtn');

// Substitua o evento do botão "Aprender Mais":
learnBtn.addEventListener('click', () => {
  learnModal.classList.add('active');
});

// Adicione eventos para fechar o modal:
closeLearnModal.addEventListener('click', () => {
  learnModal.classList.remove('active');
});

closeLearnModalBtn.addEventListener('click', () => {
  learnModal.classList.remove('active');
});

// Fechar modal ao clicar fora
learnModal.addEventListener('click', (e) => {
  if (e.target === learnModal) {
    learnModal.classList.remove('active');
  }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && learnModal.classList.contains('active')) {
    learnModal.classList.remove('active');
  }
});
  
  startElectricBtn.addEventListener('click', startElectricFlow);
  runCodeBtn.addEventListener('click', executeCode);
  
  // ===== DRAG AND DROP =====
  helloBlock.addEventListener('dragstart', (e) => {
    if (!blockUsed) {
      e.dataTransfer.setData('text/plain', 'hello');
    }
  });
  
  // Mobile touch
  let isDragging = false;
  let touchStartX, touchStartY;
  
  helloBlock.addEventListener('touchstart', (e) => {
    if (blockUsed) return;
    e.preventDefault();
    isDragging = true;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  });
  
  document.addEventListener('touchmove', (e) => {
    if (!isDragging || blockUsed) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    
    helloBlock.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    helloBlock.style.transition = 'none';
  });
  
  document.addEventListener('touchend', (e) => {
    if (!isDragging || blockUsed) return;
    
    const touch = e.changedTouches[0];
    const terminalRect = codeTerminal.getBoundingClientRect();
    
    if (touch.clientX >= terminalRect.left &&
        touch.clientX <= terminalRect.right &&
        touch.clientY >= terminalRect.top &&
        touch.clientY <= terminalRect.bottom) {
      useCodeBlock();
    } else {
      helloBlock.style.transition = 'transform 0.3s';
      helloBlock.style.transform = '';
    }
    
    isDragging = false;
  });
  
  // Desktop drag and drop
  codeTerminal.addEventListener('dragover', (e) => {
    if (!blockUsed) {
      e.preventDefault();
      codeTerminal.style.boxShadow = '0 0 15px rgba(33, 150, 243, 0.4)';
    }
  });
  
  codeTerminal.addEventListener('dragleave', () => {
    codeTerminal.style.boxShadow = '';
  });
  
  codeTerminal.addEventListener('drop', (e) => {
    e.preventDefault();
    codeTerminal.style.boxShadow = '';
    if (!blockUsed) {
      useCodeBlock();
    }
  });
  
  // ===== INICIALIZAÇÃO =====
  console.log('✅ DuoFlow Game configurado com sucesso!');
  
  // Adicionar estilos dinâmicos
  const style = document.createElement('style');
  style.textContent = `
    @keyframes successFlash {
      0%, 100% { box-shadow: 0 0 0 rgba(33, 150, 243, 0); }
      50% { box-shadow: 0 0 20px rgba(33, 150, 243, 0.5); }
    }
  `;
  document.head.appendChild(style);
  
  showScreen('start');
});