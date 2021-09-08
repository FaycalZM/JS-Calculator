import React from 'react'


const KeysComponent = ({ expression, setExpression }) => {

    const clickHandler = (num) => {
        setExpression(expression + num)
    }
    return (
        <section className="keys-section">
            <button onClick={() => {
                clickHandler('7');
            }}><p>7</p></button>
            <button onClick={() => {
                clickHandler('8');
            }}><p>8</p></button>
            <button onClick={() => {
                clickHandler('9');
            }}><p>9</p></button>
            <button className='btns del' onClick={() => {
                setExpression(expression.toString().slice(0, expression.length - 1))
            }}><p>del</p></button>
            <button onClick={() => {
                clickHandler('4');
            }}><p>4</p></button>
            <button onClick={() => {
                clickHandler('5');
            }}><p>5</p></button>
            <button onClick={() => {
                clickHandler('6');
            }}><p>6</p></button>
            <button onClick={() => {
                clickHandler('+');
            }}><p>+</p></button>
            <button onClick={() => {
                clickHandler('1');
            }}><p>1</p></button>
            <button onClick={() => {
                clickHandler('2');
            }}><p>2</p></button>
            <button onClick={() => {
                clickHandler('3');
            }}><p>3</p></button>
            <button onClick={() => {
                clickHandler('-');
            }}><p>-</p></button>
            <button onClick={() => {
                clickHandler('.');
            }}><p>.</p></button>
            <button onClick={() => {
                clickHandler('0');
            }}><p>0</p></button>
            <button onClick={() => {
                clickHandler('/');
            }}><p>/</p></button>
            <button onClick={() => {
                clickHandler('*');
            }}><p>✖</p></button>
            <button className="btns reset" onClick={() => {
                setExpression('')
            }}><p>reset</p></button>
            <button className="btn equal" onClick={() => {
                setExpression(eval(expression))
            }}><p>=</p></button>
        </section>
    )
}

export default KeysComponent
