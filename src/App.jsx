import { useState } from 'react'
import './App.css'

function App() {
    const [display, setDisplay] = useState('');

    const appendToDisplay = (value) => {
        setDisplay((prevDisplay) => prevDisplay + value);
    };

    const clearDisplay = () => {
        setDisplay('');
    };

    const deleteLast = () => {
        setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
    };

    const calculate = () => {
        try{
            setDisplay(eval(display).toString());
        } catch (e){
            setDisplay('Error');
        }
    };

    return (
        <div className="calculator">
            <div className="display">{display || '0'}</div>
            <div className="buttons">
                <button className="btn" onClick={clearDisplay}>C</button>
                <button className="btn" onClick={deleteLast}>DEL</button>
                <button className="btn" onClick={() => appendToDisplay('/')}>/</button>
                <button className="btn" onClick={() => appendToDisplay('*')}>*</button>
                <button className="btn" onClick={() => appendToDisplay('7')}>7</button>
                <button className="btn" onClick={() => appendToDisplay('8')}>8</button>
                <button className="btn" onClick={() => appendToDisplay('9')}>9</button>
                <button className="btn" onClick={() => appendToDisplay('-')}>-</button>
                <button className="btn" onClick={() => appendToDisplay('4')}>4</button>
                <button className="btn" onClick={() => appendToDisplay('5')}>5</button>
                <button className="btn" onClick={() => appendToDisplay('6')}>6</button>
                <button className="btn" onClick={() => appendToDisplay('+')}>+</button>
                <button className="btn" onClick={() => appendToDisplay('1')}>1</button>
                <button className="btn" onClick={() => appendToDisplay('2')}>2</button>
                <button className="btn" onClick={() => appendToDisplay('3')}>3</button>
                <button className="btn zero" onClick={() => appendToDisplay('0')}>0</button>
                <button className="btn" onClick={() => appendToDisplay('.')}>.</button>
                <button className="btn equals" onClick={calculate}>=</button>
            </div>
        </div>
    );
}

export default App;