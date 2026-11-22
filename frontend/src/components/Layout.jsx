import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
  const [temaIntunecata, setTemaIntunecata] = useState(false);

  return (
    <div className={temaIntunecata ? "dark-theme" : ""}>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div>
            <h1 className={styles.logo}>🏎️ GarageTracker</h1>
            <p className={styles.subtitle}>Evidența reparațiilor, diagnozelor și a mentenanței auto</p>
          </div>

          <div className={styles.actions}>
            <nav className={styles.nav} data-testid="nav">
              <NavLink to="/" end className={navClass}>
                Intervenții
              </NavLink>
              <NavLink to="/despre" className={navClass}>
                Despre
              </NavLink>
            </nav>

            <button
              className={styles.themeBtn}
              onClick={() => setTemaIntunecata(!temaIntunecata)}
              title="Schimbă tema vizuală"
            >
              {temaIntunecata ? "☀️ Mod Luminos" : "🌙 Mod Întunecat"}
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        GarageTracker — Proiect Tehnologii Web
      </footer>
    </div>
  );
}