import React from 'react';
import {
  FlatList
} from 'react-native';

import { LineDivider } from '../LineDivider';
import { Oferta2 } from '../Oferta2';
import { styles } from './styles';

export function ListOfertas2({ data, ...rest }) {
  return (
    <FlatList
      data={data}
      style={styles.matches}
      ListHeaderComponent={() => <LineDivider/>}
      ItemSeparatorComponent={() => <LineDivider/>}
      keyExtractor={ item => item.key}
      renderItem={({ item }) => (
        <Oferta2 data={item}/> 
      )}
      {...rest}
    />  
  );
}