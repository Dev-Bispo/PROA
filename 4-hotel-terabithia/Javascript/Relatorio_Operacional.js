import { garcao } from "./Garcao.js"
import { cadeiras_extra, numero_convidados, sugestao } from "./Convidados.js"
import { duracao, hora_inicial, nome_empresa, status } from "./Agenda.js"
import { custos_buffet, total_buffet_valor } from "./Custo_Buffet.js"
import { erro } from "./Erro.js"
import { menu } from "./Menu.js"
import { formacao_monetaria } from "./Formatacao_Monetaria.js"


function relatorio_operacionais() {
    var { total_garcao, total_valor_garcao } = garcao()
    var { litro_agua, litro_cafe, salgados } = custos_buffet()

    alert(`Eventos\n Convidados: ${numero_convidados}\n Auditório selecionado: ${sugestao} (${cadeiras_extra})\n Hora inicial: ${hora_inicial}\nDuração: ${duracao}\n Empresa: ${nome_empresa}\n Status: ${status}\n\nGarçons necessários: ${total_garcao} \n Custo com garçons: ${formacao_monetaria(total_valor_garcao)}\n\n Buffet:\n Café: ${litro_cafe} L \n Água: ${litro_agua} L\n Salgados: ${salgados} un\n Custo buffet: ${formacao_monetaria(total_buffet_valor)}\n\n Total do evento: ${formacao_monetaria(total_valor_garcao + total_buffet_valor)}`)


    let confirma_reserva = prompt("Confirmar reserva? (S/N):")
    if (confirma_reserva.toLocaleLowerCase() == "s") {
        alert("Reserva efetuada com sucesso")
    } else if (confirma_reserva.toLocaleLowerCase() == "s") {
        alert("Reserva Cancelada")
        menu()
    } else {
        erro()
    }
}


export { relatorio_operacionais }
