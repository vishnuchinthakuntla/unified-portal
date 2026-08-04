export default function Spotlight({ data }) {
  const {
    eyebrow,
    heading,
    description,
    features,
    editions,
    visualProductName,
    visualBadge,
    visualBars,
    visualKpis,
  } = data;

  return (
    <section className="spotlight" id="spotlight">
      <div className="wrap spot-grid">
        <div className="spot-visual">
          <div className="mockcard">
            <div className="row">
              <strong style={{ fontFamily: "'Unbounded'", fontSize: "14px" }}>
                {visualProductName}
              </strong>
              {visualBadge && <span className="pill-sm">{visualBadge}</span>}
            </div>

            {visualBars?.map((b) => (
              <div className="bar" key={b.id}>
                <span style={{ width: `${b.percent}%` }}></span>
              </div>
            ))}

            {visualKpis?.length > 0 && (
              <div className="kpi">
                {visualKpis.map((k) => (
                  <div key={k.id}>
                    <h4>{k.value}</h4>
                    <span>{k.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="spot-copy">
          {eyebrow && <span className="eyebrow-sm">{eyebrow}</span>}
          {heading && <h2>{heading}</h2>}
          {description && <p>{description}</p>}

          {features?.length > 0 && (
            <ul className="feature-list">
              {features.map((f) => (
                <li key={f.id}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {f.text}
                </li>
              ))}
            </ul>
          )}

          {editions?.length > 0 && (
            <div className="edition-row">
              {editions.map((e) => (
                <span className={`edition ${e.active ? "active" : ""}`} key={e.id}>
                  {e.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
