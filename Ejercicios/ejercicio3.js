//3. Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. 
// En el constructor realizar el ingreso de datos. 
// Definir otros dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18)

class Alumno {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getInfo(){
        const data = { nombre: this.nombre, edad: this.edad }
        console.log(data);
    }

    esMayor(){
        this.edad >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad")
    }
}

const nuevoAlumno = new Alumno("Juan", 17);
const otroAlumno = new Alumno("Juan", 18);

nuevoAlumno.getInfo()
nuevoAlumno.esMayor()
otroAlumno.esMayor()