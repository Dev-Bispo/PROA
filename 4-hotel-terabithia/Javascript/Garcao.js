import { duracao } from "./Agenda.js";
import { numero_convidados } from "./Convidados.js";

const preco_garcao = 10.50;
function garcao() {
    const reforco_duracao = Math.floor(Number(duracao) / 2);
    const numero_garcao = Math.ceil(Number(numero_convidados) / 12);
    const total_garcao = numero_garcao + reforco_duracao;
    const total_valor_garcao = total_garcao * preco_garcao * Number(duracao);
    return { total_garcao, total_valor_garcao };
}
export { garcao };
