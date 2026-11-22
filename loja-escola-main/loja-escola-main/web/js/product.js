const produtos = window.catalogoImpossivel;
const moeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const id = Number(new URLSearchParams(location.search).get("id"));
const item = produtos.find(p => p.id === id);
const destino = document.querySelector("#produtoDetalhe");
if (!item) {
  destino.innerHTML = '<section class="success-panel"><p class="eyebrow">Página não encontrada</p><h1>Essa invenção escapou do catálogo.</h1><p>Escolha outra ideia na vitrine.</p><a class="btn btn-dark" href="index.html">Voltar às invenções</a></section>';
} else {
  document.title = `${item.nome} | Loja Impossível`;
  destino.innerHTML = `<article class="row g-5 align-items-start"><div class="col-lg-6"><div class="product-detail-illustration"><img src="${item.imagem}" width="640" height="420" alt="${item.alt}"></div></div><div class="col-lg-6"><p class="eyebrow">${item.categoria}</p><h1>${item.nome}</h1><p class="lead">${item.curto}</p><p>${item.detalhe}</p><p class="price price-large">${moeda.format(item.preco)}</p><p><span class="badge text-bg-success">Regra do desafio: ${item.regra}</span></p><section aria-labelledby="detalhes" class="mb-4"><h2 class="h4" id="detalhes">Feita de imaginação</h2><ul><li>Material: ${item.material}</li><li>Dimensões: ${item.dimensoes}</li><li>Disponível para compra fictícia.</li></ul></section><form id="formProduto"><label class="form-label" for="quantidade">Quantidade</label><input class="form-control quantity-field mb-3" id="quantidade" name="quantidade" type="number" min="1" max="10" value="1" required><button class="btn btn-dark btn-lg" type="submit">Adicionar ao pedido</button></form><p id="produtoFeedback" class="mt-3" role="status" aria-live="polite"></p></div></article>`;
  document.querySelector(".breadcrumb-item.active").textContent = item.nome;
  document.querySelector("#formProduto").addEventListener("submit", event => { event.preventDefault(); const qtd = Number(document.querySelector("#quantidade").value); if (!Number.isInteger(qtd) || qtd < 1 || qtd > 10) { document.querySelector("#produtoFeedback").textContent = "Escolha uma quantidade entre 1 e 10."; document.querySelector("#quantidade").focus(); return; } sessionStorage.setItem("carrinho", JSON.stringify([{ id: item.id, quantidade: qtd }])); location.href = "checkout.html"; });
}
