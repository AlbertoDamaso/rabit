import React from 'react';
import {
  FlatList
} from 'react-native';

import { Oferta } from '../Oferta';
import { styles } from './styles';

export function ListOfertas({ data, ...rest }) {
  return (
    <FlatList
        data={data}
        style={styles.matches}
        keyExtractor={ item => item.key}
        renderItem={({ item }) => (
            <Oferta data={item}/> 
        )}
        {...rest}
    />  
  );
}