import React from 'react';
import ReactDOM from 'react-dom/client';
import { Player1ContextProvider } from './context/Player1Context.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Player1ContextProvider>
      <App />
    </Player1ContextProvider>
  </React.StrictMode>
);

