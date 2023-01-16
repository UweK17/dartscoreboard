import React, {createContext, useState, useEffect} from 'react';

const UserContext = createContext();

export const UserContextProvider = (score) => {

  return(
    <UserContext.Provider value={301}>
      {score}
    </UserContext.Provider>
  )
}

