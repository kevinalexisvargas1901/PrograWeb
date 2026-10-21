// Objetos
const objeto = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

// Acceder a las propiedades del objeto
console.log(objeto.nombre);
console.log(objeto["edad"]);
console.log(objeto["ciudad"]);

// Modificar las propiedades del objeto
objeto.edad = 31;
console.log(objeto.edad);
objeto.pais = "España";
console.log(objeto.pais);

// Clase
class Persona {
    // constructor(nombre, edad, ciudad) {
    //     this.nombre = nombre;
    //     this.edad = edad;
    //     this.ciudad = ciudad;
    // }
    constructor(objeto) {
        this.nombre = objeto.nombre;
        this.edad = objeto.edad;
        this.ciudad = objeto.ciudad;
    }
    cumplirAnios() {
        this.edad++;
    }
}

const persona1 = new Persona({ nombre: "Juan", edad: 30, ciudad: "Madrid" });
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.ciudad);
persona1.cumplirAniosr();
console.log(persona1.edad);

class Persona2 {
    constructor(objeto) {
        this.nombre = objeto.nombre;
        this.edad = objeto.edad;
        this.ciudad = objeto.ciudad;
    }
}

const persona2 = new Persona2({ nombre: "Pedro", edad: 25, ciudad: "Barcelona" });
console.log(persona2.nombre);
console.log(persona2.edad);
console.log(persona2.ciudad);
