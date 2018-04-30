import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import reducers from '../reducers';

const reducer = persistCombineReducers({ key: 'root', storage }, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, {}, composeEnhancers(applyMiddleware(createLogger())))
let persistor = persistStore(store)

export { store, persistor }
