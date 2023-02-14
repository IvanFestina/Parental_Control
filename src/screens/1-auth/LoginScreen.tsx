import {useAppNavigation} from "../../typesNavigation";
import {useAppDispatch, useAppSelector} from "../../utils/hooks_and_functions";
import {SafeAreaView} from "react-native-safe-area-context";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Alert,
    KeyboardAvoidingView, Pressable, Keyboard, TouchableWithoutFeedback
} from "react-native";
import {Button} from "../../components/ui/Button";
import {COLORS, globalStyles, modelStyles} from "../../const/GlobalStyles";
import {BASE_WIDTH, HEIGHT, SPACING, WIDTH} from "../../const/Layout";
import {InputForm} from "../../components/ui/InputForm";
import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {TextNavigation} from "../../components/ui/TextNavigation";
import ArrowBackSvg from "../../../assets/icons/ArrowBackSvg";
import {AnimatedBackButton} from "../../components/AnimatedBackButton";

const schema = z.object({
    login: z.string().min(3, {message: 'Необходимо 3 и более символов'}).max(25, {message: 'Не больше 25 символов'}).email(),
    password: z.string().min(6, {message: 'Required'})
});

type LoginFormType = {
    email: string
    password: string
}

export const LoginScreen = () => {

    const {
        control,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm<LoginFormType>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });


    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(state => state.app.isLoading)

    const onSubmit: SubmitHandler<LoginFormType> = (data) => {
        Alert.alert(JSON.stringify(data))
        console.log(data);
        navigation.navigate('TabNavigator', {screen: 'Home'})
    };

    const toRegistrationHandle = () => {
        navigation.navigate('Registration')
    }

    return (

        <SafeAreaView style={s.container}>

            <StatusBar backgroundColor={COLORS.mainContrast}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

                <View style={s.overContainer}>
                    <AnimatedBackButton/>
                    {/*Форма*/}
                    <KeyboardAvoidingView style={s.formBlock}>
                        <Text style={modelStyles.titleAuth}>Войти</Text>

                        <InputForm name={'email'} control={control} label={'Email'}
                                   errors={errors} placeholder={'Ваша почта'}/>
                        <InputForm name={'password'} control={control} label={'Password'}
                                   errors={errors} placeholder={'Пароль'}/>
                        <TextNavigation style={{alignSelf: 'flex-end'}} onPress={() => {
                        }}>
                            Забыли пароль
                        </TextNavigation>
                    </KeyboardAvoidingView>
                    {/*Кнопка*/}
                    <View style={s.submitBlock}>

                        <Button title={'Войти'}
                                onPress={handleSubmit(onSubmit)}/>

                        <View style={{alignItems: 'center', justifyContent: 'center',}}>
                            <Text style={modelStyles.greyAuthSmallText}>
                                У меня еще нет
                                аккаунта
                                <TextNavigation onPress={toRegistrationHandle}>
                                    Зарегистрироваться
                                </TextNavigation>
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </SafeAreaView>

    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        zIndex: 110

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
    title: {
        ...globalStyles.textHuge,
        color: COLORS.mainBlack
    },
    formBlock: {
        paddingHorizontal: SPACING * 1.5,
        gap: SPACING * 2
    },
    forgotPassword: {
        alignSelf: 'flex-end'
    },
    submitBlock: {
        paddingHorizontal: SPACING,
        justifyContent: "center",
        alignItems: 'stretch'
    },
})
