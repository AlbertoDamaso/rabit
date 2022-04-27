import React, { useState, createContext } from 'react';
import firebase from '../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const navigation = useNavigation();
    const [user, setUser] = useState(null)

    //Funcao para logar o usuario
    async function signIn(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value) =>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email,
                };
                setUser(data);
            })
        })
        .catch((error) => {
            alert(error.code);
        })
    }

    //Cadastrar usuario
    async function signUp(email, password, nome, zap){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value) =>{
            alert('Usuario criado: ' + value.user.email);//DEBUG
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({                
                nome: nome,
                zap: zap,
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    zap: zap,
                };
                setUser(data);
            })
        })
        .catch( (error) => {
            if(error.code === 'auth/weak-password'){
                alert('Sua senha deve ter pelo menos 6 caracteres');
                return;
            }
            if(error.code === 'auth/invalid-email'){
                alert('Email invalido');
                return;
            }else{
                alert('Ops algo deu errado!');
                return;
            }      
        })
    }

    async function signOut(){
        await firebase.auth().signOut();
        setUser(null);
        navigation.navigate('SignUp');
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;