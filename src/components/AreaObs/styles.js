import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    areaObs: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    titleObs: {
        height: 28,
        flexDirection: 'row',
    },
    question: {
        width: '76%',
        marginHorizontal: 4,
        fontFamily: theme.fonts.title,
        color: theme.colors.secundaryMais,
        fontSize: 16,
    },
    countCarac: {
        fontFamily: theme.fonts.title,
        color: theme.colors.secundaryMais,
        fontSize: 16,
    },
    txtArea: {
        height: 90,
        borderRadius: 8,
        backgroundColor: theme.colors.secundaryMais,
    },
    inputTxt: {
        padding: 10,
        color: theme.colors.light,
    },
});