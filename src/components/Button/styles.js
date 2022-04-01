import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  click: {
    alignSelf:'center',
    width: '80%',
    height: 45,
    borderWidth:1,    
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
  },
  text: {
    flex: 1,
    fontSize: 19,
    textAlign: "center",
    color: theme.colors.secundary,
    fontFamily: theme.fonts.text,
  },
});