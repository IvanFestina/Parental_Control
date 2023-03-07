import {useAppDispatch, useAppSelector} from "../../../utils/hooks_and_functions";
import {StyleSheet, Text, View} from "react-native";
import {COLORS, specificStyles} from "../../../const/GlobalStyles";
import {SPACING, WIDTH} from "../../../const/Layout";
import React, {useState} from "react";
import {Button} from "../../1-auth/components/Button";
import {RadioButton} from "./UI/RadioButton";
import {Task} from "./UI/Task";
import {WhiteContainer} from "./UI/WhiteContainer";

const options = [
    {title: 'Сегодня'},
    {title: 'Вчера'},
    {title: 'Неделя'},
];

export const Plan = () => {


    const [userOption, setUserOption] = useState('Сегодня');
    const dispatch = useAppDispatch()
    const tasks = useAppSelector(state => state.learningProcess.tasksData)

    return (
        <WhiteContainer>
            <Text style={specificStyles.semiBoldText}>План</Text>
            {/* B U T T O N S */}
            <View style={s.buttonsRow}>
                {options.map(o => <RadioButton key={o.title} buttonTitle={o.title}
                                               selectedTitle={userOption}
                                               onSelect={() => setUserOption(o.title)}/>
                )}
            </View>
            <View style={s.listOfPlans}>
                {
                    tasks.map(t => {
                        return <Task key={t.id} title={t.title} id={t.id}
                                     isChecked={t.isChecked}/>
                    })
                }
            </View>
        </WhiteContainer>

    )
}

const s = StyleSheet.create({
    buttonsRow: {
        flexDirection: 'row',
        gap: SPACING / 2,
        marginTop: SPACING,
    },
    listOfPlans: {
        marginTop: SPACING,
        gap: 5,
    },

})