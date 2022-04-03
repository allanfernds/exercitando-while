let space_folds = 0
let user_choice = ""

let spaceship_name = prompt('Digite o nome da nave')
user_choice = prompt(`Deseja entrar em dobra espacial?\n[1] SIM \n[2] NÂO`)

while (user_choice == '1') {
    space_folds += 1
    user_choice = prompt(`Deseja realizar a proxima espacial?\n[1] SIM \n[2] NÂO`)
}

alert("Nome: " + spaceship_name + "\nNumero de dobras: " + space_folds)