import React from 'react';
import {
  View,
  Image
} from 'react-native';

import logo from '../../assets/icon.png'

export function Logo() {
  return (
    <Image
        source={logo}
        resizeMode="stretch"
    />
  );
}