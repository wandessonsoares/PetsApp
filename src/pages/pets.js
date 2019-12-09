import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import api from '../services/api';

export default class Pets extends Component {
    static navigationOptions = {
        title: 'Lista de Pets',
    };

    state = {
        pets: [],
    }
 
    async componentDidMount(){
        const response = await api.get('/pets');
        const pets = response.data;
        this.setState({ pets });
    }

    render() {

        return (
            <View style={styles.body}>
                
                { this.state.pets.map(pet => (
                    <View key={pet._id} style={styles.info}>
                        <Image
                            source={require('../img/dog_icon.png')}
                            style={styles.imagem}
                        />
                        <View style={styles.textos}>
                            <Text style={styles.nome}>NOME: {pet.name}</Text>
                            <Text style={styles.raca}>RAÇA: {pet.raca}</Text>
                        </View>
                    </View>
                ))}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#a6a6a6',
    },
    imagem: {
        width: 100,
        height: 100
    },
    info: {
        borderWidth: 1,
        borderColor: '#454040',
        width: '90%',
        margin: 10,
        borderRadius: 20,
        height: 100,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ededed"
    },
    textos: {
        borderLeftWidth: 1,
        borderColor: '#454040',
        marginLeft: 5
    },
    nome: {
        fontSize: 18,
        marginLeft: 10,
        marginTop: 20,
        borderBottomColor: '#454040',
        borderBottomWidth: 1,
        paddingBottom: 10,
        width: 230
    },
    raca: {
        fontSize: 18,
        marginLeft: 10,
        marginTop: 5
    }
});