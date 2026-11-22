const produtos = window.catalogoImpossivel;
const moeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});
const carrinho = JSON.parse(sessionStorage.getItem("carrinho") || "[]");
const item = produtos.find((produto) => produto.id === carrinho[0]?.id);
const quantidade = Math.max(1, Number(carrinho[0]?.quantidade) || 1);
const formulario = document.querySelector("#checkoutForm");
const campoCep = document.querySelector("#cep");
const feedbackCep = document.querySelector("#cepFeedback");
const botaoCep = document.querySelector("#buscarCep");

if (!item) {
  document.querySelector("#resumoPedido").innerHTML =
    '<p>Seu pedido está vazio. <a href="index.html">Explore as invenções</a>.</p>';
  formulario.querySelector("button[type=submit]").disabled = true;
} else {
  const subtotal = item.preco * quantidade;
  const frete = 0;
  const total = subtotal + frete;
  document.querySelector("#resumoPedido").innerHTML = `
    <div class="d-flex justify-content-between gap-2">
      <span>Subtotal · ${item.nome} × ${quantidade}</span><span>${moeda.format(subtotal)}</span>
    </div>
    <div class="d-flex justify-content-between mt-2"><span>Frete</span><span>Grátis</span></div>
    <hr>
    <div class="d-flex justify-content-between fw-bold"><span>Total</span><span>${moeda.format(total)}</span></div>`;
}

function somenteNumeros(valor) {
  return valor.replace(/\D/g, "");
}

campoCep.addEventListener("input", () => {
  const cep = somenteNumeros(campoCep.value).slice(0, 8);
  campoCep.value = cep.length > 5 ? `${cep.slice(0, 5)}-${cep.slice(5)}` : cep;
});
const campoTelefone = document.querySelector("#telefone");
function formatarTelefone(valor) {
  const digitos = somenteNumeros(valor).slice(0, 11);
  if (digitos.length <= 2) return digitos ? `(${digitos}` : "";

  const ddd = digitos.slice(0, 2);
  const numero = digitos.slice(2);
  if (!numero) return `(${ddd})`;

  const tamanhoPrefixo = digitos.length > 10 ? 5 : 4;
  const prefixo = numero.slice(0, tamanhoPrefixo);
  const sufixo = numero.slice(tamanhoPrefixo);
  return sufixo ? `(${ddd}) ${prefixo}-${sufixo}` : `(${ddd}) ${prefixo}`;
}

function posicaoDoCursor(texto, quantidadeDeDigitos) {
  if (quantidadeDeDigitos === 0) return 0;
  let encontrados = 0;
  for (let indice = 0; indice < texto.length; indice += 1) {
    if (/\d/.test(texto[indice])) encontrados += 1;
    if (encontrados === quantidadeDeDigitos) return indice + 1;
  }
  return texto.length;
}

campoTelefone.addEventListener("input", () => {
  const inicio = campoTelefone.selectionStart ?? campoTelefone.value.length;
  const fim = campoTelefone.selectionEnd ?? inicio;
  const digitosAntesDoInicio = somenteNumeros(campoTelefone.value.slice(0, inicio)).length;
  const digitosAntesDoFim = somenteNumeros(campoTelefone.value.slice(0, fim)).length;
  campoTelefone.value = formatarTelefone(campoTelefone.value);
  campoTelefone.setSelectionRange(
    posicaoDoCursor(campoTelefone.value, digitosAntesDoInicio),
    posicaoDoCursor(campoTelefone.value, digitosAntesDoFim)
  );
});

botaoCep.addEventListener("click", async () => {
  const cep = somenteNumeros(campoCep.value);
  if (cep.length !== 8) {
    feedbackCep.textContent = "Digite um CEP com oito números antes de buscar.";
    campoCep.focus();
    return;
  }

  botaoCep.disabled = true;
  botaoCep.textContent = "Buscando…";
  feedbackCep.textContent = "Consultando o endereço…";
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!resposta.ok) throw new Error("Falha na consulta");
    const endereco = await resposta.json();
    if (endereco.erro) throw new Error("CEP não encontrado. Confira os números e tente novamente.");

    document.querySelector("#logradouro").value = endereco.logradouro || "";
    document.querySelector("#bairro").value = endereco.bairro || "";
    document.querySelector("#cidade").value = endereco.localidade || "";
    document.querySelector("#estado").value = endereco.uf || "";
    feedbackCep.textContent = "Endereço encontrado. Confira os campos e complete o número.";
  } catch (erro) {
    feedbackCep.textContent = erro.message.includes("não encontrado")
      ? erro.message
      : "Não foi possível consultar o CEP. Verifique a conexão e tente novamente.";
  } finally {
    botaoCep.disabled = false;
    botaoCep.textContent = "Buscar CEP";
  }
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  campoCep.setCustomValidity(
    somenteNumeros(campoCep.value).length === 8 ? "" : "Informe um CEP válido com oito números."
  );

  if (!item) {
    location.href = "index.html";
    return;
  }
  if (!formulario.checkValidity()) {
    formulario.classList.add("was-validated");
    formulario.querySelector(":invalid")?.focus();
    return;
  }

  const valor = (seletor) => document.querySelector(seletor).value.trim();
  const dados = {
    nome: valor("#nome"),
    logradouro: valor("#logradouro"),
    numero: valor("#numero"),
    complemento: valor("#complemento"),
    bairro: valor("#bairro"),
    cidade: valor("#cidade"),
    estado: valor("#estado"),
    cep: valor("#cep")
  };
  const pedido = {
    ...dados,
    produto: item.nome,
    quantidade,
    total: item.preco * quantidade,
    numeroPedido: `IMP-${Math.floor(100000 + Math.random() * 900000)}`
  };
  sessionStorage.setItem("pedidoConcluido", JSON.stringify(pedido));
  location.href = "sucesso.html";
});




