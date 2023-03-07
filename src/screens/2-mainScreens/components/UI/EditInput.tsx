import {Pressable, TextInput, View} from "react-native";
import {useState} from "react";
import Pen from '../../../../../assets/icons/Pen.svg'
import {globalStyles} from "../../../../const/GlobalStyles";

export const EditInput = () => {

    const [editMode, setEditMode] = useState<boolean>(false)

    return (
        <View>
            {editMode
                ?
                <TextInput value={'10'}/>
                :
                <Pressable onPress={() => setEditMode(editMode!)} style={({pressed}) => [pressed && globalStyles.pressed]}>
                    <Pen width={25} height={25} color={"#333"}/>
                </Pressable>
            }
        </View>
    )
}

