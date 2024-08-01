//---------EJERCICIO 1------------------
//Declarando mi variable con un numero inicial
let miVariable = 35;

//Impriendo el valor de mi variable en la consola
console.log(miVariable);

//---------EJERCICIO 2------------------
//Creamos la funcion llamada 'doblarNumero'
function doblarNumero(numero){
  return numero * 2;
}

//Impriendo en la consola
let resultado = doblarNumero(10);
console.log(resultado);

//---------EJERCICIO 3------------------
//Creando el bucle 'for'
for(let i=1; i<=10; i++){
  //Impriendo el resultado en la consola
  console.log(i);
} 

//---------EJERCICIO 4------------------
//Creando una funcion para que sume los numeros del arreglo
function sumaNumeros(arreglo){
  let suma = 0;
  for(var i=0; i<arreglo.lenght; i++){
    suma+= arreglo[i]
  }
  return suma;
}

//Creamos el arreglo con los numeros que vamos a sumar
let numeros = [1 , 2 , 3 , 4 , 5];

//Creamos una variable total y lo imprimimos en la consola
let total = sumaNumeros(numeros);
console.log(resultado);

//---------EJERCICIO 5------------------
function verificarVariable(variable) {
  if(variable === null){
    console.log("Este valor de variable es 'NULL'.");
  } else if(variable === undefined){
    console.log("Este valor de variable es 'UNDEFINED'.");
  } else {
    console.log("Este valor de variable es 'DEFINIDO' : ", variable);
  }
}

let variableDefinida = 45;
verificarVariable(variableDefinida);
let variableNula = null;
verificarVariable(variableNula);
let variableIndefinida = undefined;
verificarVariable(variableIndefinida);

//---------EJERCICIO 6------------------
function contarCaracteres(cadena){
  return cadena.length;
}

let texto = "Andres Llerena";
let numeroDeCaracteres = contarCaracteres(texto);
console.log(numeroDeCaracteres);

//---------EJERCICIO 7------------------
let persona = {
  nombre : 'Andres',
  apellido : 'Llerena',
  edad : 30,
  distrito : 'Comas'
};

console.log("Mi nombre es: "+ persona.nombre);
console.log("Mi apellido es: "+ persona.apellido);
console.log("Mi edad es: "+ persona.edad);
console.log("Vivo en el distrito de: "+ persona.distrito);

//---------EJERCICIO 8------------------
function filtrarNumeros(arreglo){
  let numerosPares= [];
  
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] % 2 === 0){
      numerosPares.push(arreglo[i]);
    }
  }
  return numerosPares;
}

let numerosArreglo = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15];

let numerosParesTotal = filtrarNumeros(numerosArreglo);
console.log(numerosParesTotal);

//---------EJERCICIO 9------------------
let contador = 0;

while(contador <= 4){
  contador++;
  console.log(contador);
}

//---------EJERCICIO 10------------------
function longitudesDeCadenas(arreglo){
  let longitudes = arreglo.map(function(cadena){
    return cadena.length;
  });
  return longitudes;
}

let cadenas = ['manzanas', 'platanos' , 'pera'];
let longitudes = longitudesDeCadenas(cadenas);
console.log(longitudes);

//---------EJERCICIO 11------------------
function verificarNumero(numero){
  if(numero > 0){
    console.log("El numero es positivo");
  } else if (numero < 0){
    console.log("El numero es negativo");
  } else {
    console.log("El numero es cero")
  }
}

let numero = 57;
verificarNumero(numero);

numero = -12;
verificarNumero(numero);

numero = 0;
verificarNumero(numero)

//---------EJERCICIO 12------------------
function mayuscula(cadena){
  if(cadena.length === 0) return cadena;
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

let textoMayuscula = 'hola mundo';
console.log(mayuscula(textoMayuscula));

//---------EJERCICIO 13------------------
function contarLetra(cadena, letra) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === letra) {
            contador++;
        }
    }
    return contador;
}

let cadena = "mi nombre es andres";
let letra = "o";
let cantidad = contarLetra(cadena, letra);
console.log(`La letra '${letra}' aparece ${cantidad} veces en la cadena '${cadena}'.`);


//---------EJERCICIO 14------------------
function mayorDeDos(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

let numero1 = 5;
let numero2 = 10;
let mayor = mayorDeDos(numero1, numero2);
console.log(`El mayor de los dos números es: ${mayor}`);

//---------EJERCICIO 15------------------
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let numeroPrimo = 29;
if (esPrimo(numeroPrimo)) {
    console.log(`${numeroPrimo} es un número primo.`);
} else {
    console.log(`${numeroPrimo} no es un número primo.`);
}


//---------EJERCICIO 16------------------
function esPar(numero) {
    return numero % 2 === 0;
}

let numeroPar = 4;
if (esPar(numeroPar)) {
    console.log(`${numeroPar} es un número par.`);
} else {
    console.log(`${numeroPar} es un número impar.`);
}

//---------EJERCICIO 17------------------
function ordenarNombres(nombres) {
    return nombres.sort();
}

let nombres = ["Carlos", "Ana", "Pedro", "Beatriz", "Luis"];
let nombresOrdenados = ordenarNombres(nombres);
console.log("Lista de nombres ordenados alfabéticamente:");
console.log(nombresOrdenados);

//---------EJERCICIO 18------------------
function formatearPersona(persona) {
    return `Nombre: ${persona.nombre}, Edad: ${persona.edad}`;
}

let persona1 = {
    nombre: "Juan",
    edad: 30
};

let resultado1 = formatearPersona(persona1);
console.log(resultado1); 

//---------EJERCICIO 19------------------
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

let resultado2 = lanzarDado();
console.log(`El resultado del lanzamiento del dado es: ${resultado2}`);


//---------EJERCICIO 20------------------
function obtenerDiaDeLaSemana(fecha) {
    const diasDeLaSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const dia = fecha.getDay();
    return diasDeLaSemana[dia];
}

let fecha = new Date("2024-08-01");
let diaDeLaSemana = obtenerDiaDeLaSemana(fecha);
console.log(`El día de la semana correspondiente a la fecha es: ${diaDeLaSemana}`);