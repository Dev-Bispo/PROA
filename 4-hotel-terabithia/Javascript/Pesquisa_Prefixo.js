import { cadastro, cadastrados } from "./Cadastro.js" 


function pesquisa_prefixo() {
	let nome = prompt(`Digite o prefixo do nome que procura: `)
	let prefixo = nome.slice(0, 2)
	let resultado = ""
	if (cadastrados.length != 0) {
		for (let a = 0; a < cadastrados.length; a++) {
			for (let b = 0; b < cadastrados[a].length; b++) {
				if (prefixo == cadastrados[a][b].slice(0, 2)) {
					resultado += `${cadastrados[a][b]} \n`
				}

			}
		}
		if (resultado == "") {
			alert(`Hóspede não encontrado`)
		}
	}
	alert(`Resultados da pesquisa do prefixo ${prefixo}: ${resultado}`)
	cadastro()

}

export { pesquisa_prefixo }
