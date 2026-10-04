
function formacao_monetaria(moeda) {
	const formatacao = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL"
	}).format(moeda)

	return formatacao
}

export { formacao_monetaria }
