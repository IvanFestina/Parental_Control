import React from 'react';
import {StatusBar, StyleSheet,} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {store} from "./src/bll/store";
import {MainNavigator} from "./src/MainNavigator";

function App() {


    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                        <StatusBar barStyle={"light-content"}/>
                        <MainNavigator/>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
}

const s = StyleSheet.create({

});

export default App;
