import {createSlice} from "@reduxjs/toolkit";
import {authSlice} from "./authSlice";

// export const getAllOrders = createAsyncThunk('orders/getAllOrders',
//     async (filter: filterType, {rejectWithValue, dispatch, getState}) => {
//         const {
//             orders: {
//                 currentFilterStatusString,
//                 currentSlotString
//             }
//         } = getState() as RootState
//         dispatch(setIsAppLoading(true))
//
//         try {
//             const res = await ordersAPI.getOrders(filter.page, filter.limit, currentFilterStatusString, currentSlotString)
//             console.log('getAllOrders res', res.data.result)
//             return res.data.result
//         } catch (e) {
//             console.log('getAllOrdersError', e)
//             return rejectWithValue(e)
//         } finally {
//             dispatch(setIsAppLoading(false))
//         }
//     })
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

}

const initialState: InitialStateType = {

};


const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder


    }
})

export const ordersReducer = ordersSlice.reducer

