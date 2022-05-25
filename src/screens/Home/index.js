import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  SafeAreaView
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import imgBgHeader from '../../assets/bg.png';
import { AreaEmp } from '../../components/AreaEmp';
import { Background } from '../../components/Background';
import { BtnDrawer } from '../../components/BtnDrawer';
import { BtnShare } from '../../components/BtnShare';
import { ListOfertas } from '../../components/ListOfertas';
import { ListOfertas2 } from '../../components/ListOfertas2';
import { styles } from './styles';

export function Home() {
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
    {key: '1', image:"https://i.ibb.co/xmqzfxX/Img-Bg-Ofe-3.png", title: "[Novo] Pilsen Premium", desc: "Mas pensa num trem bão...", valor: "12,99"},
    {key: '2', image:"https://i.ibb.co/gvjtd9B/ImgBgOfe.png",title: "[Novo] Ipa", desc: "Precisa apenas de um gole", valor: "19,99"},
    {key: '3', image:"https://i.ibb.co/MsFQqts/Img-Bg-Ofe-1.png",title: "Pilsen Gold", desc: "Tome e nunca mais esqueça!", valor: "14,99"},
    {key: '4', image:"https://i.ibb.co/jHyHwLY/Img-Bg-Ofe-2.png",title: "Carioquinha", desc: "Ótima com salgadinhos", valor: "22,99"},
  ]);


  return (
    <Background>      
      <SafeAreaView style={styles.container}>
        {/*Se tiver mais de um ScrollView intale a biblioteca deste a baixo*/}
        <ScrollView>
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

            <ListOfertas
              data={ceveja}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            <ListOfertas2
              data={ceveja}
              showsVerticalScrollIndicator={false}
            />          
          </View>

        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}