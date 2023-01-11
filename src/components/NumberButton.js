import {ACTIONS} from './Calculator.js';

export default function NumberButton({ dispatch, number}) {
  return <button className="numpad" onClick={() => dispatch({type: ACTIONS.ADD_NUMBER, payload:{number}})}>{number}</button>
}