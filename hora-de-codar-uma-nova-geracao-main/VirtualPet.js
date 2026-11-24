const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class VirtualPet {
    constructor(nome) {
        this.nome = nome;
        this.nivelDeFome = 50;
        this.nivelFelicidade = 50;
        this.cansaco = 0;
        this.idade = 0;
    }

    alimentar() {
        this.nivelDeFome = Math.max(0, this.nivelDeFome - 10);
        console.log(`${this.nome} foi alimentado. A fome diminuiu.`);
    }

    brincar() {
        this.nivelFelicidade = Math.min(100, this.nivelFelicidade + 10);
        this.cansaco = Math.min(100, this.cansaco + 10);
        console.log(`${this.nome} brincou e ficou mais feliz, mas também mais cansado.`);
    }

    async descansar() {
        console.log(`${this.nome} está descansando...`);
        await sleep(1000);
        this.cansaco = Math.max(0, this.cansaco - 10);
        console.log(`${this.nome} descansou. Cansaço: ${this.cansaco}.`);
    }

    verificarStatus() {
        console.log(`\nStatus de ${this.nome}:`);
        console.log(`Fome: ${this.nivelDeFome}`);
        console.log(`Felicidade: ${this.nivelFelicidade}`);
        console.log(`Cansaço: ${this.cansaco}`);
        console.log(`Idade: ${this.idade}`);
    }

    async passarTempo() {
        await sleep(5000); // Simula a passagem de tempo
        this.nivelDeFome = Math.min(100, this.nivelDeFome + 3);
        this.nivelFelicidade = Math.max(0, this.nivelFelicidade - 3);
        this.cansaco = Math.min(100, this.cansaco + 10);
        this.idade += 1;
        console.log(`${this.nome} ficou com mais fome e cansaço, e envelheceu um ano.`);
    }

    perdeu() {
        return this.nivelDeFome >= 100 || this.cansaco >= 100 || this.nivelFelicidade <= 0;
    }
}

async function main() {
    const terminal = readline.createInterface({ input, output });
    try {
        console.log('Bem-vindo ao Simulador de Animal de Estimação Virtual!');
        const nome = (await terminal.question('Digite o nome do seu animal: ')).trim() || 'Baltazar';
        const pet = new VirtualPet(nome);
        let encerrado = false;

        while (!encerrado) {
            pet.passarTempo();
            console.log(`\nEscolha uma ação para ${nome}:`);
            console.log('1. Alimentar');
            console.log('2. Brincar');
            console.log('3. Verificar status');
            console.log('4. Descansar');
            console.log('5. Sair');
            const escolha = (await terminal.question('Opção: ')).trim();

            switch (escolha) {
                case '1': pet.alimentar(); break;
                case '2': pet.brincar(); break;
                case '3': pet.verificarStatus(); continue;
                case '4': await pet.descansar(); break;
                case '5': encerrado = true; continue;
                default: console.log('Opção inválida. Tente novamente.'); continue;
            }

            
            if (pet.perdeu()) {
                pet.verificarStatus();
                console.log('Fim de jogo: seu pet não conseguiu continuar.');
                encerrado = true;
            } else if (pet.idade >= 50) {
                pet.verificarStatus();
                console.log('Parabéns! Seu pet chegou aos 50 anos.');
                encerrado = true;
            }
        }
        console.log('Saindo do simulador. Até mais!');
    } finally {
        terminal.close();
    }
}

main().catch((erro) => {
    console.error('Erro ao executar o simulador:', erro);
    process.exitCode = 1;
});
