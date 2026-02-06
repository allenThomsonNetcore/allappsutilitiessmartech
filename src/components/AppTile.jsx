export default function AppTile({ app }) {
  const openApp = () => {
    window.open(app.href, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openApp();
    }
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <article
      className="tile"
      role="link"
      tabIndex={0}
      onClick={openApp}
      onKeyDown={handleKeyDown}
      aria-label={`Open ${app.name}`}
    >
      <div className="tile-image">
        <img src={app.image} alt={`${app.name} preview`} loading="lazy" />
      </div>
      <div className="tile-body">
        <div className="tile-title">
          <h3>{app.name}</h3>
          {app.tag ? <span className="pill">{app.tag}</span> : null}
        </div>
        <p>{app.description}</p>
        {app.tutorialSteps?.length ? (
          <details className="tile-details" onClick={stopPropagation}>
            <summary className="tile-summary">Tutorial steps</summary>
            <ol>
              {app.tutorialSteps.map((step, index) => (
                <li key={`${app.id}-step-${index}`}>{step}</li>
              ))}
            </ol>
          </details>
        ) : null}
      </div>
      <div className="tile-actions">
        <a
          className="tile-link"
          href={app.href}
          target="_blank"
          rel="noreferrer"
          onClick={stopPropagation}
        >
          Open app 
        </a>
        {app.github ? (
          <a
            className="tile-link ghost"
            href={app.github}
            target="_blank"
            rel="noreferrer"
            onClick={stopPropagation}
          >
            GitHub
          </a>
        ) : null}
        {app.links?.map((link) => (
          <a
            key={link.href}
            className="tile-link ghost"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            onClick={stopPropagation}
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
