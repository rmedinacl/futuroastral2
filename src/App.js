import React from 'react';
import './index.css'
import { Promo} from './components/Promo';
import { Portada} from './components/Portada';
import { Expli2} from './components/Expli2';
import { Testimonios} from './components/Testimonios';
import {Cta } from './components/Cta';
import { Test } from './components/Test';



function App() {
  return (
      <div className="App">
      <Promo/>
      <Portada/>
      <Expli2/>
      <Testimonios/>
      <Cta/>
      <Test/>
      </div>
  );
}

export default App;
