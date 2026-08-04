export default function AiShowcase({ data }) {
  const {
    eyebrow,
    heading,
    description,
    features,
    chatTitle,
    chatMessages,
    chatInputPlaceholder,
  } = data;

  return (
    <section className="ai-section" id="ai">
      <div className="wrap ai-grid">
        <div className="ai-copy">
          {eyebrow && <span className="eyebrow-sm">{eyebrow}</span>}
          {heading && <h2>{heading}</h2>}
          {description && <p>{description}</p>}

          {features?.length > 0 && (
            <div className="ai-feats">
              {features.map((f) => (
                <div className="ai-feat" key={f.id}>
                  <h4>{f.title}</h4>
                  <p>{f.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="chat-card">
          <div className="chead">
            <span className="dot"></span> {chatTitle}
          </div>

          {chatMessages?.map((m) => (
            <div className={`bubble ${m.sender}`} key={m.id}>
              {m.text}
            </div>
          ))}

          {chatInputPlaceholder && (
            <div className="chat-input">
              <span>{chatInputPlaceholder}</span>
              <div className="send">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
