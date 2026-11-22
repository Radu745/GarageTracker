import { useState } from "react";
import styles from "./InterventieForm.module.css";

// Categoriile adaptate la funcția ta getZonaInterventiei
const CATEGORII = [
  { value: "motor", label: "Compartiment Motor & Mecanică" },
  { value: "roti_suspensie", label: "Roți, Frâne & Suspensie" },
  { value: "electrica", label: "Instalație Electrică & Diagnoză" },
];

const TITLU_MAX = 100;

export default function InterventieForm({ onAdd }) {
  // Formular controlat: state-ul React dictează ce apare în câmpuri
  const [titlu, setTitlu] = useState("");
  const [categorie, setCategorie] = useState("motor");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Titlul intervenției este obligatoriu.";
    if (t.length > TITLU_MAX) return `Titlul are maximum ${TITLU_MAX} de caractere.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault(); // Oprește reîncărcarea paginii[cite: 16]

    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);

    try {
      // Formularul doar trimite datele mai departe către App.jsx[cite: 16]
      await onAdd({ titlu: titlu.trim(), categorie, stare: false });
      // Golește câmpurile doar dacă salvarea a reușit pe server[cite: 16]
      setTitlu("");
      setCategorie("motor");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Nume intervenție
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Schimb ulei și filtre"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Tip lucrare
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          data-testid="form-categorie"
        >
          {CATEGORII.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă în jurnal"}
      </button>
    </form>
  );
}