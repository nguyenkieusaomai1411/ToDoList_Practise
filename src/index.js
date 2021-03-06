
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import postReducer from './reducers/PostReducer';
import { Provider } from 'react-redux';

const store = createStore(postReducer);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);