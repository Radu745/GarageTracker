const ETICHETE_TIP = { mentenanta: "Mentenanță", diagnoza: "Diagnoză", reparatie: "Reparație" };

// Cardul primește acum elementul și cele două funcții din părinte
export default function InterventieCard({ interventie, onToggle, onDelete }) {
  return (
    <li 
      className={interventie.stare ? "task-card done" : "task-card"}
      data-testid="item" 
      data-id={interventie.id}
    >
      {/* label permite bifarea direct prin clic pe text*/}
      <label className="task-main">
        <input
          type="checkbox"
          checked={interventie.stare}
          onChange={() => onToggle(interventie.id)} // Funcția de comutare este apelată la schimbare
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{interventie.titlu}</h3>
          <span className={`badge badge-${interventie.eticheta}`}>
            Tip: {ETICHETE_TIP[interventie.eticheta]}
          </span>
        </div>
      </label>
      
      {/* Butonul de ștergere apelează funcția doar la clic și are aria-label pentru accesibilitate*/}
      <button
        className="btn-danger"
        onClick={() => onDelete(interventie.id)}
        aria-label={`Șterge ${interventie.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}