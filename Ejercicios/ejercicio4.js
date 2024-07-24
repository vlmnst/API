// 4. JavaScript ES6: Dados los siguientes array, imprimir por consola los elementos del array “y” que no se encuentran en el array “x” 
// utilizando para tal fin una única línea de código. 
const x = ["n", "bro", "c", "|"]; 
const y = ["d", "n", "l", "bro", "g"];

y.forEach(( elemento ) => !x.includes(elemento) && console.log(elemento))
