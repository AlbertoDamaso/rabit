import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 25,
    marginHorizontal: 20,
  },
  title: {
    color: theme.colors.dark,
    fontFamily: theme.fonts.title,
    fontSize: 18,
    marginTop: 15
  },
  text: {
    color: theme.colors.secundary,
    fontFamily: theme.fonts.text,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 25,
  },
  lineDivider: {
      borderBottomWidth: 2,
      borderColor: "#ececec",
      marginBottom: 25,
  }
});