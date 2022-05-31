import React from 'react';
import {
  View,
  TextInput,
  Keyboard,
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function AreaOpine({...rest}) {
  return (
    <View style={styles.areaOp}>
      <View style={styles.txtArea}>
        <TextInput
          editable
          maxLength={140}
          autoCorrect={false}
          autoCapitalize="none"             
          placeholder="Escreva sua opnião aqui..."
          onSubmitEditing={ () => Keyboard.dismiss()}
          placeholderTextColor={theme.colors.secundary}
          style={styles.inputTxt}
          {...rest}
        />
      </View>
    </View>
  );
}