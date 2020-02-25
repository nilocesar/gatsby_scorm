import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '.'; // the value from combineReducers

import Init from './controller/init';

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2,
 blacklist: ['preloader'] // nao colocar o preloader na lista de persistencia
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer);
const persistor = persistStore(store);


export default ({ element }) => 
{
  return(
    <Provider store={store}>
    
    <PersistGate loading={null} persistor={persistor}>
      <Init></Init>
      {element}
    </PersistGate>

    </Provider>
  )
}
