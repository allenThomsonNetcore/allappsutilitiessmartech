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
      </div>
      <div className="tile-actions">
        <a
          className="tile-link"
          href={app.href}
          target="_blank"
          rel="noreferrer"
          onClick={stopPropagation}
        >
          Open app →
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
      </div>
    </article>
  );
}
