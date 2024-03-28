import React from 'react';
import {useCalcContext} from "../../context/calcContext.jsx";
import './Input.css';

function Input() {
    const [state] = useCalcContext();
    const { n1, n2, currentInput } = state;

    return (
        <div className="input-container">
            {currentInput === 'n1' && <label className="label">{n1}</label>}
            {currentInput === 'n2' && <label className="label">{n2}</label>}
            <label className="label">{state.result}</label>
        </div>
    );
}

export default Input