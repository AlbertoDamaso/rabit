import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    areaOp: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    txtArea: {
        height: 100,
        borderRadius: 8,
        backgroundColor: theme.colors.secundaryMenos,
    },
    inputTxt: {
        padding: 10,
        color: theme.colors.light,
    },
});