import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Components/Calculator';
import TheTitle from './Components/TheTitle';



ReactDOM.render(
  <React.StrictMode>
    <TheTitle />
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);



// Regarder useState de react : devrait gérer les this; recharge page lorsqu'un state change
// Utiliser handle click avec un switch pour savoir quelle fonction déclencher?
