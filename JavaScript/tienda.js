
//----------------Variables Globales--------------//

let precioKits = 2000

let precioProtector = 1000

let usser = prompt('Ingrese su nombre de Usuario')

let acceso = ""

let password = prompt('Ingrese su clave')

//----------------------Ejecución--------------------//

if (usser == "guille" && password == "1234"){
    acceso = true
}else{
    alert('Su usuario y contraseña no son correctos')
}

if (acceso == true){
    alert('Bienvenido a Tienda Lozania')
}else{
    alert('Ingrese usuario y contraseña correctos para ingresar a Tienda Lozania')
}

//-------------Funciones--------------------------------//
let entrada = prompt('Qué desea comprar?')

while (entrada !== 'ESC'){

    
    switch (entrada){

        case "limpieza":
            alert('Son $2000')
            break
        case "vitamina":
            alert('Son $2000')
            break
        case "acne":
            alert("Son $2000")
            break
        case "protector":
            alert('Son $1000') 
            break
        default:
        alert('No seleccionó ninguno de los productos disponibles')
        break     
        
    }

    entrada = prompt('Qué desea comprar?')
}
