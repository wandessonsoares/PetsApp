import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Pets extends Component {
    static navigationOptions = {
        header: null
    };

    render() {

        return (
            <View style={styles.body}>
                <Image
                    source={require('../img/dog_icon.png')}
                    style={styles.imagem}
                />
                <Text style={styles.petsapp}>Nome</Text>
                <Text style={styles.petsapp}>Raça</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center'
    },
    petsapp: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#454040'
    },
    imagem: {
        width: 100,
        height: 100,
        marginTop: 50
    },
    textUserName: {
        fontSize: 20,
        textAlign: 'center',
        color: '#454040',
        marginTop: 100,
        borderBottomWidth: 2,
        width: '80%'
    },
    conta: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.Black,
        marginTop: 135,
        color: '#454040'
    },
    login: {
        width: '70%',
        bottom: 0,
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#454040',
        marginTop: 50
    },
    textCadastrar: {
        color: 'white',
        fontSize: 20
    },
    textPassword: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        borderBottomWidth: 2,
        width: '80%',
        marginTop: 20
    },
    forgotPassword: {
        fontSize: 20,
        textAlign: 'center',
        color: '#454040',
        marginTop: 30
    },
    signin: {
        fontSize: 20,
        textAlign: 'center',
        color: '#454040',
        marginTop: 30
    }
});