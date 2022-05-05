import React from 'react';
import {
  TouchableOpacity as TO
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function BtnLike() {
  return (
    <TO style={styles.bgBtn}>
      <Feather
        name="heart"
        size={24}
        color={theme.colors.primary}
      />
    </TO>
  );
}