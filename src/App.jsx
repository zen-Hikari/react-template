import "./App.css";
import ReactLogo from "./assets/react.png";

function App() {
  return (
    <main className="webgen">
      <h1>Webgen + React</h1>

      <img className="logo" src={ReactLogo} alt="React Logo" />

      <a className="react-link" href="https://react.dev/" target="_blank" rel="noreferrer">
        Learn React
      </a>

      <p className="description">
        Thank you for using <strong>Webgen</strong> — a fun little starter for your projects.<br />
        More updates will come. Don’t forget to check my GitHub!
      </p>

      <a className="github-button" href="https://github.com/zen-Hikari" target="_blank" rel="noreferrer">
        Visit My GitHub
      </a>
    </main>
  );
}

export default App
