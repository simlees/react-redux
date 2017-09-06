import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { combineReducers, createStore } from 'redux';

const studentReducer = function(state={}, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      state = {...state, name: action.payload}
      console.log('changing name');
      break;
    case 'CHANGE_AGE':
      console.log('changing age');
      break;
  }
  return state;// new state
}

const awardsReducer = function(state=[], action) {
  return state;// new state
}

const reducers = combineReducers({
  student: studentReducer,
  awards: awardsReducer
})

const store = createStore(reducers);

store.subscribe(() => {
  console.log('store changed', store.getState());
})

// type prop required. Will not process otherwise. Payload is conventional
store.dispatch({type: 'CHANGE_NAME', payload: 'Simone'})



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
