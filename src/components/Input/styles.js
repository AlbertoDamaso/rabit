import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  input: {
    alignSelf:'center',
    paddingHorizontal: 15,
    width: '80%',
    height: 45,
    backgroundColor: theme.colors.secundaryMenos,
    color: theme.colors.dark,
    borderRadius: 5,
    fontFamily: theme.fonts.text,
    fontSize: 19,
    marginRight: 4,
    borderWidth: 1,
    borderColor: theme.colors.secundaryMenos,
    marginBottom: 20,
  }
});