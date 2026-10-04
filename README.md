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