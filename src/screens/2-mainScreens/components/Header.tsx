import {useAppDispatch} from "../../../utils/hooks_and_functions";
import {StyleSheet, Text, View} from "react-native";
import {COLORS, rareStyles} from "../../../const/GlobalStyles";
import {SPACING} from "../../../const/Layout";
import React from "react";
import {Avatar} from "./Avatar";
import {EditInput} from "./EditInput";

export const Header = () => {

    const dispatch = useAppDispatch()

    return (
        <View style={s.header}>
            <View style={s.avatar_name_container}>
                {/*Avatar*/}
                <Avatar/>
                {/*Name*/}
                <View style={{marginRight: 50}}>
                    <Text style={rareStyles.childName}>Константин</Text>
                </View>
            </View>
            {/*EditButton*/}
            <View style={{flex: 4, alignItems: 'flex-end'}}>
                <EditInput/>
            </View>
        </View>

    )
}

const s = StyleSheet.create({
    header: {
        paddingHorizontal: SPACING / 2,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    avatar_name_container: {
        flex: 6,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
    },
})