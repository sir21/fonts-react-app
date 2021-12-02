import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FontsContextProvider } from './store/fonts-context';

ReactDOM.render(
  <FontsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FontsContextProvider>,
  document.getElementById('root')
);
