
import { duracao } from "./Agenda.js"
import { n_convidados } from "./Eventos.js"

var preco_garcao = 10.50
var reforco_duracao = 0
var total_garcao = 0
var total_valor_garcao = 0
var numero_garcao = 0


function garcao() {

	reforco_duracao = Math.floor(duracao / 2)
	numero_garcao = Math.ceil(n_convidados / 12)
	total_garcao = numero_garcao + reforco_duracao
	total_valor_garcao = total_garcao * preco_garcao * duracao

	//alert(`Quantidade de garções: ${total_garcao}\n Valor: ${total_valor_garcao}`)
	return {total_garcao, total_valor_garcao} 

}

export { garcao }
