import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text, Dimensions, FlatList, TextInput, Animated, Pressable } from 'react-native';

import defaultStyles from '../../global/styles/styles'

import MaskInput from 'react-native-mask-input';

import CarCard from '../../components/cards/searchCarCard.jsx';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#ececec',
        alignItems: 'center',
        minHeight: Dimensions.get('window').height,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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
        display:'flex',
        padding:10
    },
    inputStyle:{
        fontSize:30
    }
}

export default function Screen() {

    const [phone, setPhone] = useState('');

    return (
        <>
            <StatusBar style="dark" />
            <View style={{ height: 40, width: '100%' }}></View>
            <View style={styles.container}>
                <View style={styles.imageWrapper}></View>
                <View style={styles.formContainer}>
                    <TextInput
                    style={[defaultStyles.inputText, {fontSize:20, padding:10, borderColor:'#aaaaaa', borderWidth:1}]}
                     placeholder='Modelo do Carro'
                    />
                    <MaskInput
                        value={phone}
                        style={[defaultStyles.inputText, {fontSize:20, padding:10, marginTop:10}]}
                        onChangeText={(masked, unmasked) => {
                            setPhone(masked);}}
                            mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            />

                </View>
            </View>
        </>
    )
}

