
let numero1 = parseInt(prompt("ingrese numero 1"));
let numero2 = parseInt(prompt("ingrese numero 2"));
let numero3 = parseInt(prompt("ingrese numero 2"));

if ( numero1 > numero2 && numero1 > numero3 ) document.getElementById("parrafo1").innerHTML = "el mayor es " + numero1;

else if ( numero2 > numero1 && numero2 > numero3 ) document.getElementById("parrafo1").innerHTML = "el mayor es " + numero2;

else document.getElementById("parrafo1").innerHTML = "el mayor es " + numero3; 