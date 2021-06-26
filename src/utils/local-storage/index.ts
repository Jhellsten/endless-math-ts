import AsyncStorage from "@react-native-community/async-storage";

import { createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
// import { composeWithDevTools } from 'remote-redux-devtools'

import index from '../../reducers/index'

const persistConfig = {
    key: 'endless_math',
    storage: AsyncStorage,
    blacklist: ['category']
}

const persistedReducer = persistReducer(persistConfig, index)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor }

export const storeLocalStorage = (key: string, data: any) =>
  new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
      resolve(true);
    } catch (e) {
      // saving error
      console.log("Store Data in AsyncStorage Error!");
      reject(false);
    }
  });

export const fetchLocalStorage = (key: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const value = await AsyncStorage.getItem(key, undefined);
      if (value !== null) {
        // value previously stored
        resolve(JSON.parse(value));
      }
      reject(null);
    } catch (e) {
      reject(null);
    }
  });
