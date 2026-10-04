import { cadastro, cadastrados } from "./Cadastro.js" 

function pesquisa_nome() {
	
	let nome = prompt(`Digite o nome que procura: `)
	let achado = " "
	if (cadastrados.length != 0) {
		for (let a = 0; a < cadastrados.length; a++) {
			if (cadastrados[a].includes(nome)) {
				achado = cadastrados[a]
			}
		}

		if (achado == nome) {
			alert(`Nome do hóspede: ${nome} foi encontrado`)
			cadastro()
		} else {
			alert(`Hóspede não encontrado`)
			pesquisa_nome()
		}

	} else {
		alert("Não tem hospedes cadastrados")
		cadastro()
	}



}
export { pesquisa_nome }
