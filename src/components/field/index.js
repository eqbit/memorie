import React from 'react';
import {FieldHeader} from '../field-header';
import cardSource from '../../data/cards';
import {shuffleArray, removeElements} from '../../api/functions';
import {FieldCard} from '../card';

class Field extends React.Component {
  constructor(props) {
    super(props);
    
    let cards = cardSource.concat(cardSource);
    
    shuffleArray(cards);
    
    this.state = {
      time: 0,
      started: false,
      cards: cards,
      openCards: [],
      fadingOut: [],
      timer: null
    };
  }
  
  componentWillUnmount() {
    clearInterval(this.state.timer)
  }
  
  startHandle = () => {
    this.setState({
      started: true,
      timer: setInterval(() => {
        this.setState(prevState => prevState.time++);
      }, 1000)
    });
  };
  
  handleCardClick = item => {
    if (this.state.openCards.length < 2 && !this.state.fadingOut.length) {
      this.setState(prevState => {
        prevState.openCards.push(item);
        
        return {openCards: prevState.openCards};
      }, this.checkCards);
    }
  };
  
  checkCards = () => {
    const {openCards, cards} = this.state;
    
    if (openCards.length === 2) {
      if (cards[openCards[0]] === cards[openCards[1]]) {
        
        setTimeout(() => {
          this.setState(prevState => {
            prevState.fadingOut = prevState.openCards;
            prevState.openCards = [];
            
            return prevState;
          });
        }, 500);
        
        setTimeout(() => {
          this.setState(prevState => {
            removeElements(prevState.cards, openCards);
            prevState.fadingOut = [];
            
            return prevState;
          });
  
          this.checkFinish();
        }, 800);
        
      } else {
        
        setTimeout(() => {
          this.setState({
            openCards: []
          });
        }, 500);
        
      }
    }
  };
  
  checkFinish = () => {
    if(!this.state.cards.length) {
      localStorage.setItem('tempTimer', this.state.time);
      this.props.history.push('/enter-name');
    }
  };
  
  render() {
    return (
      <div className="field__container">
        <FieldHeader time={this.state.time}/>
        
        <div className="container">
          <div className="field__grid">
            {
              !this.state.started &&
              <div className="field__overlay">
                <div className="btn btn--secondary" onClick={this.startHandle}>СТАРТ</div>
              </div>
            }
            {
              this.state.cards.map((img, index) => (
                <FieldCard img={img}
                           key={index}
                           index={index}
                           handleClick={this.handleCardClick}
                           isFadingOut={this.state.fadingOut.includes(index)}
                           isOpen={this.state.openCards.includes(index)}/>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export {Field};