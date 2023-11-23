let opciones = ["Piedra","Papel","Tijera"];
function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3);
    return opciones[randomizer]
}

function getPlayerChoice() {
    let valido = false;
    while(valido === false){
        let entrada = prompt("Elija entre Piedra, Papel o Tijera: ")
        let formateado = entrada.charAt(0).toUpperCase() + entrada.slice(1).toLowerCase();
        if(formateado === "Piedra" || formateado === "Papel" || formateado === "Tijera" ){
            valido === true;
            return formateado    
        }else{
            console.log("Ingrese una opción valida!")
        } 
    }
}
let playerScore = 0;
let computerScore = 0;

function PlayRound(){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log("Jugador elige: "+playerSelection);
    console.log("Computadora elige: "+computerSelection);

    if(computerSelection == "Piedra"){
        if(playerSelection === "Tijera"){
            computerScore++;
            return "Haz perdido! Piedra rompe tijera."

        } else if(playerSelection === "Papel"){
            playerScore++;
            return "Haz ganado! Papel cubre piedra."
        } else{
            return "Empate! Ambos han elegido piedra"
        }        
    } else if(computerSelection == "Tijera"){
        if(playerSelection === "Piedra"){
            playerScore++;
            return "Haz ganado! Piedra rompe tijera."
        } else if(playerSelection === "Papel"){
            computerScore++;
            return "Haz perdido! Tijera corta papel."
        } else{
            return "Empate! Ambos han elegido tijera"
        }   
    } else{
        if(playerSelection === "Tijera"){
            playerScore++;
            return "Haz ganado! Tijera corta papel."
        } else if(playerSelection === "Piedra"){
            computerScore++;
            return "Haz perdido! Papel cubre piedra."
        } else{
            return "Empate! Ambos han elegido papel"
        }   
    }
}

function game(){
    let counter = 0;
    do {
        console.log(PlayRound())    
        console.log("Puntajes: \nJugador: "+playerScore+"\nComputadora: "+computerScore)
        counter++
    } while (counter <5);
    if(playerScore==3){
        return "Jugador gana!!!"
    }else if(computerScore==3){
        return "Computadora gana!!!"
    }else{
        return "Empatados. Nadie gana!!"
    }
}

console.log(game())