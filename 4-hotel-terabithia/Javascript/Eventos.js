import { convidados } from "./Convidados.js"
import { agenda } from "./Agenda.js"
import { custos_buffet } from "./Custo_Buffet.js"
import { relatorio_operacionais } from "./Relatorio_Operacional.js"
import { erro } from "./Erro.js"

let n_convidados = ""
function eventos() {
	let opcao = parseInt(prompt("1.)convidados 2.)agenda 3.) 4.) 5.) 6.) 7.) Voltar"))
	switch (opcao) {
		case 1:
			n_convidados = convidados()
			break
		case 2:
			agenda()
			break
		case 3:
			custos_buffet()
		case 4:
			relatorio_operacionais()

		default:
			erro()
			

	}
}
export { eventos, n_convidados }
