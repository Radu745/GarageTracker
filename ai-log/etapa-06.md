# Stage 6: AI log

## Tools
- Gemini

## Conversations
- Mutarea datelor aplicației pe un API de test (`json-server`) și preluarea lor la montarea componentei cu `useEffect`.
- Depanarea erorilor de randare în React și ajustarea contrastului în interfață.
- Calcularea dinamică a numărului de intervenții finalizate și în așteptare.

## Key requests
### 1. Fetch, useEffect și documentație
- Asked: Cum configurez `api.js` cu `import.meta.env` și cum integrez `useEffect` în `App.jsx` pentru a prelua datele de la json-server, tratând stările de loading și eroare? / Cum completez README-ul pentru Etapa 6?
- Got: Codul pentru apelurile `fetch` și funcția asincronă `load()` cu block-uri `try/catch/finally` și funcție de cleanup (`ignore`). Un model inițial de README.
- Changed or rejected: Am respins formatul inițial de README generat de AI și am trimis fișierul PDF original cu ghidul etapei 6 pentru a genera tabelul de verificare (checklist) exact pe formatul cerut de profesori.

### 2. Statistici dinamice detaliate
- Asked: Cum fac să văd și câte intervenții au fost completate și câte sunt încă în derulare, nu doar totalul?
- Got: Cod care calculează variabilele direct în interiorul componentei folosind `interventii.filter(item => item.stare).length`.
- Changed or rejected: Am integrat codul în subsolul panoului de control (footer) pentru a oferi un sumar tehnic complet la fiecare actualizare a stării.

## What I learned / what did not work
Am învățat cum să folosesc `useEffect` pentru a executa cod o singură dată la montarea componentei și de ce este importantă funcția de curățare (`ignore = true`) pentru a preveni actualizările de state dacă componenta se demontează între timp (ex: "race conditions" sau dubla-montare din modul de dezvoltare React). De asemenea, am consolidat ideea că statisticile derivate (completate vs. în așteptare) se calculează la fiecare randare direct din array-ul principal, fără a fi nevoie de un state separat.