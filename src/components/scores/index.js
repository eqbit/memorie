import React from 'react';
import {Link} from 'react-router-dom';
import {getFormattedTime, getScores} from '../../api/functions';

class Scores extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      scores: getScores()
    };
  }
  
  render() {
    const {scores} = this.state;
    return (
      <div className="container scores">
        {scores && scores.length
          ? scores.map((item, index) => (
            <div className="scores-item" key={index}>
              <div className="scores-item__name">{item.name}</div>
              <div className="scores-item__time">{getFormattedTime(item.time)}</div>
            </div>
          ))
          : <div className="scores__no-results">Недостаточно данных для статистики</div>
        }
        
        <Link to="/" className="btn btn--primary scores__btn">ВЕРНУТЬСЯ</Link>
      </div>
    );
  }
}

export {Scores};