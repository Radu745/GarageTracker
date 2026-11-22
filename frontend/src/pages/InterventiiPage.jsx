import { useState, useEffect } from "react";
import { getInterventii, updateInterventie, deleteInterventie, createInterventie } from "../api.js";
import InterventieList from "../components/InterventieList.jsx";
import InterventieForm from "../components/InterventieForm.jsx";
import styles from "./InterventiiPage.module.css";

export default function InterventiiPage() {
  const [interventii, setInterventii] = useState([]);
  const [eroare, setEroare] = useState(null);
  const [loading, setLoading] = useState(true);
  const [zonaSelectata, setZonaSelectata] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await getInterventii();
        if (!ignore) setInterventii(data);
      } catch {
        if (!ignore) setEroare("Nu s-a putut stabili conexiunea cu baza de date a garajului.");
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => { ignore = true; };
  }, []);

  async function handleAdd(interventieNoua) {
    const creat = await createInterventie(interventieNoua);
    setInterventii((prev) => [...prev, creat]);
  }

  const handleToggle = async (id) => {
    const item = interventii.find((i) => i.id === id);
    if (!item) return;

    try {
      const actualizat = await updateInterventie(id, { stare: !item.stare });
      setInterventii((prev) => prev.map((i) => (i.id === id ? actualizat : i)));
      setEroare(null);
    } catch (err) {
      setEroare(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteInterventie(id);
      setInterventii((prev) => prev.filter((i) => i.id !== id));
      setEroare(null);
    } catch (err) {
      setEroare(err.message);
    }
  };

  const getZonaInterventiei = (item) => {
    const text = (item.titlu + " " + (item.categorie || "")).toLowerCase();
    if (text.includes("fran") || text.includes("echilibrar") || text.includes("disc") || text.includes("placut") || text.includes("rot") || text.includes("anvelop") || text.includes("jant") || text.includes("rulment") || text.includes("suspensi") || text.includes("articulati") || text.includes("amortizor") || text.includes("brat") || text.includes("arc") || text.includes("bielet") || text.includes("directie") || text.includes("geometrie")) {
      return "roti_suspensie";
    }
    if (text.includes("baterie") || text.includes("alternator") || text.includes("senzor") || text.includes("vcds") || text.includes("diagnoza") || text.includes("bec") || text.includes("sigurant") || text.includes("cabl") || text.includes("electr")) {
      return "electrica";
    }
    return "motor";
  };

  const interventiiFiltrate = zonaSelectata
    ? interventii.filter((item) => getZonaInterventiei(item) === zonaSelectata)
    : [];

  const labelsZone = {
    motor: "Compartiment Motor & Mecanică",
    roti_suspensie: "Roți, Frâne & Suspensie",
    electrica: "Instalație Electrică & Diagnoză",
  };

  const totalInterventii = interventii.length;
  const interventiiCompletate = interventii.filter((item) => item.stare).length;
  const interventiiInDerulare = totalInterventii - interventiiCompletate;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <div className={styles.intro}>
          <h2>ADAUGĂ INTERVENȚIE</h2>
        </div>
        <InterventieForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        {loading && <p className="info" data-testid="loading">Se deschide manualul de service...</p>}
        {eroare && <div className="error" data-testid="error">{eroare}</div>}

        {!loading && (
          zonaSelectata === null ? (
            <div className={styles.dashboardView}>
              <div className={styles.intro}>
                <h2>PANOU DE CONTROL SERVICE</h2>
                <p className={styles.subtitle}>Selectați secțiunea dorită pentru a vizualiza lucrările efectuate:</p>
              </div>

              <div className={styles.dashboardGrid}>
                <div className={styles.dashboardCard} onClick={() => setZonaSelectata("motor")}>
                  <div className={styles.cardIcon}>⚙️</div>
                  <h3>Compartiment Motor</h3>
                  <p>Intervenții mecanice, distribuție, ulei, bujii, etanșare și ansamblu motor.</p>
                  <span className={styles.cardAction}>Accesează fișa →</span>
                </div>

                <div className={styles.dashboardCard} onClick={() => setZonaSelectata("roti_suspensie")}>
                  <div className={styles.cardIcon}>🛑</div>
                  <h3>Roți, Frâne & Suspensie</h3>
                  <p>Discuri, plăcuțe, anvelope, geometria, bascule, amortizoare și tren de rulare.</p>
                  <span className={styles.cardAction}>Accesează fișa →</span>
                </div>

                <div className={styles.dashboardCard} onClick={() => setZonaSelectata("electrica")}>
                  <div className={styles.cardIcon}>🔋</div>
                  <h3>Instalație Electrică</h3>
                  <p>Diagnoză VCDS, senzori, baterie, alternator, cablaje și elemente de iluminat.</p>
                  <span className={styles.cardAction}>Accesează fișa →</span>
                </div>
              </div>

              <div className={styles.footerNote}>
                Total intervenții înregistrate: <strong>{totalInterventii}</strong>
                <div className={styles.statsSub}>
                  ✅ Finalizate: <strong>{interventiiCompletate}</strong>  |  ⏳ În așteptare: <strong>{interventiiInDerulare}</strong>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.checklistNav}>
                <button className={styles.btnBack} onClick={() => setZonaSelectata(null)}>
                  ← Înapoi la panoul principal
                </button>
                <h2 className={styles.zoneTitle}>{labelsZone[zonaSelectata]}</h2>
              </div>

              <InterventieList
                interventii={interventiiFiltrate}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            </div>
          )
        )}
      </section>
    </div>
  );
}