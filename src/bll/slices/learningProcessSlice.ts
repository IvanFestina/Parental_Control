import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authSlice} from "./authSlice";
import {appItem, taskDataType} from "../mainTypes";
import uuid from 'react-native-uuid';
import {setIsAppLoading} from "./appSlice";
import {NativeModules} from "react-native";

const {ParentalControlModule} = NativeModules;

export const getPhoneApps = createAsyncThunk('learningProcess/getPhoneApps',
    async (_, {rejectWithValue, dispatch, getState}) => {
        dispatch(setIsAppLoading(true))
        try {
            const res = await ParentalControlModule.getUsageStats()
            console.log('getPhoneApps res', res)
            return res
        } catch (e: any) {
            console.log('getPhoneAppsError', e)
            const errorObject = {
                message: e.message,
                stack: e.stack,
                // Add any other relevant information here
            }
            return rejectWithValue(errorObject)
        } finally {
            dispatch(setIsAppLoading(false))
        }
    })
//
//
// export const getOrderDetails = createAsyncThunk('orders/getOrderDetails',
//     async (orderId: number, {rejectWithValue, dispatch}) => {
//         dispatch(setIsAppLoading(true))
//         try {
//             const res = await ordersAPI.getOrderDetails(orderId)
//             console.log('getOrderDetails res', res.data)
//             return res.data
//         } catch (e) {
//             console.log('getOrderDetailsError', e)
//             return rejectWithValue(e)
//         } finally {
//             dispatch(setIsAppLoading(false))
//         }
//     }
// )


type InitialStateType = {
    tasksData: taskDataType[]
    appUsage: appItem[]
}

const initialState: InitialStateType = {
    tasksData: [
        {id: uuid.v4().toString(), title: 'Выучить стихотворение', isChecked: true},
        {id: uuid.v4().toString(), title: 'Умножаем на 2', isChecked: true},
        {id: uuid.v4().toString(), title: 'Умножаем на 3', isChecked: false},
    ],
    appUsage: []
};


const learningProcessSlice = createSlice({
    name: 'learningProcess',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPhoneApps.fulfilled, (state, action) => {
                state.appUsage = action.payload
            })


    }
})

export const learningProcessReducer = learningProcessSlice.reducer

