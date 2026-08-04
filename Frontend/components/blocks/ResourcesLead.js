"use client";

import { useState } from "react";

const ICONS = {
  document: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2h9l5 5v15H6z" />
      <path d="M14 2v6h6" />
    </svg>
  ),
  chart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="12" width="4" height="8" />
      <rect x="10" y="7" width="4" height="13" />
      <rect x="16" y="3" width="4" height="17" />
    </svg>
  ),
  calculator: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
      <circle cx="12" cy="12" r="3.4" />
    </svg>
  ),
};

export default function ResourcesLead({ data }) {
  const {
    eyebrow,
    heading,
    description,
    resources,
    leadFormHeading,
    leadFormSubtext,
    productOptions,
    submitButtonText,
    disclaimerText,
    successHeading,
    successText,
  } = data;

  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="resources">
      <div className="wrap">
        <div className="section-head">
          {eyebrow && <span className="eyebrow-sm">{eyebrow}</span>}
          {heading && <h2>{heading}</h2>}
          {description && <p>{description}</p>}
        </div>

        <div className="resources-grid">
          <div>
            {resources?.map((r) => (
              <div className="resource-card" key={r.id}>
                <div className="resource-ic">{ICONS[r.icon] || ICONS.document}</div>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.description}</p>
                  <a className="dl" href={r.linkUrl || "#"}>
                    {r.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="lead-form">
            {!submitted ? (
              <div>
                {leadFormHeading && <h3>{leadFormHeading}</h3>}
                {leadFormSubtext && <div className="sub">{leadFormSubtext}</div>}

                <div className="lf-field">
                  <label>Work email</label>
                  <input type="email" placeholder="you@company.com" required />
                </div>
                <div className="lf-field">
                  <label>Full name</label>
                  <input type="text" placeholder="Jane Cooper" required />
                </div>
                <div className="lf-field">
                  <label>Company</label>
                  <input type="text" placeholder="Company name" required />
                </div>

                {productOptions?.length > 0 && (
                  <div className="lf-field">
                    <label>Which product interests you?</label>
                    <select>
                      {productOptions.map((o) => (
                        <option key={o.id}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                )}

                <button onClick={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  {submitButtonText}
                </button>
                {disclaimerText && <div className="fine">{disclaimerText}</div>}
              </div>
            ) : (
              <div className="form-success show">
                <div className="ic">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3>{successHeading}</h3>
                <p>{successText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
