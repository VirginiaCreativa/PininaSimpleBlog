import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './scripts/imports';

const root = document.getElementById('app');
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root,
);
