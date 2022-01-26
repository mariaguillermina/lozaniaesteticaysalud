class Carrito {
    constructor() {
        this.lista = [];
        localStorage.setItem('carrito', JSON.stringify(this.lista));
    }

    agregarItem(item) {
        this.lista.push(item);
        localStorage.setItem('carrito', JSON.stringify(this.lista));
    };

    incrementarCantidad(itemId) {
        const item = this.lista.findIndex(itemCarrito => itemCarrito.id === itemId);
        this.lista[item].cantidad += 1;
        localStorage.setItem('carrito', JSON.stringify(this.lista));
    };

    decrementarCantidad(itemId) {
        const item = this.lista.findIndex(itemCarrito => itemCarrito.id === itemId);
        this.lista[item].cantidad -= 1;
        if (this.lista[item].cantidad === 0) {
            this.lista.splice(item, 1);
        }
        localStorage.setItem('carrito', JSON.stringify(this.lista));
    };

    eliminarItem(itemId) {
        this.lista = this.lista.filter(item => item.id !== itemId);
        localStorage.setItem('carrito', JSON.stringify(this.lista));
    };

    vaciarCarrito() {
        this.lista = [];
        localStorage.setItem('carrito', JSON.stringify(this.lista));
    };

    listarItems() {
        return this.lista;
    };
}

const carrito = new Carrito(productos);

const agregarProducto = (id) => {
    const producto = productos.find(producto => producto.id == id);
    carrito.lista.find(producto => producto.id == id)
        ? alert('El producto ya está en el carrito')
        : carrito.agregarItem({ ...producto, cantidad: 1 });
    llenarCarrito();
};

const sumarProducto = (id) => {
    carrito.incrementarCantidad(id);
    llenarCarrito();
};

const restarProducto = (id) => {
    carrito.decrementarCantidad(id);
    llenarCarrito();
};

const mostrarProductos = () => {
    const contenedorProductos = document.getElementById('container-productos');
    for (const producto of productos) {
        let div = document.createElement('div');
        div.setAttribute('class', 'producto');
        div.innerHTML = `
                <img src="${producto.img}" alt="" width= "300">
                <p type="texto" class="descripcion">${producto.descripcion}</p>
                <button type="button" class="button-productos" id="productos${producto.id}" onClick="agregarProducto(${producto.id})">${producto.nombre}</button>
        `;
        contenedorProductos.appendChild(div);
    }
};

const eliminarProducto = (id) => {
    carrito.eliminarItem(id);
    llenarCarrito();
};

const llenarCarrito = () => {
    const productosCarrito = JSON.parse(localStorage.getItem('carrito'));
    const total = productosCarrito.reduce((total, producto) => {
        return total + (producto.precio * producto.cantidad);
    }, 0);
    const totalItems = productosCarrito.reduce((total, producto) => {
        return total + producto.cantidad;
    }, 0);

    const contenedorCarrito = document.getElementById('container-carrito');

    let htmlCarrrito = `
        <div class="carrito">
            <h2>Carrito</h2>
    `;

    for (const producto of productosCarrito) {
        htmlCarrrito += `
            <div class="producto-carrito">
                <img src="${producto.img}" alt="" width= "100">
                <div class='info-producto'>
                    <p>${producto.nombre}</p>
                    <p>${producto.cantidad} X ${producto.precio}</p>
                </div>
                <div class='controles'>
                    <button type="button" onClick="eliminarProducto(${producto.id})" class='boton-eliminar'>
                        Eliminar
                    </button>
                    <button type="button" class='boton-inc-dec' onclick='restarProducto(${producto.id})'>-</button>
                        ${producto.cantidad}
                    <button type="button" class='boton-inc-dec' onclick='sumarProducto(${producto.id})'>+</button>
                </div>                            
            </div>`;
    }

    htmlCarrrito += `<p>Total: ${total}</p></div>`;
    contenedorCarrito.innerHTML = htmlCarrrito;
    document.getElementById("total-items").innerHTML = totalItems;
};

const toggleCarrito = () => {
    const contenedorCarrito = document.getElementById('container-carrito');
    if (contenedorCarrito.classList.contains('visible')) {
        contenedorCarrito.classList.remove('visible');
    } else {
        llenarCarrito();
        contenedorCarrito.classList.add('visible');
    }
};

mostrarProductos();
