import {Pressable, StyleSheet, Text} from "react-native";
import {COLORS, globalStyles, modelStyles} from "../../../const/GlobalStyles";
import React, {Children} from "react";
import {BASE_HITSLOP} from "../../../const/Layout";

type TextNavigationPropsType = {
    style?: any
    children: React.ReactNode;
    onPress: () => void


}

export const TextNavigation = ({children, style, onPress}: TextNavigationPropsType) => {


    return (
        <Pressable onPress={onPress}
                   style={({pressed}) => [pressed && globalStyles.pressed, style]}
                   hitSlop={BASE_HITSLOP}>
            <Text style={[s.text]}>
                {children}
            </Text>
        </Pressable>
    )
}

export const s = StyleSheet.create({
    text: {
        ...modelStyles.navAuthSmallText,
    }
})