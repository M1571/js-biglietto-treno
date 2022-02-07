var km = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(km);

var age = parseInt(prompt('Quanti anni hai?'));
console.log(age);

// --------------------------------------------

var ticket = (km * 0.21);
    
if (age < 18) {
    ticket = ticket * 0.8;
}

else if (age > 65) {
    ticket = ticket * 0.6;
}

// --------------------------------------------

let price = "Il prezzo del tuo biglietto è " + ticket;
console.log (price);