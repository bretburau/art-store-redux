import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { ConnectedApp } from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import AppRoutes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
        <AppRoutes />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
