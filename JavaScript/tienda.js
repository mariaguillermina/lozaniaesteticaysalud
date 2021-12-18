class Carrito{
    constructor (lista){
        this.lista = lista;
    }
    listarItems(){
        return this.lista;
    }

}

// Declaración de Array//

const misProductos = [];

//Objeto//

class Producto{
    constructor(id,nombre,precio,cantidad,img,stock = true){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.stock = stock;
        this.img = img;

    }
    getNombre(){
        return this.nombre;

    }

    getPrecio(){
        return this.precio;
    }
    getCantidad(){
        return this.cantidad;
    }

    getStock(){
        return this.stock;
    }

    agotado(){
        this.stock = false
    }

}


//Lista de Productos//

const producto1 = new Producto(1,'Kit Limpieza Facial',2500,1000,'./SASS/img/kit limpieza.jpg',true);

const producto2 = new Producto(2,'Kit Vitamina C',2500,800,'./SASS/img/kit radian c.jpg',true);

const producto3 = new Producto(3,'Kit Anti Acné',2000,100,'./SASS/img/acne kit.jpg',true);

const producto4 = new Producto(4,'Protector Solar',1500,2000,'./SASS/img/protector.jpg',true);


//Carrito//

const carrito = new Carrito([producto1,producto2,producto3,producto4])

console.log( carrito.listarItems())

let cards = document.getElementsByTagName('body');