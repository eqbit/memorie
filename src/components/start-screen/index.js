import React from 'react';
import {Link} from 'react-router-dom';

const StartScreen = () => (
  <div className="container start-screen__container">
    <div className="start-screen">
      <Link to='/field' className="btn btn--primary start-screen__btn">НА ИГРОВОЕ ПОЛЕ</Link>
      <Link to='/scores' className="btn btn--secondary start-screen__btn">РЕЙТИНГ ИГРОКОВ</Link>
    </div>
  </div>
);

export {StartScreen};