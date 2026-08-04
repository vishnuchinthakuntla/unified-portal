import { strapiImage } from "@/lib/strapi";

export default function DemoCases({ data }) {
  const { eyebrow, heading, description, videoThumbnail, videoLabel, caseStudies } = data;
  const thumbUrl = strapiImage(videoThumbnail);

  return (
    <section className="demo">
      <div className="wrap">
        <div className="section-head">
          {eyebrow && <span className="eyebrow-sm">{eyebrow}</span>}
          {heading && <h2>{heading}</h2>}
          {description && <p>{description}</p>}
        </div>

        <div className="demo-grid">
          <div
            className="demo-frame"
            style={thumbUrl ? { backgroundImage: `url(${thumbUrl})`, backgroundSize: "cover" } : undefined}
          >
            <div className="play-btn">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            {videoLabel && <div className="demo-caption">▶ {videoLabel}</div>}
          </div>

          <div className="case-list">
            {caseStudies?.map((c) => (
              <div className="case-item" key={c.id}>
                <div className="metric">{c.metric}</div>
                <p>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
