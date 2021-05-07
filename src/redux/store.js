import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";
const persistConfig = {
  key: "root",
  timeout: null,
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default function configureStore() {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
}
