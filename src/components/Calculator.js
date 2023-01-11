import React from 'react';
import '../styles/calculator.css';

const Calculator = () => {
  return (
    <>
      <div className='display'>
        Display
      </div>
      <div class="calculatorLayout">
        <div class="div1"> 1</div>
        <div class="div2"> 2</div>
        <div class="div3"> 3</div>
        <div class="div4"> 4</div>
        <div class="div5"> 5</div>
        <div class="div6"> 6</div>
        <div class="div7"> 7</div>
        <div class="div8"> 8</div>
        <div class="div9"> 9</div>
        <div class="divClear"> Clear</div>
        <div class="div0"> 0</div>
        <div class="divDelete"> Delete</div>
      </div>
      <button>Submit</button>
    </>
  )
}

export default Calculator