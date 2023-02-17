import {useAppDispatch} from "../../../utils/hooks_and_functions";
import {StyleSheet, Text, View} from "react-native";
import {COLORS, rareStyles} from "../../../const/GlobalStyles";
import {SPACING, WIDTH} from "../../../const/Layout";
import React from "react";
import {Button} from "../../1-auth/components/Button";

export const Plan = () => {

    const dispatch = useAppDispatch()

    return (
        <View style={s.container}>
            <Text style={rareStyles.semiBoldText}>План</Text>
            {/*BATONS*/}
            <View style={s.buttonsRow}>
                <Button title={"Сегодня"} />
                <Button title={"Вчера"} />
                <Button title={"Неделя"} />
            </View>
        </View>

    )
}

const s = StyleSheet.create({
    container: {
        padding: SPACING,
        borderRadius: 15,
        backgroundColor: COLORS.white
    },
    buttonsRow: {
        flexDirection: 'row',
        gap: SPACING,

    },

})