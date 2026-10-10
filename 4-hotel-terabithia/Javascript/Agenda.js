import { auditorios, sugestao } from "./Convidados.js"
import { eventos } from "./Eventos.js"


var dia = ""
var hora_inicial = ""
var duracao = ""
var nome_empresa = ""
var status = ""
function agenda() {
	alert("O auditório está disponível para reservas de segunda a sexta das 7hs às 23hs; \nsábados e domingos apenas das 7hs às 15hs.")
	dia = prompt("Digite o dia da semana para reservar: ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
	hora_inicial = parseInt(prompt("Digite o hora que deseja reservar: "))
	duracao = parseInt(prompt("Duração do evento(1 a 12 horas): "))

	while (true) {
		if (!Number.isInteger(hora_inicial)) {
			hora_inicial = parseInt(prompt("Digite o hora que deseja reservar: "))

		} else {
			if (!Number.isInteger(duracao)) {
				duracao = prompt("Duração do evento(1 a 12 horas): ")
			} else {
				break
			}
		}



	}
	if (prompt("Deseja realizar a reserva?(s/n)").toLocaleLowerCase() == 's') {
		switch (sugestao) {
			case "laranja":
				if (auditorios[0].estado == "disponivel") {
					nome_empresa = prompt("Nome da empresa reservante: ")
					status = "Auditório reservado."
					alert(`Auditório reservado para ${nome_empresa} : ${dia} às ${hora_inicial}hs`)
					eventos()

				}
				
				break
			case "colorado":
				if (auditorios[1].estado == "disponivel") {
					nome_empresa = prompt("Nome da empresa reservante: ")
					status = "Auditório reservado."
					alert(`Auditório reservado para ${nome_empresa} : ${dia} às ${hora_inicial}hs`)
					eventos()

				}
				
				break
		}

	}





}

export { agenda, dia, hora_inicial, duracao, nome_empresa, status }
