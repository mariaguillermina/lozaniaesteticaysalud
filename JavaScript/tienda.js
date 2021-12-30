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
    constructor(id,nombre,precio,cantidad,descripcion,img,stock = true){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.img = img;
        this.stock = stock;

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

const producto1 = new Producto(1,'Kit Limpieza Facial',2500,1000,'Incluye: Fórmula Limpieza, Plasma Infusion serum, Plasma Infusion crema, máscara de limpieza','./SASS/img/kit limpieza.jpg',true);

const producto2 = new Producto(2,'Kit Vitamina C',2500,800,'Incluye: Racian C Serum, Radian C crema facial.','./SASS/img/kit radian c.jpg',true);

const producto3 = new Producto(3,'Kit Anti Acné',2000,100,'Incluye: Intensive Clearser, Tratamiento Acne detox, Tratamiento puntual acné.','./SASS/img/acne kit.jpg',true);

const producto4 = new Producto(4,'Protector Solar',1500,2000,'Inluye: 1 protector solar','./SASS/img/protector.jpg',true);


//Carrito//

const carrito = new Carrito([producto1,producto2,producto3,producto4])

console.log( carrito.listarItems())

misProductos.push(producto1,producto2,producto3,producto4)

let contenedorProductos = document.getElementById('container-productos')

for (let producto of misProductos){
    let div = document.createElement('div');
    div.setAttribute('class','producto');

    div.innerHTML = `
    <img src="${producto.img}" alt="" width= "300">
    <p type="texto" class="descripcion">${producto.descripcion}</p>
    <button type="button" class="button-productos" id="productos${producto.id}">${producto.nombre}</button>`;

    contenedorProductos.appendChild(div);

}

localStorage.setItem('producto1', JSON.stringify(producto1)); 

localStorage.setItem('producto2', JSON.stringify(producto2)); 

localStorage.setItem('producto3', JSON.stringify(producto3));

localStorage.setItem('producto4', JSON.stringify(producto4));