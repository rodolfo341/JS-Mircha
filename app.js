
let num = parseInt(prompt("Ingrese numero a comprobar"));
let flag = false;

if ( num % 2 === 0) {
    document.getElementById("parrafo1").innerHTML = "El número " + num + " es divisible por 2";
    flag = true;
}else {
    document.getElementById("parrafo1").innerHTML = "El número " + num + " no es divisible por 2";
}

if ( num % 3 === 0) {
    document.getElementById("parrafo2").innerHTML = "El número " + num + " es divisible por 3";
    flag = true;
}else {
    document.getElementById("parrafo2").innerHTML = "El número " + num + " no es divisible por 3";
}

if ( num % 5 === 0) {
    document.getElementById("parrafo3").innerHTML = "El número " + num + " es divisible por 5";
    flag = true;
}else {
    document.getElementById("parrafo3").innerHTML = "El número " + num + " no es divisible por 5";
}

if ( num % 7 === 0) {
    document.getElementById("parrafo4").innerHTML = "El número " + num + " es divisible por 7";
    flag = true;
}else {
    document.getElementById("parrafo4").innerHTML = "El número " + num + " no es divisible por 7";
}

if ( flag === false ){
    document.getElementById("parrafo5").innerHTML = "El numero " + num + " no es divisible por ninguno ";
}
