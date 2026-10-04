
function agenda() {
	alert("O auditório está disponível para reservas de segunda a sexta das 7hs às 23hs; \nsábados e domingos apenas das 7hs às 15hs.")
	let dia = prompt("Digite o dia da semana para reservar: ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
	let hora_inicial = parseInt(prompt("Digite o hora que deseja reservar: "))
	let duracao = parseInt(prompt("Duração do evento(1 a 12 horas): "))

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

	if (auditorios[0].estado == "disponivel") {
		let nome_empresa = prompt("Nome da empresa reservante: ")
		alert(`Auditório reservado para ${nome_empresa} : ${dia} às ${hora_inicial}hs`)


	}

	return { duracao }
}
export { agenda }
