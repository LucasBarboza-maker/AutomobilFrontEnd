import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList } from 'react-native';
import defaultStyles from '../../global/styles/styles.jsx'


export default function BannerCard() {
    return (
        <View style={styles.cardBody}>
        
        </View>
    );
}

const styles = StyleSheet.create({
    cardBody:{
        width:'100%',
        height: 300,
        backgroundColor:'#C4C4C4',
        elevation:5,
        borderRadius:10,
    }
})