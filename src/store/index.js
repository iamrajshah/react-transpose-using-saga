import { createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/index';
import App from '../sagas/App.saga'
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];
// If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
          // Prevent recomputing reducers for `replaceReducer`
          shouldHotReload: false,
        })
      : compose;

const store = createStore(reducer,composeEnhancers(...enhancers));
sagaMiddleware.run(App);
store.runSaga = sagaMiddleware.run;
store.injectedReducers = {}; // Reducer registry
store.injectedSagas = {}; // Saga registry

export default store;
