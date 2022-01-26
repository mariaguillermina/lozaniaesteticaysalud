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

const productos = [];

const producto1 = new Producto(1,'Kit Limpieza Facial',2500,1000,'Incluye: Fórmula Limpieza, Plasma Infusion serum, Plasma Infusion crema, máscara de limpieza','./SASS/img/kitlimpieza.jpg',true);
const producto2 = new Producto(2,'Kit Vitamina C',2500,800,'Incluye: Racian C Serum, Radian C crema facial.','./SASS/img/kitradianc.jpg',true);
const producto3 = new Producto(3,'Kit Anti Acné',2000,100,'Incluye: Intensive Clearser, Tratamiento Acne detox, Tratamiento puntual acné.','./SASS/img/acnekit.jpg',true);
const producto4 = new Producto(4,'Protector Solar',1500,2000,'Inluye: 1 protector solar','./SASS/img/protector.jpg',true);

productos.push(producto1,producto2,producto3,producto4);
