import { useState, useEffect } from 'react';
import { getInterventii, updateInterventie, deleteInterventie, createInterventie } from './api';
import InterventieCard from './components/InterventieCard';
import InterventieForm from './components/InterventieForm';
import './App.css';

export default function App() {
  const [interventii, setInterventii] = useState([]);
  const [eroare, setEroare] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [zonaSelectata, setZonaSelectata] = useState(null);
  const [temaIntunecata, setTemaIntunecata] = useState(false);

  // useEffect rescris cu 'ignore' pentru a preveni state updates pe o componentă demontată[cite: 23]
  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await getInterventii();
        if (!ignore) setInterventii(data);
      } catch (err) {
        if (!ignore) setEroare("Nu s-a putut stabili conexiunea cu baza de date a garajului.");
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => { ignore = true; };
  }, []);

  // Adăugarea: Întâi serverul, apoi state-ul[cite: 16]
  async function handleAdd(interventieNoua) {
    // Nu folosim try/catch aici; eroarea merge în formular și e afișată acolo[cite: 16]
    const creat = await createInterventie(interventieNoua);
    setInterventii((prev) => [...prev, creat]);
  }

  const handleToggle = async (id) => {
    const interventieDeModificat = interventii.find(item => item.id === id);
    if (!interventieDeModificat) return;

    try {
      const dataActualizata = await updateInterventie(id, { stare: !interventieDeModificat.stare });
      setInterventii(prev => prev.map(item => item.id === id ? dataActualizata : item));
      setEroare(null); // Ștergem erorile anterioare dacă reușește
    } catch (err) {
      setEroare(err.message); // Afișăm eroarea în UI[cite: 17]
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteInterventie(id);
      setInterventii(prev => prev.filter(item => item.id !== id));
      setEroare(null);
    } catch (err) {
      setEroare(err.message); // Afișăm eroarea în UI[cite: 17]
    }
  };

  const getZonaInterventiei = (item) => {
    const text = (item.titlu + " " + item.categorie).toLowerCase();
    
    if (text.includes('fran') || text.includes('disc') || text.includes('placut') || text.includes('rot') || text.includes('anvelop') || text.includes('jant') || text.includes('rulment') || text.includes('suspensi') || text.includes('articulati') || text.includes('amortizor') || text.includes('brat') || text.includes('arc') || text.includes('bielet') || text.includes('directie') || text.includes('geometrie')) {
      return 'roti_suspensie';
    }
    
    if (text.includes('baterie') || text.includes('alternator') || text.includes('senzor') || text.includes('vcds') || text.includes('diagnoza') || text.includes('bec') || text.includes('sigurant') || text.includes('cabl') || text.includes('electr')) {
      return 'electrica';
    }
    
    return 'motor';
  };

  const intervențiiFiltrate = zonaSelectata 
    ? interventii.filter(item => getZonaInterventiei(item) === zonaSelectata)
    : [];

  const labelsZone = {
    motor: "Compartiment Motor & Mecanică",
    roti_suspensie: "Roți, Frâne & Suspensie",
    electrica: "Instalație Electrică & Diagnoză"
  };

  // Calcularea statisticilor în timp real
  const totalInterventii = interventii.length;
  const interventiiCompletate = interventii.filter(item => item.stare).length;
  const interventiiInDerulare = totalInterventii - interventiiCompletate;

  return (
    <div className={temaIntunecata ? "app-wrapper dark-theme" : "app-wrapper"}>
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1>🏎️ GarageTracker</h1>
            <p className="app-count">Evidența reparațiilor, diagnozelor și a mentenanței auto</p>
          </div>
          <button 
            className="theme-toggle-btn" 
            onClick={() => setTemaIntunecata(!temaIntunecata)}
            title="Schimbă tema vizuală"
          >
            {temaIntunecata ? "☀️ Mod Luminos" : "🌙 Mod Întunecat"}
          </button>
        </div>
      </header>

      {/* Container principal împărțit în două */}
      <main className="container layout-2-col">
        
        {/* Coloana Stânga: Formularul[cite: 16] */}
        <section className="panel side-panel">
          <div className="blueprint-intro">
            <h2>ADAUGĂ INTERVENȚIE</h2>
          </div>
          <InterventieForm onAdd={handleAdd} />
        </section>

        {/* Coloana Dreapta: Dashboard-ul existent[cite: 16] */}
        <section className="panel main-panel">
          {loading && <p className="info" data-testid="loading">Se deschide manualul de service...</p>}
          {eroare && <div className="error" data-testid="error">{eroare}</div>}

          {/* S-a eliminat "!eroare" din condiție pentru ca panoul să nu dispară la erori de bifare/ștergere[cite: 16] */}
          {!loading && (
            zonaSelectata === null ? (
              <div className="dashboard-menu-view">
                <div className="blueprint-intro">
                  <h2>PANOU DE CONTROL SERVICE</h2>
                  <p className="blueprint-subtitle">Selectați secțiunea dorită pentru a vizualiza lucrările efectuate:</p>
                </div>

                <div className="dashboard-grid">
                  <div className="dashboard-card" onClick={() => setZonaSelectata('motor')}>
                    <div className="card-icon">⚙️</div>
                    <h3>Compartiment Motor</h3>
                    <p>Intervenții mecanice, distribuție, ulei, bujii, etanșare și ansamblu motor.</p>
                    <span className="card-action">Accesează fișa →</span>
                  </div>

                  <div className="dashboard-card" onClick={() => setZonaSelectata('roti_suspensie')}>
                    <div className="card-icon">🛑</div>
                    <h3>Roți, Frâne & Suspensie</h3>
                    <p>Discuri, plăcuțe, anvelope, geometria, bascule, amortizoare și tren de rulare.</p>
                    <span className="card-action">Accesează fișa →</span>
                  </div>

                  <div className="dashboard-card" onClick={() => setZonaSelectata('electrica')}>
                    <div className="card-icon">🔋</div>
                    <h3>Instalație Electrică</h3>
                    <p>Diagnoză VCDS, senzori, baterie, alternator, cablaje și elemente de iluminat.</p>
                    <span className="card-action">Accesează fișa →</span>
                  </div>
                </div>

                <div className="blueprint-footer-note">
                  Total intervenții înregistrate: <strong>{totalInterventii}</strong>
                  <div style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'inherit', opacity: 0.9 }}>
                    ✅ Finalizate: <strong>{interventiiCompletate}</strong>  |  ⏳ În așteptare: <strong>{interventiiInDerulare}</strong>
                  </div>
                </div>
              </div>
            ) : (
              <div className="checklist-view">
                <div className="checklist-header-nav">
                  <button className="btn-back" onClick={() => setZonaSelectata(null)}>
                    ← Înapoi la panoul principal
                  </button>
                  <h2 className="zone-title-active">{labelsZone[zonaSelectata]}</h2>
                </div>

                {intervențiiFiltrate.length === 0 ? (
                  <p className="info empty" data-testid="empty">Nu există nicio intervenție înregistrată pentru această zonă momentan.</p>
                ) : (
                  <ul className="task-list">
                    {intervențiiFiltrate.map(interventie => (
                      <InterventieCard 
                        key={interventie.id} 
                        interventie={interventie} 
                        onToggle={handleToggle} 
                        onDelete={handleDelete} 
                      />
                    ))}
                  </ul>
                )}
              </div>
            )
          )}
        </section>
      </main>
    </div>
  );
}