import React from 'react';
import {
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