import React from 'react';

const FieldCard = props => (
  <div className={props.isOpen
    ? 'field-card field-card--open'
    : props.isFadingOut
      ? 'field-card field-card--fading-out'
      :'field-card'}
       onClick={() => props.handleClick(props.index)}>
    <div className="field-card__inner">
      <div className="field-card__back">
        <img src="/images/rotate-arrow.svg" alt=""/>
      </div>
  
      <div className="field-card__front">
        <img src={props.img} alt=""/>
      </div>
    </div>
  </div>
);

export {FieldCard};