import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text, Dimensions, FlatList, TextInput, Animated, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

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
        width: '100%',
        height: 350,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        display: 'flex',
        justifyContent: 'space-between',
        padding:20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#aaaaaa'
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

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
            allowsMultipleSelection: true,
            base64: false,
        });


        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    return (
        <>
            <StatusBar style="dark" />
            <View style={{ height: Constants.statusBarHeight, width: '100%' }}></View>
            <View style={styles.container}>
                <View style={styles.imageWrapper}>

                    <Pressable style={{ width: '100%', height: 200, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <FontAwesome name="photo" size={100} color="#aaaaaa" />
                        <Text style={{ padding: 10, fontSize: 14 }}>Toque na camera abaixo, precisamos de pelo menos 3 fotos do seu veiculo</Text>
                    </Pressable>
                    <View style={{ width: '100%', height: 100, alignItems: 'flex-start', justifyContent: 'center', display: 'flex', flexDirection:'row'}}>
                        <Pressable style={{width:'33.3%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                            <FontAwesome name="camera" size={50} color="#aaaaaa"/>
                            <FontAwesome name="plus" size={35} color="blue" style={{ position: 'absolute', top:19, right:15 }} />
                        </Pressable>
                        <Pressable style={{width:'33.3%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                            <FontAwesome name="camera" size={50} color="#aaaaaa"/>
                            <FontAwesome name="plus" size={35} color="blue" style={{ position: 'absolute', top:19, right:15 }} />
                        </Pressable>
                        <Pressable style={{width:'33.3%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                            <FontAwesome name="camera" size={50} color="#aaaaaa"/>
                            <FontAwesome name="plus" size={35} color="blue" style={{ position: 'absolute', top:19, right:15 }} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        style={[defaultStyles.inputText, { fontSize: 20, padding: 10, borderColor: '#aaaaaa', borderWidth: 1 }]}
                        placeholder='Modelo do Carro'
                    />
                    <TextInput
                        style={[defaultStyles.inputText, { fontSize: 20, marginTop: 10, padding: 10, borderColor: '#aaaaaa', borderWidth: 1 }]}
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
                        style={[defaultStyles.inputText, { borderColor: '#aaaaaa', borderWidth: 1, fontSize: 20, marginTop: 10, justifyContent: 'center' }]}
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
                        style={[defaultStyles.inputText, { borderColor: '#aaaaaa', borderWidth: 1, fontSize: 20, marginTop: 10, justifyContent: 'center' }]}
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

