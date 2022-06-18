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
    color: theme.colors.light,
    fontFamily: theme.fonts.title,
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
  },
  text: {
    color: theme.colors.primaryMais,
    fontFamily: theme.fonts.text,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 25,
  },
  lineDivider: {
      borderBottomWidth: 2,
      borderColor: theme.colors.secundary,
      marginBottom: 25,
  }
});