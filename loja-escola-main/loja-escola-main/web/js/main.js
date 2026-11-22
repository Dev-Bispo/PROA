const produtos = window.catalogoImpossivel;
const lista = document.querySelector("#listaProdutos");
const filtro = document.querySelector("#filtroProduto");
const categoria = document.querySelector("#filtroCategoria");
const regra = document.querySelector("#filtroRegra");
const ordem = document.querySelector("#ordenacao");
const mensagem = document.querySelector("#mensagemFiltro");
const moeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
function renderizar() {
  const termo = filtro.value.trim().toLocaleLowerCase("pt-BR");
  const encontrados = produtos.filter(p => `${p.nome} ${p.categoria} ${p.regra}`.toLocaleLowerCase("pt-BR").includes(termo) && (!categoria.value || p.categoria === categoria.value) && (!regra.value || p.regra === regra.value));
  if (ordem.value === "nome") encontrados.sort((a,b) => a.nome.localeCompare(b.nome,"pt-BR"));
  if (ordem.value === "preco-menor") encontrados.sort((a,b) => a.preco-b.preco);
  if (ordem.value === "preco-maior") encontrados.sort((a,b) => b.preco-a.preco);
  lista.innerHTML = encontrados.map(p => `<article class="col-sm-6 col-lg-4"><div class="card h-100 product-card"><div class="product-illustration"><img src="${p.imagem}" width="640" height="420" loading="lazy" alt="${p.alt}"></div><div class="card-body d-flex flex-column"><p class="small text-secondary mb-1">${p.categoria}</p><h3 class="h5">${p.nome}</h3><p>${p.curto}</p><p class="small mb-2"><span class="badge text-bg-success">${p.regra}</span></p><p class="price mt-auto">${moeda.format(p.preco)}</p><a class="btn btn-dark" href="produto.html?id=${p.id}">Descobrir invenção</a></div></div></article>`).join("");
  mensagem.textContent = encontrados.length ? `${encontrados.length} invenção(ões) encontrada(s).` : "Nenhuma invenção encontrada. Tente outros filtros.";
}
[filtro,categoria,regra,ordem].forEach(campo => campo.addEventListener("input", renderizar));
renderizar();
