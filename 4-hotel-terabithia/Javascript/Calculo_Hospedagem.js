import { formacao_monetaria } from "./Formatacao_Monetaria.js"
function calculo_hospedagem(tipo, diaria, dias) {
	let subtotal = 0
	let taxa_servico = 0
	let total_final = 0
	switch (tipo.toLowerCase()) {
		case "s":
			subtotal = diaria * dias * 1.00
			tipo = "stardard"
			break
		case "e":
			subtotal = diaria * dias * 1.35
			tipo = "executivo"
			break
		case "l":
			subtotal = diaria * dias * 1.65
			tipo = "luxo"
			break
	}
	taxa_servico = 0.10 * subtotal
	total_final = subtotal + taxa_servico

	return [formacao_monetaria(subtotal), formacao_monetaria(taxa_servico), formacao_monetaria(total_final), tipo]
}

export { calculo_hospedagem }
