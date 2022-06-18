import React, { useContext } from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import {
  View,
  Text,
} from 'react-native';

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { AuthContext } from '../../contexts/auth';
import { ImgProfile } from '../ImgProfile';
import { styles } from './styles';

export function CustomDrawer(props) {
    const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
        <View style={styles.container}>
            <ImgProfile/>

            <Text style={styles.title}>
               {user && user.name}
            </Text>

        </View>

        <View style={styles.lineDivider} />

        <DrawerItemList {...props}/>
        
        <View style={styles.lineDivider} />
        <DrawerItem
            {...props}
            label="Sair"
            style={{marginHorizontal: 20, marginTop: -15}}
            labelStyle={{fontSize: 19, fontWeight: 'bold', color:"#f1f1f1", marginLeft: -25}}
            icon={() =>
              <FontAwesome5
                name="walking"
                size={24}
                color="#f1f1f1"
              />
            }
            onPress={ () => signOut() }
        />
    </DrawerContentScrollView>
  );
}