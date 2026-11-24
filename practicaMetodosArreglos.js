// 1.-METODO map()- Transformar elementos y devuelve un arreglo

let arreglo=[1,2,3,4,5,6,7,8];

const dobles=arreglo.map(numero => numero*2);

console.log(arreglo);
console.log(dobles);

// 2.-METODO filter()- Filtrar elementos y devuelve un arreglo

let arreglo2=[1,2,3,4,5,6,7];

const arreglo2Pares=arreglo2.filter(numero => numero%2===0);
console.log(`Los pares de ${arreglo2} son ${arreglo2Pares}`);

// 3.-METODO forEach() - Iterar sobre un arreglo y devuelve undefined

const frutas = ["manzana", "pera", "uva"];
frutas.forEach(fruta => {console.log(fruta)}); // recorrer un arreglo usando forEach

let numeros=[1,2,3];
let suma=0;
numeros.forEach(num => {suma+= num}); // iterar sobre un arreglo 
console.log(suma);

const libros = [                           // modificar un arreglo
    { titulo: "1984", disponible: true },
    { titulo: "Drácula", disponible: true },
    { titulo: "Dune", disponible: true }
];

libros.forEach(libro => {libro.disponible= false});
console.log(libros);

// Recorrer un arreglo en JS usando for..of 

let arreglo3=["a","e","i"];

for (const vocal of arreglo3){
    console.log(vocal);
}

// 4.- METODO find() - Devuelve el primer elemento que cumple con la propiedad

let arregloNumeros=[1,2,7,1,3,9];

let numeroEncontrado=arregloNumeros.find(num => num%2==0);
console.log(`El primer numero par en ${arregloNumeros} es ${numeroEncontrado}`);

let numeroNoEncontrado=arregloNumeros.find(num => num<0);
console.log(numeroNoEncontrado); // Si ningun elemento del arreglo cumple con la condicion devuelve undefined

// 5.- METODO includes() - Comprobar si existe un valor y devuelve booleano

let arregloLetras=["a","b","c","d"];
console.log(arregloLetras.includes("a"));
console.log(arregloLetras.includes("f"));
// nota: tambien funciona con strings

let palabra="Javascript";
console.log(palabra.includes("script"));

// 6.- METODO every() - Comprobar si todos los elementos cumplen la condicion y devuelve booleano

let arregloNumerosPares=[2,4,6,8,120];
console.log(arregloNumerosPares.every(num => num%2===0));

// 7.- METODO some() - Saber si algun elemento cumple la condicion y devuelve booleano

let arreglo4=[2,4,5,6];
console.log(arreglo4.some(num => num%2===1));

// 8.- METODO sort() - Ordenar un arreglo en strings y devuelve un arreglo

let arregloDesordenado=[9,12,3];
arregloDesordenado.sort(); // Ordena segun el codigo convirtiendolos a strings
console.log(arregloDesordenado) 

arreglo.sort()
