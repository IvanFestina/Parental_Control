import {StyleSheet, Text, TextInput, View} from "react-native";
import {COLORS, rareStyles} from "../../const/GlobalStyles";
import {useController} from "react-hook-form";
import MailSVG from "../../../assets/icons/mail";
import {SPACING, WIDTH} from "../../const/Layout";
import PasswordSVG from "../../../assets/icons/password";

type InputPropsType = {
    name: string
    label: string
    control: any
    errors: any
    placeholder: string
}

export const InputForm = ({
                              name,
                              control,
                              errors,
                              label,
                              placeholder,
                              ...inputProps
                          }: InputPropsType) => {

    const {field} = useController({
        control,
        defaultValue: '',
        name
    })


    const returnSvgIcon = (name: string) => {
        switch (name) {
            case 'email':
                return <MailSVG/>
            case 'password':
            case 'repeatPassword':
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
                    {label && <Text style={rareStyles.label}>{label}</Text>}
                    <TextInput autoCorrect={false}
                               cursorColor={COLORS.mainBlack}
                               style={s.input}
                               value={field.value}
                               keyboardType={name === 'email' ? 'email-address' : 'default'}
                               secureTextEntry={name === 'password'}
                               onChangeText={field.onChange}
                               placeholder={placeholder}
                               placeholderTextColor={COLORS.textGrey}
                    {...inputProps}/>
                    {/*{errors[name] && <Text>{errors[name].message}</Text>}*/}
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
        ...rareStyles.inputText,
        padding: 0,
        margin: 0,
        color: COLORS.mainBlack,
        textDecorationLine: 'none'

    }
})