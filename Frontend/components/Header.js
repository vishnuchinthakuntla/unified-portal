"use client";

import { useState } from "react";

export default function Header({ global }) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (!global) return null;

  const { logoText, logoSubtext, navLinks, loginLabel, headerCtaText } = global;

  return (
    <header>
      <nav className="wrap">
        <div className="logo">
          <svg className="gem" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 9L12 22L20 9L12 2Z" fill="#1746D4" />
            <path d="M12 2L8 9H16L12 2Z" fill="#3B6FF0" />
            <path d="M4 9H20L12 22L4 9Z" fill="#0B1F52" />
          </svg>
          <div>
            {logoText}
            <small>{logoSubtext}</small>
          </div>
        </div>

        {/* Desktop links — hidden under 980px via existing CSS */}
        <div className="navlinks">
          {navLinks?.map((link) => (
            <a href={link.url} key={link.id}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="navcta">
          {loginLabel && (
            <a className="link-txt" href="#">
              {loginLabel}
            </a>
          )}
          {headerCtaText && <button className="btn btn-primary">{headerCtaText}</button>}

          {/* Hamburger — only shown under 980px via CSS below */}
          <button
            className={`nav-burger ${menuOpen ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown panel */}
      <div className={`nav-mobile-panel ${menuOpen ? "open" : ""}`}>
        {navLinks?.map((link) => (
          <a href={link.url} key={link.id} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        {loginLabel && (
          <a href="#" onClick={() => setMenuOpen(false)}>
            {loginLabel}
          </a>
        )}
        {headerCtaText && (
          <button className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            {headerCtaText}
          </button>
        )}
      </div>
    </header>
  );
}
