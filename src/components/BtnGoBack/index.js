import React from 'react';
import {
  TouchableOpacity as TO
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function BtnGoBack() {
  const navigation = useNavigation();

  return (
    <TO 
      onPress={ () => navigation.goBack() }
      style={styles.bgBtn}
    >
      <Feather
        name="arrow-left"
        size={26}
        color={theme.colors.primary}
      />
    </TO>
  );
}