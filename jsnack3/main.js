// JSnack3: A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.


$(document).ready(function(){

    var oggetti = [

        {
            'nome': 'Orologio',
            'marca': 'Rolex',
            'prezzo': 5000
        },
        {
            'nome': 'Anello',
            'marca': 'Calvin klein',
            'prezzo': 2000
        },
        {
            'nome': 'Collana',
            'marca': 'Swarovski',
            'prezzo': 5000
        },

    ];

    var oggetti_copia = [];

    for (var i = 0; i < oggetti.length; i++) {

        var oggetto_corrente = oggetti[i];

        var nuovo_oggetto_copia = {

            'nome' : oggetto_corrente['nome'],
            'marca' : oggetto_corrente['marca'],
            'prezzo' : oggetto_corrente['prezzo'],
            'peso' : 90

        };

        oggetti_copia.push(nuovo_oggetto_copia);
    }

    // console.log('oggetti originali');
    // console.log(oggetti);
    // console.log('oggetti originali copia');
    // console.log(oggetti_copia);

    var alfabeto = 'abcdefghijklmnopqrstuvwxyz';

    var posizione = getRndInteger(0, 25);
    console.log(posizione);

    var lettera_casuale = alfabeto.charAt(posizione);

    console.log(lettera_casuale);



function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}


});
