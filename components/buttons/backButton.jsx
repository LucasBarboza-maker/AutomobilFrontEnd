import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function BackButton({ navigator, color, topPosition }) {
    return (
        <Pressable style={[styles.buttonBody, { top: topPosition != null ? topPosition : Constants.statusBarHeight + 15 }]} onPress={() => { navigator.goBack() }} >
            <FontAwesome name="chevron-left" size={30} color="#6288EB" />
            <View>
                <Text style={{ fontSize: 20, marginLeft: 10, color:color != null ? color : 'white', fontWeight:'bold' }}>Voltar</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonBody:{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        position: 'absolute', 
        left: 10 
    }
})