// Tema
const toggleButton = document.getElementById('tema-toggle');
const body = document.body;

// Verificar tema salvo
if (localStorage.getItem("tema") === "escuro") {
  body.classList.add("tema-escuro");
  toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
}

// Alternar tema
toggleButton.addEventListener("click", () => {
  body.classList.toggle("tema-escuro");

  if (body.classList.contains("tema-escuro")) {
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("tema", "escuro");
  } else {
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("tema", "claro");
  }
});

// Dados dos projetos (expandido com novos projetos)
const projetos = {
  regador: {
    titulo: "Regador Automático",
    descricao: "O CultivaMais integra soluções de tecnologia rural, como um sistema de regador automático com sensor de umidade do solo, criado para auxiliar os produtores no manejo da irrigação. Esse sistema utiliza sensores para monitorar a umidade do solo em tempo real e, caso detecte um nível baixo, ativa automaticamente o regador. Todas as informações são exibidas no painel do agricultor dentro da plataforma, permitindo um controle mais inteligente e eficiente da irrigação — economizando água e melhorando a produtividade. Com essa integração entre e-commerce e IoT, o CultivaMais vai além das vendas, oferecendo suporte prático para o dia a dia no campo e contribuindo para uma agricultura mais tecnológica, sustentável e acessível.",
    midia: [
      { type: 'image', src: 'Imagens/Card-1/Imagens/foto-regador-1.jpeg', alt: 'Prototipo fisico' },
      { type: 'video', src: 'Imagens/Card-1/Videos/video-1.mp4', alt: 'Prototipo fisico' },
      { type: 'video', src: 'Imagens/Card-1/Videos/video-1.mp4', alt: 'Interface do painel' }
    ],
    tecnologias: ["ESP32", "C++", "IoT", "Sensores", "Automação"],
    links: [
      { type: 'github', url: 'https://github.com/seuuser/regador-automatico', text: 'Código no GitHub' }
    ],
    features: [
      "Monitoramento em tempo real da umidade do solo",
      "Ativação automática do sistema de irrigação",
      "Painel web para visualização dos dados",
      "Configuração de limites personalizados",
      "Histórico de atividades e alertas"
    ]
  },
  cultivamais: {
    titulo: "CultivaMais",
    descricao: "CultivaMais é um e-commerce desenvolvido para conectar consumidores diretamente a agricultores locais, promovendo uma compra sem intermediação. A plataforma permite que produtores criem e administrem sua própria loja online por meio de um painel completo, onde podem gerenciar seu catálogo de produtos, acompanhar pedidos e atualizar informações de forma simples e eficiente. O projeto valoriza a agricultura local, facilita o acesso a alimentos frescos e contribui para uma economia mais justa e sustentável.",
    midia: [
      { type: 'image', src: 'Imagens/cultivamais-1.jpg', alt: 'Página inicial' },
      { type: 'image', src: 'Imagens/cultivamais-2.jpg', alt: 'Painel do agricultor' },
      { type: 'image', src: 'Imagens/cultivamais-3.jpg', alt: 'Carrinho de compras' }
    ],
    tecnologias: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "E-commerce"],
    links: [
      { type: 'demo', url: 'https://cultivamais.demo.com', text: 'Ver Demo Online' },
      { type: 'github', url: 'https://github.com/seuuser/cultivamais', text: 'Código no GitHub' }
    ],
    features: [
      "Loja online personalizada para cada agricultor",
      "Sistema de pedidos e pagamentos integrado",
      "Painel administrativo completo",
      "Avaliação e feedback de produtos",
      "Sistema de busca e filtros avançados"
    ]
  },
  guia360: {
    titulo: "Guia360",
    descricao: "O site Guia360 é uma plataforma educacional desenvolvida para auxiliar estudantes na preparação para o ENEM e outros vestibulares. Ele oferece uma variedade de recursos gratuitos, incluindo apostilas em PDF, provas anteriores, simulados, cronogramas de estudo, materiais de revisão e informações sobre notas de corte. Além disso, o site promove uma comunidade colaborativa, incentivando a interação entre estudantes e mentores para um aprendizado mais eficaz. A interface do Guia360 é organizada e intuitiva, facilitando o acesso aos materiais e ferramentas disponíveis. Com uma abordagem motivacional e estratégica, a plataforma visa transformar a jornada de estudos em uma experiência produtiva e enriquecedora, proporcionando suporte contínuo aos usuários.",
    midia: [
      { type: 'image', src: 'Imagens/guia360-1.jpg', alt: 'Homepage do Guia360' },
      { type: 'image', src: 'Imagens/guia360-2.jpg', alt: 'Materiais de estudo' },
      { type: 'image', src: 'Imagens/guia360-3.jpg', alt: 'Simulados online' }
    ],
    tecnologias: ["Web Design", "JavaScript", "Educação", "UI/UX", "Responsivo"],
    links: [
      { type: 'demo', url: 'https://guia360.demo.com', text: 'Acessar Plataforma' },
      { type: 'github', url: 'https://github.com/seuuser/guia360', text: 'Ver Código' }
    ],
    features: [
      "Biblioteca completa de materiais de estudo",
      "Simulados online com correção automática",
      "Comunidade de estudantes e mentores",
      "Cronograma personalizado de estudos",
      "Acompanhamento de progresso e desempenho"
    ]
  },
  fitbattle: {
    titulo: "FitBattle",
    descricao: "FitBattle é um aplicativo mobile gamificado desenvolvido em Flutter/Dart com backend no Firebase. O app transforma a prática de exercícios físicos em uma aventura medieval, onde os usuários enfrentam desafios, acumulam pontos, sobem de nível e competem com amigos. Com uma interface imersiva e elementos de RPG, o FitBattle torna a rotina de exercícios divertida e motivadora, incentivando a consistência através de recompensas, conquistas e batalhas épicas.",
    midia: [
      { type: 'image', src: 'Imagens/fitbattle-1.jpg', alt: 'Tela inicial do app' },
      { type: 'image', src: 'Imagens/fitbattle-2.jpg', alt: 'Desafios diários' },
      { type: 'image', src: 'Imagens/fitbattle-3.jpg', alt: 'Perfil do usuário' },
      { type: 'video', src: 'videos/fitbattle-demo.mp4', alt: 'Demonstração do app' }
    ],
    tecnologias: ["Flutter", "Dart", "Firebase", "Mobile", "Gamificação"],
    links: [
      { type: 'demo', url: 'https://play.google.com/store/apps/details?id=com.fitbattle', text: 'Baixar no Play Store' },
      { type: 'github', url: 'https://github.com/seuuser/fitbattle', text: 'Código no GitHub' }
    ],
    features: [
      "Sistema de gamificação com temática medieval",
      "Desafios diários e semanais personalizados",
      "Competição multiplayer com ranking global",
      "Rastreamento de atividades e progresso",
      "Recompensas, conquistas e sistema de níveis",
      "Integração com wearables e sensores"
    ]
  },
  bancodigital: {
    titulo: "Banco Digital Python",
    descricao: "Sistema bancário digital completo desenvolvido do zero com back-end em Python (Flask) e front-end em HTML, CSS e JavaScript. Este projeto simula operações bancárias reais com funcionalidades como cadastro/login de usuários, saques, depósitos, transferências entre contas e visualização de extrato. A arquitetura implementa uma API REST para comunicação entre front-end e back-end, com armazenamento de dados em JSON para simulação de banco de dados.",
    midia: [
      { type: 'image', src: 'Imagens/banco-1.jpg', alt: 'Tela de login' },
      { type: 'image', src: 'Imagens/banco-2.jpg', alt: 'Dashboard principal' },
      { type: 'image', src: 'Imagens/banco-3.jpg', alt: 'Transferências' },
      { type: 'video', src: 'videos/banco-demo.mp4', alt: 'Demonstração completa' }
    ],
    tecnologias: ["Python", "Flask", "JavaScript", "API REST", "JSON", "HTML/CSS"],
    links: [
      { type: 'demo', url: 'https://bancodigital.demo.com', text: 'Testar Sistema Online' },
      { type: 'github', url: 'https://github.com/seuuser/bancodigital-python', text: 'Código Completo' }
    ],
    features: [
      "Cadastro e autenticação segura de usuários",
      "Operações bancárias: saque, depósito, transferência",
      "Extrato detalhado com histórico de transações",
      "Interface responsiva e amigável",
      "API REST documentada",
      "Sessão mantida com LocalStorage",
      "Simulação realista de banco de dados"
    ]
  },
  milkmoo: {
    titulo: "MilkMoo - Sistema de Atendimento",
    descricao: "Sistema triplo de atendimento desenvolvido como projeto de faculdade para uma sorveteria fictícia. O projeto inclui 3 interfaces integradas que se comunicam em tempo real via LocalStorage: 1) Interface do Cliente para gerar senhas, 2) Painel do Atendente para gerenciar fila com voz sintetizada, e 3) Display público em TV para visualização em tempo real. Sistema 100% frontend com recursos avançados como Web Speech API e Canvas API.",
    midia: [
      { type: 'image', src: 'Imagens/milkmoo-1.jpg', alt: 'Interface do cliente' },
      { type: 'image', src: 'Imagens/milkmoo-2.jpg', alt: 'Painel do atendente' },
      { type: 'image', src: 'Imagens/milkmoo-3.jpg', alt: 'Display público TV' },
      { type: 'video', src: 'videos/milkmoo-demo.mp4', alt: 'Funcionamento completo' },
      { type: 'iframe', src: 'https://www.youtube.com/embed/VIDEO_ID', alt: 'Vídeo explicativo' }
    ],
    tecnologias: ["JavaScript", "Bootstrap 5", "Web Speech API", "Canvas API", "LocalStorage"],
    links: [
      { type: 'demo', url: 'https://milkmoo-cliente.demo.com', text: 'Cliente - Fazer Pedido' },
      { type: 'demo', url: 'https://milkmoo-atendente.demo.com', text: 'Atendente - Gerenciar Fila' },
      { type: 'demo', url: 'https://milkmoo-tv.demo.com', text: 'TV - Display Público' },
      { type: 'github', url: 'https://github.com/seuuser/milkmoo', text: 'Repositório GitHub' }
    ],
    features: [
      "3 interfaces integradas em tempo real",
      "Geração de senhas com código QR",
      "Sistema de chamada por voz (Web Speech API)",
      "Display público com animações Canvas",
      "Modo Festa com efeitos visuais especiais",
      "Estatísticas em tempo real",
      "Design cartoon responsivo",
      "Comunicação via LocalStorage"
    ]
  }
};

// Variáveis globais
let swiperInstance = null;

// Inicializar carrossel Swiper
function initSwiper() {
  swiperInstance = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

// Abrir modal aprimorado
document.querySelectorAll(".project-btn").forEach(button => {
  button.addEventListener("click", () => {
    const projetoId = button.dataset.projeto;
    const data = projetos[projetoId];

    if (data) {
      // Limpar conteúdo anterior
      document.getElementById("modal-title").textContent = data.titulo;
      document.getElementById("modal-desc").textContent = data.descricao;
      
      // Limpar mídia anterior
      const mediaContainer = document.getElementById("modal-media");
      const thumbnailsContainer = document.getElementById("modal-thumbnails");
      mediaContainer.innerHTML = "";
      thumbnailsContainer.innerHTML = "";
      
      // Adicionar slides de mídia
      data.midia.forEach((item, index) => {
        let slideContent = '';
        
        if (item.type === 'image') {
          slideContent = `<img src="${item.src}" alt="${item.alt}" loading="lazy">`;
        } else if (item.type === 'video') {
          slideContent = `
            <video controls poster="${item.poster || ''}">
              <source src="${item.src}" type="video/mp4">
              Seu navegador não suporta o elemento de vídeo.
            </video>
          `;
        } else if (item.type === 'iframe') {
          slideContent = `<iframe src="${item.src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }
        
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = slideContent;
        mediaContainer.appendChild(slide);
        
        // Adicionar miniatura
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.dataset.index = index;
        
        if (item.type === 'image') {
          thumbnail.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
        } else if (item.type === 'video') {
          thumbnail.innerHTML = `<div class="video-thumbnail"><i class="fas fa-play"></i></div>`;
        } else if (item.type === 'iframe') {
          thumbnail.innerHTML = `<div class="iframe-thumbnail"><i class="fab fa-youtube"></i></div>`;
        }
        
        thumbnail.addEventListener('click', () => {
          swiperInstance.slideTo(index);
          updateActiveThumbnail(index);
        });
        
        thumbnailsContainer.appendChild(thumbnail);
      });
      
      // Adicionar tecnologias
      const techTags = document.getElementById("modal-tech-tags");
      techTags.innerHTML = "";
      data.tecnologias.forEach(tech => {
        const tag = document.createElement("span");
        tag.className = "skill-tag";
        tag.textContent = tech;
        techTags.appendChild(tag);
      });
      
      // Adicionar links
      const linksContainer = document.getElementById("modal-links");
      linksContainer.innerHTML = "";
      data.links.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.target = "_blank";
        linkElement.className = `project-link ${link.type}`;
        
        if (link.type === 'github') {
          linkElement.innerHTML = `<i class="fab fa-github"></i> ${link.text}`;
        } else if (link.type === 'demo') {
          linkElement.innerHTML = `<i class="fas fa-external-link-alt"></i> ${link.text}`;
        } else {
          linkElement.innerHTML = `<i class="fas fa-link"></i> ${link.text}`;
        }
        
        linksContainer.appendChild(linkElement);
      });
      
      // Adicionar features
      const featuresContainer = document.getElementById("modal-features");
      featuresContainer.innerHTML = `
        <h4><i class="fas fa-star"></i> Funcionalidades Principais</h4>
        <ul class="feature-list">
          ${data.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      `;
      
      // Mostrar modal
      modal.classList.add("show");
      document.body.style.overflow = "hidden";
      
      // Inicializar/reinicializar Swiper
      if (swiperInstance) {
        swiperInstance.destroy();
      }
      setTimeout(() => {
        initSwiper();
      }, 100);
    }
  });
});

// Atualizar miniatura ativa
function updateActiveThumbnail(index) {
  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

// Configurar eventos do Swiper
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar Swiper quando modal for aberto
  document.addEventListener('swiperInitialized', function(e) {
    const swiper = e.detail;
    swiper.on('slideChange', function() {
      updateActiveThumbnail(this.activeIndex);
    });
  });
});

// Fechar modal
function fecharModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
  
  // Pausar vídeos quando fechar modal
  document.querySelectorAll('#modal-media video').forEach(video => {
    video.pause();
  });
}

const closeModal = document.querySelector(".close");
const closeModalBtn = document.querySelector(".close-modal");

closeModal.addEventListener("click", fecharModal);
closeModalBtn.addEventListener("click", fecharModal);

// Fechar modal ao clicar fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    fecharModal();
  }
});

// Efeito de digitação dinâmico
const typewriterText = document.querySelector('.typewriter p');
const texts = [
  "Desenvolvedor Web & Técnico em Eletrônica",
  "Criando soluções com código e circuitos",
  "Unindo tecnologia e criatividade",
  "Transformando ideias em realidade",
  "Especialista em Flutter & Python"
];
let currentTextIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
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

// Iniciar efeito de digitação após carregamento
window.addEventListener('load', () => {
  setTimeout(typeWriter, 1000);
});

// Animação ao rolar
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

// Observar elementos para animação
document.querySelectorAll('.about-card, .project-card, .contact-card').forEach(el => {
  observer.observe(el);
});

// Suavizar navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Efeito de hover nos botões
document.querySelectorAll('.btn-primary, .btn-secondary, .project-btn').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Pré-carregar imagens do primeiro projeto para melhor experiência
function preloadProjectImages() {
  const firstProject = projetos['regador'];
  if (firstProject && firstProject.midia) {
    firstProject.midia.forEach(item => {
      if (item.type === 'image') {
        const img = new Image();
        img.src = item.src;
      }
    });
  }
}

// Pré-carregar quando a página carregar
window.addEventListener('load', preloadProjectImages);