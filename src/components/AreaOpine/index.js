import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function AreaOpine() {
  return (
    <View style={styles.areaOp}>
      <View style={styles.txtArea}>
        <TextInput
          editable
          maxLength={140}
          placeholder="Escreva sua opnião aqui..."
          placeholderTextColor={theme.colors.secundary}
          style={styles.inputTxt}
        />
      </View>
    </View>
  );
}