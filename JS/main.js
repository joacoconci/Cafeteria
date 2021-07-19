// Instancias de inputs(checkbox y contadores-numbers) y botones.

let chkCafe = document.getElementById("chkCafe");
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
const cmdLagrima = document.getElementById("cmdLagrima");
const cmdCapuccino = document.getElementById("cmdCapuccino");
const cmdLeche = document.getElementById("cmdLeche");
const cmdCharly = document.getElementById("cmdCharly");
const cmdFacherito = document.getElementById("cmdFacherito");


function verificarChecked() {
    //Busca todos los checkbox en el documento html
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    var checkboxesActivados = [];
    var checkboxesDesactivados = [];

    // Mete todos los que estan checked a un array.
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            checkboxesActivados =
                Array.from(checkboxes) // Convierte los cheboxes en un array
                    .filter(i => i.checked) // Usa filter para remover los que no esten checked.
                    .map(i => i.value) // Usa map para sacar sólo el valor de los checkbox.

            checkboxesTodos =
                Array.from(checkboxes)
                    // .filter(i => i.checked == false) 
                    .map(i => i.value)

            activarContadores(checkboxesTodos);

            if (checkboxesActivados.length > 0) {
                cambiarBotones(true);

            } else {
                cambiarBotones(false);
            }
        })
    });
}

verificarChecked(); // Funcion principal: Verifica si hay algún checkbox activado, si lo hay, activa contadores y botones. 

// <-------------- CAMBIAR VALORES (ACEPTAR) ---------------->
// Estas funciones muestran o esconden todos los checkboxes y contadores en la app,
// dependiendo del valor que se le pasa por parametro. Ej.:
// cambiarContadores(true) --> enciende todos los contadores en el html.

//NOTA: Se pueden mejorar ambas funciones para pasar un array sólo con los valores que se quieren cambiar.
// caso contrario que el array esté vacío o no se pase, cambiará todas las opciones dependiendo del flag.

function cambiarBotones(flag) {
    if (flag) {
        btnCancelar.style.display = "";
        btnEnviar.style.display = "";
    } else {
        btnEnviar.style.display = "none";
        btnCancelar.style.display = "none";
    }
}

function cambiarContadores(flag) {
    var value = "0"
    var display = ""

    if (flag) { display = "" }
    else { display = "none" }

    var inputArray = new Array();
    inputArray = document.getElementsByTagName("input");
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].type == 'number') {
            inputArray[i].style.display = display;
            inputArray[i].value = value;
        }
    }
}

function activarContadores(arrayContadores) {
    for (var i = 0; i < arrayContadores.length; i++) {
        var elementoActual = arrayContadores[i];
        var seleccionarElemento = document.getElementById("cmd" + elementoActual);
        if (document.getElementById("chk" + arrayContadores[i]).checked) {
            seleccionarElemento.style.display = "";
            seleccionarElemento.value = "0";
        } else {
            seleccionarElemento.style.display = "none";
            seleccionarElemento.value = "0";
        }
    }
}

// <-------------- CAMBIAR VALORES (CANCELAR) ---------------->
// Esta función cambia el valor de los checkboxes y contadores a 0.

function cancelar() {
    var inputArray = new Array();
    inputArray = document.getElementsByTagName("input");
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].type == 'number') {
            inputArray[i].style.display = "none";
            inputArray[i].value = "0";
        }
    }

    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    cambiarBotones(false);
    cambiarContadores(false);
}


function cambiarCheckboxes(flag) {
    var value = "0"
    var display = ""

    if (flag) {
        display = ""
    } else {
        display = "none"
    }

    var inputArray = new Array();
    inputArray = document.getElementsByTagName("input");
    for (var i = 0; i < inputArray.length; i++) {
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

btnEnviar.addEventListener("click", function (e) {

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

    $("#btnEnviar").click(function () {
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

btnCancelar.addEventListener("click", function (limpiar) {
    $("#btnCancelar").click(function () {
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