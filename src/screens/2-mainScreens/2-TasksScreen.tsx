import {SafeAreaView} from "react-native-safe-area-context"
import {useAppDispatch} from "../../utils/hooks_and_functions";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../const/GlobalStyles";
import React from "react";
import {Header} from "./components/Header";

export const TasksScreen = () => {

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