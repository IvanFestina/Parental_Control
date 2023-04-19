import {StatusBar, StyleSheet} from "react-native";
import {COLORS} from "../../../../const/GlobalStyles";
import Home from "../../../../../assets/icons/lock.svg";
import Animated from "react-native-reanimated";
import {SafeAreaView} from "react-native-safe-area-context";

export const CustomTabBarButton = ({focused}: { focused: boolean }) => {

    const homeButtonVariation = (focused: boolean) => {

        return (
            <SafeAreaView style={s.circleContainer}>
                <StatusBar barStyle={"dark-content"}/>
            <Animated.View style={[s.circle, focused && {backgroundColor: COLORS.secContrast}]}>
                <Home width={30} height={30} fill={COLORS.white}/>
            </Animated.View>
            </SafeAreaView>
        )
    }

    return (
        homeButtonVariation(focused)
    )
}

export const s = StyleSheet.create({
    circleContainer: {
        position: "absolute",
        bottom: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        backgroundColor: COLORS.mainBackground,
        borderRadius: 35,
        zIndex: 0
    },
    circle: {
        position: "absolute",
        bottom: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        backgroundColor: COLORS.mainContrast,
        borderRadius: 30,
        zIndex: 10
    }
})