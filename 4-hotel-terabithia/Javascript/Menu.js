
import { sair } from "./Sair.js"
import { relatorio_operacionais } from "./Relatorio_Operacional.js"
import { reserva_quartos } from "./Reserva_Quartos.js"
import { cadastro } from "./Cadastro.js"
import { eventos } from "./Eventos.js"
import { ar_condicionado } from "./Ar_Condicionado.js"
import { erro } from "./Erro.js"


function menu() {
	let escolha = parseInt(prompt('Selecione uma opção 1.) Reserva de Quartos 2.) Cadastro de Hóspedes 3.)Eventos 4.) Ar condicionado  5.) Abastecimento de Carros  6.) Relatóriodo Operacionais  7.) Sair'));

	switch (escolha) {
		case 1:
			reserva_quartos()
			break
		case 2:
			cadastro()
			break
		case 3:
			eventos()
			break
		case 4:
			ar_condicionado()
			break
		case 5:
			abastecer_carros()
			break
		case 6:
			relatorio_operacionais()
			break
		case 7:
			sair()
			break
		default:
			erro()

	}


}
export { menu }
