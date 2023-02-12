import { SafeAreaView } from "react-native-safe-area-context"
import {useAppDispatch} from "../../utils/hooks_and_functions";
import {StyleSheet} from "react-native";
import {COLORS, globalStyles} from "../../const/GlobalStyles";
import {BASE_WIDTH} from "../../const/Layout";

export const AppsScreen = () => {

    const dispatch = useAppDispatch()

    return (
        <SafeAreaView style={s.container}>

        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.mainBackground
    },
})