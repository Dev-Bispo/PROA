import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Bem-vindo ao Simulador de Animal de Estimação Virtual!");

        System.out.println("Digite o nome do seu animal de estimação:");
        String nomePet = entrada.nextLine();

        Bichopet pet = new Bichopet(nomePet);// Cria um novo animal de estimação com o nome fornecido
        pet.passarTempo.start();
        if(pet.idadepet == 50){
            pet.passarTempo.interrupt();
            pet.Vitoria();
        }
        boolean continuar = true;

        while (continuar) {
            System.out.println("\nEscolha uma ação:");
            System.out.println("1. Alimentar " + pet.nome);
            System.out.println("2. Brincar com " + pet.nome);
            System.out.println("3. Verificar o status de " + pet.nome);
            System.out.println("4. Descançar o " + pet.nome);
            System.out.println("5. Sair");

            int escolha = entrada.nextInt();

            switch (escolha) {
                case 1:
                    pet.alimentar();
                    break;
                case 2:
                    pet.brincar();
                    pet.cansaco();
                    break;
                case 3:
                    pet.verificarStatus();
                    break;
                case 4:
                    pet.Descansar();
                    break;
                case 5:
                    System.out.println("Saindo do Simulador de Animal de Estimação Virtual. Adeus!");
                    return;
                default:
                    System.out.println("Escolha inválida. Tente novamente.");
            }
            if(pet.nivelDeFome == 100 || pet.nivelFelicidade == 0 || pet.nivelDeCansaco == 100){
                pet.Perdeu();
                pet.passarTempo.interrupt();
                break;
            }

        }



        entrada.close();
    }
}