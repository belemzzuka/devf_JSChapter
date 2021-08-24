/*
console.log("Hola mundo")
console.log(2+2)
console.log(3>1)

alert("ALERTA ALERTA")
console.log("Hello, tu nombre es", prompt("Dime tu nombre"), "... Adios.")

var nombre = "Belem";
var nombre2 = 'Belemzzuka';
console.log(nombre,nombre2);

var edad = 28;
var temperatura = 26.5;
var ejemplo = -500;
console.log("Mi edad es ", edad, ". Y mi temperatura es: ", temperatura, ". Un número negativo es: ", ejemplo)

// BOOLEANS
var ejemplob = true;
var ejemploc = false;

//Operaciones
console.log(2+2);
console.log(10-2);
console.log(5*5);
console.log(50/10);
console.log(10%3);
console.log(3**3);

console.log(edad+temperatura);

var var1 = 3;
var var2 = "3";

console.log(var1 == var2);
console.log(var1 === var2);
console.log(var1 !== var2);


//Semaforo
var estadoSemaforo = prompt("Dame un color:")
var verde = "verde";
var amarillo = "amarillo";
var rojo = "rojo";
var estadoSemaforo = "VErde".toLowerCase();

if (estadoSemaforo == "verde"){
    console.log("Puedes avanzar");
} else if (estadoSemaforo == "amarillo"){
    console.log("Avanza con Precaución");
} else if (estadoSemaforo == "rojo"){
    console.log("Alto!!!");
} else {
    console.log("El semáforo está descompuesto");
}


//Vacunas If anidados
var edad = prompt("Cual es tu edad?");
if(edad<18){
    console.log("NO TE QUIERAS PASAR DE LISTO!!! ERES MENOR DE EDAD");
} else if(edad>=30){
    console.log("BIENVENIDO A LA VACUNACIÓN!!! TERCERA CONDICION");
} else {
    var municipioFrontera = confirm("Vives en un municipio en la frontera del pais?");
    if (municipioFrontera === true){
        console.log("BIENVENIDO A LA VACUNACIÓN!!! PRIMERA CONDICION");
    } else {
        var embarazo = confirm("Estas embarazada?");
        if(embarazo==true){
            var semanasGestacion = prompt("Cuantas semanas de gestacion tienes?");
            if (semanasGestacion > 9){
                console.log("BIENVENIDO A LA VACUNACIÓN!!! SEGUNDA CONDICION");
            } else {
                console.log("NO TE QUIERAS PASAR DE LISTO!!! NO TIENES LAS SEMANAS DE GESTACION");
            }
        } else {
            console.log("NO TE QUIERAS PASAR DE LISTO!!! SOLO CUMPLES CON LA MAYORIA DE EDAD")
        }
    }
    
}

//Vacunas AND y OR
var edad = 12;
var municipioFrontera = false;
var embarazo = false;
var semanasGestacion = 10;

if ((edad >= 18 && municipioFrontera === true) || ( edad >= 18 && embarazo === true && semanasGestacion > 9) || (edad >= 30)){
    console.log("BIENVENIDO A LA VACUNACIÓN!!!");
} else {
    console.log("NO TE QUIERAS PASAR DE LISTO!!!");
}
*/


//Piedra, papel o tijera
/* Computadora selecciona la opcion aleatoria */
/*
var varSelect = Math.floor(Math.random() * 3);
var varValor = null;

if (varSelect === 0){
    varValor = "piedra";
}else if (varSelect === 1) {
    varValor = "papel";
} else {
    varValor = "tijera";
}

console.log("La opcion que selecciono la compu es: " + varValor);

/* seleccionar opcion */
/*
var opcionPersona = prompt("piedra, papel o tijera?");

if (varValor === opcionPersona){
    console.log(varValor, opcionPersona);
    document.write("La compu: "+ varValor + " Persona: " + opcionPersona + " EMPATE");
} else if (varValor==="piedra" && opcionPersona==="papel"){
    console.log(varValor, opcionPersona);
    document.write("La compu: "+ varValor + " Persona: " + opcionPersona + " GANO PERSONA 1");
} else if (varValor==="piedra" && opcionPersona==="tijera"){
    console.log(varValor, opcionPersona);
    document.write("La compu: "+ varValor + " Persona: " + opcionPersona + " GANO COMPU 1");
} else if (varValor==="papel" && opcionPersona==="piedra"){
    console.log(varValor, opcionPersona);
    document.write("La compu: "+ varValor + " Persona: " + opcionPersona + " GANO COMPU 2");
} else if (varValor==="papel" && opcionPersona==="tijera"){
    console.log(varValor, opcionPersona);
    document.write("La compu: "+ varValor + " Persona: " + opcionPersona + " GANO PERSONA 2");
} else if (varValor==="tijera" && opcionPersona==="piedra"){
    console.log(varValor, opcionPersona);
    document.write("La compu: "+ varValor + " Persona: " + opcionPersona + " GANO PERSONA 3");
} else if (varValor==="tijera" && opcionPersona==="papel"){
    console.log(varValor, opcionPersona);
    document.write("La compu: "+ varValor + " Persona: " + opcionPersona + " GANO COMPU 3");
}

if (varValor === opcionPersona){
    document.write("La compu: "+ varValor + " Persona: " + opcionPersona + " EMPATE");
} else if (varValor==="piedra" && opcionPersona==="papel"){
    document.write("La compu: "+ varValor + " Persona: " + opcionPersona + " GANO PERSONA");
} else if (varValor==="papel" && opcionPersona==="tijera"){
    document.write("La compu: "+ varValor + " Persona: " + opcionPersona + " GANO PERSONA");
} else if (varValor==="tijera" && opcionPersona==="piedra"){
    document.write("La compu: "+ varValor + " Persona: " + opcionPersona + " GANO PERSONA");
} else {
    document.write("La compu: "+ varValor + " Persona: " + opcionPersona + " GANO COMPU");
} 

*/


//IF-ELSE BUNDLE
//Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
/*
var handsome = prompt("¿Eres bellisimo/a?");

if(handsome=="si"){
    document.write("Ciertamente");
}else {
    document.write("No te creo");
}
*/

//Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm
/*
var num = prompt("Dame un numero: ");

if ((num%2)===0){
    document.write(num + " es divisible entre 2");
} else {
    document.write(num + " no es divisible entre 2");
}
*/

//Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
/*
var num = prompt("Dame un numero: ");

if ((num%2)===0){
    alert(num + " es numero par");
} else {
    alert(num + " no es numero par");
}
*/

//Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
/*
var numCliente = prompt("Ingrese su numero de cliente para participar en la rifa: ");

if (numCliente==1000){
    document.write("Ganaste un premio");
} else {
    document.write(numCliente + " Lo sentimos, sigue participando");
}
*/

//Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
/*
var num1 = prompt("Dame un numero: ");
var num2 = prompt("Dame un segundo numero: ");

if ( Number(num1) > Number(num2)){
    document.write(num1 + " es mayor que " + num2);
} else {
    document.write(num1 + " es menor que " + num2);
}
*/

//Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
/*
var num1 = Number(prompt("Dame un numero: "));
var num2 = Number(prompt("Dame un segundo numero: "));
var num3 = Number(prompt("Dame un tercer numero: "));
//console.log(typeof(num1));

if ((num1 > num2) && (num1 > num3)){
    document.write(num1 + " es el numero mayor");
} else if ((num2 > num1) && (num2 > num3)){
    document.write(num2 + " es el numero mayor");
} else if ((num3 > num1) && (num3 > num2)){
    document.write(num3 + " es el numero mayor");
} else if ((num1===num2) && (num2 > num3)){
    document.write(num1 + " y " + num2 + " son mayores que " + num3);
} else if ((num1===num2) && (num2 < num3)){
    document.write(num3 + " es el numero mayor");
} else if ((num3===num2) && (num2 > num1)){
    document.write(num2 + " y " + num3 + " son mayores que " + num1);
} else if ((num3===num2) && (num2 < num1)){
    document.write(num1 + " es el numero mayor");
} else if ((num1===num3) && (num1 > num2)){
    document.write(num1 + " y " + num3 + " son mayores que " + num2);
} else if ((num1===num3) && (num1 < num2)){
    document.write(num2 + " es el numero mayor");
}
*/

//Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. 
//Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
/*
var diaSemana = prompt("Dame un dia de la semana: ");

if (diaSemana=="lunes"){
    document.write("Es lunes");
} else if (diaSemana=="viernes"){
    document.write("Es viernes");
} else if ((diaSemana=="sabado")||(diaSemana=="domingo")){
    document.write("Es fin de semana");
} else {
    document.write("Cualquier otro dia");
}
*/

//Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. 
//Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
/*
var calificacion = Number(prompt("Dame tu calificacion: "));

if (calificacion>=1 && calificacion<6){
    document.write("Reprobado");
} else if (calificacion>=6 && calificacion<=8){
    document.write("Regular");
} else if (calificacion===9){
    document.write("Bien");
} else if (calificacion===10){
    document.write("Excelente");
} else {
    document.write("ERROR. Dame un numero entre 1 y 10");
}
*/

//Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
//El helado sin topping cuesta 50 MXN.
//El topping de oreo cuesta 10 MXN.
//El topping de KitKat cuesta 15 MXN.
//El topping de brownie cuesta 20 MXN.
//En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
/*
var topping = prompt("Que topping deseas? (Sin topping, Oreo, KitKat, Brownie)");

if (topping=="Sin topping"){
    document.write("El helado sin topping cuesta 50 MXN");
} else if (topping=="Oreo"){
    document.write("El topping de oreo cuesta 10 MXN");
} else if (topping=="KitKat"){
    document.write("El topping de KitKat cuesta 15 MXN");
} else if (topping=="Brownie"){
    document.write("El topping de brownie cuesta 20 MXN");
} else {
    document.write("No tenemos este topping, lo sentimos. El helado sin topping cuesta 50 MXN.");
}
*/

/* Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. 
Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */

/*
var programa = prompt("Elige el programa (Course, Carrera, Master): ");
var beca = prompt("Elige la beca que tienes (Fb, Google, Jesua): ");
var precioMensual = null;
var precioTotal = null;
//console.log(typeof(precioCourse));

if (programa=="Course"){
    if (beca=="Fb"){
        precioMensual = (4999 * .80).toFixed(2);
        precioTotal = (precioMensual * 2).toFixed(2);
        document.write("El precio mensual con descuento Fb es de " + precioMensual + " y el precio del curso completo es de " + precioTotal);
    } else if (beca=="Google") {
        precioMensual = (4999 * .85).toFixed(2);
        precioTotal = (precioMensual * 2).toFixed(2);
        document.write("El precio mensual con descuento Google es de " + precioMensual + " y el precio del curso completo es de " + precioTotal);
    } else if (beca=="Jesua") {
        precioMensual = (4999 * .50).toFixed(2);
        precioTotal = (precioMensual * 2).toFixed(2);
        document.write("El precio mensual con descuento Jesua es de " + precioMensual + " y el precio del curso completo es de " + precioTotal);
    } else {
        precioMensual = (4999).toFixed(2);
        precioTotal = (precioMensual * 2).toFixed(2);
        document.write("El precio mensual sin beca es de " + precioMensual + " y el precio del curso completo es de " + precioTotal);
    }
} else if (programa=="Carrera"){
    if (beca=="Fb"){
        precioMensual = (3999 * .80).toFixed(2);
        precioTotal = (precioMensual * 6).toFixed(2);
        document.write("El precio mensual con descuento Fb es de " + precioMensual + " y el precio del curso completo es de " + precioTotal);
    } else if (beca=="Google") {
        precioMensual = (3999 * .85).toFixed(2);
        precioTotal = (precioMensual * 6).toFixed(2);
        document.write("El precio mensual con descuento Google es de " + precioMensual + " y el precio del curso completo es de " + precioTotal);
    } else if (beca=="Jesua") {
        precioMensual = (3999 * .50).toFixed(2);
        precioTotal = (precioMensual * 6).toFixed(2);
        document.write("El precio mensual con descuento Jesua es de " + precioMensual + " y el precio del curso completo es de " + precioTotal);
    } else {
        precioMensual = (3999).toFixed(2);
        precioTotal = (precioMensual * 6).toFixed(2);
        document.write("El precio mensual sin beca es de " + precioMensual + " y el precio del curso completo es de " + precioTotal);
    }
} else if (programa=="Master"){
    if (beca=="Fb"){
        precioMensual = (2999 * .80).toFixed(2);
        precioTotal = (precioMensual * 12).toFixed(2);
        document.write("El precio mensual con descuento Fb es de " + precioMensual + " y el precio del curso completo es de " + precioTotal);
    } else if (beca=="Google") {
        precioMensual = (2999 * .85).toFixed(2);
        precioTotal = (precioMensual * 12).toFixed(2);
        document.write("El precio mensual con descuento Google es de " + precioMensual + " y el precio del curso completo es de " + precioTotal);
    } else if (beca=="Jesua") {
        precioMensual = (2999 * .50).toFixed(2);
        precioTotal = (precioMensual * 12).toFixed(2);
        document.write("El precio mensual con descuento Jesua es de " + precioMensual + " y el precio del curso completo es de " + precioTotal);
    } else {
        precioMensual = (2999).toFixed(2);
        precioTotal = (precioMensual * 12).toFixed(2);
        document.write("El precio mensual sin beca es de " + precioMensual + " y el precio del curso completo es de " + precioTotal);
    }
}
*/

/* Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5. 
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué: 
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */

/*
var tipoVehiculo = prompt("Que tipo de vehiculo usas: ");
var kmRecorrido = Number(prompt("Cuantos kms recorriste? "));
var litrosConsumidos = Number(prompt("Cuantos litros consumiste? "));
var totalPago = null;

if (tipoVehiculo=="coche"){
    if (litrosConsumidos>=0 && litrosConsumidos<=100){
        totalPago = ((0.20*kmRecorrido)+5).toFixed(2);
        document.write("tu total a pagar es de $" + totalPago);
    } else{
        totalPago = ((0.20*kmRecorrido)+10).toFixed(2);
        document.write("tu total a pagar es de $" + totalPago);
    }
} else if (tipoVehiculo=="moto"){
    if (litrosConsumidos>=0 && litrosConsumidos<=100){
        totalPago = ((0.10*kmRecorrido)+5).toFixed(2);
        document.write("tu total a pagar es de $" + totalPago);
    } else{
        totalPago = ((0.10*kmRecorrido)+10).toFixed(2);
        document.write("tu total a pagar es de $" + totalPago);
    }
} else if (tipoVehiculo=="autobus"){
    if (litrosConsumidos>=0 && litrosConsumidos<=100){
        totalPago = ((0.50*kmRecorrido)+5).toFixed(2);
        document.write("tu total a pagar es de $" + totalPago);
    } else{
        totalPago = ((0.50*kmRecorrido)+10).toFixed(2);
        document.write("tu total a pagar es de $" + totalPago);
    }
}
*/

//Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
/*
var alAzar = [];
alAzar[0] = (Math.floor(Math.random()*10)+1);
alAzar[1] = (Math.floor(Math.random()*10)+1);
alAzar[2] = (Math.floor(Math.random()*10)+1);
alAzar[3] = (Math.floor(Math.random()*10)+1);
alAzar[4] = (Math.floor(Math.random()*10)+1);
alAzar[5] = (Math.floor(Math.random()*10)+1);
alAzar[6] = (Math.floor(Math.random()*10)+1);
alAzar[7] = (Math.floor(Math.random()*10)+1);
alAzar[8] = (Math.floor(Math.random()*10)+1);
alAzar[9] = (Math.floor(Math.random()*10)+1);

console.log(alAzar);
*/

//El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, 
//(el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
/*
var stringUsuario = prompt("Ingresa una cadena de caracteres. Separalos con una coma:");

var arrayUsuario = stringUsuario.split(",");

console.log(arrayUsuario);
*/

//De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. 
//Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.
/*
var array = [10,40,30,20,15,5];

console.log(array.sort(function(a, b){return a-b}));
console.log(Math.min(...array));
console.log(Math.max(...array));
*/

//Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array. USANDO WHILE.
/*
var alAzar = [];
var index = 0;

while(index<10){
    alAzar[index] = (Math.floor(Math.random()*100));
    index++;
}
console.log(alAzar);
*/

//Guarda un arreglo de valores introudcidos
//Si el usuario no introudce un valor, termina el ciclo.
/*
var arreglo = [];
var userInput;
do {
    userInput = prompt("Ingresa cualquier carácter:");
    arreglo.push(userInput);
}
while(!(userInput==""));

console.log("Introdujiste estos valores: " + arreglo);
*/

//Conteo de numeros del 1 al 10 en consola
/*
var contador = 0;
do{
    contador++;
    console.log("Conteo: " + contador);
} while(contador<10);
*/

//Ejercicio1
//Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 
/*
var userInput;
var numeros = [];
var index = 0;

userInput = parseInt(prompt("Ingresa un numero: "));

do {
    index++;;
    if((index%5)==0){
        numeros.push(index);
    }
} while(index<userInput);
console.log("Estos son multiplos de 5: " + numeros);
*/

//Ejercicio2
//Crea un programa que solicite al usuario 2 números entre 1 y 50. 
//Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
/*
var index;
var arreglo[];
var num1;
var num2;

num1 = ("")
*/

//Ejercicio3
//Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. 
//Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
/*
var index = 0;
var arreglo = [];
var entrada;

do{
    entrada = parseInt(prompt("Ingresa un numero: "));
    if(typeof(entrada)=="number")
    {
        arreglo.push(entrada);
    }
} while(entrada!=0);

console.log("Los numeros ingresados son " + arreglo);
*/

//Ejercicio4
//Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. 
//Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
/*
var arreglo = [];
var userInput;

do{
    userInput = prompt("Ingresa una letra o una palabra: ");
    arreglo.push(userInput);
} while (userInput!="");

var index = 0;
var stringFinal = "";

while(index<arreglo.length){
    stringFinal = stringFinal + " " + arreglo[index];
    index++;
}

console.log(stringFinal);
*/

//Ejercicio5
//Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). 
//El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. 
//Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.
/*
var userInput;

do{
    userInput = prompt("Dame un día de la semana: ").toLowerCase();
    alert("Es " + userInput);
} while (userInput!="Domingo");
alert("Ve a descansar");
*/

//Ejercicio5 Opcion2
/*
var userInput;

do{
    userInput = prompt("Dame un día de la semana: ").toLowerCase();
    var mensaje = "";
    if(userInput=="lunes"){
        mensaje = "EL DIA DE HOY ES LUNES ANIMO"
    } else if(userInput=="martes"){
        mensaje = "MARTES ... NI MODO"
    } else if(userInput=="miercoles"){
        mensaje = "OMBLIGO DE SEMANA"
    } else if(userInput=="jueves"){
        mensaje = "CASI VIERNES"
    } else if(userInput=="viernes"){
        mensaje = "YEIII VIERNES"
    } else if(userInput=="sabado"){
        mensaje = "SABADO SIN FIESTA"
    } else if(userInput=="domingo"){
        mensaje = "VE A DESCANSAR"
    } else {
        mensaje = "ESE NO ES UN DIA VALIDO"
    }
    alert(mensaje);
} while (userInput!="domingo");
*/

//Crea un programa que imprima en consola los números impares del 1 al 50.
/*
for (var i=0 ; i<=50 ; i++){
    if(i%2!=0){
        console.log(i);
    }
}
*/

//Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

var arreglo = [4,"dos",8,"tres",5,9,1,"cero"];

/*
for (var i=0; i<arreglo.length; i++){
    if(typeof(arreglo[i])=="number"){
        console.log(arreglo[i]);
    }
}
*/

/*
for (var i=0; i<arreglo.length; i++){
    if(parseInt(arreglo[i])){
        console.log(arreglo[i]);
    }
}
*/

//Fibonacci
//imprimir en consola los numeros entre 0 y 10000 de la secuencia de fibonacci,
//Se trata de una secuencia infinita de números naturales  a partir del 0 y el 1, se van sumando a pares, de manera que cada número es igual a la suma de sus dos anteriores:
//en consola esta seria la salida esperada: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
/*
var i;
var fibonacci = [0,1];
var suma=0;

for (i = 2; suma <= 10000; i++) {
    suma = fibonacci[i-2]+fibonacci[i-1];
    fibonacci.push(suma);
    console.log(fibonacci[i-1]);
}
*/


//FUNCIONES
/*

function Suma (num1, num2){
    return num1+num2;
}
function Resta (num1, num2){
    return num1-num2;
}
function Multiplicacion (num1, num2){
    return num1*num2;
}
function Division (num1, num2){
    return num1/num2;
}

function Calculadora(){
    var continuar = true;
    do{
        var operacion = prompt("Que operacion deseas realizar (+,-,*,/)? ");
        var resultado = 0;

        if(operacion == "+"){
            var num1 = parseInt(prompt("Ingresa el primer numero"));
            var num2 = parseInt(prompt("Ingresa el segunda numero"));
            resultado = Suma(num1,num2);
        } else if(operacion == "-"){
            var num1 = parseInt(prompt("Ingresa el primer numero"));
            var num2 = parseInt(prompt("Ingresa el segunda numero"));
            resultado = Resta(num1,num2);
        } else if(operacion == "*"){
            var num1 = parseInt(prompt("Ingresa el primer numero"));
            var num2 = parseInt(prompt("Ingresa el segunda numero"));
            resultado = Multiplicacion(num1,num2);
        } else if(operacion == "/"){
            var num1 = parseInt(prompt("Ingresa el primer numero"));
            var num2 = parseInt(prompt("Ingresa el segunda numero"));
            resultado = Division(num1,num2);
        }else {
            console.log("No entiendo");
            continuar = false;
        }
        console.log(`El resultado de la operacion (${operacion}) es : ${resultado}`);
    } while (continuar == true);
}
*/


// 1. Hacer una función que convierta de grados centígrados a Farenheit.
/*
var numC = prompt("Grados Celsius a convertir a Farenheit: ");

function convertCtoF(numC){
        return (numC * (9/5)) + 32;
}
console.log(`${numC} son ${convertCtoF(numC)} F`);
*/

// 2. Hacer una función que muestre la tabla de multiplicar de un número
/*
var num = parseInt(prompt("Dame un numero: "));
var tabla = [];

function tablaMultiplicar(num){
    for (var i=0; i<=10; i++){
        var resultado = num * i;
        tabla.push(resultado);
    }
    return tabla;
}
console.log(tablaMultiplicar(num));
*/

//3. Escribe una función que imprima todos los números naturales de 1 hasta n (el usuario elige n)
/*
var n = parseInt(prompt("Dame un numero: "));
var naturales = [];

function numerosNaturales(n){
    for(var i=1; i<=n; i++){
        naturales.push(i);
    }
    return naturales;
}
document.write(`<h1>${numerosNaturales(n)}</h1>`);
*/


//4. Escribe una función que imprima todos los números naturales en reversa, desde n (el usuario indica) hasta 1.

/*
var n = parseInt(prompt("Dame un numero: "));
var naturales = [];

function numerosNaturales(n){
    for(var i=n; i>=0; i--){
        naturales.push(i);
    }
    return naturales;
}

document.write(`<h1>${numerosNaturales(n)}</h1>`);

*/


//5. Escribe una función para ingresar cualquier letra del alfabeto y verifique si es vocal o consonante
/*
var letra = prompt("Ingrese una letra: ");

function vocales(letra){
    if((letra=='a')||(letra=='e')||(letra=='i')||(letra=='o')||(letra=='u')){
        return "Es una vocal";
    } else {
        return "Es una consonante";
    }
}

document.write(`<h1>${vocales(letra)}</h1>`);
*/


//6. Escriba una función donde solicite un número al usuario y me calcule su factorial.
/*
function calcularFactorial(num){
    var resultado = 1;
    for (let i=1; i<=num; i++){
        resultado = resultado * i;
    }
    document.write(`<h1> El factorial de ${num} es ${resultado}`);
}

var userInput = parseInt(prompt("Dame un numero: "));

if(!isNaN(userInput)){
    calcularFactorial(userInput);
} else{
    console.log("Ingresa un numero valido");
}
*/

let persona = {
    edad:29,
    nombre:"Carlos",
    vivo:true,
    gustos:["manzana","pera","uvas"]
};

console.log(persona.gustos[1]);

