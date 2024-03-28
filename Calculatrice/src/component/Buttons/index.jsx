import React from 'react';
import { useCalcContext } from "../../context/calcContext.jsx";
import './Buttons.css';

function Buttons() {
    const [state, dispatch] = useCalcContext();
    const { n1, n2, operator } = state;

    const handleNumberClick = (number) => {
        if (operator) {
            dispatch({
                type: "set_value",
                payload: { name: "n2", value: n2 + number }
            });
        } else {
            dispatch({
                type: "set_value",
                payload: { name: "n1", value: n1 + number }
            });
        }
    };

    const handleOperationClick = (operation) => {
        dispatch({
            type: "set_operator",
            payload: operation
        });
    };

    const handleResult = () => {
        dispatch({ type: "calculate_result" });
    };

    return (
        <div className="button-container"> 
            <button className="button" onClick={() => handleNumberClick("7")}>7</button>
            <button className="button" onClick={() => handleNumberClick("8")}>8</button>
            <button className="button" onClick={() => handleNumberClick("9")}>9</button>
            <button className="operation-button" onClick={() => handleOperationClick('+')}>+</button>
            <button className="button" onClick={() => handleNumberClick("4")}>4</button>
            <button className="button" onClick={() => handleNumberClick("5")}>5</button>
            <button className="button" onClick={() => handleNumberClick("6")}>6</button>
            <button className="operation-button" onClick={() => handleOperationClick('-')}>-</button>
            <button className="button" onClick={() => handleNumberClick("1")}>1</button>
            <button className="button" onClick={() => handleNumberClick("2")}>2</button>
            <button className="button" onClick={() => handleNumberClick("3")}>3</button>
            <button className="operation-button" onClick={() => handleOperationClick('*')}>x</button>
            <button className="button" onClick={() => handleNumberClick("0")}>0</button>
            <button className="result-button" onClick={() => handleResult()}>=</button>
            <button className="operation-button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default Buttons;