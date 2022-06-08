import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
} from 'react-native';
import firebase from '../../services/firebaseConnection';

import { Background } from '../../components/Background';
import { BtnDrawer } from '../../components/BtnDrawer';
import { ListReserv } from '../../components/ListReserv';

import { styles } from './styles';
import { AuthContext } from '../../contexts/auth';

export function Order() {
  const [reservado, setReservado] = useState([]);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(()=>{
    async function loadList(){

      await firebase.database().ref('reserva')
      .child(uid)
      .limitToLast(10)
      .on('value', (snapshot)=>{
        setReservado([]);

        snapshot.forEach((childItem) => {
          let list = {
            keyBeer: childItem.val().keyBeer,
            image: childItem.val().image,
            title: childItem.val().title,
            quant: childItem.val().quant,
          };
          
          setReservado(oldArray => [...oldArray, list].reverse());
        })
      })

    }

    loadList();
  }, []);

  return (
    <Background>
        <View style={styles.container}>
          <BtnDrawer/>

          <Text style={styles.title}>
              Reservados
          </Text>

          <ListReserv
            data={reservado}
            showsVerticalScrollIndicator={false}
          />
        </View>
    </Background>  
  );
}