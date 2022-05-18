import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
            <View style={styles.containerImg}>
                <Animatable.Image
                animation={"flipInY"}
                source={require('../../assets/michael.png')}
                style={styles.containerImg}
                resizeMode="contain"
                />
            </View>
            </View>


            

            <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
                <Text style={styles.Email}>E-mail</Text>
                <TextInput 
                placeholder='Digite seu e-mail'
                style={styles.input}
                />

                <Text style={styles.Password}>Senha</Text>
                <TextInput
                secureTextEntry={true} 
                placeholder='Digite sua senha'
                style={styles.input}
                />

                <TouchableOpacity style={styles.button}
                onPress={ () => navigation.navigate('Profile')}
                >
                <Text style={styles.buttonText}>Logar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} 
                onPress={ () => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se!</Text>
                </TouchableOpacity>


            </Animatable.View>


        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#00ced1',

        
    },

    containerHeader:{
        alignItems:'center',
        justifyContent:'center',
        height: '10%'
  
    },

    containerImg:{
        width: 150, 
        height: 150,
        borderRadius: 200/ 2,
        marginTop: '10%'
    
    },

    containerForm:{
       flex:1,
       backgroundColor: '#ffffff',
       marginTop:'20%',
       borderTopLeftRadius: 25,
       borderTopRightRadius: 25,
       paddingStart: '5%'

    },

    Email:{
        marginTop: '10%',
        fontSize: 20,
    },

    Password:{
        marginTop: '10%',
        fontSize: 20,
    },
    
    buttonRegister:{
        marginTop: '10%'
    },

    input:{
        borderBottomWidth: 1,
        height: 40,
        marginRight: 25
        
    },

    button:{
        backgroundColor: '#00ced1',
        borderRadius: 10,
        paddingVertical: 8,
        width: '94%',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    buttonRegister:{
        marginTop: 14,
        alignSelf:'center',
    },

    registerText:{
        color: '#a1a1a1',
        marginRight: 15
    }
})