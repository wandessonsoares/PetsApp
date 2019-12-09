import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Inicial extends Component {
    static navigationOptions = {
        header: null
    };

    render() {

        return (
            <View style={styles.body}>
                <ImageBackground source={require('../img/background.jpg')} style={{width: '100%', height: '100%'}}>
                    <Image
                        source={require('../img/dog_icon.png')}
                        style={styles.imagem}
                    />
                    <Text style={styles.petsapp}>PetsApp</Text>
                    <TouchableOpacity
                        style={styles.login}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.textLogin}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text  style={styles.conta}>Ainda não possui conta?</Text>
                    <TouchableOpacity
                        style={styles.cadastrar}>
                        <Text style={styles.textCadastrar}>CADASTRAR</Text>
                    </TouchableOpacity>
                </ImageBackground>
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
        marginTop: 50,
        marginLeft: 155
    },
    login: {
        width: '70%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 550,
        marginLeft: 65,
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#454040'
    },
    textLogin: {
        fontSize: 23,
        textAlign: 'center',
        color: '#454040'
    },
    conta: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.Black,
        marginTop: 135,
        color: '#454040'
    },
    cadastrar: {
        width: '70%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 460,
        marginLeft: 65,
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#454040'
    },
    textCadastrar: {
        fontSize: 23,
        textAlign: 'center',
        color: 'white'
    }
});