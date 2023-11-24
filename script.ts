interface Smarthphone {
  carica: number;
  numerochiamate: number;

  ricarica(Ricarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class Utenza implements Smarthphone {
  carica: number = 0;
  numerochiamate: number = 0;
  costoChiamataPerMinuto: number = 0.2;

  constructor(_carica: number, _numerochiamate: number, _costoChiamataPerMinuto: number) {
    this.carica = _carica;
    this.numerochiamate = _numerochiamate;
    this.costoChiamataPerMinuto = _costoChiamataPerMinuto;
  }

  ricarica(Ricarica: number): void {
    this.carica += Ricarica;
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = minutiDurata * this.costoChiamataPerMinuto;

    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numerochiamate++;
    } else {
      console.log("credito disponibile esaurito");
    }
  }

  numero404(): number {
    const totalCost = this.numerochiamate * this.costoChiamataPerMinuto;
    return this.carica - totalCost;
  }

  getNumeroChiamate(): number {
    return this.numerochiamate;
  }

  azzeraChiamate(): void {
    this.numerochiamate = 0;
  }
}

const utente1 = new Utenza(50, 3, 0.2);
console.log("Ricarica:", utente1.carica);
console.log("Chiamate:", utente1.getNumeroChiamate());
console.log("credito residuo:", utente1.numero404());
utente1.azzeraChiamate();
console.log("Numero di chiamate dopo l'azzeramento:", utente1.getNumeroChiamate());

const utente2 = new Utenza(30, 5, 0.2);

console.log("Ricarica:", utente2.carica);
console.log("Chiamate:", utente2.getNumeroChiamate());
console.log("credito residuo:", utente2.numero404());
utente2.azzeraChiamate();
console.log("Numero di chiamate dopo l'azzeramento:", utente2.getNumeroChiamate());

const utente3 = new Utenza(20, 10, 0.2);

console.log("Ricarica:", utente3.carica);
console.log("Chiamate:", utente3.getNumeroChiamate());
console.log("credito residuo:", utente3.numero404());
utente3.azzeraChiamate();
console.log("Numero di chiamate dopo l'azzeramento:", utente3.getNumeroChiamate());
