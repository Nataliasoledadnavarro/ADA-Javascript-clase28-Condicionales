// // Agarrar dos numeros, sumarlos entre si, dividirlos el resultado por dos,
// // multiplicar el resultado por 10

// const sumar = (num1, num2) => {
//   return num1 + num2;
// }

// const dividir = (num1, num2) => {
//   return num1 / num2;
// }

// const multiplicar = (num1, num2) => {
//   return num1 * num2;
// }

// const calculoComplicado = (num1, num2) => {
//   const suma = sumar(num1, num2)
//   const division = dividir(suma, 2)
//   const multiplicacion = multiplicar(division, 10)

//   return multiplicacion;
// }

// CONDICIONALES

// operadores aritmeticos + - * /
// operador de asignacion =

// Operadores relacionales

// 8 < 10; // true

// const esMayorDeEdad = edadDelUsuario > 18;

// 18 >= 18 // true
// 18 > 18 // false

// 18 <= 90  // true
// 18 <= 5 // false

// // operadores de igualdad
// edadDelUsuario === 25; // true

// ==

// ===

// const numero = "5";

// const esIgualA = numero == 5;
// const esIgualAEstricta = numero === 5;

// console.log(esIgualA)
// console.log(esIgualAEstricta)

// == // compara valor
// === // compara valor y tipo

// != // desigualdad simple
// !== // desigualdad estricta

// 5 != 6 // true
// 5 != 5 // false
// "5" != 6 // true
// "5" != 5 // false --> comparando solo el valor (no se fija en el tipo)

// 5 !== 6 // true
// 5 !== 5 // false
// "5" !== 6 // true
// "5" !== 5 // true --> compara valor Y tipo

// operador de negacion
// const esCaroNerd = false;
// console.log(!esCaroNerd) // true

// estructuras condicionales
// sentencia if

// const edadDelUsuario = prompt("Cual es tu edad")

// if (edadDelUsuario > 18) {
//  alert("Bienvenide a Las Vegas")
//  alert("Ud puede comprar alcohol y pornografía")
//  alert("y drogas")
// }

// si (pasa tal cosa) { (entonces)
//  hacemos tal cosa
// }

// Club de los No Homeros

// Preguntarle al usuario su nombre
// Si el nombre del usuario NO es Homero, tenemos que mostrar
// un cartel que diga "Bienvenide a la web"

// si, si no

// let nombre = prompt("Ingrese su nombre");

// if (nombre !== "Homero") { // true - false
//   alert("Bienvenide al club")
// }
// else {
//   alert("Ud no puede ingresar")
// }

// Declarar una funcion suma que reciba dos numeros
// y si el primer numero es menor a 10, retorne la suma
// Y si no, retorne el string "Numeros invalidos"

/*const sumar = (num1, num2) => {

  if (num1 < 10) {
    return num1 + num2
  }
  else {
    return "Numeros invalidos"
  }

}


const sumaValida = sumar(5, 5)
console.log(sumaValida)

const sumaInvalida = sumar(15, 5)
console.log(sumaInvalida)*/

/*const nombreDelUsuario = prompt("¿Cuál es tu nombre?");

if(nombreDelUsuario !== "Homero") {
  alert("Bienvenide a la Web");
}

else{
  alert("Homero, no podés ingresar");
  
}*/

// EJERCICIO 1 //
/*const puedeVerPelicula = (edad, tieneAutorizacion) => {
  if (edad >= 15 || tieneAutorizacion === true){
    return true;
  }
  else{ return false;
      }
}*/

// EJERCICIO 2 //
/*const estaEnRango = (valor, minimo, maximo) => {
  if (valor >= minimo && valor <= maximo) {
    return true
  }
  else { return false}
}*/

// EJERCICIO 3 //

/*let puedeAvanzar = (color) => {
  return color === "verde";
}*/

// EJERCICIO 4 //

/*const esVocal = (letra) => {
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") { return true}
  else { return false}
}*/

//EJERCICIO 5 //

/*const esConsonante = (letra) =>{
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    return false
  }
  else { return true
      }
}

console.log(esConsonante("d"));

console.log(esConsonante("n"));

console.log(esConsonante("e"));*/

// EJERCICIO 6 //

/*const puedeRenovarCarnet = ( pasoTest, tieneMultasImpagas, pagoImpuestos) => {
  if (pasoTest === true && tieneMultasImpagas === false && pagoImpuestos === true) { return true}
  
  else { return false}
}*/

// EJERCICIO 7 //

/*const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
  
  if (asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada === true){
    return true
  }
  
  else { return false}
}*/

// EJERCICIO 8 //

/*const esParOImpar = (numero) => {
  if (numero % 2 === 0) { 
  return "par"}
  
  else{ return "impar"}
}*/

// EJERCICIO 9 //
/*const esPositivoONegativo = (numero) => {
  
  if (numero >= 0){return "positivo"}
      
  else{ return "negativo"}
}
      
let resultadoUno = esPositivoONegativo(3);

let resultadoDos = esPositivoONegativo(-5);*/

// EJERCICIO 10 //

/*const avanzarSemaforo = (color) => {
  if (color === "verde"){
    return "amarillo"
  }
    
   else if (color === "amarillo") {
     return "rojo";
   }
  
  else if (color === "rojo") {
    return "verde";
  }
}*/

// EJERCICIO 11 //

/*const obtenerSensacion = (temperatura) => {
  if (temperatura < 0){return "¡Está helando!"};
  
  if (temperatura >= 0 && temperatura < 15) { return "¡Hace frío!"};
  
  if (temperatura >= 15 && temperatura < 25){ return "Está lindo"}
  
  if (temperatura >= 25 && temperatura < 30) { return "Hace calor"}
  
  if (temperatura >= 30) { return "¡Hace mucho calor!"}
}*/

// EJERCICIO 12 //

/*const obtenerNota = (puntaje) => {
  if (puntaje < 6) { return "Desaprobado"};
  
  if (puntaje >= 6 && puntaje < 7) { return "Regular"};
  
  if (puntaje >= 7 && puntaje < 8) { return "Bueno"};
  
  if (puntaje >= 8 && puntaje < 10) { return "Muy bueno" };
  
  if (puntaje === 10) { return "Excelete"}
  
  if (puntaje < 0 || puntaje > 10) { return "Puntaje inválido"}; 
}*/

// ejercicio 13 mumuki//
/*

const jugarPiedraPapelTijera = (jugadorUno, jugadorDos) => {
  if (jugadorUno === "tijera" && jugadorDos === "piedra") {
    return "¡Ganó piedra!"
  } else if (jugadorUno === "piedra" && jugadorDos === "tijera") {
    return "¡Ganó piedra!"
  } else if (jugadorUno === "papel" && jugadorDos === "piedra") {
    return "¡Ganó papel!"
  } else if (jugadorUno === "piedra" && jugadorDos === "papel") {
    return "¡Ganó papel!"
  } else if (jugadorUno === "papel" && jugadorDos === "tijera") {
    return "¡Ganó tijera!"
  } else if (jugadorUno === "tijera" && jugadorDos === "papel") {
    return "¡Ganó tijera!"
  } else if (jugadorUno === "piedra" && jugadorDos === "piedra") {
    return "¡Empate!"
  } else if (jugadorUno === "papel" && jugadorDos === "papel") {
    return "¡Empate!"
  } else if (jugadorUno === "tijera" && jugadorDos === "tijera") {
    return "¡Empate!"
  }

  else {return "Valor incorrecto"}
}
*/

// EJERCICIO en clase //

const jugarPiedraPapelOTijera = () => {
  let nombreJugadorUno = prompt("Jugador/a 1: Escribí aquí tu nombre!");
  let nombreJugadorDos = prompt("Jugador/a 2: Escribí aquí tu nombre!");

  let usuarioUno = prompt(nombreJugadorUno + " : ¿Piedra, papel o tijera?");

  let usuarioDos = prompt(nombreJugadorDos + " : ¿Piedra, papel o tijera?");

  if (usuarioUno === "tijera" && usuarioDos === "piedra") {
    return alert("Ganó " + nombreJugadorDos);
  } else if (usuarioUno === "piedra" && usuarioDos === "tijera") {
    return alert("Ganó " + nombreJugadorUno);
  } else if (usuarioUno === "papel" && usuarioDos === "piedra") {
    return alert("Ganó " + nombreJugadorUno);
  } else if (usuarioUno === "piedra" && usuarioDos === "papel") {
    return alert("Ganó " + nombreJugadorDos);
  } else if (usuarioUno === "papel" && usuarioDos === "tijera") {
    return alert("Ganó " + nombreJugadorDos);
  } else if (usuarioUno === "tijera" && usuarioDos === "papel") {
    return alert("Ganó " + nombreJugadorUno);
  } else if (usuarioUno === "piedra" && usuarioDos === "piedra") {
    return alert("Empataron!");
  } else if (usuarioUno === "papel" && usuarioDos === "papel") {
    return alert("Empataron!");
  } else if (usuarioUno === "tijera" && usuarioDos === "tijera") {
    return alert("Empataron!");
  } else {
    alert("Valor Incorrecto");
  }
};

jugarPiedraPapelOTijera();

jugarPiedraPapelOTijera();

jugarPiedraPapelOTijera();
