import {Image, StyleSheet, Text, View} from "react-native";
import {COLORS, globalStyles, specificStyles} from "../../../const/GlobalStyles";
import {SPACING} from "../../../const/Layout";
import {appItem} from "../../../bll/mainTypes";
import {msToMinutes} from "../../../utils/hooks_and_functions";
import React from "react";

type AppItemPropsType = {
    item: appItem
    index: number
}

export const AppItem = ({item, index}: AppItemPropsType) => {

    return <>
        <View style={s.container}>
            <View style={s.image_time}>
                {item.iconUri &&
                    <Image source={{uri: item.iconUri}} style={{width: 40, height: 40}}/>
                }
                <Text style={specificStyles.smallBlackText}>
                    {item.name}
                </Text>
            </View>
            {/*Time used*/}
            <Text style={specificStyles.smallGreyText}>
                {msToMinutes(+item.timeUsed)}
            </Text>
        </View>
    </>
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingVertical: SPACING,
    },
    image_time: {
        flexDirection: 'row',
        gap: SPACING,
        justifyContent: "space-between",
        alignItems: 'center',
    }
})