import {SafeAreaView} from "react-native-safe-area-context";
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    StatusBar,
    StyleSheet,
    Text, TouchableWithoutFeedback,
    View
} from "react-native";
import {COLORS, modelStyles} from "../../const/GlobalStyles";
import {useAppNavigation} from "../../typesNavigation";
import {useAppDispatch, useAppSelector} from "../../utils/hooks_and_functions";
import {HEIGHT, SPACING, WIDTH} from "../../const/Layout";
import {InputForm} from "./components/InputForm";
import {Button} from "./components/Button";
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {AnimatedBackButton} from "./components/AnimatedBackButton";
import {TextNavigation} from "./components/TextNavigation";

const schema = z.object({
    login: z.string().min(3, {message: 'Необходимо 3 и более символов'}).max(25, {message: 'Не больше 25 символов'}).email(),
    password: z.string().min(6, {message: 'Required'}),
    passwordRepeat: z.string().min(6, {message: 'Required'})

});

type RegistrationFormType = {
    email: string
    password: string
    passwordRepeat: string
}

export const RegistrationScreen = () => {

    const {
        control,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm<RegistrationFormType>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });

    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(state => state.app.isLoading)

    const onSubmit: SubmitHandler<RegistrationFormType> = (data) => {
        console.log(data);
        Alert.alert(JSON.stringify(data))
    };
    const toLoginHandle = () => {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={s.container}>
            <StatusBar backgroundColor={COLORS.mainContrast}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

                <View style={s.overContainer}>
                    <AnimatedBackButton/>
                    {/*Форма*/}
                    <KeyboardAvoidingView style={s.formBlock}>
                        <Text style={modelStyles.titleAuth}>Зарегистрироваться</Text>
                        <Controller name={'email'} control={control}
                                    render={
                                        ({field: {onChange, onBlur, value}}) => (
                                            <InputForm
                                                name={'email'}
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                                label={'Email'}
                                                errors={errors}
                                                placeholder={'Ваша почта'}
                                            />
                                        )
                                    }/>
                        <Controller name={'password'} control={control}
                                    render={
                                        ({field: {onChange, onBlur, value}}) => (
                                            <InputForm
                                                name={'password'}
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                                label={'Password'}
                                                errors={errors}
                                                placeholder={'Пароль'}
                                            />
                                        )
                                    }/>
                        <Controller name={'passwordRepeat'} control={control}
                                    render={
                                        ({field: {onChange, onBlur, value}}) => (
                                            <InputForm
                                                name={'passwordRepeat'}
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                                label={'Confirm Password'}
                                                errors={errors}
                                                placeholder={'Пароль'}
                                            />
                                        )
                                    }/>
                    </KeyboardAvoidingView>
                    <View style={s.submitBlock}>

                        <Button title={'Зарегистрироваться'}
                                onPress={handleSubmit(onSubmit)}/>

                        <View style={s.footerText}>
                            <Text
                                style={[modelStyles.greyAuthSmallText, {textAlign: 'center'}]}>
                                У меня уже есть
                            </Text>
                            <TextNavigation onPress={toLoginHandle}>
                                Аккаунт
                            </TextNavigation>

                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    overContainer: {
        justifyContent: 'space-evenly',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: HEIGHT / 1.15,
        width: WIDTH,
        backgroundColor: COLORS.white,
        zIndex: 100
    },
    formBlock: {
        paddingHorizontal: SPACING * 1.5,
        gap: SPACING * 2
    },
    submitBlock: {
        paddingHorizontal: SPACING,
        justifyContent: "center",
        alignItems: 'stretch',
        gap: SPACING * 1.5
    },
    footerText: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 5
    }
})