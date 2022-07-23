import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text, TextInput, Animated, Pressable, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import BackButton from '../../components/buttons/BackButton';

import defaultStyles from '../../global/styles/styles'

import MaskInput from 'react-native-mask-input';

import CarCard from '../../components/cards/searchCarCard.jsx';

import { Picker } from '@react-native-picker/picker';

const borderColor = "#6288EB"

const styles = {
    container: {
        flex: 1,
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
        padding: 20,
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
    },
    photoPressable: { width: '33.3%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', elevation: 1 }
}

export default function Screen({navigation}) {

    const [phone, setPhone] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [images, setImages] = useState([]);
    const [updateImage, setupdateImage] = useState("");
    const [currentImage, setCurrentImage] = useState("");
    const [carObj, setCarObj] = useState({});


    useEffect(() => {
        var array = images;
        if (updateImage != "") {
            array.push(updateImage);
            setImages(array)
        }
        setupdateImage("")
    }, [updateImage])


    const pickImage = async () => {

        if (images.length < 3) {
            let result = await ImagePicker.launchCameraAsync();

            if (!result.cancelled) {
                setupdateImage(result.uri);
                setCurrentImage(result.uri);
            }
        }
    };

    const formatDisponibility = (disponibility) => {

        if (disponibility == "month") return "meses"

        return "dias"
    }

    return (
        <>
            <StatusBar style="dark" />
            <View style={{ height: Constants.statusBarHeight, width: '100%' }}></View>
            <View style={[styles.imageWrapper,{ borderColor:borderColor}]}>
            <BackButton navigator={navigation} color={'black'} topPosition={10}/>

                {currentImage == "" ?

                    <View style={{ width: '100%', height: 200, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <FontAwesome name="photo" size={100} color="#aaaaaa" />
                        <Text style={{ padding: 10, fontSize: 14 }}>Toque na camera abaixo, precisamos de pelo menos 3 fotos do seu veiculo</Text>
                    </View>
                    :
                    <Image
                        style={{ width: '100%', height: 200, alignItems: 'center', justifyContent: 'center', display: 'flex', borderWidth: 4, borderColor:borderColor }}
                        source={{ uri: currentImage }}
                    />
                }
                <View style={{ width: '100%', height: 100, alignItems: 'flex-start', justifyContent: 'flex-start', display: 'flex', flexDirection: 'row' }}>

                    {images.map((e, i) => {
                        var style = { width: '95%', height: '95%' }
                        if (currentImage == e) {
                            style = { ...style, borderWidth: 2, borderColor: '#6288EB' }
                        }
                        return (

                            <Pressable key={i} style={styles.photoPressable} onPress={() => setCurrentImage(e)} >
                                <Image
                                    style={style}
                                    source={{ uri: e }}
                                />
                            </Pressable>

                        )


                        // 

                    })}

                    {
                        images.length < 3 ?
                            <Pressable style={styles.photoPressable} onPress={pickImage}>
                                <FontAwesome name="camera" size={50} color="#C4C4C4" />
                                <FontAwesome name="plus" size={35} color="#6288EB" style={{ position: 'absolute', top: 19, right: 15 }} />
                            </Pressable>
                            :
                            <></>
                    }


                </View>
            </View>
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.formContainer}>
                        <Text style={{ fontSize: 20, marginBottom: 10 }}>Register car form:</Text>
                        <TextInput
                            style={[defaultStyles.inputText, { fontSize: 15, padding: 10, borderColor: borderColor, borderWidth: 1 }]}
                            placeholder='Modelo do Carro'
                        />
                        <TextInput
                            style={[defaultStyles.inputText, { fontSize: 15, marginTop: 10, padding: 10, borderColor: borderColor, borderWidth: 1 }]}
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
                            style={[defaultStyles.inputText, { borderColor: borderColor, borderWidth: 1, fontSize: 20, marginTop: 10, justifyContent: 'center' }]}
                        >
                            <Picker

                                selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedLanguage(itemValue)
                                }>
                                <Picker.Item style={{ fontSize: 15 }} color="#8e8e8e" label="Espécie / Tipo" value="none" />
                                <Picker.Item style={{ fontSize: 15 }} label="Carro" value="car" />
                                <Picker.Item style={{ fontSize: 15 }} label="Motocicleta(Moto)" value="motocycle" />
                                <Picker.Item style={{ fontSize: 15 }} label="Van" value="van" />
                            </Picker>

                        </View>

                        <View
                            style={[defaultStyles.inputText, { borderColor: borderColor, borderWidth: 1, fontSize: 20, marginTop: 10, justifyContent: 'center' }]}
                        >
                            <Picker
                                selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedLanguage(itemValue)
                                }>
                                <Picker.Item style={{ fontSize: 15 }} color="#8e8e8e" label="Combustível" value="none" />
                                <Picker.Item style={{ fontSize: 15 }} label="Alcool" value="alcohol" />
                                <Picker.Item style={{ fontSize: 15 }} label="Gasolina" value="gas" />
                                <Picker.Item style={{ fontSize: 15 }} label="Alcool e Gasolina" value="alcoholAndGas" />
                            </Picker>
                        </View>
                        <View style={{ width: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text>
                                Uso para trabalho ou passeio?
                            </Text>
                            <View
                                style={{ width: '35%', justifyContent: 'center'}}
                            >
                                <Picker
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedLanguage(itemValue)
                                    }>
                                    <Picker.Item style={{ fontSize: 15 }} label="Passeio" value="tour" />
                                    <Picker.Item style={{ fontSize: 15 }} label="Trabalho" value="job" />
                                    <Picker.Item style={{ fontSize: 15 }} label="Ambos" value="both" />
                                </Picker>
                            </View>
                        </View>
                        <View style={{ width: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text>
                                Qual é a disponibilidade do aluguel?
                            </Text>
                            <View
                                style={{ width: '35%', justifyContent: 'center' }}
                            >
                                <Picker
                                    selectedValue={carObj.disponibility}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setCarObj({ ...carObj, disponibility: itemValue })
                                    }>
                                    <Picker.Item style={{ fontSize: 15 }} label="Meses" value="month" />
                                    <Picker.Item style={{ fontSize: 15 }} label="Dias" value="Day" />
                                    <Picker.Item style={{ fontSize: 15 }} label="Inderteminado" value="undetermined" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <Pressable onPress={() => { console.log("Avançar") }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', alignSelf: 'flex-end' }}>
                <View style={{}}>
                    <Text style={{ fontSize: 18, marginRight: 10 }}>Avançar</Text>
                </View>
                <FontAwesome name="chevron-right" size={30} color="#6288EB" />
            </Pressable>
        </>
    )
}

