
interface Estudiante {
    nombre: string;
    notas: number[];
}

// Array para almacenar los estudiantes
let estudiantes: Estudiante[] = [];

// Función para agregar estudiantes
function agregarEstudiante(nombre: string, notas: number[]): void {
    estudiantes.push({ nombre, notas });
}

// Función para buscar un estudiante por nombre
function buscarEstudiante(nombre: string): Estudiante | undefined {
    return estudiantes.find(estudiante => estudiante.nombre.toLowerCase() === nombre.toLowerCase());
}

// Función para calcular el promedio de un estudiante
function calcularPromedioNotas(estudiante: Estudiante): number {
    const suma = estudiante.notas.reduce((acc, nota) => acc + nota, 0);
    return suma / estudiante.notas.length;
}

// Función para calcular el promedio de todos los estudiantes
function calcularPromedioTotal(): number {
    const sumaTotal = estudiantes.reduce((acc, estudiante) => acc + calcularPromedioNotas(estudiante), 0);
    return sumaTotal / estudiantes.length;
}

// Ejemplo de uso
agregarEstudiante("Juan", [85, 90, 78]);
agregarEstudiante("María", [92, 88, 95]);
agregarEstudiante("Carlos", [70, 75, 80]);

console.log(buscarEstudiante("María")); // Devuelve el estudiante "María"
console.log("Promedio total de todos los estudiantes:", calcularPromedioTotal()); // Calcula el promedio de todos
