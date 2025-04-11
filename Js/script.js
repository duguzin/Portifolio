// Tema (continuação do que você já começou)
const toggleButton = document.getElementById('tema-toggle');
const body = document.body;

if (localStorage.getItem("tema") === "escuro") {
  body.classList.add("tema-escuro");
  toggleButton.textContent = "☀️";
} else {
  toggleButton.textContent = "🌙";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("tema-escuro");

  if (body.classList.contains("tema-escuro")) {
    toggleButton.textContent = "☀️";
    localStorage.setItem("tema", "escuro");
  } else {
    toggleButton.textContent = "🌙";
    localStorage.setItem("tema", "claro");
  }
});

// --- MODAL ---
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");

const projetos = {
  regador: {
    titulo: "Regador Automático",
    descricao: "o CultivaMais integra soluções de tecnologia rural, como um sistema de regador automático com sensor de umidade do solo, criado para auxiliar os produtores no manejo da irrigação. Esse sistema utiliza sensores para monitorar a umidade do solo em tempo real e, caso detecte um nível baixo, ativa automaticamente o regador. Todas as informações são exibidas no painel do agricultor dentro da plataforma, permitindo um controle mais inteligente e eficiente da irrigação — economizando água e melhorando a produtividade. Com essa integração entre e-commerce e IoT, o CultivaMais vai além das vendas, oferecendo suporte prático para o dia a dia no campo e contribuindo para uma agricultura mais tecnológica, sustentável e acessível.",
    imagem: "Imagens/Foto-2.png"
  },
  cultivamais: {
    titulo: "CultivaMais",
    descricao: "CultivaMais é um e-commerce desenvolvido para conectar consumidores diretamente a agricultores locais, promovendo uma compra sem intermediação. A plataforma permite que produtores criem e administrem sua própria loja online por meio de um painel completo, onde podem gerenciar seu catálogo de produtos, acompanhar pedidos e atualizar informações de forma simples e eficiente. O projeto valoriza a agricultura local, facilita o acesso a alimentos frescos e contribui para uma economia mais justa e sustentável.",
    imagem: "Imagens/Foto-2.png"
  },
  guia360: {
    titulo: "Guia360",
    descricao: "​O site Guia360 é uma plataforma educacional desenvolvida para auxiliar estudantes na preparação para o ENEM e outros vestibulares. Ele oferece uma variedade de recursos gratuitos, incluindo apostilas em PDF, provas anteriores, simulados, cronogramas de estudo, materiais de revisão e informações sobre notas de corte. Além disso, o site promove uma comunidade colaborativa, incentivando a interação entre estudantes e mentores para um aprendizado mais eficaz.​ A interface do Guia360 é organizada e intuitiva, facilitando o acesso aos materiais e ferramentas disponíveis. Com uma abordagem motivacional e estratégica, a plataforma visa transformar a jornada de estudos em uma experiência produtiva e enriquecedora, proporcionando suporte contínuo aos usuários.​",
    imagem: "Imagens/Foto-3.png"
  }
};

// Abrir o modal
document.querySelectorAll(".saber-mais-button").forEach(button => {
  button.addEventListener("click", () => {
    const projeto = button.dataset.projeto;
    const data = projetos[projeto];

    if (data) {
      document.getElementById("modal-title").textContent = data.titulo;
      document.getElementById("modal-desc").textContent = data.descricao;
      document.getElementById("modal-img").src = data.imagem;

      // Mostra o modal (caso ele tenha sido escondido com display:none)
      modal.style.display = "flex";
      modal.classList.add("show");
      modal.classList.remove("hide");
    }
  });
});


// Fechar o modal
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hide");

  // Depois de um tempo, oculta totalmente (pra não atrapalhar clique)
  setTimeout(() => {
    modal.classList.remove("hide");
    modal.style.display = "none";
  }, 300);
});

// Também fecha clicando fora do conteúdo do modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal.click();
  }
});
