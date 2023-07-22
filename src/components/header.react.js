import logo from '../media/logo.svg';
import '../styles/App.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Header
        </p>
      </header>
    </div>
  );
}

export default Header;