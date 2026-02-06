import { apps } from "./data/apps";
import AppTile from "./components/AppTile";
import netcoreLogo from "./assets/netcore-logo.png";

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <img className="logo" src={netcoreLogo} alt="Netcore logo" />
            <div className="brand-text">
             
            </div>
          </div>

          <div className="hero">
            <h1>Launch the tools that connect everything.</h1>
            <p>
              A curated workspace for the integration apps we build. Each tile
              below opens a live utility with a quick visual preview.
            </p>
            <div className="hero-meta">
              <div>
                <span className="label">Apps available</span>
                <span className="value">{apps.length}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="page" aria-label="Integration apps">
        <div className="grid">
          {apps.map((app) => (
            <AppTile key={app.id} app={app} />
          ))}
        </div>
      </main>

      <footer className="page footer">
        <p>
          Made with ❤️ by the Netcore Integration Team.{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
