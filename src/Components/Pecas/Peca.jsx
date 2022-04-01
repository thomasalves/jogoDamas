import React, {useContext} from 'react';
import './Peca.css';
import MyContext from '../../contexts/myContext';


const Peca = (props) => {

    const {colorAlpha, colorBeta} = useContext(MyContext)


    return(
        <>
            <span  className="pecas" id={props.player} style={ props.player === 'beta' ? {
               backgroundColor: colorBeta } : {backgroundColor: colorAlpha }}>
                </span>
        </>

    )
}

export default Peca