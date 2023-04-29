
let numero = prompt("ingrese número");
let flag = false;

for (let i = 2; i < numero; i++) {    
    if ( numero % i === 0) flag = true;    
}

if ( flag == true) document.getElementById("parrafo").innerHTML = "no es primo";
else document.getElementById("parrafo").innerHTML = "es primo";


