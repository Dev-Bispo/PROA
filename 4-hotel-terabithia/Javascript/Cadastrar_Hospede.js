import { cadastro, cadastrados } from "./Cadastro.js" 
var contador_hospede = 0 
function cadastrar_hospede() {
	let conjunto = []
	let adicao = ""

	externo:
	while (true) {
		if (cadastrados.length == 15) {
			alert(`Máximo de cadastros atingido`)
			cadastro()
			break

		}
		let pessoa = prompt(`Digite o nome do Hospede que será cadastrado`)
		if (cadastrados.length > 0) {
			for (let i = 0; i < cadastrados.length; i++) {
				if (cadastrados[i].includes(pessoa)) {
					alert(`Hóspede ${pessoa} já cadastrado`)
					continue externo

				}



			}
		}
		


		conjunto.push(pessoa)
		adicao = prompt(`deseja adicionar mais hospedes(s/n)?`)
		if (adicao.toLocaleLowerCase() == "s") {
			
			continue
		} else if (adicao.toLocaleLowerCase() == "n") {
			contador_hospede = conjunto.length
			cadastrados.push(conjunto)
			
			alert("Hospedes cadastrados")
			cadastro()
			break externo
		} else {
			alert("Opção inválida")
			continue
		}



	}




}
export { cadastrar_hospede }
