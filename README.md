# GarageTracker
O aplicație web care gestionează sarcini de mentenanță auto și jurnale de diagnoză pentru proprietarii de mașini.

## Modelul de date
| Câmp | Tip | Note |
| --- | --- | --- |
| titlu intervenție | text | obligatoriu, max 100 caractere |
| stare (finalizat) | boolean | se bifează din listă, implicit fals |
| tip intervenție | valori fixe | Diagnoză, Mentenanță, Reparație |
| categorie sistem | relație | Motor, Electric, Suspensie |
| utilizator | relație | proprietarul elementului |

Date de test folosite în toate etapele:
1. Înlocuire bujii și verificare instalație GPL, finalizat, Mentenanță
2. Scanare module de control cu VCDS, activ, Diagnoză
3. Identificare și înlocuire furtunuri vacuum, activ, Reparație

## Utilizare AI
| Instrument | Folosit pentru |
| --- | --- |
| Gemini | Stabilirea ideii proiectului și adaptarea șablonului HTML/CSS |

Detalii pentru fiecare etapa: consultati folderul ai-log/.

## Cum se rulează
Deschide index.html într-un browser. Nu necesită etapă de build sau server.

## Stadiu
- [x] Etapa 1: mockup static
- [ ] Etapa 2: logica pe date în JavaScript

## Tabel de verificare Etapa 1
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | README.md | read |
| S1-R2 | AI usage section | README.md | read |
| S1-R3 | AI log for stage 1 | ai-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L10-L61](https://github.com/Radu745/GarageTracker/blob/6c4055668620cfc53b715a7a903f5cb62e48802e/index.html#L10-L61) | open the page |
| S1-R5 | finished card looks different | [style.css#L144-L147](https://github.com/Radu745/GarageTracker/blob/6c4055668620cfc53b715a7a903f5cb62e48802e/style.css#L144-L147) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L150-L154](https://github.com/Radu745/GarageTracker/blob/6c4055668620cfc53b715a7a903f5cb62e48802e/style.css#L150-L154) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L166-L180](https://github.com/Radu745/GarageTracker/blob/6c4055668620cfc53b715a7a903f5cb62e48802e/style.css#L166-L180) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit Stage 1](https://github.com/Radu745/GarageTracker/commit/6c4055668620cfc53b715a7a903f5cb62e48802e) | commit history |

## Etapa 2: Logica pe date
JavaScript simplu, fără manipulare DOM. Fișierul `interventii.js` conține array-ul și funcțiile care îl citesc și îl modifică. Rezultatele sunt afișate în consola browserului (F12).

## Stadiu
- [x] Etapa 1: mockup static
- [x] Etapa 2: logica pe date în JavaScript
- [ ] Etapa 3: proiect React cu Vite

## Tabel de verificare Etapa 2
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S2-R1 | JS file linked, logs on page load | [index.html#L68-L69](https://github.com/Radu745/GarageTracker/blob/77b25a324e2386e279591859712a2c71d5241947/index.html#L68-L69) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [interventii.js#L1-L6](https://github.com/Radu745/GarageTracker/blob/77b25a324e2386e279591859712a2c71d5241947/interventii.js#L1-L6) | read |
| S2-R3 | list, count, search, add, toggle, delete | [interventii.js#L73-L89](https://github.com/Radu745/GarageTracker/blob/77b25a324e2386e279591859712a2c71d5241947/interventii.js#L73-L89) | console output |
| S2-R4 | add rejects empty name and invalid tag | [interventii.js#L38-L46](https://github.com/Radu745/GarageTracker/blob/77b25a324e2386e279591859712a2c71d5241947/interventii.js#L38-L46) | last 2 console lines |
| S2-R5 | original array unchanged after add | [interventii.js#L82](https://github.com/Radu745/GarageTracker/blob/77b25a324e2386e279591859712a2c71d5241947/interventii.js#L82) | console line |
| S2-R6 | README Stage 2 section + AI log | README.md, ai-log/etapa-02.md | read |
| S2-R7 | commit "Stage 2" pushed | [Commit 77b25a3](https://github.com/Radu745/GarageTracker/commit/77b25a324e2386e279591859712a2c71d5241947) | commit history |

## Stadiu
- [x] Etapa 1: mockup static
- [x] Etapa 2: logica pe date în JavaScript
- [x] Etapa 3: proiect React cu Vite
- [ ] Etapa 4: componente React

## Etapa 3: Proiect Vite și React
Aplicația se află acum în folderul `frontend/` și este construită cu Vite. Datele din etapa 2 au fost mutate în componenta principală `App.jsx`, iar în acest moment lista este afișată ca text brut (JSON).

## Cum se rulează
```bash
cd frontend
npm install
npm run dev
```

## Tabel de verificare Etapa 3
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S3-R1 | npm run dev starts without errors | [package.json](https://github.com/Radu745/GarageTracker/blob/main/frontend/package.json) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [App.jsx#L17-L20](https://github.com/Radu745/GarageTracker/blob/main/frontend/src/App.jsx#L17-L20) | edit data, save |
| S3-R3 | data from README, not from the example | [App.jsx#L2-L6](https://github.com/Radu745/GarageTracker/blob/main/frontend/src/App.jsx#L2-L6) | compare with README |
| S3-R4 | stage 1 styles reused | [App.css](https://github.com/Radu745/GarageTracker/blob/main/frontend/src/App.css) | look at the page |
| S3-R5 | node_modules ignored, build passes | [.gitignore](https://github.com/Radu745/GarageTracker/blob/main/frontend/.gitignore) | npm run build |
| S3-R6 | README Stage 3 section + AI log | README.md, ai-log/etapa-03.md | read |
| S3-R7 | commit "Stage 3" pushed | [Stage 3 pushed](https://github.com/Radu745/GarageTracker/commit/78d1b053833c72812fa34bb0c726a82c9b7cdf87) | commit history |

## Stadiu
- [x] **Etapa 1:** Mockup static (HTML și CSS)
- [x] **Etapa 2:** Logica de prelucrare a datelor (JavaScript)
- [x] **Etapa 3:** Inițializarea proiectului React utilizând Vite
- [x] **Etapa 4:** Crearea componentelor de interfață în React
- [ ] **Etapa 5:** Stare locală și evenimente

---
## Etapa 4: Componente construite din date
În această etapă, interfața a fost modularizată. Lista de carduri este generată dinamic din date folosind două componente React:
- `InterventieList`: primește întregul array și randează câte un card pentru fiecare element (sau un mesaj specific dacă lista este goală).
- `InterventieCard`: primește datele unui singur element prin `props` și îl afișează, aplicând clase CSS condiționate în funcție de stare și categorie.