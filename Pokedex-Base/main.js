//console.log(pokemons);
/*
for (var index = 0; index < pokemons.length ; index++){
    //const element = pokemons[index];
    document.write(`<h1>${index+1} - ${pokemons[index]}</h1>`);
}
*/
/*
'a' + 'b'
"a" + "b"
"<h1>" + index + "</h1>"
`<h1>${index}</h1>`
*/


//Crea un programa que pregunte al usuario un número. 
//Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 

var userInput = parseInt(prompt("Dame un numero: "));
var arreglo = [];

for ( var i=1 ; i<=userInput ; i++){
    if(i%5==0){
        document.write(`<h1>${i} - ${pokemons[i]}</h1>`);
    }
}