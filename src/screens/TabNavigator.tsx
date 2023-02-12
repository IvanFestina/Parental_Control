import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "../typesNavigation";
import {HomeScreen} from "./3-homeworks/HomeworkScreen";
import {HomeworkScreen} from "./2- home/HomeScreen";
import {StatisticsScreen} from "./4-statistics/StatisticsScreen";
import {AppsScreen} from "./5-apps/AppsScreen";
import {OtherScreen} from "./6-other/OtherScreen";
import {COLORS} from "../const/GlobalStyles";


export const TabNavigator = () => {

    const Tab = createBottomTabNavigator<RootTabParamList>();

    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: COLORS.secContrast,
            tabBarStyle: {
                height: 90,
                paddingHorizontal: 5,
                paddingTop: 0,
                backgroundColor: 'rgba(34,36,40,1)',
                position: 'absolute',
                borderTopWidth: 0,
            },
        }}>
            <Tab.Screen name={'Home'} component={HomeScreen}/>
            <Tab.Screen name={'Homework'} component={HomeworkScreen}/>
            <Tab.Screen name={'Statistics'} component={StatisticsScreen}/>
            <Tab.Screen name={'Apps'} component={AppsScreen}/>
            <Tab.Screen name={'Other'} component={OtherScreen}/>
        </Tab.Navigator>
    )
}