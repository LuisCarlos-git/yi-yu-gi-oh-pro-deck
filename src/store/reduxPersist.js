import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persisted = persistReducer(
    {
      key: 'listCards',
      storage,
      whitelist: ['list_cards', 'favorite'],
    },
    reducers
  );

  return persisted;
};
