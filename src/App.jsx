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
          <a href="https://drive.google.com/file/d/1if_6IdKRwbUEOLje3bfmEm3RdOINL4hh/view?usp=sharing" className="demo-button" target="_blank" rel="noopener noreferrer">
            Demo
          </a>

          <div className="hero">
            <h1>Integration Utilities</h1>
            <p>
             Each tile
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
