import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';

import imgBgHeader from '../../assets/bg.png';

import img2 from '../../assets/ImgBgOfe-2.png';
import img3 from '../../assets/ImgBgOfe-1.png';
import img4 from '../../assets/ImgBgOfe.png';
import { Ofertas } from '../../components/Ofertas';
import { AreaEmp } from '../../components/AreaEmp';
import { Background } from '../../components/Background'
import { BtnDrawer } from '../../components/BtnDrawer';
import { BtnShare } from '../../components/BtnShare';
import { styles } from './styles';

export function Home() {
  // const { signOut } = useContext(AuthContext);
  // const [user, setUser] = useState([]);

  // useEffect(() =>{
  //   async function loadList(){
  //     await firebase.database().ref('users')
  //     .orderByChild('date').on('value', (snapshot)=>{
  //       setUser([]);

  //       snapshot.forEach((childItem) =>{
  //         let list ={
  //           key: childItem.key,
  //           name: childItem.val().name,
  //           email: childItem.val().email,
  //           dateN: childItem.val().dateN,
  //           image: childItem.val().image
  //         };

  //         setUser(oldArray => [...oldArray, list]. reverse());
  //       })
  //     })
  //     }
  //     loadList();
  // },[]);  
  // function handleDelete(data){
  //   Alert.alert(
  //     'Cuidado Atenção!',
  //     `Você deseja excluir ${data.name}`,
  //     [
  //       {
  //         text: 'Cancelar',
  //         style: 'cancel'
  //     },
  //     {
  //       text: 'Continuar',
  //       onPress: () => handleDeleteSuccess(data)
  //     }
  //   ]
  //   )
  // }
  // async function handleDeleteSuccess(data){
  //   await firebase.database().ref('users')
  //   .child(data.key).remove()
  // }

  const [ceveja, setCeveja] = useState([
    {key: '1', title: "[Novo] Pilsen Premium", desc: "Mas pensa num trem bão...", valor: "12,99"},
    {key: '1', title: "[Novo] Pilsen Premium", desc: "Mas pensa num trem bão...", valor: "12,99"},
    {key: '2', title: "[Novo] Pilsen Premium", desc: "Mas pensa num trem bão...", valor: "12,99"},
    {key: '3', title: "[Novo] Pilsen Premium", desc: "Mas pensa num trem bão...", valor: "12,99"},
    {key: '4', title: "[Novo] Pilsen Premium", desc: "Mas pensa num trem bão...", valor: "12,99"},
  ]);


  return (
    <Background>
      <View style={styles.container}>
        <View>
          <Image
            source={imgBgHeader}
            style={styles.imgBgHeader}
          />
          <BtnDrawer/>
          <View style={styles.areaShare}>
            <BtnShare/>
          </View>
        </View>
        <View>
          <AreaEmp title={"Rabit - Cerveja Artesanais"}/>
        </View>
        <View>
          <Text style={styles.title}>
            Ofertas
          </Text>
          <FlatList
            data={ceveja}
            style={styles.matches}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={ item => item.key}
            renderItem={({ item }) => (
              <Ofertas data={item}/> 
            )}
          />  
        </View>
      </View>
    </Background>
  );
}