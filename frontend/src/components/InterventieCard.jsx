// Un singur element din listă, primit prin props.
const ETICHETE_TIP = { mentenanta: "Mentenanță", diagnoza: "Diagnoză", reparatie: "Reparație" };

export default function InterventieCard({ interventie }) {
  // Destructurăm prop-ul { interventie } pentru a accesa direct proprietățile sale[cite: 16, 18]
  return (
    // Aplicăm clasa "done" condiționat, în funcție de proprietatea "stare"[cite: 18]
    <li className={interventie.stare ? "task-card done" : "task-card"}>
      <div>
        <h3>{interventie.titlu}</h3>
        {/* Construim dinamic clasa pentru culoare (ex: badge-mentenanta) și traducem textul afișat[cite: 18] */}
        <span className={`badge badge-${interventie.eticheta}`}>
          Tip: {ETICHETE_TIP[interventie.eticheta]}
        </span>
      </div>
      {/* Afișăm textul corespunzător stării curente[cite: 18] */}
      <span className="status">{interventie.stare ? "Finalizat" : "Activ"}</span>
    </li>
  );
}