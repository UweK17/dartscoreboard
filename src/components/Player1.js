import React, {useState} from 'react';

const Player1 = (currentScore) => {
  
  const [player1Score, setPlayer1Score] = useState(301);
  console.log('nach dem usestate'+player1Score);

  const subtraction = () => {
    setPlayer1Score(player1Score - currentScore);
  }
  
  return (
    <>
      <div>Player1</div>
      <div>Startwert: {player1Score}</div>
      <div className='player1score'>Neuer Wert: {subtraction}</div>
    </>
  )
}

export default Player1