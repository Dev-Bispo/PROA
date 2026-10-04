
function custos_buffet(numero) {
	let litro_cafe = numero.numero_convidados * 0.2
	let litro_agua = numero.numero_convidados * 0.5
	let salgados = numero.numero_convidados * 7
	let valor_cafe = 0.8 * litro_cafe
	let valor_agua = 0.4 * litro_agua
	let valor_salgado = (salgados / 100) * 34

	alert(`Valor da água por litro: ${valor_agua}\n Valor do café por litro: ${valor_cafe}\n Valor dos salgados: ${valor_salgado}`)
}

export { custos_buffet }
