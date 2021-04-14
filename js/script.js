// 1 Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Creo un Array di biciclette
const biciclette = [
    {
        nome : 'Venom',
        peso : 6
    },
    {
        nome : 'Graziella',
        peso : 10
    },
    {
        nome : 'Wanda',
        peso : 12
    },
    {
        nome : 'Short',
        peso : 8
    },
    {
        nome : 'Grosseto',
        peso : 9
    }
]

// Imposto una variabile bicicletta leggera come oggetto vuoto
let biciclettaLeggera = biciclette[0];
// Faccio un loop for per leggere l'array di biciclette
for ( let i = 0; i < biciclette.length; i++ ) {
    let thisBici = biciclette[i];
    // Faccio un if per trovare quale delle biciclette nell'Array ha peso minore
    if ( thisBici.peso < biciclettaLeggera.peso ) {
        biciclettaLeggera = thisBici;
    }
}

// Destrutturo l'oggetto biciclettaLeggera
const { nome, peso } = biciclettaLeggera;

// Adesso che ho le variabili posso stampare a schermo usando un innerHTML

// Prendo il div dall'HTML
let elementoBici = document.getElementById('bici-leggera')

// Stampo
elementoBici.innerHTML = `  <ul>
                                <li>La bici più leggera è ${nome}</li> 
                                <li>e il suo peso è di ${peso} KG</li>
                            </ul>`;




// 2 Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array 
// i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo un Array con squadre di calcio 
const squadre = [
    {
        nome : 'AS Roma',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        nome : 'Sassuolo',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        nome : 'Atalanta',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        nome : 'Milan',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        nome : 'Napoli',
        punti_fatti : 0,
        falli_subiti : 0
    }
]

// Creo un ciclo for per leggere tutti gli oggetti dell'Array
const squadreNomeFalli = [];
for ( let i = 0; i < squadre.length; i++ ) {
    let thisSquadra = squadre[i];
    // Inserisco i valori random nelle proprietà punti fatti e falli subiti
    thisSquadra.punti_fatti = getRandomNumber(50, 100);
    thisSquadra.falli_subiti = getRandomNumber(80, 120);

    // Tramite destrutturazione ottengo le variabili per nome e falli subiti
    let {nome, falli_subiti} = thisSquadra;
    
    // Creo la squadra che andrà a popolare il nuovo Array
    let squadraNomeFalli = {
        nome,
        falli_subiti
    }

    // Pusho per ogni iterazione una squadra nell'Array vuoto
    squadreNomeFalli.push(squadraNomeFalli);
}

// Stampo su console
console.log(squadreNomeFalli);

// Functions

// Creo una funzione che generi numeri random per punti fatti e falli subiti
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }