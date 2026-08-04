export default function Footer({ global }) {
  if (!global) return null;

  const { footerTagline, footerCtaText, footerColumns, copyrightText, legalText } = global;

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo">
              <svg className="gem" viewBox="0 0 24 24" fill="none" width="22" height="22">
                <path d="M12 2L4 9L12 22L20 9L12 2Z" fill="#8FB0FA" />
                <path d="M12 2L8 9H16L12 2Z" fill="#EBF1FF" />
                <path d="M4 9H20L12 22L4 9Z" fill="#3B6FF0" />
              </svg>
              Covalense
            </div>
            {footerTagline && <p>{footerTagline}</p>}
            {footerCtaText && <button className="btn btn-primary">{footerCtaText}</button>}
          </div>

          {footerColumns?.map((col) => (
            <div className="foot-col" key={col.id}>
              <h5>{col.title}</h5>
              {col.links?.map((link) => (
                <a href={link.url} key={link.id}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          {copyrightText && <span>{copyrightText}</span>}
          {legalText && <span>{legalText}</span>}
        </div>
      </div>
    </footer>
  );
}
