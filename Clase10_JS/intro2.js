// Estructuras de control
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
console.log("Fin del ciclo");

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
console.log("Fin del ciclo");

// Arrays
const array = [1, 2, 3, 4, 5];
const array2 = [1, "dos", 3, { a: 1, b: 2 }, [1, 2, 3], true, 9, 10];
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Métodos de arrays
array.push(6);
array2.unshift("cero");
array.pop();
array.shift();
array.splice(1, 1);

console.log(array.join(" - "));
console.log(array.concat(array));
console.log(array.slice(1, 4));

console.log(array);
console.log(array2);
console.log(matriz);

// Iteración de arrays
for(let item of array2){
    console.log(typeof item);
}

// Función declarada
function suma(a, b) {
    return a + b;
}

const resultado = suma(5, 10);
console.log(resultado);

// Función anónima
const resta = function(a, b) {
    return a - b;
}
console.log(resta(10, 5));

// Función flecha
const multiplicacion = (a, b) => a * b;
console.log(multiplicacion(5, 10));

// Función flecha con return
const multiplicacion2 = (a, b) => {return a * b};
console.log(multiplicacion2(5, 10));

// Función flecha con un solo parámetro
const multiplicacion3 = a => a * 2;
console.log(multiplicacion3(5));

//Resumen de funciones flecha
() => { return ___ };
() => XXXXX;
a => XXXXX;
a => { return XXXXX };

