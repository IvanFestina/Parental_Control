import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../bll/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;


// export const useCustomFonts = () => {
//     return useFonts({
//         'Montserrat200': require('../../assets/fonts/Montserrat-ExtraLight200.ttf'),
//         'Montserrat300': require('../../assets/fonts/Montserrat-Light300.ttf'),
//         'Montserrat400': require('../../assets/fonts/Montserrat-Regular400.ttf'),
//         'Montserrat500': require('../../assets/fonts/Montserrat-Medium500.ttf'),
//         'Montserrat600': require('../../assets/fonts/Montserrat-SemiBold600.ttf'),
//         'Montserrat700': require('../../assets/fonts/Montserrat-Bold700.ttf'),
//     })
// };
