import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text, Dimensions, FlatList, TextInput, Animated, Pressable } from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';
import BackButton from '../../components/buttons/BackButton';
import CountryPicker from 'rn-country-dropdown-picker';
import provinces from 'provinces'
import { Picker } from '@react-native-picker/picker';
import defaultStyles from '../../global/styles/styles';

const borderColor = "#6288EB"

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
        width: '100%',
        height: 300,
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

export default function Screen({ navigation }) {

    const [address, setAddress] = useState({});
    const [filteredProvinces, setFilteredProvinces] = useState([]);

    useEffect(() => {
        if (address.countryCode != null) {
            var array = []
            provinces.map(e => {
                if (e.country === address.countryCode) {
                    array.push(e)
                }
            })
            console.log(array)
            setFilteredProvinces(array)
        }
    }, [address])

    return (
        <View style={styles.container}>
            <View style={{ padding: 10, width: '100%' }}>

                <View style={[styles.container, { overflow: 'hidden' }]}>
                    <View style={{ height: 40, marginTop: Constants.statusBarHeight, width: '100%' }}>
                        <BackButton color={"black"} topPosition={10} />
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#ececec', padding: 10, width: '100%' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Formulário de Endereço:</Text>

                        <CountryPicker selectedItem={(val) => setAddress({ ...address, countryCode: val.code, country: val.country })} ContainerStyle={{ marginTop: 10, backgroundColor: 'white' }} Placeholder={"Selecione o País..."} />

                        <View
                            style={[defaultStyles.inputText, { borderColor: borderColor, borderWidth: 1, fontSize: 20, marginTop: 10, justifyContent: 'center' }]}
                        >
                            <Picker

                                selectedValue={address.region}
                                onValueChange={(itemValue, itemIndex) =>
                                    setAddress({ ...address, region: itemValue })
                                }>
                                <Picker.Item style={{ fontSize: 20 }} color="#8e8e8e" label="Selecione o Estado" value="none" />

                                {filteredProvinces.map(e => {
                                    return (
                                        <Picker.Item style={{ fontSize: 20 }} label={e.name} value={e.name} key={e.name}/>
                                    )
                                })

                                }
                            </Picker>

                        </View>

                        <View
                            style={[defaultStyles.inputText, { borderColor: borderColor, borderWidth: 1, fontSize: 20, marginTop: 10, justifyContent: 'center' }]}
                        >
                            <Picker

                                selectedValue={address.region}
                                onValueChange={(itemValue, itemIndex) =>
                                    setAddress({ ...address, region: itemValue })
                                }>
                                <Picker.Item style={{ fontSize: 20 }} color="#8e8e8e" label="Selecione o Estado" value="none" />

                                {filteredProvinces.map(e => {
                                    return (
                                        <Picker.Item style={{ fontSize: 20 }} label={e.name} value={e.name} key={e.name}/>
                                    )
                                })

                                }
                            </Picker>

                        </View>

                        <View
                            style={[defaultStyles.inputText, { borderColor: borderColor, borderWidth: 1, fontSize: 20, marginTop: 10, justifyContent: 'center' }]}
                        >
                            <Picker

                                selectedValue={address.region}
                                onValueChange={(itemValue, itemIndex) =>
                                    setAddress({ ...address, region: itemValue })
                                }>
                                <Picker.Item style={{ fontSize: 20 }} color="#8e8e8e" label="Selecione o Estado" value="none" />

                                {filteredProvinces.map(e => {
                                    return (
                                        <Picker.Item style={{ fontSize: 20 }} label={e.name} value={e.name} key={e.name}/>
                                    )
                                })

                                }
                            </Picker>

                        </View>
                    </View>

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
                </Marker>
            </MapView>
        </View>
    )
}

