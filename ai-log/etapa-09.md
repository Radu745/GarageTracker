# Stage 9: AI log

## Tools
- Gemini

## Conversations
- Inițializarea backend-ului propriu în `backend/` cu Node.js, Express 5 și `cors` (`package.json` cu `"type": "module"`, `.gitignore`, `.env.example`).
- Implementarea rutelor REST pentru `/interventii` (`GET`, `GET /:id`, `POST`, `PATCH`, `DELETE`), a validării pe server cu listă albă (`validation.js`) și a middleware-urilor (`cors()`, `express.json()`, `/health`, 404, tratare centralizată a erorilor).
- Testarea API-ului cu `curl`, actualizarea `frontend/src/api.js` pentru citirea `body.error` și eliminarea completă a `json-server`.

## Key requests
### 1. Crearea serverului Express și a validării pe server
- **Asked**: Cum structurez backend-ul în Express 5 pentru resursa `/interventii` astfel încât să valideze datele pe server, să permită cererile din frontend (CORS) și să fie compatibil cu câmpurile din `tw.json`?
- **Got**: Separarea în `server.js`, `app.js`, `routes/interventii.js` și `validation.js` (cu `parseId` și `valideazaInterventie` pe listă albă de câmpuri), plus codurile HTTP corecte (`200`, `201`, `204`, `400`, `404`).
- **Changed or rejected**: Am înlocuit cele 3 intervenții de test din memorie cu lista completă de intervenții din vechiul `db.json` și am actualizat `nextId` corespunzător.

### 2. Testarea cu `curl` și eliminarea `json-server`
- **Asked**: Cum testez toate cele 5 rute din terminal și ce modificări minime sunt necesare în frontend după trecerea pe serverul propriu?
- **Got**: Comenzile `curl` pentru verificarea codurilor HTTP, actualizarea funcției `request` din `frontend/src/api.js` pentru a citi `body.error`, ștergerea `frontend/db.json` și eliminarea `json-server` din `frontend/package.json` urmată de `npm install`.
- **Changed or rejected**: La prima rulare a `DELETE`, am primit `400` pentru că am trimis un placeholder text în loc de ID-ul numeric întors de `POST`; am corectat cu ID-ul real și am obținut `204`.

## What I learned / what did not work
Am învățat să construiesc un API REST în Express 5 cu `Router`, middleware-uri (`cors`, `express.json`), validare pe server și tratare centralizată a erorilor, să testez rutele independent de interfață cu `curl` și să înțeleg de ce browserul blochează cererile între porturi diferite fără CORS.