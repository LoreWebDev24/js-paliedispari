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

for (let i = 0; i < userWordLen; i++) {
    const char = userWord[i]
    console.log(char)
}
