import {StyleSheet} from "react-native";

export const COLORS = {
    white: '#fff',
    lightGray: '#F0F2F5',
    mainContrast: '#A93FEA',
    lilac: '#F7ECFD',
    secContrast: '#FF9900',
    brightRed: '#B61426',
    textGrey: '#8F9092',
    inputGrey: '#F3F5F7',
    textBlue: '#4C6C91',
    mainBlue: '#3378FE',
    mainBlack: '#1B1B1B',
    iconBlack: '#1E1E1E',
    mainBackground: '#F5F5F5'
}

export const rareStyles = StyleSheet.create({
    tabTitle: {
        fontFamily: 'Inter400',
        fontSize: 10,
        lineHeight: 12,
        color: COLORS.mainBlack
    },
    labelGrey: {
        fontFamily: 'Inter400',
        fontSize: 14,
        lineHeight: 17,
        color: COLORS.textGrey
    },
    smallButtonText: {
        fontFamily: 'Inter400',
        fontSize: 14,
        lineHeight: 17,
        color: COLORS.white
    },
    childName: {
        fontFamily: 'Inter400',
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.mainBlack
    },
    semiBoldText: {
        fontFamily: 'Inter600',
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.mainBlack
    },
})

export const modelStyles = StyleSheet.create({
    titleAuth: {
        fontFamily: 'Inter600',
        fontSize: 24,
        lineHeight: 29,
        color: COLORS.mainBlack
    },
    greyAuthSmallText: {
        fontFamily: 'Inter400',
        fontSize: 14,
        lineHeight: 17,
        color: COLORS.textGrey
    },
    navAuthSmallText: {
        fontFamily: 'Inter600',
        fontSize: 14,
        lineHeight: 17,
        color: COLORS.mainContrast
    },
    authButtonText: {
        fontFamily: 'Inter600',
        fontSize: 16,
        lineHeight: 21,
        color: COLORS.white,
        textAlign: 'center'
    }
})

export const globalStyles = StyleSheet.create({
    pressed: {
        opacity: 0.6,
    },
    textExtraSmall: {
        fontFamily: 'Inter100',
        fontSize: 12,
        lineHeight: 16
    },
    textSmall: {
        fontFamily: 'Inter200',
        fontSize: 14,
        lineHeight: 20
    },
    textMedium: {
        fontFamily: 'Inter300',
        fontSize: 16,
        lineHeight: 24
    },
    textLarge: {
        fontFamily: 'Inter400',
        fontSize: 18,
        lineHeight: 28
    },
    textExtraLarge: {
        fontFamily: 'Inter500',
        fontSize: 20,
        lineHeight: 32
    },
    textHuge: {
        fontFamily: 'Inter600',
        fontSize: 24,
        lineHeight: 36,
        color: COLORS.mainBlack
    },
    textExtraHuge: {
        fontFamily: 'Inter700',
        fontSize: 26,
        lineHeight: 40
    },
    textMonster: {
        fontFamily: 'Inter800',
        fontSize: 28,
        lineHeight: 44
    },
    textGiant: {
        fontFamily: 'Inter900',
        fontSize: 28,
        lineHeight: 48
    }

})