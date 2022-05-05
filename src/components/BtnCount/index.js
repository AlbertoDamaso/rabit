import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity as TO
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function BtnCount() {
    const [count, setCount] = useState(1);

    function minus(){
        if(count > 0){
            setCount(count-1)
        }
    }
    function plus(){
        setCount(count+1)
    }


  return (
    <View style={styles.btnCount}>
        <TO 
            onPress={minus}
            style={styles.minus}
        >
            <AntDesign
                name="minus"
                size={24}
                color={theme.colors.secundaryMenos}
            />
        </TO>

        <Text style={styles.count}>
            {count}
        </Text>

        <TO
            onPress={plus}
            style={styles.plus}
        >
            <AntDesign
                name="plus"
                size={24}
                color={theme.colors.primary}
            />
        </TO>
    </View>
  );
}