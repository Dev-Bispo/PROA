
function garcao(duracao, numero_convidados) {
	let preco_garcao = 10.50
	let reforco_duracao = duracao

	reforco_duracao = Math.floor(reforco_duracao / 2)
	numero_garcao = Math.ceil(numero_convidados / 12)
	let total_garcao = numero_garcao + reforco_duracao
	let total_valor = total_garcao * preco_garcao * duracao

	alert(`Quantidade de garções: ${total_garcao}\n Valor: ${formacao_monetaria(total_valor)}`)


}

export { garcao }
