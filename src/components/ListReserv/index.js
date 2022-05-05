import React from 'react';
import {
  FlatList
} from 'react-native';

import { LineDivider } from '../LineDivider';
import { Reserv } from '../Reserv';
import { styles } from './styles';

export function ListReserv({ data, ...rest }) {
  return (
    <FlatList
      data={data}
      style={styles.matches}
      ItemSeparatorComponent={() => <LineDivider/>}
      keyExtractor={ item => item.key}
      renderItem={({ item }) => (
        <Reserv data={item}/> 
      )}
      {...rest}
    />  
  );
}