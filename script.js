//Creacion de usuario por medio de funcion
function Usuario (Nombre,Apellido,Mail,Servicio){
    this.Nombre = Nombre;
    this.Apeliido = Apellido;
    this.Mail= Mail;
    this.Servicio; 
} 

//Formulario que va a estar conectado con el formulario de contacto de la pagina

let preguntarNombre = prompt ("Nombre")
let preguntarApellido= prompt ("Apellido")
let preguntarMail= prompt ("Mail")
let preguntarServicio= prompt ("Servicio")

const nuevoUsuario1 = new Usuario (preguntarNombre, preguntarApellido, preguntarMail, preguntarServicio);

console.log(nuevoUsuario1)



//CARRITO DE COMPRAS que se creara a futuro 
//DECLARACION DE VARIABLES

let producto = 0;
let cantidad = 0;
let precio = 0;
let iva = 1.21;
let total = 0;


//DECLARACION DE FUNCIONES 
const Iva = () => {
    precio = precio * 1.21;
}

const sumarTotal = () => {    //SE SUMAN LA CANTIDAD DE PRODUCTOS 
    precio = precio * cantidad;
}

const pedido = () => {  //SERVICIOS ENNUMERADOS + USO DE PARSEINT.

    while (producto <= 0 || producto < 7) {
        
        servicioBasico = parseInt(prompt('BIENVENIDO A RTAITO\n Seleccione por numeracion el/los servicios que desea contratar: \n 1 - Generacion de presupuesto - $1000 \n 2 - Hosting y dominio - $ 5000 \n 3 - Diseño de sitio - $3000 \n 4 - Desarrollo y mantenimiento de la web- $10000 \n 5 - SEO y analytic - $2000 \n 6 -Servicios de CM - $3000  \n 7 - Creacion de logos - $500 c/hora\n PRECIOS SIN IVA INCLUIDO \n '))

        switch (servicioBasico) {
            case 1:
                    producto = "Generacion de presupuesto";
                    precio = 1000;
                break;
            case 2:
                    producto = "Hosting y dominio" ;
                    precio = 5000 ;
                break;
            case 3:
                    producto = "Diseño de sitio" ;
                    precio = 3000 ;
                break;
            case 4:
                    producto = "Desarrollo y mantenimiento de la web" ;
                    precio = 10000 ;
            break;
            case 5:
                    producto = "SEO y analytic" ;
                    precio = 2000 ;
            break;
            case 6:
                    producto = "Servicios de CM" ;
                    precio = 3000 ;
            break;
            case 7:
                    producto = "Creacion de logos" ;
                    precio = 500 ;
            break;
        }
        while (cantidad <= 0) {
            cantidad = parseInt(prompt(`¿Cuantos servicios de ${producto} desea llevar?`))  //CANTIDAD DE SERVICIOS SELECCIONADOS 
            
        }
    }
}

//LLAMADO DE FUNCIONES CREADAS.
pedido();
Iva();
sumarTotal();

//TICKET AL USUARIO.
alert(`Detalle de su compra:\n${producto}\nCantidad: ${cantidad}\nTotal: $${precio}`)


//Defino los Array y creo la clase de FORMULARIO DE CONTACTO con constructor 

const formularioDeUsuario =["nombre","apellido","mail","servicio"]
class Usuario {
    constructor(nombre, apellido, mail, servicio) {
        this.nombre  = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.mail = mail.toUpperCase();
        this.servicio = servicio.toUpperCase();
    }}



//ARRAY DE CARRITO DE COMPRAS

//Defino los ARRAY 
const productosConsultora = ["Generacion de presupuesto", "Hosting y dominio", "Diseño de sitio", "Desarrollo y mantenimiento de la web","SEO y analytic", "Servicios de CM", "Creacion de logos"]

for (let i = 0; i < 7; i++) {
    console.log(productosConsultora[i])
  }

  //Class de productos con multiplicacion de IVA 
class Productos {
    constructor(producto, precio) {
        this.producto  = producto.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

//Declaro un array (vacio) de productos para almacenar objetos
const productos = [];
productos.push(new Producto("Generacion de presupuesto", "$1000"));
productos.push(new Producto("Hosting y dominio", "5000"));
productos.push(new Producto("Diseño de sitio", "3000"));
productos.push(new Producto("Desarrollo y mantenimiento de la web", "10000"));
productos.push(new Producto("SEO y analytic", "2000"));
productos.push(new Producto("Servicios de CM", "3000"));
productos.push(new Producto("Creacion de logos", "500"));

//Array con for para modificar los valores segun IVA 
for (const producto of productos)
    producto.sumaIva();

