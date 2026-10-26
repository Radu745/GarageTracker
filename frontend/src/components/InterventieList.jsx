import InterventieCard from "./InterventieCard.jsx";

// Adăugăm onToggle și onDelete în lista de props[cite: 14]
export default function InterventieList({ interventii, onToggle, onDelete }) {
  if (interventii.length === 0) {
    return <p className="empty">Nu există nicio intervenție adăugată.</p>;
  }

  return (
    <ul className="task-list">
      {interventii.map((interventie) => (
        <InterventieCard 
          key={interventie.id} 
          interventie={interventie} 
          // Transmitem funcțiile mai departe către componenta copil[cite: 14]
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}