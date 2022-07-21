import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, Pressable } from 'react-native';



export default function NextButton({ navigator, item }) {
    return (
        <Pressable onPress={() => { navigator.navigate("Avançar",{item}) }} >
            <View style={{}}>
                <Text style={{ fontSize: 18, marginRight: 10 }}>Avançar</Text>
            </View>
            <FontAwesome name="chevron-right" size={30} color="#6288EB" />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonBody:{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        position: 'absolute', 
        bottom: 20, 
        right: 10 
    }
})