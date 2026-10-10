import { quartos } from "./Quartos.js"
import { menu } from "./Menu.js"
import { nomeHotel } from "./Hotel.js"
import { calculo_hospedagem } from "./Calculo_Hospedagem.js";


function reserva_quartos() {
	alert(`HOTEL ${nomeHotel} - RESERVA DE QUARTOS`);
	let diaria = parseInt(prompt(`Informe o valor da diária: `))
	let dias = parseInt(prompt(`Informe a quantidade de diárias: `))
	let contador = [] //pode ser usado em diversas situções 
	let listaquartos = quartos()
	let linha_q = []
	let mapaquartos = ``




	if (diaria > 0) {
		if (dias > 0 && dias <= 30) {
			let nomeHospede = prompt(`Digite o seu nome completo: `)
			let tipo = prompt(`Tipo de quarto (S/E/L): `)



			while (true) {
				let numero = prompt(`Digite o quarto desejado(1-20): `)
				if (numero > 0 && numero <= 20) {
					if (listaquartos[numero - 1].disponibilidade == "L") {
						let [subtotal, taxa_servico, total_final, tipo_quarto] = calculo_hospedagem(tipo, diaria, dias)
						alert(`Resumo:\n Hóspede: ${nomeHospede}\n Quarto: ${numero} (${tipo_quarto}) \n Subtotal: ${subtotal} \n Taxa de serviço (10%): ${taxa_servico} \n Total: ${total_final}`)

						let confirmacao = prompt(`${nomeHospede} deseja realizar a reserva no quarto ${numero}?s/n:`)
						if (confirmacao.toLowerCase() == "s") {
							listaquartos[numero - 1].disponibilidade = "O"
							listaquartos[numero - 1].hospede = nomeHospede
							listaquartos[numero - 1].dias = dias
							listaquartos[numero - 1].diaria = diaria
							listaquartos[numero - 1].total = total_final

							alert(`Reserva efetuada com sucesso.`)
							for (let locacao = 0; locacao < listaquartos.length; locacao++) {

								linha_q.push(listaquartos[locacao].disponibilidade)
								if (linha_q.length == 4) {
									mapaquartos += `${linha_q}\n`
									linha_q = []

								}
							}
							alert(mapaquartos)
							console.log(mapaquartos)
							menu()




							break
						} else {
							menu()
							break
						}

					} else {
						alert(`Quarto já está ocupado`)
						for (let x = 0; x < listaquartos.length; x++) {
							if (!listaquartos[x].disponibilidade) {
								continue
							} contador.push(x)

						}
						alert(`Os listaquartos disponiveis são: ${contador}`)

					}
				}

			}

		} else {
			alert(`Valor inválido, ${nomeHospede}`)
			menu()
		}


	} else {
		alert(`Valor inválido, ${nomeHospede}`)
		menu()
	}



}
export { reserva_quartos }
