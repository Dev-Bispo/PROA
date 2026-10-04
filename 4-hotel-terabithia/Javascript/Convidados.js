import { menu }  from "./Menu"
function convidados() {

	let cadeiras_extra = 70

	numero_convidados = prompt("Número de convidados: ")

	if (numero_convidados > 350 || numero_convidados < 0) {
		alert("Número de convidados inválido")
		convidados()
	} else {
		if (numero_convidados <= 150) {
			alert(`O auditório adequado: Laranja`)
			menu()

		} else if (numero_convidados > 150 && numero_convidados <= 220) {
			alert(`Auditório adequado: Laranja\n cadeiras extras: ${auditorio[0].cadeiras - numero_convidados}`)
			cadeiras_extra = (-1) * (auditorio[0].cadeiras - numero_convidados)

			menu()

		} else {
			alert("Auditório adequado: Colorado")
			menu()
		}
	}
	return { numero_convidados }
}
export { convidados }
