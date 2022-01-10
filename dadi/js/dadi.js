/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.*/
console.log('JS ok');

const userNumber = Math.floor((Math.random()) * 10);
const computerNumber = Math.floor((Math.random()) * 10);
console.log(computerNumber);
console.log(userNumber);

let message = '';

if (computerNumber > userNumber){
    message = 'Good luck next time!';
} else if (userNumber > computerNumber){
    message = 'You Win!';
} else if (userNumber === computerNumber){
    message ="Damn that's rare!";
}
// console.log(message);

if (!(computerNumber <= 6) || !(userNumber <= 6)){
    message = 'Number not valid, reload';
}
console.log(message);