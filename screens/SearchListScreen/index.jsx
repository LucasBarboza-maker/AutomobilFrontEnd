import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text, Dimensions, FlatList, TextInput, Animated, Pressable } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';

import defaultStyles from '../../global/styles/styles'

import { FontAwesome } from '@expo/vector-icons';

import CarCard from '../../components/cards/searchCarCard.jsx';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#ececec',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: Dimensions.get('window').height,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30

    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    dragBar: {
        width: 80,
        height: 5,
        backgroundColor: '#c9c9c9',
        borderRadius: 10,
        marginTop: 10
    },
    listContainer: {
        height: '95%',
        width: '100%',
    }
}

export default function Screen() {

    var _panel = useRef(null)

    useEffect(() => {
        if (_panel != null) {
            _panel.current.show({ toValue: Dimensions.get('window').height / 2, velocity: 10 })
        }
    }, [_panel])

    

    return (
        <View style={styles.container}>
            <View style={{ padding: 10, width: '100%' }}>
                <View style={[defaultStyles.inputText, { marginTop: 40, maxWidth: '100%', justifyContent: 'center', flexDirection: 'row' }]}>
                    <TextInput
                        placeholder={'Pesquise em cidades'}
                        style={{ fontSize: 20, alignSelf: 'center' }}
                        onChange={(e) => filterCities(e)}
                    />
                    <FontAwesome name="search" size={20} color="#1D3D4C" style={defaultStyles.inputIcon} />

                </View>
            </View>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0,
                    longitudeDelta: 0.0,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}
                    title={"title"}
                    description={"description"}
                    onPress={() => console.log("teste")}
                    
                >
                    <View onPress={() => {console.log("Teste")}} style={{ width: 20, height: 20, backgroundColor: 'red' }}>

                    </View>
                </Marker>
            </MapView>
            <SlidingUpPanel ref={_panel} draggableRange={{ top: Dimensions.get('window').height, bottom: 50 }} backdropOpacity={0.5}>
                <View style={styles.container}>
                    <View style={styles.dragBar} />
                    <Text style={{ fontSize: 17, padding: 10 }}>3 Carros encontrados</Text>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#c9c9c9' }} />
                    <View style={styles.listContainer}>
                        <FlatList
                            data={[{ id: 1, nome: "Peugeot", rented: false }, { id: 2, nome: "Ford", rented: true }, { id: 3, nome: "Ford", rented: true }]}
                            renderItem={(item) => {
                                return (
                                    <CarCard rented={item.item.rented}>
                                    </CarCard>)
                            }}
                            keyExtractor={(item) => item.id}
                            style={{ marginTop: 10, padding: 10 }}
                        />
                    </View>
                </View>
            </SlidingUpPanel>
        </View>
    )
}

