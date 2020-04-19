import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import persistReducer from './reduxPersist';

import cards from './reducer';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(persistReducer(cards), enhancer);
const persistor = persistStore(store);

export { store, persistor };
