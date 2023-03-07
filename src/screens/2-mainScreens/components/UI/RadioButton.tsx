import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {COLORS, globalStyles, modelStyles} from "../../../../const/GlobalStyles";

type RadioButtonPropsType = {
    buttonTitle: string
    onSelect: () => void
    selectedTitle: string
}
//data will be our array of user options.
//onSelect will be a handler function that will run if the user makes a selection
export const RadioButton = ({
                                buttonTitle,
                                onSelect,
                                selectedTitle
                            }: RadioButtonPropsType) => {

    const selected = buttonTitle === selectedTitle ? true : false

    return (
        <Pressable
            style={({pressed}) => [s.buttonContainer, pressed && globalStyles.pressed, selected && {
                borderColor: COLORS.secContrast,
                borderWidth: 1,
                backgroundColor: COLORS.secContrast,
            },]}
            onPress={onSelect}
        >

            <Text
                style={[s.buttonText, selected && {color: COLORS.white}]}>
                {buttonTitle}
            </Text>

        </Pressable>
    );
}

const s = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        elevation: 1,
        borderWidth: 1,
        borderColor: COLORS.secContrast,
    },
    buttonText: {
        ...modelStyles.greyAuthSmallText,
        color: COLORS.secContrast
    },
})