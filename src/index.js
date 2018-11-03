import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const emptyFeedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}

//Create Reducers
const feedbackReducer = (state = [], action) => {
    console.log('In feedbackReducer');
    if (action.type === 'ADD_FEEDBACK') {
        state = [...state, action.payload];
    } 
    else if (action.type === 'SUBMISSION') {
        //reset state
        state = emptyFeedback;
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

ReactDOM.render(<Provider store={ reduxStore }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
