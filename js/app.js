// PALINDROMA O NO ?

let userWord = prompt('Inserisci una parola e ti mostro se palindroma o meno')
let userWordLen = userWord.length

// FUNCTION TO CHECK IF A WORD IS A PALINDROME 

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

// ALERT PER L'UTENTE

const pal = checkPalindromo(userWord);

if (pal == true) {
    alert('Palindromo')
}
else {
    alert('Non Palindromo')
}    

