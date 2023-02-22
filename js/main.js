/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/ 

const priceKm = '0.21';

let km = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
//console.log(km);

let age = parseInt(prompt('Quanti anni hai?'));
//console.log(age);

let price = km * priceKm;
//console.log(price);

if (age <= 18) {
    document.getElementById('sconto').innerHTML = `Hai diritto ad uno sconto del 20%`
    price = (price - (price * 0.2)).toFixed(2)
}
else if (age >= 65) {
    document.getElementById('sconto').innerHTML = `Hai diritto ad uno sconto del 40%`
    price = (price - (price * 0.4)).toFixed(2)
}
else {
    costo = price;
}
document.getElementById('costo').innerHTML = `Il prezzo del biglietto è: ${price} €`