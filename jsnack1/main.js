// JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

$(document).ready(function(){

    var bici = [

        {
            'nome': 'Colnago',
            'peso':  7,
        },
        {
            'nome': 'Wilier',
            'peso':  3,
        },
        {
            'nome': 'Cannondale',
            'peso':  9,

        },

    ]

    var peso_iniziale = bici[0].peso
    var bici_piu_leggera = bici[0]


    for (var i = 0; i < bici.length; i++) {

            var bici_corrente = bici[i]

            var peso_corrente = bici[i].peso


        if (peso_corrente < peso_iniziale ) {

            peso_iniziale = peso_corrente

            bici_piu_leggera = bici_corrente
        }

    }


    console.log('Il peso della bici è: ' + peso_iniziale);
    console.log('Il nome della bici più leggera è: ' + bici_piu_leggera.nome);
})
