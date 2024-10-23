
interface Producto {
    nombre: string;
    precio: number;
    cantidad: number;
}

// Array para almacenar los productos
let inventario: Producto[] = [];

// Función para agregar productos
function agregarProducto(nombre: string, precio: number, cantidad: number): void {
    inventario.push({ nombre, precio, cantidad });
}

// Función para buscar un producto por nombre
function buscarProducto(nombre: string): Producto[] {
    return inventario.filter(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}

// Función para calcular el valor total del inventario
function calcularValorTotalInventario(): number {
    return inventario.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}

// Ejemplo de uso
agregarProducto("Manzana", 0.5, 100);
agregarProducto("Banana", 0.3, 200);
agregarProducto("Leche", 1.2, 50);

console.log(buscarProducto("Banana")); // Devuelve el producto "Banana"
console.log("Valor total del inventario:", calcularValorTotalInventario()); // Calcula el valor total
