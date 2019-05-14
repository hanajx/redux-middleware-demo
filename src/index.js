import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers/reducer';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {watchAgeUp} from "./sagas/saga";
/*
// normal middleware
const logAction = store => {
    // when we catch an action, we do something next
    return next => {
        // then return something back
        return action => {
            const result = next(action);
            console.log(`Caught in the middleware ${JSON.stringify(result)}`);
            // send action to reducer
            return result;
        }
    }
};

const store = createStore(reducer, applyMiddleware(logAction));
*/
/*
const store = createStore(reducer, applyMiddleware(thunk));
*/
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
