import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "../../typesNavigation";
import {HomeScreen} from "./1-HomeScreen";
import {TasksScreen} from "./2-TasksScreen";
import {StatisticsScreen} from "./3-StatisticsScreen";
import {AppsScreen} from "./4-AppsScreen";
import {OtherScreen} from "./5-OtherScreen";
import {COLORS, rareStyles} from "../../const/GlobalStyles";
import Stats from "../../../assets/icons/Stats.svg";
import Apps from "../../../assets/icons/Apps.svg";
import Other from "../../../assets/icons/Other.svg";
import Tasks from "../../../assets/icons/Tasks.svg"
import {StyleSheet} from "react-native";
import {CustomTabBarButton} from "./components/CustomTabBarButton";


export const TabNavigator = () => {

    const Tab = createBottomTabNavigator<RootTabParamList>();

    return (
        <Tab.Navigator initialRouteName={'Home'} screenOptions={{
            headerShown: false,
            tabBarLabelStyle: rareStyles.tabTitle,
            tabBarStyle: s.tabBarStyle,
        }}>

            <Tab.Screen name={'Tasks'} component={TasksScreen}
                        options={{
                            tabBarLabel: 'Задания',
                            tabBarIcon: ({focused}) => <Tasks width={20} height={20}
                                                              fill={focused ? COLORS.secContrast : COLORS.iconBlack}/>
                        }}/>
            <Tab.Screen name={'Statistics'} component={StatisticsScreen}
                        options={{
                            tabBarLabel: 'Статистика',
                            tabBarIcon: ({focused}) => <Stats width={20} height={20}
                                                              fill={focused ? COLORS.secContrast : COLORS.iconBlack}/>
                        }}/>
            <Tab.Screen name={'Home'} component={HomeScreen}
                        options={{
                            tabBarLabel: '',
                            tabBarIcon: ({focused}) => <CustomTabBarButton
                                focused={focused}/>
                        }}/>
            <Tab.Screen name={'Apps'} component={AppsScreen}
                        options={{
                            tabBarLabel: 'Приложения',
                            tabBarIcon: ({focused}) => <Apps width={20} height={20}
                                                             fill={focused ? COLORS.secContrast : COLORS.iconBlack}/>
                        }}/>
            <Tab.Screen name={'Other'} component={OtherScreen}
                        options={{
                            tabBarLabel: 'Другое',
                            tabBarIcon: ({focused}) => <Other width={20} height={20}
                                                              fill={focused ? COLORS.secContrast : COLORS.iconBlack}/>
                        }}/>
        </Tab.Navigator>
    )
}

export const s = StyleSheet.create({
    tabBarStyle: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 65,
        paddingHorizontal: 5,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderTopWidth: 0,
    }
})