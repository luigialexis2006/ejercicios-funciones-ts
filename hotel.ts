
interface Reserva {
    nombreHuesped: string;
    numeroHabitacion: number;
    precioPorNoche: number;
    noches: number;
}

// Array para almacenar las reservas
let reservas: Reserva[] = [];

// Función para agregar reservas
function agregarReserva(nombreHuesped: string, numeroHabitacion: number, precioPorNoche: number, noches: number): void {
    reservas.push({ nombreHuesped, numeroHabitacion, precioPorNoche, noches });
}

// Función para buscar una reserva por el nombre del huésped
function buscarReserva(nombreHuesped: string): Reserva | undefined {
    return reservas.find(reserva => reserva.nombreHuesped.toLowerCase() === nombreHuesped.toLowerCase());
}

// Función para calcular el ingreso total del hotel
function calcularIngresoTotal(): number {
    return reservas.reduce((total, reserva) => total + (reserva.precioPorNoche * reserva.noches), 0);
}

// Ejemplo de uso
agregarReserva("Juan Pérez", 101, 100, 3);
agregarReserva("María García", 102, 120, 2);
agregarReserva("Carlos López", 103, 80, 1);

console.log(buscarReserva("María García")); // Devuelve la reserva de "María García"
console.log("Ingreso total del hotel:", calcularIngresoTotal()); // Calcula el ingreso total del hotel
