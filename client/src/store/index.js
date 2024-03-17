import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/authSlice";
import cartReducer from "./reducers/cartSlice";
import productReducer from "./reducers/productSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authSlice"] // List of reducers to persist (optional)
};

const rootReducer = combineReducers({
    authSlice: authReducer,
    cartSlice: cartReducer,
    productSlice: productReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);
export { store, persistor };
