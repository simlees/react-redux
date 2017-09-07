import logo from './logo.svg';
import React, { Component } from 'react';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import './App.css';

import { combineReducers, createStore, applyMiddleware } from 'redux';

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const reducer = function(state=initialState, action) {
  switch (action.type) {
    case 'FETCH_USERS_START': {
      return {...state, fetching: true}
      break
    }
    case 'RECEIVE_USERS': {
      return {
        ...state,
        users: action.payload,
        fetching: false,
        fetched: true
      }
      break;
    }
    case 'FETCH_USERS_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
      break
    }
  }
}

const middleware = applyMiddleware(thunk, logger); // Chuck all middlware in here
const store = createStore(reducer, middleware);

// type prop required. Will not process otherwise. Payload is conventional
store.dispatch((dispatch) => {
  dispatch({type: 'FETCH_USERS_START'})
  axios.get('http://rest.learncode.academy/api/wstern/users')
    .then((response) => {
      dispatch({type: 'RECEIVE_USERS', payload: response.data})
    })
    .catch((err) => {
      dispatch({type: 'FETCH_USERS_ERROR', payload: err})
    });
  // do something asynchronous
})



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
