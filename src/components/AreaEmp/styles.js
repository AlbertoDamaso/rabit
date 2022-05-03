import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    marginTop: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  formatLogo: {
    width: 66,
    height: 66,
    borderRadius: 45,
    backgroundColor: theme.colors.dark,
    marginHorizontal: 20,
  },
  logo:{
    width: 67,
    height: 67,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 45,
  },
  title: {
    fontSize: 19,
    fontFamily: theme.fonts.title,
    color: theme.colors.light,
  }
});