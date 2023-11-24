var Utenza = /** @class */ (function () {
    function Utenza(_carica, _numerochiamate, _costoChiamataPerMinuto) {
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
    };
    return Utenza;
}());
var utente1 = new Utenza(50, 3, 0.2);
console.log("utente1");
console.log("Ricarica:", utente1.carica);
console.log("Chiamate:", utente1.getNumeroChiamate());
console.log("credito residuo:", utente1.numero404());
utente1.azzeraChiamate();
console.log("Numero di chiamate dopo l'azzeramento:", utente1.getNumeroChiamate());
var utente2 = new Utenza(30, 5, 0.2);
console.log("utente2");
console.log("Ricarica:", utente2.carica);
console.log("Chiamate:", utente2.getNumeroChiamate());
console.log("credito residuo:", utente2.numero404());
utente2.azzeraChiamate();
console.log("Numero di chiamate dopo l'azzeramento:", utente2.getNumeroChiamate());
var utente3 = new Utenza(20, 10, 0.2);
console.log("utente3");
console.log("Ricarica:", utente3.carica);
console.log("Chiamate:", utente3.getNumeroChiamate());
console.log("credito residuo:", utente3.numero404());
utente3.azzeraChiamate();
console.log("Numero di chiamate dopo l'azzeramento:", utente3.getNumeroChiamate());
