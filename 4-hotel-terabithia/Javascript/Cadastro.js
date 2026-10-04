import { cadastrar_hospede } from "./Cadastrar_Hospede.js"
import { pesquisa_prefixo } from "./Pesquisa_Prefixo.js"
import { pesquisa_nome } from "./Pesquisa_Nome.js"
import { listar_ordenado } from "./Lisatr_ordenado.js"
import { atualizar_cadastro } from "./Atualizar_Cadastro.js"
import { remover_cadastro } from "./Remover_Cadastro.js"
import { menu } from "./Menu.js"
import { erro } from "./Erro.js"

var cadastrados = []

function cadastro() {
	let opcao = parseInt(prompt("1.)cadastrar 2.)Pesquisar por nome exato 3.)Pesquisar por prefixo 4.) Listar ordenado (A-Z) 5.)Atualizar cadastro 6.)Remover cadastro 7.) Voltar"))
	switch (opcao) {
		case 1:
			cadastrar_hospede()
			break
		case 2:
			pesquisa_nome()
			break
		case 3:
			pesquisa_prefixo()
			break
		case 4:
			listar_ordenado()
			break
		case 5:
			atualizar_cadastro()
			break
		case 6:
			remover_cadastro()
			break
		case 7:
			menu()
			break
		default:
			erro()

	}
}
export { cadastro, cadastrados }
