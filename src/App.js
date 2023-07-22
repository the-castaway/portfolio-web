import Content from './components/content.react';
import Header from './components/header.react';
import logo from './media/logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          JC Portfolio WIP
        </p>
      </header>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
