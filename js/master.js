// PARI E DISPARI 

// SEZIONE DEI PROMPT E GENERAZIONE DEL NUMERO RANDOM

let pariORDispari = prompt('Scegli fra pari o dispari')

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5:'))

let botNumber = Math.floor(Math.random() * 5);
console.log(botNumber)

let somma = userNumber + botNumber 

// FUNZIONE CHE CONTROLLA SE UN NUMERO E' PARI'

function checkPari(somma,isPari) {
    let isPari = true
    if (somma % 2 != 0 ) {
        isPari = false
    } 

    return isPari 
}

let checked = checkPari(somma,isPari)

// SEZIONE CHE DECIDE ED ALLERTA SE L'UTENTE HA VINTO

if (checked == true && pariORDispari == 'pari') {
    alert ('Hai vinto')
} else if (checked == true && pariORDispari == 'dispari') {
    alert ('Hai perso')
}else if (checked == false && pariORDispari == 'dispari' ) {
    alert ('Hai vinto')
}else {
    alert ('Hai perso')
}