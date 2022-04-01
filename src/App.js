import './App.css';
import ConfigGame from './Components/ConfigJogo/Config';
import Tabuleiro from './Components/Tabuleiro/Tabuleiro';
import Geral from './Components/Geral/Geral';
import MyContext from './contexts/myContext';
import {useState} from 'react';

function App() {

  const [colorAlpha, setColorAlpha] = useState("#000");
  const [colorBeta, setColorBeta] = useState("#e51400")

  return (
    <MyContext.Provider value={{colorAlpha, setColorAlpha, colorBeta, setColorBeta}}>
      <div className="App">
            
          <div className="main">
            <Tabuleiro colorAlpha={colorAlpha} colorBeta={colorBeta} />
          </div>
          <aside>
            <ConfigGame  />
            <Geral />
          </aside>
      </div>
    </MyContext.Provider>
      
  );
}

export default App;
