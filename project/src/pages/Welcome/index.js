import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

 import * as Animatable from 'react-native-animatable'

 import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                animation={"flipInY"}
                source={require('../../assets/logo2.png')}
                style={{width: '100%'}}
                resizeMode="contain"
                />
            </View>

        <Animatable.View delay={600} animation={"fadeInUp"} style={styles.containerForm}>
            <Text style={styles.title}>Automação inteligente de pagamentos!</Text>
            <Text style={styles.text}>Faça login para começar</Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('SignIn')}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

        </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffffff'
    },

    containerLogo:{
        flex:2,
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    containerForm:{
        flex:1,
        backgroundColor: '#00ced1',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    title:{
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 12,
        color:'#ffffff'
    },

    text:{
        color:'#ffffff',
        fontSize: 15,
    },

    button:{
        backgroundColor: '#ffffff',
        position: 'absolute',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom:'15%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText:{
        color: '#00ced1',
        fontSize: 18,
        fontWeight: 'bold',
    }

})