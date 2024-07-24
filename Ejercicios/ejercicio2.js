// 2. Realizar un programa que ingrese los sueldos de 5 operarios en un vector. 
// Realizar la creación y carga del vector en el constructor. Crear un método para imprimir el vector.

class EnterSalaries {
    constructor(s1, s2, s3, s4, s5){
        this.sueldos = [s1, s2, s3, s4, s5]
    }

    getSalaries() {
        console.log(this.sueldos);
    }
}

const enterSalariesInstance = new EnterSalaries(1000, 1200, 3200, 4100, 100);

enterSalariesInstance.getSalaries();


