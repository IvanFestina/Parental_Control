import {StyleSheet, TextInput, View} from "react-native";
import {COLORS, specificStyles} from "../../../const/GlobalStyles";
import {SPACING, WIDTH} from "../../../const/Layout";
import Ionicons from "react-native-vector-icons/Ionicons";

type InputPropsType = {
    onChangeText: (value: string) => void
    value: string
}

export const InputSearch = ({
                              
                              value,
                              onChangeText,
                              ...inputProps
                          }: InputPropsType) => {
    

    return (
        <View style={s.container}>
            {/*Icon*/}
            <View style={s.iconContainer}>
                <Ionicons name={'search'} size={30}/>
            </View>
            {/*Input*/}
                <TextInput autoCorrect={false}
                           cursorColor={COLORS.mainBlack}
                           style={s.input}
                           value={value}
                           onChangeText={onChangeText}
                           placeholder={'Найти'}
                           placeholderTextColor={COLORS.textGrey}
                           {...inputProps}/>
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
    input: {
        width: WIDTH / 1.5,
        ...specificStyles.semiBoldText,
        padding: 0,
        margin: 0,
        color: COLORS.mainBlack,
        textDecorationLine: 'none'
    },
    error: {

    }
})