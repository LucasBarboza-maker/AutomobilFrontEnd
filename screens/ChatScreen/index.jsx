import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable } from 'react-native';
import defaultStyles from '../../global/styles/styles.jsx'

//Components
import Card from '../../components/cards/chatCard.jsx';

//Icons
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';


export default function Chat() {

    const [activeTab, setActiveTab] = useState("rented");

    return (
        <>
            <StatusBar style="dark" />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>CONVERSAS</Text>
                <Text style={styles.headerText}>Conversas antigas, com clientes ou com locadores.</Text>
            </View>
            <View style={styles.tabsWrapper}>
                {activeTab == "rented" ?
                    <Pressable style={styles.tabPressable}><Text style={[styles.tabText, { color: '#1D1D1D' }]}>Locadores</Text></Pressable>
                    :
                    <Pressable style={styles.tabPressable} onPress={() => { setActiveTab("rented") }}><Text style={[styles.tabText, { color: '#C4C4C4' }]}>Locadores</Text></Pressable>
                }
                <View style={{ height: 40, width: 100 }}>
                    <View style={styles.middleTabBar}></View>
                </View>
                {activeTab == "mine" ?
                    <Pressable style={styles.tabPressable}><Text style={[styles.tabText, { color: '#1D1D1D' }]}>Clientes</Text></Pressable>
                    :
                    <Pressable style={styles.tabPressable} onPress={() => { setActiveTab("mine") }}><Text style={[styles.tabText, { color: '#C4C4C4' }]}>Clientes</Text></Pressable>
                }
            </View>
            <View style={{ width: '100%' }}>
                {activeTab == "rented" ?
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ width: '50%', height: 1, backgroundColor: '#1D1D1D', elevation: 5 }}></View>
                        <View style={{ width: '50%', alignSelf: 'flex-end', height: 1, backgroundColor: '#C4C4C4', elevation: 5 }}></View>
                    </View>
                    :
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ width: '50%', alignSelf: 'flex-end', height: 1, backgroundColor: '#C4C4C4', elevation: 5 }}></View>
                        <View style={{ width: '50%', height: 1, backgroundColor: '#1D1D1D', elevation: 5 }}></View>
                    </View>
                }

            </View>

            {activeTab == "rented" ?
                <FlatList
                    data={[{ id: 1, nome: "Peugeot", rented: false }, { id: 2, nome: "Ford", rented: true }, { id: 3, nome: "Ford", rented: true }]}
                    renderItem={(item) => {
                        return (
                            <Card rented={item.item.rented}>
                            </Card>)
                    }}
                    keyExtractor={(item) => item.id}
                    style={{ marginTop: 10, padding: 10 }}
                />
                :
                <FlatList
                    data={[{ id: 1, nome: "Peugeot", rented: false }]}
                    renderItem={(item) => {
                        return (
                            <Card rented={item.item.rented}>
                            </Card>)
                    }}
                    keyExtractor={(item) => item.id}
                    style={{ marginTop: 10, padding: 10 }}
                />
            }

        </>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 50
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#1A1A1A'
    },
    headerText: {
        fontSize: 16,
        color: '#737373'
    },
    createCard: {
        width: '100%',
        height: 50,
        backgroundColor: '#36728D',
        borderRadius: 10,
        elevation: 8,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    tabsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    bannerImage: {
        width: 27,
        height: 27
    },
    createText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',

    },
    tabText: {
        fontSize: 22,
        textAlign: 'center'
    },
    middleTabBar: {
        height: '100%',
        width: 1,
        backgroundColor: '#C4C4C4',
        alignSelf: 'center'
    },
    tabPressable: {
        height: 40,
        width: '30%'
    }

});
