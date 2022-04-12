import React from 'react';

import {
  TouchableOpacity,
  Text
} from 'react-native';

import { styles } from './styles';

export function Button({ title, ...rest}) {
  return (
    <TouchableOpacity
      style={styles.click}
      {...rest}
    >
      <Text style={styles.text}>
        { title }
      </Text>
    </TouchableOpacity>
  );
}