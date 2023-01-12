import React, {useState} from 'react';

const Player1 = ({currentScore}) => {
  
  const [player1Score, setPlayer1Score] = useState(301);
  console.log('nach dem usestate'+player1Score);
  console.log('currentscore in player1 '+currentScore);

  const result = () => {
    return setPlayer1Score(player1Score - currentScore)
  }

  return (
    <>
      <div>Player1</div>
      <div>Startwert: {player1Score}</div>
      <div className='player1score'>Neuer Wert: {'Neuer Wert: '+ {result}}
      </div>
      {result}
    </>
  )
}

export default Player1