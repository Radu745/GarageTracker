# Stage 7: AI log

## Tools
- Gemini

## Conversations
- Crearea formularului controlat (POST) și mutarea funcțiilor PATCH/DELETE pe server folosind `api.js`.
- Așezarea interfeței pe 2 coloane și stilizarea formularului sub formă de "fișă tehnică", integrat în temele de zi/noapte.
- Integrarea atributelor `data-testid` și a fișierului `tw.json` pentru validarea automată.

## Key requests
### 1. Formular și comunicare API
- **Asked**: Cum adaug formularul controlat cu validare și cum mut toate operațiile CRUD pe server?
- **Got**: Componenta `InterventieForm.jsx`, actualizarea `App.jsx` pentru a aștepta răspunsul serverului și rescrierea `api.js` cu o funcție comună `request`.
- **Changed or rejected**: Am modificat stările și opțiunile formularului pentru a se potrivi exact cu categoriile specifice aplicației mele (Motor, Roți, Electrică).

### 2. Rezolvarea conflictelor de CSS
- **Asked**: Cum pun formularul în stânga, panoul în dreapta și cum fac butonul de adăugare să arate ca o ștampilă, fără să stric tema?
- **Got**: Reguli CSS pentru Grid layout (`layout-2-col`) și restilizarea componentelor din formular.
- **Changed or rejected**: Prima soluție de design a stricat layout-ul și vizibilitatea pe tema întunecată. Am cerut refacerea CSS-ului folosind `!important` și selectoare mai stricte, eliminând fundalul inputurilor pentru a simula un formular tipărit pe hârtie.

## What I learned / what did not work
Am înțeles și aplicat principiul "întâi serverul, apoi state-ul": interfața se actualizează doar după succesul cererii HTTP. De asemenea, am învățat cum atributele `data-testid` permit testarea automată fără să afecteze codul vizual și cum să controlez specificitatea în CSS când apar conflicte între clase globale și componente noi.