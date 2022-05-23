import React, { useContext } from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';

import { AuthContext } from '../../contexts/auth';
import { styles } from './styles';

export function Button({ title, ...rest}) {

  const { loadingAuth } = useContext(AuthContext);

  return (
    <TouchableOpacity
      style={styles.click}
      {...rest}
    >
      {
        loadingAuth ? (
          <ActivityIndicator size={30} color="#000" />
        ) : (      
          <Text style={styles.text}>
            { title }
          </Text>
        )
      }
    </TouchableOpacity>
  );
}