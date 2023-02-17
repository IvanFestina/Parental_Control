import {useAppDispatch, useAppSelector} from "./utils/hooks_and_functions";
import {RootStackParamList} from "./typesNavigation";
import {View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RegistrationScreen} from "./screens/1-auth/RegistrationScreen";
import {LoginScreen} from "./screens/1-auth/LoginScreen";
import {TabNavigator} from "./screens/2-mainScreens/TabNavigator";
import {COLORS} from "./const/GlobalStyles";
import {WelcomeScreen} from "./screens/1-auth/WelcomeScreen";


export const MainNavigator = () => {


    const {appIsReady, appError, appMessage, appInfo} = useAppSelector(state => state.app)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch();
    const Stack = createNativeStackNavigator<RootStackParamList>();


    return (
        <View style={{flex: 1}}>
            <Stack.Navigator>
                {isLoggedIn ? (
                    // Screens for logged-in users
                    <Stack.Group screenOptions={{
                        contentStyle: {
                            backgroundColor: COLORS.mainBackground
                        },
                    }}>
                        <Stack.Screen name='TabNavigator'
                                      options={{
                                          headerShown: false,
                                          animation: 'slide_from_right',
                                      }}
                                      component={TabNavigator}
                        />
                    </Stack.Group>
                ) : (
                    // Auth screens
                    <Stack.Group
                        screenOptions={{
                            headerShown: false, contentStyle: {
                                backgroundColor: COLORS.mainContrast
                            }
                        }}>
                        <Stack.Screen name={'Greetings'} component={WelcomeScreen}
                                      options={{animation: "slide_from_right"}}
                        />
                        <Stack.Screen name='Login' component={LoginScreen}
                                      options={{animation: "slide_from_right"}}
                        />
                        <Stack.Screen name="Registration"
                                      options={{animation: "slide_from_right"}}
                                      component={RegistrationScreen}/>
                    </Stack.Group>
                )}
                {/*Modal screens*/}
            </Stack.Navigator>
        </View>
    )
}