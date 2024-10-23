
interface Empleado {
    nombre: string;
    salario: number;
}

// Array para almacenar los empleados
let empleados: Empleado[] = [];

// Función para agregar un empleado
function agregarEmpleado(nombre: string, salario: number): void {
    empleados.push({ nombre, salario });
}

// Función para buscar un empleado por nombre
function buscarEmpleado(nombre: string): Empleado[] {
    return empleados.filter(empleado => empleado.nombre.toLowerCase() === nombre.toLowerCase());
}

// Función para calcular el salario promedio
function calcularSalarioPromedio(): number {
    if (empleados.length === 0) {
        return 0;
    }
    let totalSalario = empleados.reduce((total, empleado) => total + empleado.salario, 0);
    return totalSalario / empleados.length;
}

// Ejemplo de uso
agregarEmpleado("Juan", 3000);
agregarEmpleado("Ana", 3500);
agregarEmpleado("Luis", 2500);

console.log(buscarEmpleado("Ana")); // Devuelve el empleado "Ana"
console.log(calcularSalarioPromedio()); // Calcula el salario promedio
