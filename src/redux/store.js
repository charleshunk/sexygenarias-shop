import { createStore , applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

// const middlewares = [thunk];

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// Show logger only when in 'development' environment
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// Create store with root reducer
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Run all sagas in rootSaga
sagaMiddleware.run(rootSaga);

// Create persistor with created store
export const persistor = persistStore(store);

export default { store, persistor };