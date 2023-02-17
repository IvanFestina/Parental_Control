import {StyleSheet, Text, TextInput, View} from "react-native";
import {COLORS, rareStyles} from "../../../const/GlobalStyles";
import {useController} from "react-hook-form";
import MailSVG from "../../../../assets/icons/mail";
import {SPACING, WIDTH} from "../../../const/Layout";
import PasswordSVG from "../../../../assets/icons/password";

type InputPropsType = {
    name: string
    onChangeText: (...event: any[]) => void
    label: string
    value: string
    errors: any
    placeholder: string
    onBlur: () => void
}

export const InputForm = ({
                              name,
                              errors,
                              label,
                              value,
                              placeholder,
                              onChangeText,
                              ...inputProps
                          }: InputPropsType) => {


    const returnSvgIcon = (name: string) => {
        switch (name) {
            case 'email':
                return <MailSVG/>
            case 'password':
            case 'passwordRepeat':
                return <PasswordSVG/>
            default:
                return
        }
    }

    return (
        <View style={s.container}>
            {/*Icon*/}
            <View style={s.iconContainer}>
                {returnSvgIcon(name)}
            </View>
            {/*Label / Input*/}
            <View style={s.label_input}>
                {label && <Text style={rareStyles.labelGrey}>{label}</Text>}
                <TextInput autoCorrect={false}
                           cursorColor={COLORS.mainBlack}
                           style={s.input}
                           value={value}
                           keyboardType={name === 'email' ? 'email-address' : 'default'}
                           secureTextEntry={name === 'password'}
                           onChangeText={onChangeText}
                           placeholder={placeholder}
                           placeholderTextColor={COLORS.textGrey}
                           {...inputProps}/>
                {errors[name] && <Text style={s.error}>{errors[name].message}</Text>}
            </View>

        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.inputGrey,
        alignItems: 'center',
        borderRadius: SPACING / 2
    },
    iconContainer: {
        padding: SPACING / 2
    },
    label_input: {paddingVertical: 15,},
    input: {
        width: WIDTH / 1.5,
        ...rareStyles.semiBoldText,
        padding: 0,
        margin: 0,
        color: COLORS.mainBlack,
        textDecorationLine: 'none'
    },
    error: {

    }
})