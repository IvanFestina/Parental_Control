import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {COLORS, globalStyles, modelStyles} from "../../const/GlobalStyles";
import {useAppNavigation} from "../../typesNavigation";
import {useAppDispatch, useAppSelector} from "../../utils/hooks_and_functions";
import {HEIGHT, SPACING, WIDTH} from "../../const/Layout";
import {Button} from "../../components/ui/Button";

export const WelcomeScreen = () => {

    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(state => state.app.isLoading)
    const onButtonParentHandle = () => {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={s.container}>
            <StatusBar backgroundColor={COLORS.mainContrast}/>
            <View style={s.overContainer}>
                <View style={s.contentContainer}>
                    {/*GreetingsText*/}
                    <View style={s.textBlock}>
                        <Text style={modelStyles.titleAuth}>Здравствуйте</Text>
                        <Text style={s.question}>Кто будет пользоваться этим телефоном?</Text>
                    </View>
                    {/*Buttons*/}
                    <View style={s.buttonsBlock}>
                        <Button title={'Родитель'} onPress={onButtonParentHandle}
                                style={{fontFamily: 'Inter500'}}/>
                        <Button title={'Ребенок'} onPress={onButtonParentHandle}
                                style={{fontFamily: 'Inter500'}}/>
                    </View>
                </View>

            </View>

        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    overContainer: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: HEIGHT / 1.8,
        width: WIDTH,
        backgroundColor: COLORS.white,
        justifyContent: 'center'
    },
    contentContainer: {
        paddingHorizontal: SPACING,
        gap: SPACING * 2
    },
    textBlock: {
        alignSelf: 'center',
        width: WIDTH / 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        gap: SPACING
    },
    question: {
        ...globalStyles.textMedium,
        color: COLORS.textGrey,
        textAlign: 'center'
    },
    buttonsBlock: {
        gap: SPACING
    },
})