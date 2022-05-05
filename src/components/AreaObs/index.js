import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function AreaObs() {
  return (
    <View style={styles.areaObs}>
        <View style={styles.titleObs}>
        <Feather
            name="file-text"
            size={24}
            color={theme.colors.secundaryMais}
        />

        <Text style={styles.question}>
            Alguma observação?
        </Text>

        <Text style={styles.countCarac}>
            0/140
        </Text>
        </View>

        <View style={styles.txtArea}>
            <TextInput
                editable
                maxLength={140}
                placeholder="Ex.: Retirada no local, as 14h."
                placeholderTextColor={theme.colors.secundary}
                style={styles.inputTxt}
            />
        </View>
    </View>
  );
}