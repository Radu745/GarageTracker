import InterventieCard from "./InterventieCard.jsx";

export default function InterventieList({ interventii }) {
  // 1. Verificăm dacă lista este goală și returnăm un mesaj explicit[cite: 18, 19]
  if (interventii.length === 0) {
    return <p className="empty">Nu există nicio intervenție adăugată.</p>;
  }

  // 2. Dacă avem date, randăm un <ul> și mapăm array-ul[cite: 18]
  return (
    <ul className="task-list">
      {interventii.map((interventie) => (
        // Atributul "key" este obligatoriu și trebuie să fie unic (folosim id-ul)[cite: 18, 19]
        <InterventieCard key={interventie.id} interventie={interventie} />
      ))}
    </ul>
  );
}