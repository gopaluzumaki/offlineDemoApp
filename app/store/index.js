//& REDUX
// import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
//& SAGA
import createSagaMiddleware from '@redux-saga/core';

import reducers from '../reducer';
import middlewares from '../sagas';
import { applyMiddleware, createStore, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as localforage from "localforage";
import axios from 'axios';
offlineConfig.persistOptions = { storage: AsyncStorage }; 

const customConfig = {
  ...offlineConfig,
  effect: (effect, action) => {
    return axios.post(effect.url, action.payload && action.payload.content);
  }
};

const sagaMiddlewares = createSagaMiddleware();

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };


// const persistedReducer = persistReducer(persistConfig, reducers);


export const store = createStore(
  reducers,
  // persistedReducer,
  compose(
    applyMiddleware(sagaMiddlewares),
    offline(customConfig)
  )
);

sagaMiddlewares.run(middlewares);

// export const store = createStore(
//   reducers,
//   compose(
//     applyMiddleware(middlewares),
//     offline(offlineConfig)
//   )
// );


// export const persistor = persistStore(store);