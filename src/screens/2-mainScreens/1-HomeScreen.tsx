import {SafeAreaView} from "react-native-safe-area-context"
import {useAppDispatch} from "../../utils/hooks_and_functions";
import {StatusBar, StyleSheet} from "react-native";
import {COLORS} from "../../const/GlobalStyles";
import {SPACING} from "../../const/Layout";
import React from "react";
import {Header} from "./components/Header";
import {Plan} from "./components/Plan";

export const HomeScreen = () => {

    const dispatch = useAppDispatch()

    return (
        <SafeAreaView style={s.container}>
            <StatusBar backgroundColor={COLORS.mainBackground}/>
            <Header/>
            <Plan/>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackground,
        paddingHorizontal: SPACING / 2,
    },

})