import {useAppNavigation} from "../../typesNavigation";
import {useAppDispatch, useAppSelector} from "../../utils/hooks_and_functions";
import {SafeAreaView} from "react-native-safe-area-context";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import {Button} from "../../components/ui/Button";
import {COLORS, globalStyles} from "../../const/GlobalStyles";
import {BASE_WIDTH, HEIGHT, WIDTH} from "../../const/Layout";
import {Input} from "../../components/ui/Input";
import {SubmitHandler, useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    name: z.string().min(3, { message: 'Required' }),
    password: z.string().min(6),
});

type LoginFormType = {
    name: string
    password: string
}

export const LoginScreen = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormType>({
        resolver: zodResolver(schema),
    });



    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(state => state.app.isLoading)

    const onSubmit: SubmitHandler<LoginFormType> = (data) => {
        console.log(data);
    };


    return (
        <SafeAreaView style={s.container}>
            <View style={s.backButton}></View>
            <StatusBar backgroundColor={COLORS.mainContrast} />
            <View style={s.overContainer}>
                <Text>Войти</Text>
                <form onSubmit={handleSubmit((d) => console.log(d))}>
                <Input value={} onChange={} />
                <Input value={} onChange={} />
                </form>
                <Text>Забыли пароль</Text>
            </View>
            <View>
                <Button title={'Войти'}  onPress={handleSubmit(onSubmit)}/>
                <Text>У меня еще нет аккаунта зарегистрироваться</Text>
            </View>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    backButton: {},
    overContainer: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: HEIGHT / 1.2,
        width: WIDTH,
        backgroundColor: COLORS.white
    }
})
