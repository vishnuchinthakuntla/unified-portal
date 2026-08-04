"use client";

import { useState } from "react";

export default function Pricing({ data }) {
  const { eyebrow, heading, description, products } = data;
  const [activeKey, setActiveKey] = useState(products?.[0]?.productKey);

  const active = products?.find((p) => p.productKey === activeKey) || products?.[0];

  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="section-head">
          {eyebrow && <span className="eyebrow-sm">{eyebrow}</span>}
          {heading && <h2>{heading}</h2>}
          {description && <p>{description}</p>}
        </div>

        <div className="product-tabs">
          {products?.map((p) => (
            <span
              key={p.id}
              className={`ptab ${p.productKey === active?.productKey ? "active" : ""}`}
              onClick={() => setActiveKey(p.productKey)}
            >
              {p.productLabel}
            </span>
          ))}
        </div>

        <div className="price-grid">
          {active?.tiers?.map((tier, i) => (
            <div className={`price-card ${tier.featured ? "featured" : ""}`} key={tier.id}>
              {tier.featured && <span className="badge-pop">Most popular</span>}
              <h4>{tier.name}</h4>
              <div className="price">
                {tier.price}
                {tier.price !== "Custom" && <span> per mo</span>}
              </div>
              <div className="price-sub">{tier.period}</div>
              <button className={`btn ${tier.featured ? "btn-primary" : "btn-ghost"}`}>
                {tier.ctaText}
              </button>
              <div className="price-rows">
                {active.comparisonRows?.map((row) => {
                  const value = Array.isArray(row.values) ? row.values[i] : "";
                  return (
                    <div className="price-row" key={row.id}>
                      <span className="label">{row.label}</span>
                      <span className={`value ${value === "—" ? "no" : ""}`}>{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
