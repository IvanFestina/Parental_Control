import React from 'react';
import {Pressable, View, StyleSheet, Text} from "react-native";
import {COLORS, globalStyles, modelStyles} from "../../const/GlobalStyles";

type ButtonPropsType = {
    title: string
    onPress?: () => void
    style?: any
    disabled?: boolean
    isLoading?: boolean
    outline?: boolean
}

export const Button = ({
                           title,
                           onPress,
                           disabled,
                           outline,
                           style,
                           isLoading,
                           ...props
                       }: ButtonPropsType) => {

    // кнопка с анимацией загрузки (AnimatedLoader), которая меняет вертикальный паддинг (паддинг делает кнопку больше), если кнопка disabled - кнопка серая, если outline - кнопка белая с обводкой нужного цвета

    return (
        <Pressable
            style={({pressed}) => [s.buttonContainer, pressed && globalStyles.pressed, style, outline && {
                borderColor: COLORS.secContrast,
                borderWidth: 1,
                backgroundColor: COLORS.white,
            }, disabled && {backgroundColor: COLORS.textGrey, borderColor: COLORS.white}]}
            onPress={onPress} disabled={disabled}
        >
            {
                isLoading ?
                    <Text>Loading</Text>
                    :
                    <Text
                        style={[s.buttonText, outline && {color: COLORS.secContrast}, disabled && {color: COLORS.white}, style]}>
                        {title}
                    </Text>
            }
        </Pressable>
    );
};

const s = StyleSheet.create({
    buttonContainer: {
        backgroundColor: COLORS.secContrast,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        elevation: 1,
    },
    buttonText: {
        ...modelStyles.authButtonText,
    }

})