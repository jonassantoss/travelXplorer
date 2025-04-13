const orcamentoInput = document.getElementById("orcamento");
const valorOrcamento = document.getElementById("valor-orcamento");

orcamentoInput.addEventListener("input", function () {
  valorOrcamento.textContent = `R$ ${this.value.replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    "$1."
  )}`;
});

const form = document.getElementById("contato-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const destino = document.getElementById("destino").value;

  if (nome.trim() === "" || email.trim() === "" || destino === "") {
    alert("Por favor, preencha todos os campos obrigatórios!");
    return;
  }

  const formData = new FormData(form);
  console.log("Formulário enviado com sucesso!");

  alert(
    "Obrigado por entrar em contato! Em breve, um de nossos consultores entrará em contato com você."
  );

  form.reset();
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 100,
      behavior: "smooth",
    });
  });
});

const destinoCards = document.querySelectorAll(".destino-card");

destinoCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.1)";
  });
});
