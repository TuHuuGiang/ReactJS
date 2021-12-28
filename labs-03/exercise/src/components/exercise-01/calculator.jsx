import Reactm, {useState} from 'react';
import '../../assets/css/exercise-01/calculator.css';

export default function Calculator() {
    // const [data, setData] = useState('');
    // const calcBtns = [];
    // [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].forEach(item => {
    //     calcBtns.push(
    //         <button onClick={e => {setData(data + e.target.value)}} value={item} key={item}>{item}</button>
    //     )
    // })

    const [result, setResult] = useState('');

    let getValue = (e) => {
        setResult(result.concat(e.target.value));
        
    }

    let ac = (e) => {
        setResult('');
    }

    let del = (e) => {
        setResult(result.slice(0, result.length - 1));
    }

    let calculate = (e) => {
        try {
            setResult(String(eval(result)).length > 3 && String(eval(result).includes('.')) ?  String(eval(result)).toFixed(4) : String(eval(result)));
        } catch (err) {
            setResult("Error");
        }
        
    }

    return (
        <div className="calculator">
                <div className="screen">
                    <span className="input">{result}</span>
                </div>
                <div className="keyboard">
                    <button className="item item1" name="Acalculation" value="AC" onClick={ac}>AC</button>
                    <button className="item item2" name="DEcalculation" value="DEL" onClick={del}>DEL</button>
                    <button className="item item3" name="calculation" value="%" onClick={getValue}>%</button>
                    <button className="item item4" name="calculation" value="+" onClick={getValue}>+</button>
                    <button className="item item5" name="number" value="7" onClick={getValue}>7</button>
                    <button className="item item6" name="number" value="8" onClick={getValue}>8</button>
                    <button className="item item7" name="number" value="9" onClick={getValue}>9</button>
                    <button className="item item8" name="calculation" value="-" onClick={getValue}>-</button>
                    <button className="item item9" name="number" value="4" onClick={getValue}>4</button>
                    <button className="item item10" name="number" value="5" onClick={getValue}>5</button>
                    <button className="item item11" name="number" value="6" onClick={getValue}>6</button>
                    <button className="item item12" name="calculation" value="*" onClick={getValue}>x</button>
                    <button className="item item13" name="number" value="1" onClick={getValue}>1</button>
                    <button className="item item14" name="number" value="2" onClick={getValue}>2</button>
                    <button className="item item15" name="number" value="3" onClick={getValue}>3</button>
                    <button className="item item16" name="calculation" value="/" onClick={getValue}>/</button>
                    <button className="item item17" name="number" value="0" onClick={getValue}>0</button>
                    <button className="item item18" name="calculation" value="." onClick={getValue}>.</button>
                    <button className="item item19" name="calculation" value="=" onClick={calculate}>=</button>
                </div>
            </div>
    ) 
}