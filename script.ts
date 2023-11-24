interface Smarthphone {
  carica: number;
  numerochiamate: number;
}

class Utenza implements Smarthphone {
  carica: number = 0;
  numerochiamate: number = 0;
  costoChiamataPerMinuto: number = 0.2;

  constructor(_carica: number = 0, _numerochiamate: number = 0, _costoChiamataPerMinuto: number = 0.2) {
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
    this.modifica();
  }

  reset(): void {
    this.carica = 0;
    this.numerochiamate = 0;
    this.modifica();
  }

  modifica(): void {
    const info = document.getElementById("informazioni");
    if (info) {
      info.innerHTML = `
          <p>Ricarica: ${this.carica}</p>
          <p>Chiamate: ${this.getNumeroChiamate()}</p>
          <p>Credito Residuo: ${this.numero404()}</p>`;
    } else {
      console.error("Element with id 'informazioni' not found.");
    }
  }
}

const utente1 = new Utenza(this._carica, this._numerochiamate, this._costoChiamataPerMinuto);

function ricarica(): void {
  const ricaricaInput = document.getElementById("ricaricaInput") as HTMLInputElement;
  const ricaricaAmount: number = parseInt(ricaricaInput.value) || 0;
  utente1.ricarica(ricaricaAmount);
  utente1.modifica();
}

function effettuaChiamata(): void {
  const durataChiamataInput = document.getElementById("durataChiamataInput") as HTMLInputElement;
  const durataChiamata: number = parseInt(durataChiamataInput.value) || 0;

  let i = 0;
  // while (utente1.carica > 0 && i < durataChiamata) {
  //   utente1.chiamata(i);
  //   i++;
  // }

  // utente1.carica = Math.floor(utente1.carica);

  // utente1.modifica();

  const calcolo = setInterval(() => {
    if (utente1.carica > 0 && i < durataChiamata) {
      utente1.chiamata(i);
      i++;
      utente1.modifica();
    } else {
      clearInterval(calcolo);
    }
  }, 1000);
}

function azzeraChiamate(): void {
  utente1.azzeraChiamate();
  utente1.modifica();
}

function reset(): void {
  utente1.reset();
}

const h2Element = document.querySelector("#smartphone h2");
const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
h2Element!.textContent = `${currentTime}`;

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
