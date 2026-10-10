import { numero_convidados } from "./Convidados.js"
import { n_convidados } from "./Eventos.js"


var litro_cafe = 0
var litro_agua = 0
var salgados = 0
var valor_cafe = 0
var valor_agua = 0
var valor_salgado = 0
var total_buffet_valor = 0

function custos_buffet() {
	litro_cafe = parseInt(numero_convidados) * 0.2
	litro_agua = parseInt(numero_convidados) * 0.5
	salgados = parseInt(numero_convidados) * 7
	valor_cafe = 0.8 * litro_cafe
	valor_agua = 0.4 * litro_agua
	valor_salgado = (salgados / 100) * 34
	total_buffet_valor = valor_agua + valor_cafe + valor_salgado

	//alert(`Valor da água por litro: ${formacao_monetaria(valor_agua)}\n Valor do café por litro: ${formacao_monetaria(valor_cafe)}\n Valor dos salgados: ${formacao_monetaria(valor_salgado)}`)
	return {litro_agua, litro_cafe, salgados}
}

	
export { custos_buffet, litro_agua, litro_cafe, salgados, total_buffet_valor }
