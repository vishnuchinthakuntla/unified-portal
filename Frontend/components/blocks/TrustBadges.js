const ICONS = {
  shield: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
    </svg>
  ),
  clock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
};

export default function TrustBadges({ data }) {
  const { eyebrow, heading, description, badges } = data;

  return (
    <section className="trust" id="trust">
      <div className="wrap">
        <div className="section-head center">
          {eyebrow && <span className="eyebrow-sm">{eyebrow}</span>}
          {heading && <h2>{heading}</h2>}
          {description && <p>{description}</p>}
        </div>

        <div className="badge-row">
          {badges?.map((b) => (
            <div className="badge" key={b.id}>
              {ICONS[b.icon] || ICONS.shield} {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
