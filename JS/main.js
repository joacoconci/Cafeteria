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



let cortado;
let conLeche;
let lagrima;
let capuccino;

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



//HABILITAR CONTADORES

// Crear una funcion como la siguiente para todos las variables que comiencen con chk
// chkCortado.addEventListener("change", function(habilitarCortado) {
//     if (chkCortado.checked) {
//         cmdCortado.style.display = "";
//     } else cmdCortado.style.display = "none";
//     cmdCortado.value = "0";
// });


// //Crear una funcion para todos los objetos que comiencen con chk
// chkCafe.addEventListener("change", function(habilitarCafe) {
//     if (chkCafe.checked) {
//         cmdCafe.style.display = "";
//     } else cmdCafe.style.display = "none";
//     cmdCafe.value = "0";
// });


// chkCortado.addEventListener("change", function(habilitarCortado) {
//     if (chkCortado.checked) {
//         cmdCortado.style.display = "";
//     } else cmdCortado.style.display = "none";
//     cmdCortado.value = "0";
// });


// chkConLeche.addEventListener("change", function(habilitarConLeche) {
//     if (chkConLeche.checked) {
//         cmdConLeche.style.display = "";
//     } else cmdConLeche.style.display = "none";
//     cmdConLeche.value = "0";
// });


// chkLagrima.addEventListener("change", function(habilitarLagrima) {
//     if (chkLagrima.checked) {
//         cmdLagrima.style.display = "";
//     } else cmdLagrima.style.display = "none";
//     cmdLagrima.value = "0";
// });


// chkCapuccino.addEventListener("change", function(habilitarCapuccino) {
//     if (chkCapuccino.checked) {
//         cmdCapuccino.style.display = "";
//     } else cmdCapuccino.style.display = "none";
//     cmdCapuccino.value = "0";
// });


// chkLeche.addEventListener("change", function(habilitarLeche) {
//     if (chkLeche.checked) {
//         cmdLeche.style.display = "";
//     } else cmdLeche.style.display = "none";
//     cmdLeche.value = "0";
// });


// chkCharly.addEventListener("change", function(habilitarCharly) {
//     if (chkCharly.checked) {
//         cmdCharly.style.display = "";
//     } else {cmdCharly.style.display = "none";
//     cmdCharly.value = "0";}
// });


// chkFacherito.addEventListener("change", function(habilitarFacherito) {
//     if (chkFacherito.checked) {
//         cmdFacherito.style.display = "";
//         activarAceptar();
//     } else {
//         cmdFacherito.style.display = "none";
//         cmdFacherito.value = "0";
//         desactivarAceptar();
//     }
// });

function verificarChecked() {
    //Busca todos los checkbox en el documento html
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    let enabledSettings = []

    // Mete todos los que estan checked a un array.
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            enabledSettings =
                Array.from(checkboxes) // Convierte los cheboxes en un array
                .filter(i => i.checked) // Usa filter para remover los que no esten checked.
                .map(i => i.value) // Usa map para sacar sólo el valor de los checkbox.
            console.log(enabledSettings)
            if (enabledSettings.length > 0) {
                activarAceptar();
            } else {
                desactivarAceptar();
            }
        })
    });
}

verificarChecked();

function activarAceptar() {
    btnEnviar.style.display = "";
    btnCancelar.style.display = "";
}

function desactivarAceptar() {
    btnEnviar.style.display = "none";
    btnCancelar.style.display = "none";
}




//<-------------- HABILITAR ACEPTAR -------------->
chkCortado.addEventListener("change", function(activarAceptar) {
    if (
        chkCafe.checked ||
        chkCortado.checked ||
        chkConLeche.checked ||
        chkLagrima.checked ||
        chkCapuccino.checked ||
        chkLeche.checked ||
        chkCharly.checked ||
        chkFacherito.checked
    ) {
        btnEnviar.style.display = "";
        btnCancelar.style.display = "";
    } else(btnEnviar.style.display = "none"), (btnCancelar.style.display = "none");
});



// <-------------- MOSTRAR DATOS (ACEPTAR) ---------------->



const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '3525455485';

function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}
btnEnviar.addEventListener("click", function(e) {


    setTimeout(() => {



        let message = phone;
        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

    }, 2000);

});



// <------------- BOTON CANCELAR ---------------->

btnCancelar.addEventListener("click", function(limpiar) {
    chkCortado.checked = false;
    cmdCortado.style.display = "none";
    btnCancelar.style.display = "none";
    btnEnviar.style.display = "none";

    chkConLeche.checked = false;
    cmdConLeche.style.display = "none";
    btnCancelar.style.display = "none";
    btnEnviar.style.display = "none";

    chkLagrima.checked = false;
    cmdLagrima.style.display = "none";
    btnCancelar.style.display = "none";
    btnEnviar.style.display = "none";

    chkCapuccino.checked = false;
    cmdCapuccino.style.display = "none";
    btnCancelar.style.display = "none";
    btnEnviar.style.display = "none";

    cortado = parseInt(cmdCortado.value);
    conLeche = parseInt(cmdConLeche.value);
    lagrima = parseInt(cmdLagrima.value);
    capuccino = parseInt(cmdCapuccino.value);

    console.clear();
});