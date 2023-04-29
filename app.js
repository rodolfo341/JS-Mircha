
let numero1 = parseInt(prompt("ingrese numero 1"));
let numero2 = parseInt(prompt("ingrese numero 2"));

if ( numero1 > numero2 ) document.getElementById("parrafo1").innerHTML = numero1 + " > " + numero2; 
else if ( numero2 > numero1 ) document.getElementById("parrafo1").innerHTML = numero2 + " > " + numero1; 
else document.getElementById("parrafo1").innerHTML = "Son iguales"; 