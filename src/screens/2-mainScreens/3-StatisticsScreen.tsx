import {SafeAreaView} from "react-native-safe-area-context"
import {useAppDispatch} from "../../utils/hooks_and_functions";
import {StatusBar, StyleSheet} from "react-native";
import {COLORS} from "../../const/GlobalStyles";
import {Header} from "./components/Header";
import React from "react";

export const StatisticsScreen = () => {


    const dispatch = useAppDispatch()

    return (
        <SafeAreaView style={s.container}>
            <StatusBar barStyle={"dark-content"}/>
            {/*H E A D E R*/}
            <Header/>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackground
    },
})