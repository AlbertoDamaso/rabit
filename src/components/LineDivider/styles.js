import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    lineDivider: {
        width: '90%',
        height: 1,
        alignSelf: 'center',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.secundaryMenos,
    },
})
