import React from 'react';
import {getScores} from '../../api/functions';

class EnterName extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      timer: localStorage.getItem('tempTimer'),
      scores: getScores()
    };
    
    if (!this.state.timer) {
      this.props.history.push('/');
    }
  }
  
  handleSubmit = e => {
    e.preventDefault();
    
    let {scores, timer} = this.state;
    
    if (!scores) {
      scores = [];
    }
    
    scores.push({
      name: e.target.name.value,
      time: timer
    });
    
    localStorage.setItem('scores', JSON.stringify(scores));
    
    localStorage.setItem('tempTimer', '');
    
    this.props.history.push('/scores');
  };
  
  render() {
    return (
      <div className="container enter-name__container">
        <form onSubmit={this.handleSubmit} className="enter-name">
          <input type="text"
                 name="name"
                 className="enter-name__input"
                 placeholder="Ваше имя"
                 onFocus={e => e.target.placeholder = ''}
                 onBlur={e => e.target.placeholder = 'Ваше имя'}
                 required/>
          <button type="submit" className="btn btn--secondary enter-name__btn">ОТПРАВИТЬ</button>
        </form>
      </div>
    );
  }
}

export {EnterName};