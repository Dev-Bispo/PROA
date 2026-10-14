import { convidados } from "./Convidados.js";
import { agenda } from "./Agenda.js";
import { custos_buffet } from "./Custo_Buffet.js";
import { relatorio_operacionais } from "./Relatorio_Operacional.js";
import { erro } from "./Erro.js";

let n_convidados = "";
const eventosConfirmados = [];

function eventos() {
    const opcao = Number(prompt("1 Convidados | 2 Agenda | 3 Buffet | 4 Relatorio/confirmacao | 7 Voltar"));
    switch (opcao) {
        case 1:
            n_convidados = convidados();
            break;
        case 2:
            agenda();
            break;
        case 3:
            custos_buffet();
            break;
        case 4:
            relatorio_operacionais({ confirmarEvento: true });
            break;
        case 7:
            break;
        default:
            erro();
    }
}
export { eventos, n_convidados, eventosConfirmados };
