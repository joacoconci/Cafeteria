//Create a class called "cafe" with a constructor method with following attributes: Tipo, Tamano will be a boolean.
function Cafe(Tipo, Tamano) {
    this.Tipo = Tipo;
    this.Tamano = Tamano;
}

//Crear objetos const de la clase cafe con tipo(Capuccino, Café , Leche Sola, Lágrima, Cortado, Café con Leche, Charly y Facherito), todos con tamano bool false.
const CafeSolo = new Cafe('Café', true);
const Cortado = new Cafe('Cortado', true);
const CafeConLeche = new Cafe('Café con Leche', true);
const Lagrima = new Cafe('Lágrima', true);
const Capuccino = new Cafe('Capuccino', false);
const LecheSola = new Cafe('Leche Sola', true);
const Charly = new Cafe('Charly', false);
const Facherito = new Cafe('Facherito', false);

//OBJETOS

let chkCafe = document.getElementById('chkCafe');
let chkCortado = document.getElementById("chkCortado")
let chkConLeche = document.getElementById("chkConLeche");
let chkLagrima = document.getElementById("chkLagrima");
let chkCapuccino = document.getElementById("chkCapuccino");
let chkLeche = document.getElementById("chkLeche");
let chkCharly = document.getElementById("chkCharly");
let chkFacherito = document.getElementById("chkFacherito");

let btnCancelar = document.getElementById("btnCancelar");
let btnEnviar = document.getElementById("btnEnviar");

const cmdCafe = document.getElementById("cmdCafe");
const cmdCortado = document.getElementById("cmdCortado");
const cmdConLeche = document.getElementById("cmdConLeche");
const cmdCapuccino = document.getElementById("cmdCapuccino");
const cmdLagrima = document.getElementById("cmdLagrima");
const cmdLeche = document.getElementById("cmdLeche");
const cmdCharly = document.getElementById("cmdCharly");
const cmdFacherito = document.getElementById("cmdFacherito");


function verificarChecked() {
    //Busca todos los checkbox en el documento html
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    var checkboxesActivados = []

    // Mete todos los que estan checked a un array.
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            checkboxesActivados =
                Array.from(checkboxes) // Convierte los cheboxes en un array
                .filter(i => i.checked) // Usa filter para remover los que no esten checked.
                .map(i => i.value) // Usa map para sacar sólo el valor de los checkbox.
            console.log(checkboxesActivados)
            activarContadores(checkboxesActivados);

            if (checkboxesActivados.length > 0) {
                cambiarBotones(true);
            } else {
                cambiarBotones(false);
            }
            return checkboxesActivados;
        })
    });
}

verificarChecked();


function activarContadores(array) {
    if (array.includes("CafeSolo")) {
        cmdCafe.style.display = "";
        cmdCafe.value = "0";
    } else {
        cmdCafe.style.display = "none";
        cmdCafe.value = "0";
    }

    if (array.includes("Cortado")) {
        cmdCortado.style.display = "";
        cmdCortado.value = "0";
    } else {
        cmdCortado.style.display = "none";
        cmdCortado.value = "0";
    }

    if (array.includes("ConLeche")) {
        cmdConLeche.style.display = "";
        cmdConLeche.value = "0";
    } else {
        cmdConLeche.style.display = "none";
        cmdConLeche.value = "0";
    }

    if (array.includes("Lagrima")) {
        cmdLagrima.style.display = "";
        cmdLagrima.value = "0";
    } else {
        cmdLagrima.style.display = "none";
        cmdLagrima.value = "0";
    }

    if (array.includes("Capuccino")) {
        cmdCapuccino.style.display = "";
        cmdCapuccino.value = "0";
    } else {
        cmdCapuccino.style.display = "none";
        cmdCapuccino.value = "0";
    }

    if (array.includes("Leche")) {
        cmdLeche.style.display = "";
        cmdLeche.value = "0";
    } else {
        cmdLeche.style.display = "none";
        cmdLeche.value = "0";
    }

    if (array.includes("Charly")) {
        cmdCharly.style.display = "";
        cmdCharly.value = "0";
    } else {
        cmdCharly.style.display = "none";
        cmdCharly.value = "0";
    }

    if (array.includes("Facherito")) {
        cmdFacherito.style.display = "";
        cmdFacherito.value = "0";
    } else {
        cmdFacherito.style.display = "none";
        cmdFacherito.value = "0";
    }
}



// <-------------- CAMBIAR VALORES (ACEPTAR) ---------------->
// Estas funciones muestran o esconden todos los checkboxes y contadores en la app,
// dependiendo del valor que se le pasa por parametro. Ej.:
// cambiarContadores(true) --> enciende todos los contadores en el html.

//NOTA: Se pueden mejorar ambas funciones para pasar un array sólo con los valores que se quieren cambiar.
// caso contrario que el array esté vacío o no se pase, cambiará todas las opciones dependiendo del flag.

function cambiarBotones(flag){
    if(flag){
        btnCancelar.style.display = "";
        btnEnviar.style.display = "";
    } else {
        btnEnviar.style.display = "none";
        btnCancelar.style.display = "none";
    }
}

function cambiarContadores(flag)
{
    var value = "0"
    var display = ""

    if(flag){
        display = ""
    } else {
        display = "none"
    }

    var inputArray = new Array();
    inputArray = document.getElementsByTagName("input");
    for (var i=0; i<inputArray.length; i++)  {
        if (inputArray[i].type == 'number') {
            inputArray[i].style.display = display;
            inputArray[i].value = value;
        }
    }
}

function cambiarCheckboxes(flag)
{
    var value = "0"
    var display = ""

    if(flag){
        display = ""
    } else {
        display = "none"
    }

    var inputArray = new Array();
    inputArray = document.getElementsByTagName("input");
    for (var i=0; i<inputArray.length; i++)  {
        if (inputArray[i].type == 'checkbox') {
            inputArray[i].checked = flag;
        }
    }
}

// <-------------- MOSTRAR DATOS (ACEPTAR) ---------------->



const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const numeroTelefono = '543525611674';
const cant = '3';
const tipobebida = 'cafe';
var mensaje = "https://api.whatsapp.com/send?phone=" + numeroTelefono + "&text=---%20%C2%A1*Hola%20Charly*!%20---%0AQueremos%20hacer%20el%20siguiente%20pedido%20para%20el%20piso%207%3A%20" + cant + "%20" + tipobebida + ".%0A";

btnEnviar.addEventListener("click", function(e) {

    // setTimeout(() => {
    //     // let message = phone;
    //     window.open(mensaje);

    //     //     if (isMobile()) {
    //     //         window.open(urlMobile + message, '_blank')
    //     //     } else {
    //     //         window.open(urlDesktop + message, '_blank')
    //     //     }
    //     // }, 2000);;
    // })

    $("#btnEnviar").click(function() {
        swal({
            title: "¿Estamos listos?",
            text: "Deseas enviar este pedido el pedido a Charly?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willSend) => {
            if (willSend) {
              swal("¡Excelente! Confirmá en la ventana de Whatsapp para enviar pedido.", {
                icon: "success",
            });
            } else {
              swal("Se canceló el pedido, pero aún podés modificarlo.", {
              icon: "error",
              })
            };
        })
    });
});

// <------------- BOTON CANCELAR ---------------->

btnCancelar.addEventListener("click", function(limpiar) {
    $("#btnCancelar").click(function() {
        swal({
            title: "Cancelar pedido",
            text: "¿Deseas cancelar el pedido?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willSend) => {
            if (willSend) {
              swal("¡Pedido cancelado!", {
                icon: "error",
            });
            cambiarBotones(false);
            cambiarCheckboxes(false);
            cambiarContadores(false);
            };
        })
    });

    cortado = parseInt(cmdCortado.value);
    conLeche = parseInt(cmdConLeche.value);
    lagrima = parseInt(cmdLagrima.value);
    capuccino = parseInt(cmdCapuccino.value);

    console.clear();
});