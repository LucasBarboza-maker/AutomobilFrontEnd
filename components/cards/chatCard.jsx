import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, Pressable } from 'react-native';
import defaultStyles from '../../global/styles/styles.jsx'
import { LinearGradient } from 'expo-linear-gradient';


export default function Card({ rented }) {
    return (
        <Pressable onPress={() => { console.log(rented) }} style={styles.cardBody}>
            <View style={styles.photoContainer}>
                <View style={styles.radiusPhoto}>

                </View>
            </View>
            <View style={styles.infoContainer}>
                <View style={{justifyContent:'space-between', width:'100%', display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <View style={styles.quantityAndHourContainer}>
                        <View style={styles.messageQuantity}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>1</Text>
                        </View>
                        <Text style={{ color: '#36728D', marginLeft: 5 }}>10:16</Text>
                    </View>
                    <Text style={{color:'#5B5B5B'}}>30/11/2021</Text>
                </View>
                <View style={styles.nameAndMessageContainer}>
                    <Text style={{fontSize:18}}>Lucas Rodrigues Barboza</Text>
                    <Text style={{fontSize:14, color:'#5B5B5B'}}>Obrigado, vou devolver assim que a..</Text>
                </View>
            </View>

        </Pressable>
    );
}

const styles = StyleSheet.create({
    cardBody: {
        width: '100%',
        height: 130,
        elevation: 5,
        marginBottom: 15,
        backgroundColor: '#EFEFEF',
        overflow: 'hidden',
        alignContent: 'center',
        padding: 10,
        flexDirection: 'row'
    },
    photoContainer: {
        width: '25%'
    },
    infoContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '75%'
    },
    messageQuantity: {
        backgroundColor: "#36728D",
        borderRadius: 15,
        height: 25,
        width: 25,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radiusPhoto: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#C4C4C4'
    },
    quantityAndHourContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameAndMessageContainer:{
        marginTop: 20
    }
})