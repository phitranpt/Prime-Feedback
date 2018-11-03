import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Create Reducers
const feelingReducer = (state = [], action) => {
    console.log('In feelingReducer');
    if (action.type === 'ADD_FEELING') {
        state = action.payload;
    }
    return state;
}

const understandReducer = (state = [], action) => {
    console.log('In understandReducer');
    if (action.type === 'ADD_UNDERSTAND') {
        state = action.payload;
    }
    return state;
}

//Create Store
const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        understandReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={ reduxStore }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
