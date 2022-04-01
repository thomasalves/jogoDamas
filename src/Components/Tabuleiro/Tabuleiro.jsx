import React from "react";
import './Tabuleiro.css';
import Peca from '../Pecas/Peca';

const Tabuleiro = () => {
      return(            
        <div className="cardTabuleiro">
            <h2>Jogador Alpha</h2>

            <table className='tabuleiro'>
                <tbody>
                    <tr>
                        <td className='colored'>
                            <Peca player="alpha"  /> 
                        </td>
                        <td></td>
                        <td className='colored'>     
                            <Peca  player="alpha"  />
                        </td>
                        <td></td>
                        <td className='colored'>
                            <Peca  player="alpha"  />
                        </td>
                        <td></td>
                        <td className='colored'>
                            <Peca  player="alpha"  />
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className='colored'>
                            <Peca   player="alpha" />
                        </td>
                        <td></td>
                        <td className='colored'>
                            <Peca   player="alpha" />
                        </td>
                        <td></td>
                        <td className='colored'>
                            <Peca  player="alpha" />
                        </td>
                        <td></td>
                        <td className='colored'>
                            <Peca  player="alpha"  />
                        </td>
                    </tr>
                    <tr>
                        <td className='colored'></td>
                        <td></td>
                        <td className='colored'></td>
                        <td></td>
                        <td className='colored'></td>
                        <td></td>
                        <td className='colored'></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className='colored'></td>
                        <td></td>
                        <td className='colored'></td>
                        <td></td>
                        <td className='colored'></td>
                        <td></td>
                        <td className='colored'></td>
                    </tr>
                    <tr>
                        <td className='colored'></td>
                        <td></td>
                        <td className='colored'></td>
                        <td></td>
                        <td className='colored'></td>
                        <td></td>
                        <td className='colored'></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className='colored'></td>
                        <td></td>
                        <td className='colored'></td>
                        <td></td>
                        <td className='colored'></td>
                        <td></td>
                        <td className='colored'></td>
                    </tr>
                    <tr>
                        <td className='colored'>
                            <Peca  player="beta"  />
                        </td>
                        <td></td>
                        <td className='colored'>
                            <Peca  player="beta"  />
                        </td>
                        <td></td>
                        <td className='colored'>
                            <Peca  player="beta"  />    
                        </td>
                        <td></td>
                        <td className='colored'> 
                            <Peca  player="beta"  />
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className='colored'>
                            <Peca  player="beta"  />
                        </td>
                        <td></td>
                        <td className='colored'>
                            <Peca  player="beta"  />
                        </td>
                        <td></td>
                        <td className='colored'>
                            <Peca  player="beta"  />
                        </td>
                        <td></td>
                        <td className='colored'>
                            <Peca  player="beta"  />
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>Jogador Beta</h2>
        </div>    
    )
}

export default Tabuleiro 


