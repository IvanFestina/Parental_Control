import {SafeAreaView} from "react-native-safe-area-context"
import {useAppDispatch} from "../../utils/hooks_and_functions";
import {ScrollView, StatusBar, StyleSheet} from "react-native";
import {COLORS} from "../../const/GlobalStyles";
import {SPACING} from "../../const/Layout";
import React from "react";
import {Header} from "./components/Header";
import {Plan} from "./components/Plan";
import {AvailableAndSpentTime} from "./components/AvailableAndSpentTime";


export const HomeScreen = () => {

    const dispatch = useAppDispatch()


    return (
        <SafeAreaView>
            <StatusBar backgroundColor={COLORS.mainBackground}/>
            <ScrollView contentContainerStyle={s.container}>
                <Header/>
                <Plan/>
                <AvailableAndSpentTime/>
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