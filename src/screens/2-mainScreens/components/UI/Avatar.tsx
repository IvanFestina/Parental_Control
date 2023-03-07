import {StyleSheet, View} from "react-native";
import {COLORS} from "../../../../const/GlobalStyles";
import AvatarSample from '../../../../../assets/icons/smiling-face.svg'

export const Avatar = () => {

    return (
        <View style={s.circleContainer}>
            <View style={s.circle}>
                <AvatarSample width={30} height={30}/>
            </View>
        </View>

    )
}

export const s = StyleSheet.create({
    circleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 55,
        height: 55,
        backgroundColor: COLORS.mainBackground,
        borderRadius: 30,
        zIndex: 0
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
        backgroundColor: COLORS.mainContrast,
        borderRadius: 25,
        zIndex: 10
    }
})