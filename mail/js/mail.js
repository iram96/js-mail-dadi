/* Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.
*/
console.log('JS ok');

const premiumEmails = ['carlo@gmail.com', 'giovanni@gmail.com', 'marco@gmail.com', 'daniele@gmail.com', 'filippo@gmail.com', 'umberto@gmail.com'];

const userEmail = prompt('Enter your Email').trim();

let message = '';

if (userEmail === premiumEmails){
    message = 'Welcome back!';
} else {
    message = "Hey, I don't know you!";
}
console.log(message);