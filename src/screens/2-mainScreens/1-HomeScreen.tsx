import {SafeAreaView} from "react-native-safe-area-context"
import {useAppDispatch} from "../../utils/hooks_and_functions";
import {
    Alert,
    Button,
    Linking,
    NativeModules,
    ScrollView,
    StatusBar,
    StyleSheet
} from "react-native";
import {COLORS} from "../../const/GlobalStyles";
import {SPACING} from "../../const/Layout";
import React, {useCallback, useEffect} from "react";
import {Header} from "./components/Header";
import {Plan} from "./components/Plan";
import {AvailableAndSpentTime} from "./components/AvailableAndSpentTime";
import {getPhoneApps} from "../../bll/slices/learningProcessSlice";


export const HomeScreen = () => {

    const {ParentalControlModule} = NativeModules;
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getPhoneApps())
    }, []);


    const SendIntentButton = ({action, extras, children}: any) => {
        const handlePress = useCallback(async () => {
            try {
                await Linking.sendIntent(action, extras);
            } catch (e: any) {
                Alert.alert(e.message);
            }
        }, [action, extras]);

        return <Button title={children} onPress={handlePress}/>;
    };


    return (
        <SafeAreaView>
            <StatusBar backgroundColor={COLORS.mainBackground}/>
            <ScrollView contentContainerStyle={s.container}>
                <Header/>
                <Plan/>
                <AvailableAndSpentTime/>
                <SendIntentButton
                    action={"android.settings.USAGE_ACCESS_SETTINGS"}
                >Access Usage Settings
                </SendIntentButton>
            </ScrollView>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackground,
        paddingHorizontal: SPACING / 2,
        gap: SPACING / 2,
    },

})