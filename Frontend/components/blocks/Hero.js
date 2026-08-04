export default function Hero({ data }) {
  const {
    eyebrow,
    heading,
    headingEmphasis,
    subheading,
    searchPlaceholder,
    primaryCtaText,
    primaryCtaUrl,
    secondaryCtaText,
    secondaryCtaUrl,
    trustLabel,
    trustTags,
  } = data;

  return (
    <section className="hero">
      <div className="facets">
        <span className="f1"></span>
        <span className="f2"></span>
        <span className="f3"></span>
      </div>
      <div className="wrap hero-inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>
          {heading}
          {headingEmphasis && (
            <>
              <br />
              <em>{headingEmphasis}</em>
            </>
          )}
        </h1>
        {subheading && <p className="sub">{subheading}</p>}

        {searchPlaceholder && (
          <div className="ai-search">
            <div className="glow"></div>
            <div className="pill">
              <input type="text" placeholder={searchPlaceholder} />
              <button>Ask</button>
            </div>
          </div>
        )}

        <div className="hero-ctas">
          {primaryCtaText && (
            <a className="btn btn-light" href={primaryCtaUrl || "#"}>
              {primaryCtaText}
            </a>
          )}
          {secondaryCtaText && (
            <a
              className="btn btn-ghost"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}
              href={secondaryCtaUrl || "#"}
            >
              {secondaryCtaText}
            </a>
          )}
        </div>

        {trustTags?.length > 0 && (
          <div className="trust-row">
            {trustLabel && <span className="label">{trustLabel}</span>}
            {trustTags.map((t) => (
              <span className="tag" key={t.id}>
                {t.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
