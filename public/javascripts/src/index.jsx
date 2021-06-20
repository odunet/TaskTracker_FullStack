// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import { StateProvider } from './store/todoStore';

// React class based component 1
ReactDOM.render(
    <React.StrictMode>
      <StateProvider>
      <App />
      </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );