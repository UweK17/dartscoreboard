import React, {createContext, useContext, useState, useEffect} from 'react';

const Player1Context = createContext();

export const Player1ContextProvider = ({children}) => {
  const [player1Score, setPlayer1Score] = useState(301);

  return (
    <Player1Context.Provider value={{player1Score, setPlayer1Score}}>
      {children}
    </Player1Context.Provider>
  )
}

export const usePlayer1 = () => useContext(Player1Context);