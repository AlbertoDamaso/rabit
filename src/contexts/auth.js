import React, { useState, createContext } from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    //Funcao para logar o usuario
    async function signIn(email, password) {
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value) =>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data = {
                    uid: uid,
                    name: snapshot.val().name,
                    email: value.user.email,
                };
                setUser(data);
                setLoadingAuth(false);
            })
        })
        .catch((error) => {
            alert(error.code);
            setLoadingAuth(true);
        })
    }

    //Cadastrar usuario
    async function signUp(email, password, name, zap){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value) =>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({                
                name: name,
                zap: zap,
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email,
                    zap: zap,
                };
                setUser(data);
                setLoadingAuth(false);
            })
        })
        .catch( (error) => {
            if(error.code === 'auth/weak-password'){
                alert('Sua senha deve ter pelo menos 6 caracteres');
                setLoadingAuth(false);
                return;
            }
            if(error.code === 'auth/invalid-email'){
                alert('Email invalido');
                setLoadingAuth(false);
                return;
            }else{
                alert('Ops algo deu errado!');
                setLoadingAuth(false);
                return;
            }      
        })
    }

    //Sair
    async function signOut(){
        await firebase.auth().signOut();
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, loadingAuth, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;