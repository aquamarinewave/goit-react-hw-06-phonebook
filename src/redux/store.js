import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  
  middleware(getDefaultMiddleware) {
    
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

  }
});

export const persistor = persistStore(store);

// Створи дії збереження та видалення контакту, а також оновлення фільтра
// Зв'яжи React-компоненти з Redux-логікою за допомогою хуків бібліотеки react-redux.


