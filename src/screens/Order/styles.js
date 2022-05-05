import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    width: '40%',
    height: 30,
    marginTop: 130,
    marginHorizontal: 20,
    fontFamily: theme.fonts.title,
    color: theme.colors.light,
    fontSize: 19,
  }
});