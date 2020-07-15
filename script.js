//Ejercicio #1

//let numero = parseFloat(prompt('Ingrese un año'));

//if ((numero %100 !=0) && (numero %4==0) || (numero %400==0)) {
    //console.log('El año es bisiesto');
//}else{
    //console.log('El año NO es bisiesto');
//}

//Ejercicio #2
//let numero = parseFloat(prompt('Ingrese un numero'));
//let suma = 0;
//let contador = 1;
//while (contador <= numero) {
    //suma += contador;
    //console.log(contador);
    //contador++;
//}
//console.log(`El resultado es: ${suma}`);



//Ejercicio #3

//let ingreso = prompt('Ingrese una línea de texto').split('');
//console.log(ingreso);
//ingreso.reverse();
//console.log(ingreso.join(''));

//Ejercicio #4

//let texto = prompt('Ingrese un texto');
//let caracter = prompt('ingrese un caracter');
//let arreglo = [];

//for (let i = 0; i < texto.length; i++) {
    //if (texto[i] === caracter) {
        //arreglo.push(i);
    //}
    
//}
//console.log(`El caracter ${caracter} se repite:`, arreglo.length, 'veces en el texto');

//Ejercicio #5

let ingreso = parseFloat(prompt('Adivine el número secreto del 1 al 100'));
let contador = 0 && 1;
let secreto = 20;
let cero = 0;


    while (ingreso != secreto && ingreso != cero ) {
        if (ingreso > secreto) {
            console.log('El número que ingresó es mayor al número secreto')
        }else{
            console.log('El número que ingresó es menor al número secreto')
        }
        ingreso = parseFloat(prompt('Adivine el número secreto del 1 al 100'));
    }
    console.log('Adivinaste!');

//Ejercicio #6

//let pregunta = parseFloat(prompt('Ingrese un número'));

//if (pregunta %2 != 0) {
    //console.log('El número es primo');
//}else{
    //console.log('El número no es primo');
//}

//Ejercicio #7

//let texto = prompt('Ingrese un texto').split(' ');

//let adjunto = texto.join('');
//console.log(adjunto);

