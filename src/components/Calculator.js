import React, {useReducer} from 'react';
import NumberButton from './NumberButton.js';
import '../styles/calculator.css';

export const ACTIONS = {
  ADD_NUMBER: 'add-number',
  CLEAR: 'clear',
  DELETE_NUMBER: 'delete-number',
  SUBMIT: 'submit'
}
function reducer(state, {type, payload}) {
  switch(type) {
    case ACTIONS.ADD_NUMBER:
      return {
        ...state,
        score: `${state.score || ""}${payload.number}`
      }
    case ACTIONS.CLEAR:
      return {}
  } 
}

const Calculator = () => {

  const [{score}, dispatch] = useReducer(reducer, {});

  

  return (
    <>
      <div className='display'>
        {score}
      </div>
      <div className="calculatorLayout">
        
        <NumberButton number="1" dispatch={dispatch} />
        <NumberButton number="2" dispatch={dispatch} />
        <NumberButton number="3" dispatch={dispatch} />
        <NumberButton number="4" dispatch={dispatch} />
        <NumberButton number="5" dispatch={dispatch} />
        <NumberButton number="6" dispatch={dispatch} />
        <NumberButton number="7" dispatch={dispatch} />
        <NumberButton number="8" dispatch={dispatch} />
        <NumberButton number="9" dispatch={dispatch} />
        <button className='divDelete'>Delete</button>
        <NumberButton number="0" dispatch={dispatch} />
        <button className='divClear' onClick={() => dispatch({ type:ACTIONS.CLEAR})}>Clear</button>
      </div>
      <button className="scoreSubmit">Submit</button>
    </>
  )
}

export default Calculator