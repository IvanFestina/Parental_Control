import {SafeAreaView} from "react-native-safe-area-context"
import {useAppDispatch, useAppSelector} from "../../utils/hooks_and_functions";
import {FlatList, ListRenderItem, RefreshControl, StatusBar, StyleSheet, Text, View} from "react-native";
import {COLORS, globalStyles, specificStyles} from "../../const/GlobalStyles";
import {Header} from "./components/Header";
import React, {useState} from "react";
import {HEIGHT, SPACING} from "../../const/Layout";
import {WhiteContainer} from "./components/UI/WhiteContainer";
import {appItem} from "../../bll/mainTypes";
import {AppItem} from "./components/AppItem";
import {InputSearch} from "./components/InputSearch";

export const AppsScreen = () => {

    const [searchValue, setSearchValue] = useState('')

    const dispatch = useAppDispatch()

    const appUsage = [] as appItem[]
    const isLoading = useAppSelector(state => state.app.isLoading)

    const renderAppItem: ListRenderItem<appItem> = ({item, index, separators}) => {
        return (
            <AppItem item={item} index={index}/>
        )
    }
    const itemSeparator = () => {
        return (
            <View style={s.separator}></View>
        )
    }
    const listAppsHeaderComponent = () => {

        return (
            <View style={s.headerContainer}>
                <View>
                    <Text style={specificStyles.semiBoldText}>
                        Приложения
                    </Text>
                </View>
                <InputSearch value={searchValue} onChangeText={setSearchValue}/>
            </View>
        )
    }

    return (
        <SafeAreaView style={s.container}>
            <StatusBar backgroundColor={COLORS.mainBackground}/>
            <Header/>
            <WhiteContainer>
                <FlatList
                    data={appUsage}
                    renderItem={renderAppItem}
                    keyExtractor={item => item.iconUri + item.timeUsed}
                    ItemSeparatorComponent={itemSeparator}
                    // HEADER for Flatlist
                    ListHeaderComponent={listAppsHeaderComponent}
                    ListEmptyComponent={<View style={s.emptyContainer}><Text
                        style={globalStyles.textLarge}>Нет данных</Text></View>
                    }
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={() => {
                            }}
                        />
                    }

                />
            </WhiteContainer>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackground,
        paddingHorizontal: SPACING / 2,
        gap: SPACING / 2,
    },
    separator: {
        height: 1,
        backgroundColor: COLORS.mainBackground,
    },
    emptyContainer: {
        alignItems: "center",
        marginTop: HEIGHT / 3
    },
    headerContainer: {
      gap: SPACING
    },
})