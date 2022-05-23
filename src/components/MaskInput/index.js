import { MaskedTextInput } from "react-native-mask-text";
import React from 'react';
import { styles } from './styles';

export function MaskInput({...rest}) {
  return (
    <MaskedTextInput
    placeholderTextColor="#CCDE3F"
    mask="(99)99999-9999"
    {...rest}
    style={styles.input}
    />
  );
}