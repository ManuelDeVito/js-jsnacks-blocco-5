// JSnack2: Creare un array di nomi e chiedere all'utente due numeri.
// Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

$(document).ready(function(){

    var nomi = ['francesca', 'giorgia', 'manuel', 'luca', 'davide', 'tommaso', 'laura', 'roberto'];

    var primo_numero = parseInt(prompt('Inserisci un numero compreso tra 0 e 9'));
    var secondo_numero = parseInt(prompt('Inserisci un numero compreso tra 0 e 9'));


    var array_utente = [];

    for (var i = primo_numero; i <= secondo_numero; i++) {

        var nome = nomi[i]

        array_utente.push(nome);

    }

    console.log(array_utente);
})
