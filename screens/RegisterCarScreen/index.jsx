import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text, Dimensions, FlatList, TextInput, Animated, Pressable } from 'react-native';
import Constants from 'expo-constants';

import defaultStyles from '../../global/styles/styles'

import MaskInput from 'react-native-mask-input';

import CarCard from '../../components/cards/searchCarCard.jsx';

import { Picker } from '@react-native-picker/picker';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#ececec',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        minHeight: 100
    },
    imageWrapper: {
        backgroundColor: 'red',
        width: '100%',
        height: 300,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    formContainer: {
        width: '100%',
        display: 'flex',
        padding: 10,
        minHeight: 100
    },
    inputStyle: {
        fontSize: 30
    }
}

export default function Screen() {

    const [phone, setPhone] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <>
            <StatusBar style="dark" />
            <View style={{ height: Constants.statusBarHeight, width: '100%' }}></View>
            <View style={styles.container}>
                <View style={styles.imageWrapper}></View>
                <Text style={{padding:10, fontSize:14}}>*Vamos comparar as informações com a foto do seu CRLV</Text>
                <View style={styles.formContainer}>
                    <TextInput
                        style={[defaultStyles.inputText, { fontSize: 20, padding: 10, borderColor: '#aaaaaa', borderWidth: 1 }]}
                        placeholder='Modelo do Carro'
                    />
                    <TextInput
                        style={[defaultStyles.inputText, { fontSize: 20, marginTop:10, padding: 10, borderColor: '#aaaaaa', borderWidth: 1 }]}
                        placeholder='Cor Predominante'
                    />
                    {/* <MaskInput
                        value={phone}
                        style={[defaultStyles.inputText, { fontSize: 20, padding: 10, marginTop: 10 }]}
                        onChangeText={(masked, unmasked) => {
                            setPhone(masked);
                        }}
                        mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    /> */}
                    <View
                        style={[defaultStyles.inputText, { fontSize: 20, marginTop: 10,justifyContent:'center' }]}
                    >
                        <Picker
                            
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item style={{ fontSize: 20 }} color="#8e8e8e" label="Espécie / Tipo" value="none" />
                            <Picker.Item style={{ fontSize: 20 }} label="Carro" value="car" />
                            <Picker.Item style={{ fontSize: 20 }} label="Motocicleta(Moto)" value="motocycle" />
                            <Picker.Item style={{ fontSize: 20 }} label="Van" value="van" />
                        </Picker>

                    </View>

                    <View
                        style={[defaultStyles.inputText, { fontSize: 20, marginTop: 10,justifyContent:'center' }]}
                        >
                        <Picker
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item style={{ fontSize: 20 }} color="#8e8e8e" label="Combustível" value="none" />
                            <Picker.Item style={{ fontSize: 20 }} label="Alcool" value="alcohol" />
                            <Picker.Item style={{ fontSize: 20 }} label="Gasolina" value="gas" />
                            <Picker.Item style={{ fontSize: 20 }} label="Alcool e Gasolina" value="alcoholAndGas" />
                        </Picker>
                    </View>
                </View>
            </View>
        </>
    )
}

