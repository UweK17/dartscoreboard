import React, {useState} from 'react';
import { usePlayer1 } from '../context/Player1Context.js';



// const Player1 = ({currentScore}) => {
  const Player1 = ({currentScore}) => {
  // const [player1Score, setPlayer1Score] = useState(301);
  
  // console.log('nach dem usestate '+player1Score);
  // console.log(typeof player1Score);
  // console.log('currentscore in player1 '+currentScore);
  // console.log(typeof currentScore);

  // const result = parseFloat(player1Score-currentScore);
  

  // console.log('ergebnis '+result);
  // console.log(typeof result);

  const {player1Score, setPlayer1Score} = usePlayer1();

    
  return (
    <>
      <div>Player1</div>
      <div>Startwert: {player1Score}</div>
      <div className='player1score'>Neuer Wert: {currentScore}
      </div>
    </>
  )
}
export default Player1