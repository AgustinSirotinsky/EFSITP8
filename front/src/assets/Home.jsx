import '../App.css';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="App">
      <header className="App-header">
        <Link to="/quiz"><img src={logo} className="App-logo" alt="logo" /></Link>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link to="/quiz">linc</Link>
        </a>
      </header>
    </div>
    )
}