import {StyleSheet, Text, View} from "react-native";
import {SPACING} from "../../../../const/Layout";
import {COLORS, globalStyles, specificStyles} from "../../../../const/GlobalStyles";
import Ionicons from 'react-native-vector-icons/Ionicons';


type TaskPlanPropsType = {
    title: string
    id: string
    isChecked: boolean
}

export const Task = ({title, isChecked}: TaskPlanPropsType) => {

    const iconColor = isChecked ? COLORS.mainContrast : COLORS.mainBackground
    const greyIcon = {backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.mainBackground}
    return (
        <View style={[s.container, !isChecked && greyIcon]}>
            <Text style={s.title}>{title}</Text>
            {isChecked ? <Ionicons style={{borderWidth: 0}} name={'ios-checkmark-circle'} size={30}
                                   color={iconColor}/>
                : <View style={s.grayCircle}></View>
            }
        </View>
    )
}

export const s = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: SPACING,
        borderRadius: 8,
        backgroundColor: COLORS.lilac
    },
    title: {
        ...specificStyles.taskText
    },
    grayCircle: {
        marginRight: 3,
        marginVertical: 3,
        width: 25,
        height: 25,
        borderRadius: 15,
        backgroundColor: COLORS.mainBackground,
    }
})