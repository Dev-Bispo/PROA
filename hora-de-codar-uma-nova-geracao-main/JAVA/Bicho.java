import java.sql.SQLOutput;
import java.util.Scanner;
import java.time.LocalTime;

class Bichopet{
    String nome;
    int nivelDeFome = 50;
    int nivelFelicidade = 50;
    int nivelDeCansaco = 0;
    int segundos = LocalTime.now().getSecond();
    int idadepet = 0;

    // Construtor para inicializar o nome do bicho
    public Bichopet(String nome) {this.nome = nome;}

    Thread passarTempo = new Thread(() -> {
        while(true){
            try{
                Thread.sleep(50000);
                idadepet += 1;
                nivelDeCansaco += 10;
                nivelFelicidade -= 3;
                nivelDeFome += 3;
                System.out.println(this.nome + " está ficando mais faminto com o passar do tempo.");
                System.out.println("Seu pet cresceu");

            }catch(InterruptedException e){
                Thread.currentThread().interrupt();
                break;
            }
        }

    });
    public void alimentar() {
        nivelDeFome -= 10;
        System.out.println(this.nome + " foi alimentado. O nível de fome diminuiu.");
    }

    public void brincar() {
        nivelFelicidade += 10;
        System.out.println(this.nome + " está brincando e se sentindo mais feliz.");
    }

    public void verificarStatus() {
        System.out.println("Status atual de " + this.nome + ":");
        System.out.println("Nível de fome: " + this.nivelDeFome);
        System.out.println("Nível de felicidade: " + this.nivelFelicidade);
        System.out.println("Nível de cansaço: " + this.nivelDeCansaco);
        System.out.println("Idade: " + this.idadepet);
    }



    public void cansaco(){
        nivelDeCansaco += 10;
        System.out.println(this.nome + " está ficando cansado");
    }

    public void Descansar(){
        int segundos_passado = segundos;
        if(nivelDeCansaco == 0){
            System.out.println(this.nome + " não precisa descançar");
        }
        while(nivelDeCansaco > 0){
            try{
                Thread.sleep(1000);
                nivelDeCansaco -= 10;
                System.out.println(this.nome + "está descansando");

                if(nivelDeCansaco < 0){
                    nivelDeCansaco = 0;
                }
            }catch(InterruptedException e){
                Thread.currentThread().interrupt();
                return;
            }
            if(segundos > segundos_passado){
                nivelDeCansaco -= 10;
                segundos_passado += 1;
            }else{
                System.out.println(this.nome + " descansou");
            }
        }




    }
    public void Vitoria(){
        System.out.println("Parabéns!! Você conseguiu fazer com que o seu pet alcançasse o idade máxima");
    }

    public void Perdeu(){
        System.out.println("Infelizmente o seu pet faleceu. Tenha mais cuidado com o próximo");
    }
}
