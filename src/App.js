import logo from './logo.svg';
import './App.css';
import renderHighChart from './components/piechart/index'
import { useLayoutEffect } from 'react';

function App() {
  useLayoutEffect(() => {
    renderHighChart()
  })
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div id="container"></div>
      </header>
    </div>
  );
}

export default App;
