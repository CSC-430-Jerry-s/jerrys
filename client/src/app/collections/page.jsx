// src/app/collections/page.jsx
import { Link } from "react-router-dom";
import { SEASONS } from "../../data/catalog.js";

export default function CollectionsPage() {
  return (
    <main className="collections-page">
      {/* Page header */}
      <section className="page-header">
        <h1 className="page-title">COLLECTIONS</h1>
        <p className="page-subtitle">
          Choose a season to explore the full drop from that collection.
        </p>
      </section>

      <section className="season-list">
        {SEASONS.map((season) => (
          <article key={season.id} className="collection-card">
            <div className="collection-badge-wrapper">
              <span
                className={
                  season.status === "LIVE"
                    ? "collection-badge"
                    : season.status === "COMING SOON"
                    ? "collection-badge muted"
                    : "collection-badge archived"
                }
              >
                {season.status}
              </span>
            </div>

            <h2>{season.name}</h2>
            <h3 className="collection-title">{season.title}</h3>
            <p>{season.tagline}</p>

            <div className="collection-footer">
              <Link
                to={`/collections/${season.id}`}
                className="card-link"
              >
                View {season.name} →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <footer className="footer">
        <p>© 2025 JERRY&apos;S STREETWEAR. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
