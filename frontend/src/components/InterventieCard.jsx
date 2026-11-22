import { Link } from "react-router-dom";
import { ETICHETE_TIP } from "../constants.js";
import styles from "./InterventieCard.module.css";

export default function InterventieCard({ interventie, onToggle, onDelete }) {
  return (
    <li
      className={interventie.stare ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={interventie.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={interventie.stare}
          onChange={() => onToggle(interventie.id)}
          aria-label={`Marchează ${interventie.titlu}`}
          data-testid="item-toggle"
        />
        <div>
          <Link
            to={`/interventii/${interventie.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {interventie.titlu}
          </Link>
          <span className={`badge badge-${interventie.eticheta}`}>
            Tip: {ETICHETE_TIP[interventie.eticheta] || interventie.eticheta}
          </span>
        </div>
      </div>

      <button
        className="btn-danger"
        onClick={() => onDelete(interventie.id)}
        aria-label={`Șterge ${interventie.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}