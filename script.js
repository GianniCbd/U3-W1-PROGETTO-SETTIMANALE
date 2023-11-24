var Utenza = /** @class */ (function () {
    function Utenza(_carica, _numerochiamate, _costoChiamataPerMinuto) {
        if (_carica === void 0) { _carica = 0; }
        if (_numerochiamate === void 0) { _numerochiamate = 0; }
        if (_costoChiamataPerMinuto === void 0) { _costoChiamataPerMinuto = 0.2; }
        this.carica = 0;
        this.numerochiamate = 0;
        this.costoChiamataPerMinuto = 0.2;
        this.carica = _carica;
        this.numerochiamate = _numerochiamate;
        this.costoChiamataPerMinuto = _costoChiamataPerMinuto;
    }
    Utenza.prototype.ricarica = function (Ricarica) {
        this.carica += Ricarica;
    };
    Utenza.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = minutiDurata * this.costoChiamataPerMinuto;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numerochiamate++;
        }
        else {
            console.log("credito disponibile esaurito");
        }
    };
    Utenza.prototype.numero404 = function () {
        var totalCost = this.numerochiamate * this.costoChiamataPerMinuto;
        return this.carica - totalCost;
    };
    Utenza.prototype.getNumeroChiamate = function () {
        return this.numerochiamate;
    };
    Utenza.prototype.azzeraChiamate = function () {
        this.numerochiamate = 0;
        this.modifica();
    };
    Utenza.prototype.reset = function () {
        this.carica = 0;
        this.numerochiamate = 0;
        this.modifica();
    };
    Utenza.prototype.modifica = function () {
        var info = document.getElementById("informazioni");
        if (info) {
            info.innerHTML = "\n          <p>Ricarica: ".concat(this.carica, "</p>\n          <p>Chiamate: ").concat(this.getNumeroChiamate(), "</p>\n          <p>Credito Residuo: ").concat(this.numero404(), "</p>");
        }
        else {
            console.error("Element with id 'informazioni' not found.");
        }
    };
    return Utenza;
}());
var utente1 = new Utenza(this._carica, this._numerochiamate, this._costoChiamataPerMinuto);
function ricarica() {
    var ricaricaInput = document.getElementById("ricaricaInput");
    var ricaricaAmount = parseInt(ricaricaInput.value) || 0;
    utente1.ricarica(ricaricaAmount);
    utente1.modifica();
}
function effettuaChiamata() {
    var durataChiamataInput = document.getElementById("durataChiamataInput");
    var durataChiamata = parseInt(durataChiamataInput.value) || 0;
    var i = 0;
    while (utente1.carica > 0 && i < durataChiamata) {
        utente1.chiamata(i);
        i++;
    }
    utente1.carica = Math.floor(utente1.carica);
    utente1.modifica();
}
function azzeraChiamate() {
    utente1.azzeraChiamate();
    utente1.modifica();
}
function reset() {
    utente1.reset();
}
var h2Element = document.querySelector("#smartphone h2");
var currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
h2Element.textContent = "".concat(currentTime);
// utente1.modifica();
// console.log("utente1");
// console.log("Ricarica:", utente1.carica);
// console.log("Chiamate:", utente1.getNumeroChiamate());
// console.log("credito residuo:", utente1.numero404());
// utente1.azzeraChiamate();
// console.log("Numero di chiamate dopo l'azzeramento:", utente1.getNumeroChiamate());
// const utente2 = new Utenza(30, 5, 0.2);
// console.log("utente2");
// console.log("Ricarica:", utente2.carica);
// console.log("Chiamate:", utente2.getNumeroChiamate());
// console.log("credito residuo:", utente2.numero404());
// utente2.azzeraChiamate();
// console.log("Numero di chiamate dopo l'azzeramento:", utente2.getNumeroChiamate());
// const utente3 = new Utenza(20, 10, 0.2);
// console.log("utente3");
// console.log("Ricarica:", utente3.carica);
// console.log("Chiamate:", utente3.getNumeroChiamate());
// console.log("credito residuo:", utente3.numero404());
// utente3.azzeraChiamate();
// console.log("Numero di chiamate dopo l'azzeramento:", utente3.getNumeroChiamate());
