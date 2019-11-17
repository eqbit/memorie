import React from 'react';
import './styles/app.scss';
import {Route, Switch} from 'react-router-dom';
import {StartScreen} from './components/start-screen';
import {Field} from './components/field';
import {EnterName} from './components/enter-name';
import {Scores} from './components/scores';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={StartScreen}/>
        <Route path='/field' component={Field}/>
        <Route path='/enter-name' component={EnterName}/>
        <Route path='/scores' component={Scores}/>
      </Switch>
    </div>
  );
}

export default App;
