import React from "react";
// import axios from "axios";
// import {getAccess_token} from "../utils/hooks_and_functions";
// import {
//     AddProductObjectType,
//     assemblyItemInCartType,
//     OrderType,
//     TimeSlotType,
//     UserType,
//     VerificationObjectType
// } from "../bll/mainTypes";
//
// export const BASE_URL = 'https://pravilnayakorzinka.ru/api/1.0.1'
//
// export const instance = axios.create({
//     baseURL: BASE_URL,
// })
//
// instance.interceptors.request.use(async config => {
//         // every request will be intercepted, and we can add some logic here to modify the request before it is sent to the server
//         const token = await getAccess_token();
//         if (!!token) {
//             if (!config.headers) {
//                 config.headers = {};
//             }
//             // @ts-ignore
//             config.headers['COLLECTORACCESSTOKEN'] = `${token}`;
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// )
// //
// // instance.interceptors.response.use(response => response,
// //     async error => {
// //         const originalRequest = error.config;
// //         const status = error.response?.status;
// //
// //         if (status === 401 && !originalRequest.isRetry) {
// //             originalRequest.isRetry = true;
// //             console.log('error.response.status', status)
// //             try {
// //                 // take refresh_token from storage and send it to server to get new access_token and refresh_token pair and store it in storage again
// //                 // and send original request again with new access_token in headers and return response from server to original request (originalRequest)
// //                 const token = await AsyncStorage.getItem('@refresh_token')
// //                 const res = await axios.get(`${BASE_URL}/tokens/refresh/${token}`)
// //                 console.log('refreshToken res', res)
// //                 storeAccess_token(res.data.access_token)
// //                 storeRefresh_token(res.data.refresh_token)
// //                 axios.defaults.headers.common['COLLECTORACCESSTOKEN'] = res.data.access_token;
// //                 originalRequest.headers['COLLECTORACCESSTOKEN'] = res.data.access_token;
// //                 return axios(originalRequest);
// //             } catch (e) {
// //                 console.log('refreshToken request - error', e)
// //             }
// //         }
// //
// //         if (error.response.status === 503) return
// //
// //         return Promise.reject(error.response.data);
// //     });
//
//
// export const authAPI = {
//     requestCode(phone: string) {
//         return instance.post<{ phone_token: string }>('user/requestCode', {phone})
//     },
//     verifyCode(phone_token: string | null, code: string) {
//         return instance.post<{ access_token: string, refresh_token: string }>('user/confirmCode', {
//             phone_token,
//             code
//         })
//     },
//     logout() {
//         return instance.get('user/logout')
//     },
//     me() {
//         return instance.get<UserType>('user/profile')
//     },
// }
//
// export const ordersAPI = {
//     getOrders(page: number, limit: number, statuses?: string, slots?: any) {
//         return instance.get<getOrdersResponse>(`/orders?page=${page}&limit=${limit}&statuses=${statuses}&slots=${slots}`)
//     },
//     getOrderDetails(orderId: number) {
//         return instance.get(`/order/${orderId}`)
//     },
//     changeOrderStatus(order_id: number, status: string, packages?: string[], comment?: string, options?: string[], courier?: string) {
//         //comment Пояснения по ошибкам сборки (только для статуса "Не прошел проверку")
//         //courier_number Номер курьера (только для статуса "Передан курьеру")
//         //packages Объект с данными по пакетам (только для статуса "Ожидает доставки")
//         //options Опции (только для статуса "Ожидает доставки") [ PIZZA ] [ "REGULAR", "REGULAR", "REFRIGERATED", "FREEZER" ]
//         return instance.post(`/order/${order_id}/status`, {
//             status,
//             packages,
//             comment,
//             options,
//             courier
//         })
//     },
//     getTimeSlots() {
//         return instance.get<getTimeSlotsResponse>('/list/slots')
//     },
//     assembleListOfProducts(order_id: number, bagOfAddedItems: assemblyItemInCartType[]) {
//         return instance.post(`/order/${order_id}/assembly`, {items: bagOfAddedItems})
//     },
//     verifyListOfProducts(order_id: number, verificationArrayOfObjects: VerificationObjectType[]) {
//         return instance.post(`/order/${order_id}/check`, {items: verificationArrayOfObjects})
//     },
//     getPdfLink(order_id: number) {
//         return instance.get(`/order/${order_id}/printing`)
//     },
//     addProduct(order_id: number, addProductObject: AddProductObjectType) {
//         return instance.post(`/order/${order_id}/add`,
//             {
//                 product_id: addProductObject.product_id,
//                 quantity: addProductObject.quantity,
//                 scanned_at: addProductObject.scanned_at,
//                 marks: addProductObject.marks
//             }
//         )
//     },
//     deleteAddedProduct(order_id: number, cart_id: number) {
//         return instance.post(`/order/${order_id}/delete/${cart_id}`)
//     }
// }
//
// type getTimeSlotsResponse = {
//     result: TimeSlotType[]
// }
//
// type getOrdersResponse = {
//     result: OrderType[],
//     total: string,
// }
//
//
// export const productAPI = {
//     findProductByBarcode(barcode: string) {
//         return instance.get(`/product/search/${barcode}`)
//     }
// }
//
//
// // "category": "СЫРОКОПЧЁНЫЕ КОЛБАСЫ", на это не смотреть,
// // remainder - это остатки по магазину сборщика
