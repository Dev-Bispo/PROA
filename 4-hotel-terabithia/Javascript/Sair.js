import { menu } from "./Menu.js"
import { nomeUsuario } from "./Hotel.js"
function sair() {
    let confirma = prompt(`Você deseja sair?(s/n)`);
    if (confirma.toLocaleLowerCase() == "s") {
        window.close();
        alert(`Muito obrigado e até logo, ${nomeUsuario}.`)


    } else if (confirma.toLocaleLowerCase() == "n") {
        menu();
    } else {
        sair()
    }
}
export { sair }