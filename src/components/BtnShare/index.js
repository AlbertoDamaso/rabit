import React from 'react';
import {
  TouchableOpacity as TO
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function BtnShare() {
  return (
    <TO style={styles.bgBtn}>
      <Feather
        name="share"
        size={24}
        color={theme.colors.primary}
      />
    </TO>
  );
}