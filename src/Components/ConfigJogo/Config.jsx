import React, {useContext} from 'react';
import './Config.css';
import MyContext from '../../contexts/myContext';

const ConfigGame = () => {

    const {colorAlpha, setColorAlpha, colorBeta, setColorBeta} = useContext(MyContext);


    return(
        <div className="card">
            <h1>Configurações de estilo</h1>
            <div className="jogadorAlpha">
                <h3 htmlFor="jogadorUm">Jogador Alfa</h3>
                <div className="form">
                    <label htmlFor="colorAlpha"> Cor das peças</label>
                    <input type="color"  value={colorAlpha} 
                        onChange={e => setColorAlpha(e.target.value)}/>
                    
                </div>
            </div>
            <div className="jogadorBeta ">
                <h3 htmlFor="jogadorUm">Jogador Beta</h3>
                <div className="form">
                    <label htmlFor="colorBeta"> Cor das peças</label>
                    <input type="color" value={colorBeta}
                        onChange={e => setColorBeta(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default ConfigGame;