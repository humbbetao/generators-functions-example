import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import App from './App';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware(); //create a saga middleware
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
// create a store
// applyMiddleware into reducers with saga middleware and logger

sagaMiddleware.run(rootSaga); // run saga

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);





if (module.hot) {
	module.hot.accept(App);
}
