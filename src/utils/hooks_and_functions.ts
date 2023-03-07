import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../bll/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;


export const msToMinutes = (ms: number) => {
    return Math.round(ms / 60000); // Divide by 60000 to convert to minutes and round the result
}