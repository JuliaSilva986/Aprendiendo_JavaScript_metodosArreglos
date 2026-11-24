class Producto{
    constructor(arg1,arg2,arg3){
        this.nombre=arg1;
        this.precio=arg2;
        this.categoria=arg3;
    }
}

let numProductos=Number(prompt("Cuantos productos desea registrar?"));
let arregloProductos=[]

for (let i=0; i<numProductos; i++){
    let nombre=prompt("Cual es el nombre del producto?");
    let precio=prompt("Cual es el precio del producto?");
    let categoria=prompt("Cual es la categoria del producto?");
    arregloProductos.push(new Producto(nombre,precio,categoria));
}

console.log(arregloProductos);

let productosMenor100=arregloProductos.filter(producto => producto.precio<100).map(producto => producto.nombre);
console.log(`Los productos con precio menor que 100 son ${productosMenor100}`);


let nombresProducto=[];
arregloProductos.forEach(producto => {nombresProducto.push(producto.nombre)});
console.log(`Los productos ordenados alfabeticamente son ${nombresProducto.sort()}`);

let precioProductos=arregloProductos.map(producto=> producto.precio);
console.log(`Los precios de los productos son ${precioProductos}`);
