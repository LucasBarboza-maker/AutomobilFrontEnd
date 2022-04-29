import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, Pressable } from 'react-native';
import defaultStyles from '../../global/styles/styles.jsx'
import { LinearGradient } from 'expo-linear-gradient';


export default function PinPoint({ rented }) {
    return (
        <Pressable onPress={() => { console.log(rented) }} style={styles.cardBody}>
           
        </Pressable>
    );
}

const styles = StyleSheet.create({
    cardBody: {
        width: '100%',
        height: 240,
        elevation: 5,
        borderRadius: 15,
        marginBottom: 15,
        overflow: 'hidden'
    },
})