import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../const/GlobalStyles";
import {useAppNavigation} from "../../typesNavigation";
import {useAppDispatch, useAppSelector} from "../../utils/hooks_and_functions";
import {HEIGHT, WIDTH} from "../../const/Layout";
import {Input} from "../../components/ui/Input";
import {Button} from "../../components/ui/Button";

export const RegistrationScreen = () => {

    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(state => state.app.isLoading)
    const handleSubmit = () => {

    }

    return(
        <SafeAreaView style={s.container}>
            <View style={s.backButton}></View>
            <StatusBar backgroundColor={COLORS.mainContrast} />
            <View style={s.overContainer}>
                <Text>Войти</Text>
                <Input value={} onChange={} />
                <Input value={} onChange={} />
                <Text>Забыли пароль</Text>
            </View>
            <View>
                <Button title={} />
                <Text>У меня еще нет аккаунта зарегистрироваться</Text>
            </View>

        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    overContainer: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: HEIGHT / 1.2,
        width: WIDTH,
        backgroundColor: COLORS.white
    }
})