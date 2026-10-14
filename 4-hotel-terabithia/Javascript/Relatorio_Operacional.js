import { garcao } from "./Garcao.js";
import { numero_convidados, sugestao } from "./Convidados.js";
import { dia, duracao, hora_inicial, nome_empresa, status } from "./Agenda.js";
import { custos_buffet, total_buffet_valor } from "./Custo_Buffet.js";
import { eventosConfirmados } from "./Eventos.js";
import { quartos } from "./Quartos.js";
import { cadastrados } from "./Cadastro.js";
import { menu } from "./Menu.js";
import { formacao_monetaria } from "./Formatacao_Monetaria.js";

function numeroMoeda(valor) {
    if (typeof valor === "number") return Number.isFinite(valor) ? valor : 0;
    const texto = String(valor ?? "").replace(/[^\d,.-]/g, "").replace(/\./g, "").replace(",", ".");
    const numero = Number(texto);
    return Number.isFinite(numero) ? numero : 0;
}

function valorReceitaEvento() {
    while (true) {
        const entrada = prompt("Valor cobrado pelo evento (use 0 se nao houve cobranca):");
        const valor = entrada === null || entrada.trim() === "" ? NaN : Number(entrada.replace(",", "."));
        if (Number.isFinite(valor) && valor >= 0) return valor;
        alert("Valor invalido. Informe um valor igual ou maior que zero.");
    }
}

function confirmarEvento() {
    const { total_garcao, total_valor_garcao } = garcao();
    const { litro_agua, litro_cafe, salgados } = custos_buffet();
    const custoBuffet = Number(total_buffet_valor) || 0;
    const custoTotal = total_valor_garcao + custoBuffet;

    alert(
        "RESUMO DO EVENTO\n" +
        "Auditorio: " + sugestao + "\nEmpresa: " + nome_empresa + "\nDia: " + dia +
        "\nHorario: " + hora_inicial + "h - " + (Number(hora_inicial) + Number(duracao)) + "h" +
        "\nConvidados: " + numero_convidados + "\nDuracao: " + duracao + " horas" +
        "\nGarcons: " + total_garcao + " | Custo: " + formacao_monetaria(total_valor_garcao) +
        "\nCafe: " + litro_cafe + " L | Agua: " + litro_agua + " L | Salgados: " + salgados +
        "\nCusto do buffet: " + formacao_monetaria(custoBuffet) +
        "\nCusto total do evento: " + formacao_monetaria(custoTotal)
    );

    let confirma;
    while (true) {
        confirma = prompt("Confirmar evento? (S/N):");
        confirma = confirma === null ? "" : confirma.trim().toUpperCase();
        if (confirma === "S" || confirma === "N") break;
        alert("Resposta invalida. Digite S ou N.");
    }
    if (confirma === "N") {
        alert("Reserva nao efetuada.");
        menu();
        return;
    }

    const evento = {
        id: eventosConfirmados.length + 1,
        auditorio: sugestao,
        empresa: nome_empresa,
        diaSemana: dia,
        dataConfirmacao: new Date().toLocaleDateString("pt-BR"),
        horaInicio: Number(hora_inicial),
        horaFim: Number(hora_inicial) + Number(duracao),
        duracao: Number(duracao),
        convidados: Number(numero_convidados),
        garcons: total_garcao,
        custoGarcons: total_valor_garcao,
        custoBuffet,
        custoTotal,
        receita: valorReceitaEvento()
    };
    eventosConfirmados.push(evento);
    alert("Reserva efetuada com sucesso.");
    menu();
}

function relatorio_operacionais(opcoes = {}) {
    if (opcoes.confirmarEvento) {
        confirmarEvento();
        return;
    }

    const quartosOcupados = quartos.filter(quarto => quarto.disponibilidade === "O");
    const ocupacao = (quartosOcupados.length / 20) * 100;
    const hospedesCadastrados = cadastrados.reduce(
        (total, item) => total + (Array.isArray(item) ? item.length : 1), 0
    );
    const receitaHospedagem = quartosOcupados.reduce((total, quarto) => total + numeroMoeda(quarto.total), 0);
    const receitaEventos = eventosConfirmados.reduce((total, evento) => total + numeroMoeda(evento.receita), 0);
    const receitaGeral = receitaHospedagem + receitaEventos;
    const custosEventos = eventosConfirmados.reduce((total, evento) => total + numeroMoeda(evento.custoTotal), 0);
    const percentual = ocupacao.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + "%";
    const linha = (rotulo, valor) => rotulo.padEnd(31, " ") + valor;

    const tabela = [
        "RELATORIO OPERACIONAL DO HOTEL",
        "-----------------------------------------------",
        linha("Reservas confirmadas", String(quartosOcupados.length)),
        linha("Quartos ocupados", quartosOcupados.length + "/20 (" + percentual + ")"),
        linha("Hospedes cadastrados", String(hospedesCadastrados)),
        linha("Eventos confirmados", String(eventosConfirmados.length)),
        "",
        "RECEITAS",
        linha("Hospedagem", formacao_monetaria(receitaHospedagem)),
        linha("Eventos", formacao_monetaria(receitaEventos)),
        linha("Total geral", formacao_monetaria(receitaGeral)),
        "",
        linha("Custos dos eventos", formacao_monetaria(custosEventos))
    ].join("\n");
    alert(tabela);
}

export { relatorio_operacionais };
