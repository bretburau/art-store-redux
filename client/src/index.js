import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConnectedApp } from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
        <ConnectedApp />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
