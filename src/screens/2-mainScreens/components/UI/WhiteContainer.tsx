import {StyleSheet, View} from "react-native";
import {COLORS} from "../../../../const/GlobalStyles";
import {SPACING} from "../../../../const/Layout";
import {ReactNode} from "react";

type WhiteContainerPropsType = {
    children: ReactNode
    style?: any
}

export const WhiteContainer = ({children, style}: WhiteContainerPropsType) => {

    return (
        <View style={[s.container, style]}>
            {children}
        </View>

    )
}

const s = StyleSheet.create({
    container: {
        padding: SPACING,
        borderRadius: 15,
        backgroundColor: COLORS.white
    },
})