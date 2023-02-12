import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    appMessage: '' as string,
    appIsReady: false as boolean,
    isLoading: false as boolean,
    appError: '' as string,
    appInfo: '' as string
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsAppLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setAppMessage(state, action: PayloadAction<string>) {
            state.appMessage = action.payload
        },
        setAppError(state, action: PayloadAction<string>) {
            state.appError = action.payload
        },
        setAppInfo(state, action: PayloadAction<string>) {
            state.appInfo = action.payload
        },
        setAppIsReady(state, action: PayloadAction<boolean>) {
            state.appIsReady = action.payload
        }
    },
})

export const {setIsAppLoading, setAppMessage, setAppIsReady, setAppError, setAppInfo} = appSlice.actions;

export const appReducer = appSlice.reducer
