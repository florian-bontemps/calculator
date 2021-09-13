import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TheTitle from './Components/TheTitle.js';
import Calculator from './Components/Calculator';
import GreatOperationButton from './Components/GreatOperationButton';
import AmazingNumberButton from './Components/AmazingNumberButton';
import MagnificientEqualButton from './Components/MagnificientEqualButton';


ReactDOM.render(
  <React.StrictMode>
    <TheTitle />,
    <Calculator />,
    <GreatOperationButton />,
    <AmazingNumberButton />,
    <MagnificientEqualButton />

  </React.StrictMode>,
  document.getElementById('root')
);

