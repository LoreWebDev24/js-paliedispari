// PARI E DISPARI 

let pariORDispari = prompt('Scegli fra pari o dispari')

let userNumber = parseInt(prompt('Inserisci un numero:'))

let botNumber = Math.floor(Math.random() * 5);
console.log(botNumber)

let somma = userNumber + botNumber 




function checkPari(somma) {
    let isPari = true
    if (somma % 2 != 0 ) {
        isPari = false
    } 

    return isPari 
}

let checked = checkPari(somma)

if (checked == true && pariORDispari == 'pari') {
    alert ('Hai vinto')
} else if (checked == true && pariORDispari == 'dispari') {
    alert ('Hai perso')
}else if (checked == false && pariORDispari == 'dispari' ) {
    alert ('Hai vinto')
}else {
    alert ('Hai perso')
}