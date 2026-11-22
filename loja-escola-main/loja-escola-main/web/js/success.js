const texto = document.querySelector("#mensagemCliente");
const lista = document.querySelector("#dadosPedido");
const compra = sessionStorage.getItem("pedidoConcluido");
if (!compra) {
  location.replace("index.html");
} else {
  const pedido = JSON.parse(compra);
  texto.textContent = `${pedido.nome}, seu pedido fictício foi registrado com sucesso.`;
  const linhas = [
    ["Número do pedido", pedido.numeroPedido],
    ["Invenção", `${pedido.produto} × ${pedido.quantidade}`],
    ["Total simulado", new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(pedido.total)],
    ["Entrega", `${pedido.logradouro}, ${pedido.numero} · ${pedido.cidade}/${pedido.estado}`],
    ["Status", "Simulação concluída"]
  ];
  for (const [rotulo, valor] of linhas) {
    const linha = document.createElement("div");
    const termo = document.createElement("dt");
    const descricao = document.createElement("dd");
    termo.textContent = rotulo;
    descricao.textContent = valor;
    linha.append(termo, descricao);
    lista.append(linha);
  }
  sessionStorage.removeItem("carrinho");
}
