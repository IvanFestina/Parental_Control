import {StyleSheet, Text, View} from "react-native";
import {COLORS, specificStyles} from "../../../const/GlobalStyles";
import React from "react";
import {WhiteContainer} from "./UI/WhiteContainer";
import {SPACING} from "../../../const/Layout";


export const AvailableAndSpentTime = () => {

    const topBorder = {
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    }

    let childName = 'Константин'
    let availableTime = '2 часа 0 мин'
    let spentTime
    let earnedTime = '+ 60 мин'

    return (
        <View style={s.envelopingContainer}>
            <View style={s.contrastContainer}>
                <Text style={specificStyles.smallWhiteText}>
                    {childName} заработал
                </Text>
                <Text style={specificStyles.semiBoldWhiteText}>{earnedTime}</Text>
            </View>
            <WhiteContainer style={topBorder}>
                <View style={s.availableTime}>
                    <View style={s.availableTimeText}>
                        <Text style={specificStyles.smallBlackText}>
                            Доступно на день
                        </Text>
                        <Text style={specificStyles.smallBlackText}>
                            {availableTime}
                        </Text>
                    </View>
                    <View style={s.progressLine}>

                    </View>
                </View>
                <View style={s.spentTime}>

                </View>
            </WhiteContainer>
        </View>
    )
}

const s = StyleSheet.create({
    envelopingContainer: {},
    contrastContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: SPACING,
        backgroundColor: COLORS.mainContrast,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    availableTime: {},
    progressLine: {},
    availableTimeText: {},
    spentTime: {},

})