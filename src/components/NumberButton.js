import {ACTIONS} from './Calculator.js';

export default function NumberButton({ dispatch, number}) {
  return <button onClick={() => dispatch({type: ACTIONS.ADD_NUMBER, payload:{number}})}>{number}</button>
}