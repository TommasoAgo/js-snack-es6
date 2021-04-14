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