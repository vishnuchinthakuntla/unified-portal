import { strapiImage } from "@/lib/strapi";

export default function ProductGrid({ data }) {
  const { eyebrow, heading, description, filterChips, techTags, products } = data;

  return (
    <section className="discovery" id="discovery">
      <div className="wrap">
        <div className="section-head">
          {eyebrow && <span className="eyebrow-sm">{eyebrow}</span>}
          {heading && <h2>{heading}</h2>}
          {description && <p>{description}</p>}
        </div>

        {filterChips?.length > 0 && (
          <div className="filters">
            {filterChips.map((c, i) => (
              <span className={`chip ${i === 0 ? "active" : ""}`} key={c.id}>
                {c.label}
              </span>
            ))}
          </div>
        )}

        {techTags?.length > 0 && (
          <div className="filters" style={{ marginTop: "-24px", marginBottom: "44px" }}>
            {techTags.map((t) => (
              <span
                className="tag"
                style={{ color: "var(--sapphire-900)", borderColor: "var(--line)", background: "#fff" }}
                key={t.id}
              >
                {t.label}
              </span>
            ))}
          </div>
        )}

        <div className="grid-products">
          {products?.map((p) => (
            <div className="pcard" key={p.id}>
              {p.icon?.url && (
                <div className="icon">
                  <img src={strapiImage(p.icon)} alt={p.name} width="20" height="20" />
                </div>
              )}
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <a className="go" href={p.linkUrl || "#"}>
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
