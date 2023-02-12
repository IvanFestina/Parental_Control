import {createSlice, PayloadAction} from "@reduxjs/toolkit";

//THUNKS

// export const sendPhoneNumberForVerification = createAsyncThunk('1-auth/sendPhoneNumberForVerification',
//     async (phoneNumber: string, {dispatch, rejectWithValue}) => {
//         dispatch(setIsAppLoading(true))
//         try {
//             const res = await authAPI.requestCode(phoneNumber)
//             return {phone_token: res.data.phone_token, phoneNumber}
//         } catch (e: any) {
//             console.log('sendPhoneNumberForVerificationError', e)
//             if (e.error_message === "Пользователь не является сборщиком.") {
//                 dispatch(setAppError( "Пользователь не является сборщиком."))
//             }
//             return rejectWithValue(e)
//         } finally {
//             dispatch(setIsAppLoading(false))
//         }
//     }
// )
// export const verifyCode = createAsyncThunk('1-auth/verifyCode',
//     async (smsCode: string, {dispatch, rejectWithValue, getState}) => {
//         const {1-auth: {phone_token}} = getState() as RootState
//         console.log('smsCode', smsCode)
//         dispatch(setIsAppLoading(true))
//         try {
//             const res = await authAPI.verifyCode(phone_token, smsCode)
//             //access_token and refresh_token
//             return res.data
//         } catch (e: any) {
//             console.log('verifyCodeError', e)
//             if (e.error_message === "Некорректный код подтверждения.") {
//                 dispatch(setAppError( "Некорректный код подтверждения."))
//             }
//             return rejectWithValue(e)
//         } finally {
//             dispatch(setIsAppLoading(false))
//         }
//     })
//
// export const logout = createAsyncThunk('1-auth/logout',
//     async (_, {dispatch, rejectWithValue}) => {
//         dispatch(setIsAppLoading(true))
//         try {
//             const res = await authAPI.logout()
//             return res.data
//         } catch (e: any) {
//             return rejectWithValue(e.response.data.error)
//         } finally {
//             dispatch(setIsAppLoading(false))
//         }
//     }
// )
// // эту функцию используем, чтобы проверить залогинены ли мы
// export const fetchUserData = createAsyncThunk('1-auth/fetchUserData',
//     async (_, {dispatch, rejectWithValue}) => {
//         dispatch(setIsAppLoading(true))
//         try {
//             console.log('fetchUserData_before_request')
//             const res = await authAPI.me()
//             return res.data
//         } catch (e: any) {
//             console.log('fetchUserDataError', e)
//             if (e.error_message === "Api ключ пустой." || e.error_message === "Пользователь не найден.") {
//                 dispatch(setAppError('Необходима авторизация'))
//                 dispatch(logout())
//             }
//
//             return rejectWithValue(e.error_message)
//         } finally {
//             dispatch(setIsAppLoading(false))
//             dispatch(setAppIsReady(true))
//         }
//     }
// )

//STATE
const initialState: initialStateType = {
    isLoggedIn: false,
    access_token: null,
    refresh_token: null,
};

type initialStateType = {
    isLoggedIn: boolean
    access_token: string | null
    refresh_token: string | null
}


//SLICE

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLoggedIn(state, action: PayloadAction<boolean>) {
            state.isLoggedIn = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            // .addCase(verifyCode.fulfilled, (state, action) => {
            //     state.isLoggedIn = true
            //     const {
            //         access_token,
            //         refresh_token
            //     } = action.payload as { access_token: string, refresh_token: string }
            //     console.log('verifyCode.fulfilled', access_token, refresh_token)
            //     storeAccess_token(access_token)
            //     storeRefresh_token(refresh_token)
            //     // state.access_token = access_token
            //     // state.refresh_token = refresh_token
            // })
            // .addCase(logout.fulfilled, (state, action) => {
            //     AsyncStorage.removeItem('@access_token')
            //     AsyncStorage.removeItem('@refresh_token')
            //     state.isLoggedIn = false
            //     state.phone_token = null
            // })
            // .addCase(fetchUserData.fulfilled, (state, action) => {
            //     if (action.payload) {
            //         state.user = action.payload
            //         state.isLoggedIn = true
            //     }
            // })
            // .addCase(fetchUserData.rejected, (state, action) => {
            //         state.isLoggedIn = false
            //     }
            // )
    }
})

export const {setIsLoggedIn} = authSlice.actions;

export const authReducer = authSlice.reducer

//TYPES

