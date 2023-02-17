import {SafeAreaView} from "react-native-safe-area-context"
import {useAppDispatch} from "../../utils/hooks_and_functions";
import {StyleSheet} from "react-native";
import {COLORS} from "../../const/GlobalStyles";

export const OtherScreen = () => {

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