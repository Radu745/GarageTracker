# Stage 4: AI log

## Tools
- Gemini

## Conversations
- Crearea componentelor React pentru afișarea listei de intervenții.

## Key requests
### 1. Crearea componentelor
- Asked: Cum înlocuiesc textul JSON cu componente React?
- Got: Codul adaptat pentru `InterventieCard.jsx` (care randează un singur element) și `InterventieList.jsx` (care mapează array-ul folosind `map`).
- Changed or rejected: Am adaptat numele claselor, componentelor și variabilelor pentru GarageTracker (`interventie`, `stare`, `eticheta`).

### 2. Randarea condiționată
- Asked: Cum generez corect clasele CSS pe baza datelor?
- Got: Utilizarea template literals (`badge-${interventie.eticheta}`) și a operatorului ternar pentru a aplica clasele `done` pe baza datelor din `props`.

## What I learned / what did not work
Am învățat cum se transmit datele de la o componentă părinte (`App`) la una copil prin `props`. Am înțeles importanța atributului `key` atunci când folosim `.map()` pentru a genera liste în React (evitând avertismentele din consolă) și cum să fac randare condiționată pentru a afișa un mesaj când array-ul de date este gol.