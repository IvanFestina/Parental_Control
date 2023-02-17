import {useAppNavigation} from "../../../typesNavigation";
import {Pressable, StyleSheet, View} from "react-native";
import {COLORS, globalStyles} from "../../../const/GlobalStyles";
import ArrowBackSvg from "../../../../assets/icons/ArrowBackSvg";
import {BASE_HITSLOP, SPACING} from "../../../const/Layout";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from "react-native-reanimated";

export const AnimatedBackButton = () => {

    const navigation = useAppNavigation()
    const scale = useSharedValue(1)

    const animStyle = useAnimatedStyle(() => {
        return {
            transform: [{scale: scale.value}]
        };
    })

    const handlePressIn = () => {
        scale.value = withSpring(1.2, { damping: 1 });
    };

    const handlePressOut = () => {
        scale.value = withSpring(1, { damping: 1 });
    };

    const onPressHandle = () => {
        navigation.goBack()
    }

    return (
        <Pressable onPress={onPressHandle} onPressIn={handlePressIn} hitSlop={BASE_HITSLOP}
                   onPressOut={handlePressOut} style={s.backButtonContainer}>
            <Animated.View style={[s.backButton, animStyle]}>
                <ArrowBackSvg/>
            </Animated.View>
        </Pressable>
    )
}

const s = StyleSheet.create({

    backButtonContainer: {
        position: 'absolute',
        alignSelf: 'flex-start',
        top: -25,
        left: SPACING * 1.5,
        zIndex: 999,

    },
    backButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
})