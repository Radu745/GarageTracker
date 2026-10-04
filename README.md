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
| S1-R8 | commit "Stage 1" pushed | [Commit Stage 1](6c4055668620cfc53b715a7a903f5cb62e48802e) | commit history |