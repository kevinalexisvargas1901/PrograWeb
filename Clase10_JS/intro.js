// console.log("Esto es un error");
// TIPOS DE VARIABLES

// var x = 5;
// let y = 8;
// let y2 = true;
// let y3 = 5;
// let y4 = "Hola mundo";
// let y5 = { nombre: "wilmer", edad: 37, sexo: true };
// let y6 = () => { return 5 };
// let y7 = [true, 5, "cadena", [1, 2, 3, 4]];
// const y8 = [3,5,6];
// y8.push(8)
// console.log(x + 4);
// console.log(y + 4);
// console.log(typeof (y));
// console.log(typeof (y2));
// console.log(typeof (y3));
// console.log(typeof (y4));
// console.log(typeof (y5));
// console.log(typeof (y6));
// console.log(typeof (y7));
// console.log(y8);
// console.error("");
// console.warn("");
// alert("esta es una salidad");
// let variables = prompt("Esta es una entrada");
// console.log(variables);

const edades = [18, 17, 15, 19];

let a = 5;
let b = "5";
if (a === b) {
    console.log("Son iguales");
}else {
    console.log("No son iguales");
}

for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("Es menor de edad");
    }
}

switch (a) {
    case 1:
        console.log("Es uno");
        break;
    case 2:
        console.log("Es dos");
        break;
    case 3:
        console.log("Es tres");
        break;
    default:
        console.log("No es ninguno de los anteriores");
        break;
}  

while (a < 10) {
    console.log(a);
    a++;
}