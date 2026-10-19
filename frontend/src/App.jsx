// 8.2. Datele sunt mutate deasupra funcției pentru a nu fi recreate la fiecare randare
import InterventieList from "./components/InterventieList.jsx";
const interventii = [
  { id: 1, titlu: "Înlocuire bujii și verificare instalație GPL", stare: false, eticheta: "mentenanta" },
  { id: 2, titlu: "Scanare module de control cu VCDS", stare: false, eticheta: "diagnoza" },
  { id: 3, titlu: "Identificare și înlocuire furtunuri vacuum", stare: true, eticheta: "reparatie" }
];

// 8.1. Scheletul componentei principale[cite: 9]
export default function App() {
  // 8.3. Calculăm intervențiile active (stare: false înseamnă nefinalizat/activ)[cite: 9]
  const active = interventii.filter((t) => !t.stare).length;

  return (
    <>
      {/* 8.4. Antetul care afișează valorile calculate[cite: 9] */}
      <header className="app-header">
        <h1>GarageTracker</h1>
        <p>Sistem de management pentru mentenanță și reparații auto.</p>
        <p className="app-count">
          {interventii.length} intervenții, dintre care {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Intervențiile mele</h2>
          {/* Am înlocuit JSON.stringify cu componenta de listă și i-am transmis datele */}
          <InterventieList interventii={interventii} />
        </section>
      </main>
    </>
  );
}