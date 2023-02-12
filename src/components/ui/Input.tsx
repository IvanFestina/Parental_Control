import {StyleSheet, TextInput} from "react-native";
import {COLORS} from "../../const/GlobalStyles";

type InputPropsType = {
    value: string
    onChange: (value: string) => void
}

export const Input = ({value, onChange}: InputPropsType) => {

    return (
        <TextInput value={value} onChangeText={onChange} style={s.input}/>
    )
}

const s = StyleSheet.create({
    input: {
        height: 50,
        padding: 10,
        fontSize: 24,
        lineHeight: 32,
        color: COLORS.mainBlack,
    }
})