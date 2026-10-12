# Stage 3: AI log

## Tools
- Gemini

## Conversations
- Trecerea de la un proiect static la unul de React folosind Vite.

## Key requests
### 1. Inițializarea proiectului Vite
- Asked: Cum configurez Vite cu React în terminalul Windows?
- Got: Pașii pentru crearea folderului frontend folosind `npm create vite@latest`, selectând ESLint. Am rezolvat împreună problema cu mutarea fișierelor vechi folosind PowerShell.
- Changed or rejected: Am folosit litera `o` în terminal pentru deschiderea aplicației deoarece browserul returna `Connection Refused` pe localhost.

### 2. Scrierea componentei App.jsx
- Asked: Cum implementez tema mea în noul fișier React?
- Got: Codul JSX adaptat pentru GarageTracker, cu mutarea listei de intervenții deasupra componentei (pentru a evita re-randarea) și calcularea elementelor active direct în antet.
- Changed or rejected: Am păstrat proprietățile specifice (stare, eticheta) și am preluat `style.css` din mockup în noul `App.css`.

## What I learned / what did not work
Am înțeles cum se instalează dependențele dintr-un `package.json` cu comanda `npm install` și rolul folderului `node_modules`. Am învățat diferențele cheie între HTML și JSX (folosirea `className` în loc de `class` și a acoladelor `{}` pentru variabile) și importanța închiderii blocurilor de cod în Markdown.