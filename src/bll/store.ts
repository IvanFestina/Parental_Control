import {configureStore} from "@reduxjs/toolkit";
import {appReducer} from "./slices/appSlice";
import {authReducer} from "./slices/authSlice";
import {ordersReducer} from "./slices/ordersSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        app: appReducer,
        orders: ordersReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
