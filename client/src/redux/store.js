import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const logger = store => next => action => {
    const result = next(action);
    return result;
};

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
);
