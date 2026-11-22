import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getInterventie } from "../api.js";
import { ETICHETE_TIP } from "../constants.js";
import styles from "./InterventieDetaliuPage.module.css";

export default function InterventieDetaliuPage() {
  const { id } = useParams();
  const [interventie, setInterventie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    getInterventie(id)
      .then((data) => {
        if (!ignore) {
          setInterventie(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Intervenția nu a putut fi încărcată: {error}
        </p>
        <Link to="/" className={styles.back}>
          ← Înapoi la listă
        </Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        ← Înapoi la listă
      </Link>
      <h2
        className={interventie.stare ? styles.done : undefined}
        data-testid="detail-title"
      >
        {interventie.titlu}
      </h2>
      <dl className={styles.fields}>
        <dt>Tip</dt>
        <dd>
          <span className={`badge badge-${interventie.eticheta}`}>
            {ETICHETE_TIP[interventie.eticheta] || interventie.eticheta}
          </span>
        </dd>
        <dt>Categorie</dt>
        <dd>{interventie.categorie || "—"}</dd>
        <dt>Status</dt>
        <dd>{interventie.stare ? "Finalizată" : "În așteptare"}</dd>
        <dt>ID</dt>
        <dd>{interventie.id}</dd>
      </dl>
    </section>
  );
}