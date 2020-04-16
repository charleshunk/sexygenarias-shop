import { createStore , applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];

// Show logger only when in 'development' environment
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// Create store with root reducer
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Create persistor with created store
export const persistor = persistStore(store);

export default { store, persistor };