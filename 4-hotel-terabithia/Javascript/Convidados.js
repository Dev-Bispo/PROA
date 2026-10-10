import { custos_buffet } from "./Custo_Buffet.js"
import { eventos } from "./Eventos.js"
import { garcao } from "./Garcao.js"


var auditorios = [
	{ "nome": "laranja", "cadeiras": 150, "cadeira_extra": 0, "estado": "disponivel" },
	{ "nome": "colorado", "cadeiras": 350, "cadeira_extra": 0, "estado": "disponivel" }
]
var sugestao = ""
var numero_convidados = ""
var cadeiras_extra = ""
function convidados() {

	let cadeiras_extra = 70
	

	numero_convidados = prompt("Número de convidados: ")

	if (numero_convidados > 350 || numero_convidados < 0) {
		alert("Número de convidados inválido")
		convidados()
	} else {
		if (numero_convidados <= 150) {
			alert(`O auditório adequado: ${auditorios[0].nome}`)
			sugestao = auditorios[0].nome
			eventos()

		} else if (numero_convidados > 150 && numero_convidados <= 220) {
			alert(`Auditório adequado: ${auditorios[0].nome}\n cadeiras extras: ${auditorios[0].cadeiras - numero_convidados}`)
			cadeiras_extra = `${(numero_convidados - auditorios[0].cadeiras)} cadeiras adicionais`
			sugestao = auditorios[0].nome
			eventos()

		} else {
			alert(`Auditório adequado: ${auditorios[1].nome}`)
			sugestao = auditorios[1].nome 
			eventos()
		}
		
	}
	return numero_convidados
	
}
export { convidados, sugestao, numero_convidados, cadeiras_extra, auditorios }
