# Stage 8: AI log

## Tools
- Gemini

## Conversations
- Configurarea `react-router-dom` (`BrowserRouter`, `Routes`, `Layout` cu `Outlet` și `NavLink`).
- Crearea paginilor `InterventiiPage`, `InterventieDetaliuPage`, `DesprePage` și `NotFoundPage`.
- Separarea stilurilor din `App.css` în `index.css` și fișiere `.module.css` pe componente, păstrând tema luminoasă/întunecată.

## Key requests
### 1. Configurarea rutelor și a paginii de detaliu cu `useParams`
- **Asked**: Cum leg ruta dinamică `/interventii/:id` de `useParams()` și `getInterventie(id)` astfel încât să tratez corect eroarea 404 pentru ID-uri inexistente și să păstrez panoul pe zone din `InterventiiPage` în interiorul unui `Layout` comun?
- **Got**: Structura `Routes` din `App.jsx` cu rută părinte `<Layout />` (`Outlet` + `NavLink`), apelul din `useEffect` cu dependența `[id]` și flag-ul `ignore` în `InterventieDetaliuPage.jsx`.
- **Changed or rejected**: Am adaptat rutele și atributele `data-testid` (`item-link`, `detail`, `detail-title`, `not-found`) la resursa `interventii` din `tw.json` și am păstrat logica proprie de filtrare pe zone (Motor, Roți, Electrică).

### 2. Migrarea la CSS Modules
- **Asked**: Cum mut stilurile din `App.css` în `index.css` și `.module.css` fără să pierd designul?
- **Got**: Fișierul `index.css` cu stiluri comune și fișiere `.module.css` pentru fiecare componentă și pagină.
- **Changed or rejected**: Am folosit `:global(.dark-theme)` în module pentru a păstra comutarea temei.

## What I learned / what did not work
Am învățat să configurez navigarea SPA cu `BrowserRouter`, `Link`, `NavLink` și `useParams`, să tratez ID-urile inexistente și rutele 404, și să izolez stilurile cu CSS Modules.