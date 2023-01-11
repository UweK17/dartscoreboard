import React, {useReducer} from 'react';
import NumberButton from './NumberButton.js';
import '../styles/calculator.css';
import Player1 from './Player1.js';

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
    case ACTIONS.DELETE_NUMBER:
      return {
        ...state,
        score: state.score.slice(0,-1),
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.SUBMIT:
      return {
        ...state,
        score: submitScore(state),
      }
    default:
      {}
  } 
}

function submitScore({score}) {
  const currentScore = parseFloat(score)
  return (
    <Player1 currentScore={currentScore} />
  )
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
        <button className='divClear' onClick={() => dispatch({ type:ACTIONS.CLEAR})}>Clear</button>
        <NumberButton number="0" dispatch={dispatch} />
        <button className='divDelete' onClick={() => dispatch({type:ACTIONS.DELETE_NUMBER})}>Delete</button>
      </div>
      <button className="scoreSubmit" onClick={() => dispatch({type:ACTIONS.SUBMIT})}>Submit</button>
    </>
  )
}

export default Calculator