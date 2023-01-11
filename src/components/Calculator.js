import React from 'react';
import '../styles/calculator.css';

const Calculator = () => {
  return (
    <>
      <div className='display'>
        Display
      </div>
      <div className="calculatorLayout">
        <div className="div1"> 1</div>
        <div className="div2"> 2</div>
        <div className="div3"> 3</div>
        <div className="div4"> 4</div>
        <div className="div5"> 5</div>
        <div className="div6"> 6</div>
        <div className="div7"> 7</div>
        <div className="div8"> 8</div>
        <div className="div9"> 9</div>
        <div className="divClear"> Clear</div>
        <div className="div0"> 0</div>
        <div className="divDelete"> Delete</div>
      </div>
      <button className="scoreSubmit">Submit</button>
    </>
  )
}

export default Calculator