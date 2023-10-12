// PALINDROMA O NO ?

// let userWord = prompt('Inserisci una parola e ti mostro se palindroma o meno')
// console.log(userWord)

// let userWordLen = userWord.length
// console.log (userWordLen)

// let userWordReverse = userWord.toReversed()
// console.log(userWordReverse)

let userWord = prompt('Inserisci una parola e ti mostro se palindroma o meno')
let reversed
let userWordLen = userWord.length

function chiediQualcosa(message) {
    const input = prompt(message);
    return input;
}

function contaFinoAN(n) {
    for (let index = 0; index < n; index++) {
        console.log(index);
    }
    return console.log();
}

function checkPalindromo(userWord) {
    let userWordLen = userWord.length;
    let isPalindromo = true;
    for (let i = 0; i < userWordLen / 2; i++) {
        const charFromBeginnig = userWord[i];
        const charFromEnd = userWord[(userWordLen - 1 - i)];
        if (charFromBeginnig !== charFromEnd) { 
            isPalindromo = false;
        }
    }
    return isPalindromo;
}

const pal = checkPalindromo(userWord);

if (pal == true) {
    alert('Palindromo')
}
else {
    alert('Non Palindromo')
}    

alertPalindromo(userWord);
