import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable } from 'react-native';
import defaultStyles from '../../global/styles/styles.jsx'

//Components
import Card from '../../components/cards/carsCard.jsx';

//Icons
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';


export default function Cars({navigation}) {

    const [activeTab, setActiveTab] = useState("rented");

    return (
        <>
            <StatusBar style="dark" />
            <View>
              <Text>Teste</Text>
            </View>

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
