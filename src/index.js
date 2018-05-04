import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import authReducer from './store/reducers/auth';
import languageReducer from './store/reducers/content';
import appDataReducer from './store/reducers/appData';
import createSagaMiddleware from 'redux-saga';
import {watchAuth, watchLanguage} from './store/sagas';
import './bootstrap.scss';

let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const rootReducer = combineReducers({
  auth: authReducer,
  appData: appDataReducer,
  language: languageReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchLanguage);

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
