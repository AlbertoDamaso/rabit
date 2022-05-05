import React, { useState } from 'react';

import {
  View,
  Text,
} from 'react-native';
import { Background } from '../../components/Background';
import { BtnDrawer } from '../../components/BtnDrawer';
import { ListReserv } from '../../components/ListReserv';

import { styles } from './styles';

export function Order() {

    const [ceveja, setCeveja] = useState([
        {key: '1', title: "[Novo] Pilsen Premium", reserv: "2 reservadas", retir: "2 retiradas"},
        {key: '2', title: "[Novo] Ipa", reserv: "6 reservadas", retir: "1 retiradas"},
        {key: '3', title: "Pilsen Gold", reserv: "12 reservadas", retir: "6 retiradas"},
        {key: '4', title: "Carioquinha", reserv: "2 reservadas", retir: ""},
    ]);

  return (
    <Background>
        <View style={styles.container}>
            <BtnDrawer/>

            <Text style={styles.title}>
                Reservados
            </Text>

            <ListReserv
                data={ceveja}
                showsVerticalScrollIndicator={false}
            />
        </View>
    </Background>  
  );
}