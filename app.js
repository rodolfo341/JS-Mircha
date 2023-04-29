
const array = [];
let j = 0;
let num = parseInt(prompt("Ingrese numero a comprobar"));

for (let i = 2; i < num; i++) {
    
    if ( num % i === 0 ) {
        array[j] = i;
        j++;
    }
    
}

document.getElementById("parrafo").innerHTML = "Los divisores de " + num + " son " + array;