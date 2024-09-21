import wusat from './images/DLogo2.png'
import homeb from './images/HomeB.png'
import './App.css';
import Home from './Components/Home'
import ME from './Components/ME'
import EE from './Components/EE'
import SW from './Components/SW'
import Game from './Components/Game'
import { useState } from 'react';

function App() {
  const [disp, setDisp] = useState(Home);

  return (
    <div className="App">
      <header className="App-header">
        <div id='hcolL'>
          <button id='homeBtn' onClick={() => setDisp(Home)}>
            <img id='homeB' src={homeb} alt='homebutton'></img>
          </button>
        </div>
        <div id='hcolM'>
          <b>Ground Station</b>
        </div>
        <div id='hcolR'>
          <img id='wusat' src={wusat} alt='WashUSatellite'></img>
        </div>
      </header>
      <main>
        <div id='mcolL'>
          <div id='ME' className='sys'>
            <button onClick={() => setDisp(ME)}><b><u>Mechanical System</u></b></button>
          </div>
          <div id='EE' className='sys'>
            <button onClick={() => setDisp(EE)}><b><u>Electrical System</u></b></button>
          </div>
          <div id='SW' className='sys'>
            <button onClick={() => setDisp(SW)}><b><u>Software System</u></b></button>
          </div>
          <div id='Game' className='sys'>
            <button onClick={() => setDisp(Game)}><b><u>GS Game</u></b></button>
          </div>
        </div>
        <section id='display'>
          {disp}
        </section>
      </main>
    </div>
  );
}

export default App;
