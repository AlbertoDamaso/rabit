import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  formatLogo: {
    width: 67,
    height: 67,
    borderWidth: 1,
    borderRadius: 45,
    backgroundColor: theme.colors.dark,
  },
  logo:{
    width: 64,
    height: 64,
    borderWidth: 1,
    borderRadius: 45,
  },
  title: {
    fontSize: 19,
    fontFamily: theme.fonts.title,
    color: theme.colors.light,
  }
});