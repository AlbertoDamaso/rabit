import React from 'react';
import { View, Text, Image } from 'react-native';

import logo from '../../assets/Logo.png';

import { styles } from './styles';

export function AreaEmp({title}) {
  return (
    <View style={styles.container}>
        <View style={styles.formatLogo}>
          <Image
            source={logo}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>
            {title}
        </Text>
    </View>
  );
}