/*Definimos la estructura del libro con una interface*/
interface Libro {
    titulo: string;
    autor: string;
    año: number;
}

/*Creamos una lista para almacenas los libros que agreguemos con la funcion agregar libro */
let biblioteca: Libro[] = [];

/*Esta es la funcion para agregar un libro a la biblioteca */
function agregarLibro(titulo: string, autor: string, año: number):void {
    const nuevoLibro: Libro = {titulo, autor, año};
    biblioteca.push(nuevoLibro);
    console.log(`libro ${titulo} agregado a la biblioteca`);
}

/*Funcion para buscar un libro por el titulo */
function buscarLibro(titulo: string): Libro | undefined {
    return biblioteca.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
}

/*Función para mostrar todos los libros disponibles en la biblioteca*/
function mostrarLibros(): void {
    if (biblioteca.length === 0) {
      console.log("No hay libros en la biblioteca.");
      return;
    }
    console.log("Libros disponibles en la biblioteca:");
    biblioteca.forEach(libro => {
      console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.año}`);
    });
  }
  
  /*Ejemplo de como usar el programa*/
  agregarLibro("Cien Años de Soledad", "Gabriel García Márquez", 1967);
  agregarLibro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605);
  
  console.log(buscarLibro("Cien Años de Soledad"));
  
  mostrarLibros();