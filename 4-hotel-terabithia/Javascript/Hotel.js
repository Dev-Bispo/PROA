import { menu } from "./Menu.js"


var nomeHotel = "Novo Dia" //nome do hotel pode ser usado em diversas partes do código
var nomeUsuário = prompt(`Digite o seu nome`) // nome do usuário vai ser usado em mais partes do código




function inicio() {

	alert(`Bem-vindo ao ${nomeHotel}`)


	for (let tentativa = 1; tentativa <= 3; tentativa++) {
		let senha = prompt(`Digite a senha: `)
		console.log(tentativa)
		if (tentativa == 4) {
			alert(`Bloqueio. Quantidadede de tentativas excedeu`)
			window.close()
		}

		if (Login(senha) !== false) {
			menu()
			break
		} else {
			alert(`Senha incorreta`)

		}
	}
}

function Login(senha) {
	const key = 2678
	if (senha == key) {
		alert(`Bem-vindo ao Hotel ${nomeHotel}, ${nomeUsuário}. É um imenso prazer ter você por aqui!`)

	} else {
		return false
	}
}


export { inicio, nomeHotel }


