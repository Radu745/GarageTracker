const interventii = [
    { id: 1, titlu: "Înlocuire bujii și verificare instalație GPL", stare: true, eticheta: "mentenanta" },
    { id: 2, titlu: "Scanare module de control cu VCDS", stare: false, eticheta: "diagnoza" },
    { id: 3, titlu: "Identificare și înlocuire furtunuri vacuum", stare: false, eticheta: "reparatie" }
];

const TIPURI_INTERVENTII = ["mentenanta", "diagnoza", "reparatie"];

console.log("Fișierul JavaScript a fost încărcat cu succes.");

// Pasul 3: Listarea titlurilor
function listeazaTitluri(lista) {
  return lista.map((t) => t.titlu);
}

// Pasul 4: Numărarea elementelor active (nebifate / cu stare pe false)
function numaraActive(lista) {
  return lista.filter((t) => !t.stare).length;
}

// Pasul 5: Căutarea după titlu[cite: 18]
function cautaDupaTitlu(lista, text) {
  const textCautat = text.toLowerCase();
  return lista.filter((t) => t.titlu.toLowerCase().includes(textCautat));
}

// Funcție separată pentru calcularea noului ID folosind metoda reduce
function nextId(lista) {
  // Găsește cel mai mare ID existent și adună 1 pentru a evita duplicatele
  return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

// Funcția principală de adăugare a unei intervenții auto
function adaugaInterventie(lista, titlu, eticheta = "mentenanta") {
  const titluCurat = titlu.trim();

  // 1. Validarea titlului: se respinge adăugarea dacă textul este gol
  if (!titluCurat) {
    console.log("Eroare validare: Titlul nu poate fi gol.");
    return lista; // Se returnează lista neschimbată
  }

  // 2. Validarea etichetei: se respinge dacă valoarea nu există în lista de valori permise
  if (!TIPURI_INTERVENTII.includes(eticheta)) {
    console.log(`Eroare validare: Etichetă invalidă - ${eticheta}`);
    return lista; // Se returnează lista neschimbată
  }

  // 3. Construirea obiectului nou utilizând ID-ul calculat
  const nou = { 
    id: nextId(lista), 
    titlu: titluCurat, 
    stare: false, // Noua intervenție este implicit nefinalizată
    eticheta: eticheta 
  };

  // 4. Returnarea unui array nou care include elementul nou adăugat la final (imutabilitate)
  return [...lista, nou];
}

function comutaStare(lista, id) {
  // map() înlocuiește doar elementul cu id-ul căutat cu o copie a sa având starea inversată
  return lista.map((t) => 
    t.id === id ? { ...t, stare: !t.stare } : t
  );
}

function stergeInterventie(lista, id) {
  // filter() păstrează toate elementele, exceptându-l pe cel cu id-ul vizat
  return lista.filter((t) => t.id !== id);
}

console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(interventii).join(", "));
console.log("Active (nefinalizate):", numaraActive(interventii));
console.log("Căutare 'înlocuire':", listeazaTitluri(cautaDupaTitlu(interventii, "înlocuire")).join(", "));

console.log("--- Adăugare ---");
// Adăugăm o intervenție nouă într-o variabilă diferită pentru a testa imutabilitatea
let listaNoua = adaugaInterventie(interventii, "Schimb ulei și filtre", "mentenanta");
console.log("Lista nouă:", listaNoua.length, "intervenții");
console.log("Originalul a rămas cu:", interventii.length, "intervenții"); // Trebuie să fie în continuare 3

console.log("--- Modificare și ștergere ---");
listaNoua = comutaStare(listaNoua, 1);
console.log("După bifarea ID 1, active:", numaraActive(listaNoua));

listaNoua = stergeInterventie(listaNoua, 3);
console.log("După ștergerea ID 3:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
// Aceste apeluri vor declanșa mesajele de eroare personalizate
adaugaInterventie(listaNoua, "   "); 
adaugaInterventie(listaNoua, "Echilibrare roți", "vopsitorie");