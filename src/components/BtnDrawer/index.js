import React from 'react';
import {
  TouchableOpacity as TO
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function BtnDrawer() {
  return (
    <TO style={styles.bgBtn}>
      <FontAwesome
        name="align-justify"
        size={24}
        color={theme.colors.primary}
      />
    </TO>
  );
}