import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';


export default function Register() {
    const navigation = useNavigation();
    const [nationality, setNationality] = useState(
        ['Afegão', 'Sul-africano', 'Albanês', 'Alemão', 'Andorrano', 'Angolano', 'Antiguano', 'Saudita', 'Argelino', 'Brasileiro', 'Estadunidense']
    )
    
    const [selectedNationality, setSelectedNationality] = useState([])

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

                <Text style={styles.Name}>Nome</Text>
                <TextInput 
                placeholder='Digite seu nome completo'
                style={styles.input}
                />

                <Text style={styles.Phone}>Telefone</Text>
                <TextInput 
                placeholder='Digite seu telefone'
                style={styles.input}
                />


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


                <Text style={styles.Nation}>Nacionalidade</Text>
                <Picker 
                selectedValue={selectedNationality}
                style={styles.Picker} 
                onValueChange={(itemValue) => 
                setSelectedNationality(itemValue)}>

                    {
                        nationality.map(n => {
                            return <Picker.Item label={n} value={n}/>
                        })
                    }
                    

                </Picker>

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Cadastrar</Text>
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

    Name:{
        marginTop: '10%',
        fontSize: 15,
    },

    Phone:{
        marginTop: '10%',
        fontSize: 15,
    },

    Email:{
        marginTop: '10%',
        fontSize: 15,
    },

    Password:{
        marginTop: '10%',
        fontSize: 15,
    },

    Nation:{
        marginTop: '5%',
        fontSize: 15,
        height: 40,
        
    },

    Picker:{
        borderWidth: 1
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