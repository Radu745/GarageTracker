export const TIPURI_INTERVENTIE = ["mentenanta", "diagnoza", "reparatie"];
const TITLU_MAX = 100;

export function valideazaInterventie(body, { partial = false } = {}) {
  const erori = [];
  const date = {};

  if (!partial || body.titlu !== undefined) {
    if (typeof body.titlu !== "string" || body.titlu.trim() === "") {
      erori.push("titlu este obligatoriu");
    } else if (body.titlu.trim().length > TITLU_MAX) {
      erori.push(`titlu are maximum ${TITLU_MAX} de caractere`);
    } else {
      date.titlu = body.titlu.trim();
    }
  }

  if (!partial || body.eticheta !== undefined) {
    const e = body.eticheta ?? "mentenanta";
    if (!TIPURI_INTERVENTIE.includes(e)) {
      erori.push(`eticheta trebuie să fie una din: ${TIPURI_INTERVENTIE.join(", ")}`);
    } else {
      date.eticheta = e;
    }
  }

  if (body.stare !== undefined) {
    if (typeof body.stare !== "boolean") {
      erori.push("stare trebuie să fie true sau false");
    } else {
      date.stare = body.stare;
    }
  } else if (!partial) {
    date.stare = false;
  }

  if (body.categorie !== undefined) {
    if (typeof body.categorie !== "string") {
      erori.push("categorie trebuie să fie text");
    } else {
      date.categorie = body.categorie.trim();
    }
  } else if (!partial) {
    date.categorie = "";
  }

  return { erori, date };
}

export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}