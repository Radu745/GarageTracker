import { useState } from "react";
import InterventieList from "./components/InterventieList.jsx";

// Datele de pornire din Etapele anterioare (acum folosite doar la inițializare)[cite: 25]
const INTERVENTII_INITIALE = [
  { id: 1, titlu: "Înlocuire bujii și verificare instalație GPL", stare: false, eticheta: "mentenanta" },
  { id: 2, titlu: "Scanare module de control cu VCDS", stare: false, eticheta: "diagnoza" },
  { id: 3, titlu: "Identificare și înlocuire furtunuri vacuum", stare: true, eticheta: "reparatie" }
];

// Tema de pornire: cea a sistemului de operare[cite: 25]
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  // 1. Definim lista și tema folosind starea din React (useState)[cite: 25]
  const [interventii, setInterventii] = useState(INTERVENTII_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  // 2. Funcție imutabilă pentru schimbarea stării (bifat/nebifat)[cite: 25]
  function handleToggle(id) {
    setInterventii((prev) =>
      prev.map((t) => (t.id === id ? { ...t, stare: !t.stare } : t))
    );
  }

  // 3. Funcție imutabilă pentru ștergerea unui element din listă[cite: 25]
  function handleDelete(id) {
    setInterventii((prev) => prev.filter((t) => t.id !== id));
  }

  // 4. Comutarea temei: state-ul pentru buton, atributul data-theme pentru CSS[cite: 25]
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  // Contorul se calculează automat la fiecare afișare, din lista curentă din state[cite: 25]
  const active = interventii.filter((t) => !t.stare).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>GarageTracker</h1>
        <p>Sistem de management pentru mentenanță și reparații auto.</p>
        <p className="app-count">
          {interventii.length} intervenții, dintre care {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Intervențiile mele</h2>
          <InterventieList 
            interventii={interventii} 
            onToggle={handleToggle} 
            onDelete={handleDelete} 
          />
        </section>
      </main>
    </>
  );
}