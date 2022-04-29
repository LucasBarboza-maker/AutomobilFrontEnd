import React, { useEffect, useState, useRef } from "react";
import { Alert, Modal, StyleSheet, TextInput, View, FlatList, Text } from "react-native";

//Styles
import defaultStyles from '../../global/styles/styles.jsx'

//Libs
import { LinearGradient } from "expo-linear-gradient";

//Icons
import { FontAwesome } from '@expo/vector-icons';

//Cards
import SearchCard from '../../components/cards/searchCard.jsx'


export default function SearchModal({ active, setActive, navigation }) {

    const [data, setData] = useState([{ id: 0, name: 'petropolis' }])
    const refInput = useRef(null);

    const getFocusInput = () => {
        refInput.current.focus();
    };

    const filterCities = (e) => {
        
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={active}
            onShow={() => getFocusInput()}
            onRequestClose={() => {
                setActive(!active);
            }}
        >
            <View style={styles.centeredView}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0)']}
                    style={styles.gradient}
                />
                <View style={[defaultStyles.inputText, { marginTop: 10, marginBottom: 10, maxWidth: '100%', justifyContent: 'center', flexDirection: 'row' }]}>
                    <TextInput
                        placeholder={'Pesquise em cidades'}
                        style={{ fontSize: 20, alignSelf: 'center' }}
                        onChange={(e) => filterCities(e)}
                        ref={refInput}
                    />
                    <FontAwesome name="search" size={20} color="#1D3D4C" style={defaultStyles.inputIcon} />
                </View>
                <View style={{ width: '100%' }}>
                    {data.length > 0 ?
                        <FlatList
                            data={data}
                            renderItem={(item) => {
                                return (
                                    <SearchCard rented={item.item.rented} navigation={navigation}/>
                                )
                            }}
                            keyExtractor={(item) => item.id}
                        />
                        :
                        <View style={{ width: '100%' }}>
                            <Text style={{ color: 'black' }}>Nenhuma cidade encontrada</Text>
                            <View style={{ height: 1, backgroundColor: 'gray' }} />
                        </View>
                    }
                </View>
            </View>
        </Modal>)
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        height: '100%',
        backgroundColor: '#ececec'
    },
    gradient: {
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
});