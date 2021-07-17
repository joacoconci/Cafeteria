//Create a class called "cafe" with a constructor method with following attributes: Tipo, Tamano will be a boolean.
function Cafe(Tipo, Tamano) {
    this.Tipo = Tipo;
    this.Tamano = Tamano;
}



//Crear objetos const de la clase cafe con tipo(Capuccino, Café , Leche Sola, Lágrima, Cortado, Café con Leche, Charly y Facherito), todos con tamano bool false.
const Capuccino = new Cafe('Capuccino', false);
const Cafe = new Cafe('Café', true);
const LecheSola = new Cafe('Leche Sola', true);
const Lagrima = new Cafe('Lágrima', true);
const Cortado = new Cafe('Cortado', true);
const CafeConLeche = new Cafe('Café con Leche', true);
const Charly = new Cafe('Charly', false);
const Facherito = new Cafe('Facherito', false);





// let cortado;
// let conLeche;
// let lagrima;
// let capuccino;


//OBJETOS

const chkCortado = document.getElementById("chkCortado")
const chkConLeche = document.getElementById("chkConLeche");
const chkLagrima = document.getElementById("chkLagrima");
const chkCapuccino = document.getElementById("chkCapuccino");
const btnCancelar = document.getElementById("btnCancelar");
const btnEnviar = document.getElementById("btnEnviar");
const cmdCortado = document.getElementById("cmdCortado");
const cmdConLeche = document.getElementById("cmdConLeche");
const cmdCapuccino = document.getElementById("cmdCapuccino");
const cmdLagrima = document.getElementById("cmdLagrima");

//HABILITAR CONTADORES


chkCortado.addEventListener("change", function(habilitarCortado) {
    if (chkCortado.checked) {
        cmdCortado.style.display = "";
    } else cmdCortado.style.display = "none";

    cmdCortado.value = "0";
});

chkConLeche.addEventListener("change", function(habilitarConLeche) {
    if (chkConLeche.checked) {
        cmdConLeche.style.display = "";
    } else cmdConLeche.style.display = "none";

    cmdConLeche.value = "0";
});


chkLagrima.addEventListener("change", function(habilitarLagrima) {
    if (chkLagrima.checked) {
        cmdLagrima.style.display = "";
    } else cmdLagrima.style.display = "none";

    cmdLagrima.value = "0";
});


chkCapuccino.addEventListener("change", function(habilitarCapuccino) {
    if (chkCapuccino.checked) {
        cmdCapuccino.style.display = "";
    } else cmdCapuccino.style.display = "none";

    cmdCapuccino.value = "0";
});


//<-------------- HABILITAR ACEPTAR -------------->
chkCortado.addEventListener("change", function(activarAceptar) {
    if (
        chkCortado.checked ||
        chkConLeche.checked ||
        chkLagrima.checked ||
        chkCapuccino.checked
    ) {
        btnEnviar.style.display = "";
        btnCancelar.style.display = "";
    } else(btnEnviar.style.display = "none"), (btnCancelar.style.display = "none");
});

chkConLeche.addEventListener("change", function(activarAceptar) {
    if (
        chkCortado.checked ||
        chkConLeche.checked ||
        chkLagrima.checked ||
        chkCapuccino.checked
    ) {
        btnEnviar.style.display = "";
        btnCancelar.style.display = "";
    } else(btnEnviar.style.display = "none"), (btnCancelar.style.display = "none");
});

chkLagrima.addEventListener("change", function(activarAceptar) {
    if (
        chkCortado.checked ||
        chkConLeche.checked ||
        chkLagrima.checked ||
        chkCapuccino.checked
    ) {
        btnEnviar.style.display = "";
        btnCancelar.style.display = "";
    } else(btnCancelar.style.display = "none"), (btnCancelar.style.display = "none");
});

chkCapuccino.addEventListener("change", function(activarAceptar) {
    if (
        chkCortado.checked ||
        chkConLeche.checked ||
        chkLagrima.checked ||
        chkCapuccino.checked
    ) {
        btnEnviar.style.display = "";
        btnCancelar.style.display = "";

    } else(btnEnviar.style.display = "none"), (btnCancelar.style.display = "none"), (listados.innerHTML = "");
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