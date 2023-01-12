import React, {useState, useEffect} from 'react';



const Player1 = ({currentScore}) => {
  
  const [player1Score, setPlayer1Score] = useState(301);
  
  console.log('nach dem usestate '+player1Score);
  console.log(typeof player1Score);
  console.log('currentscore in player1 '+currentScore);
  console.log(typeof currentScore);

  
const result = parseFloat(player1Score-currentScore)
  

  console.log('ergebnis '+result);
  console.log(typeof result);

    
  return (
    <>
      <div>Player1</div>
      <div>Startwert: {player1Score}</div>
      <div className='player1score'>Neuer Wert: {result}
      </div>
    </>
  )
}

export default Player1