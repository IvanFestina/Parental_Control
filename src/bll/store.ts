import {configureStore} from "@reduxjs/toolkit";
import {appReducer} from "./slices/appSlice";
import {authReducer} from "./slices/authSlice";
import {learningProcessReducer} from "./slices/learningProcessSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        app: appReducer,
        learningProcess: learningProcessReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
