# Stage 2: AI log

## Tools
- Gemini

## Conversations
- (Generarea logicii JavaScript, a funcțiilor imutabile pentru GarageTracker și a tabelului de verificare)

## Key requests
### 1. Scrierea funcțiilor de manipulare a array-ului
- Asked: Cum implementez funcțiile de căutare, adăugare și ștergere a intervențiilor auto conform ghidului?
- Got: Cod JavaScript care folosește `filter()`, `map()` și `reduce()` pentru a respecta imutabilitatea. Adăugarea generează automat ID-ul nou și validează titlul.
- Changed or rejected: Am adaptat denumirile pentru a se potrivi cu tema mea (interventii, eticheta, stare) și am setat erori specifice în consolă.

## What I learned / what did not work
Am înțeles importanța imutabilității în JavaScript (de ce să nu folosesc `.push()`), element esențial pentru Etapa 5 cu React. De asemenea, am înțeles logica metodei `.reduce()` pentru a calcula un ID unic corect, evitând astfel erorile de duplicare după ștergerea unui element, și cum funcționează metoda `.toLowerCase()` combinată cu `.includes()` pentru căutări insensibile la majuscule.