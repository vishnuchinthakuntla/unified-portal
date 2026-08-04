export default function Testimonials({ data }) {
  const { eyebrow, heading, description, stories } = data;

  return (
    <section className="stories" id="stories">
      <div className="wrap">
        <div className="section-head center" style={{ margin: "0 auto 52px" }}>
          {eyebrow && <span className="eyebrow-sm" style={{ color: "var(--sapphire-300)" }}>{eyebrow}</span>}
          {heading && <h2>{heading}</h2>}
          {description && <p>{description}</p>}
        </div>

        <div className="story-grid">
          {stories?.map((s) => (
            <div className="story" key={s.id}>
              <div className="metric">{s.metric}</div>
              <p className="quote">&quot;{s.quote}&quot;</p>
              <div className="who">{s.personName}</div>
              <div className="role">{s.personRole}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
