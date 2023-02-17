import {
    NavigationProp,
    NavigatorScreenParams,
    useNavigation
} from "@react-navigation/native";

export type RootStackParamList = {
    Greetings: undefined
    Login: undefined // мы ничего здесь не прокидываем в объект
    Registration: undefined
    TabNavigator: NavigatorScreenParams<RootTabParamList>
}

export type RootTabParamList = {
    Home: undefined
    Tasks: undefined
    Statistics: undefined
    Apps: undefined
    Other: undefined

}

// export type OrderDetailsPropsType = NativeStackScreenProps<RootStackParamList, 'OrderDetails'> //мы передаем ему тип объект, в первый параметр, а во второй параметр мы передаем то поле, которое нам нунжно.



export  type NavigationUseType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<NavigationUseType>()