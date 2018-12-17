import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import * as React from 'react';
import { hydrate } from 'react-dom';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept();
}
