import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const emptyState = {
    feeling: 0,
    understand: 0,
    support: 0,
    comment: ''
}

//Create Reducers
const feedbackReducer = (state = emptyState, action) => {
    console.log('In feedbackReducer');
    if (action.type === 'ADD_FEELING') {
        state = {...state, ...action.payload};
    } else if (action.type === 'ADD_UNDERSTAND') {
        state = {...state, ...action.payload};
    } else if (action.type === 'ADD_SUPPORT') {
        state = {...state, ...action.payload};
    } else if (action.type === 'ADD_COMMENT') {
        state = {...state, ...action.payload};
    } else if (action.type === 'RESET_STATE') {
        state = emptyState;
    }
    return state;
}

//Create Store
const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
)

//Wrap in Provider
ReactDOM.render(<Provider store={ reduxStore }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
