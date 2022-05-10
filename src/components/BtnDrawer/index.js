import React from 'react';
import {
  TouchableOpacity as TO
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function BtnDrawer() {
  const navigation = useNavigation();

  return (
    <TO 
      onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }
      style={styles.bgBtn}
    >
      <FontAwesome
        name="align-justify"
        size={24}
        color={theme.colors.primary}
      />
    </TO>
  );
}