import React, { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  View,
  Text,
  Image
} from 'react-native';

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

// import { AuthContext } from '../../contexts/auth';
import { ImgProfile } from '../ImgProfile';
import { styles } from './styles';

export function CustomDrawer(props) {
    // const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
        <View style={styles.container}>
            <ImgProfile/>

            <Text style={styles.title}>
               Alberto
            </Text>
            <Text style={styles.text}>
               356tarefas
            </Text>
        </View>

        <View style={styles.lineDivider} />

        <DrawerItemList {...props}/>

        <DrawerItem
            {...props}
            label="Sair"
            style={{marginHorizontal: 20}}
            labelStyle={{fontSize: 18, fontWeight: 'bold', color:"#222", marginLeft: -25}}
            icon={() =>
              <AntDesign
                name="logout"
                size={24}
                color="#222"
              />
            }
            // onPress={ () => signOut() }
        />
    </DrawerContentScrollView>
  );
}