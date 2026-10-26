const ETICHETE_TIP = { mentenanta: "Mentenanță", diagnoza: "Diagnoză", reparatie: "Reparație" };

// Cardul primește acum elementul și cele două funcții din părinte[cite: 15]
export default function InterventieCard({ interventie, onToggle, onDelete }) {
  return (
    <li className={interventie.stare ? "task-card done" : "task-card"}>
      {/* label permite bifarea direct prin clic pe text[cite: 15] */}
      <label className="task-main">
        <input
          type="checkbox"
          checked={interventie.stare}
          onChange={() => onToggle(interventie.id)} // Funcția de comutare este apelată la schimbare[cite: 15]
        />
        <div>
          <h3>{interventie.titlu}</h3>
          <span className={`badge badge-${interventie.eticheta}`}>
            Tip: {ETICHETE_TIP[interventie.eticheta]}
          </span>
        </div>
      </label>
      
      {/* Butonul de ștergere apelează funcția doar la clic și are aria-label pentru accesibilitate[cite: 15] */}
      <button
        className="btn-danger"
        onClick={() => onDelete(interventie.id)}
        aria-label={`Șterge ${interventie.titlu}`}
      >
        Șterge
      </button>
    </li>
  );
}