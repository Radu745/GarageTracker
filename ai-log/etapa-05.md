# Stage 5: AI log

## Tools
- Gemini

## Conversations
- Transformarea listei statice într-o listă interactivă folosind React state.
- Implementarea funcțiilor de bifare și ștergere.
- Adăugarea suportului pentru comutarea temei luminoase/întunecate din interfață.

## Key requests
### 1. State local și funcții
- Asked: Cum implementez funcțiile pentru checkbox și ștergere folosind state?
- Got: Codul pentru `App.jsx` care folosește `useState` pentru a stoca lista și funcțiile imutabile (`handleToggle`, `handleDelete`) bazate pe `.map()` și `.filter()`.
- Changed or rejected: Am transmis funcțiile prin props către lista și componentele card.

### 2. Modul întunecat (Dark Mode)
- Asked: Cum adaug butonul și logica pentru dark mode?
- Got: Logica React pentru detectarea temei sistemului, starea temei, și codul CSS aferent cu selectorul `:root[data-theme="dark"]`.
- Changed or rejected: Am integrat codul CSS final pentru a asigura că tema forțată prin buton suprascrie corect preferințele sistemului de operare.

## What I learned / what did not work
Am învățat că în React state-ul nu se modifică direct, ci prin funcții imutabile care returnează o copie nouă a array-ului. Am înțeles că valorile derivate (precum numărul de intervenții active) se calculează la fiecare randare și nu trebuie ținute separat în state. Am învățat cum funcționează un input de tip checkbox "controlat" și cum pot manipula atributele elementului global `<html>` pentru a schimba stilurile CSS.