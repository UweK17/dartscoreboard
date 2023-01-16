import React, {useState, useContext, UserContext} from 'react';



const Player1 = ({score}) => {
  
  const score = useContext(UserContext);
  // const [player1Score, setPlayer1Score] = useState(301);
  
  // console.log('nach dem usestate '+player1Score);
  // console.log(typeof player1Score);
  // console.log('currentscore in player1 '+currentScore);
  // console.log(typeof currentScore);

  // const result = parseFloat(player1Score-currentScore);
  

  // console.log('ergebnis '+result);
  // console.log(typeof result);

    
  return (
    <>
      <div>Player1</div>
      <div>Startwert: 301</div>
      <div className='player1score'>Neuer Wert: {score}
      </div>
    </>
  )
}
export default Player1