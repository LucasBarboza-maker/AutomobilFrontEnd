import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function BackButton({ navigator }) {
    return (
        <Pressable style={styles.buttonBody} onPress={() => { navigator.goBack() }} >
            <FontAwesome name="chevron-left" size={30} color="#6288EB" />
            <View>
                <Text style={{ fontSize: 20, marginLeft: 10, color:'white', fontWeight:'bold' }}>Voltar</Text>
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
        top: Constants.statusBarHeight + 15, 
        left: 10 
    }
})