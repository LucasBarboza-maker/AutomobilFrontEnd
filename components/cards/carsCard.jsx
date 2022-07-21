import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Card({ rented }) {
    return (
        <Pressable onPress={() => { console.log(rented) }} style={styles.cardBody}>
            <View style={styles.topCard}>


                <Image
                    style={styles.bannerImage}
                    source={require('../../src/images/Carro_banner_1.png')}
                >

                </Image>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.3)']}
                    style={styles.gradient}
                />
                <Text style={styles.carName}>Peugeot Rebaixado</Text>
            </View>
            <View style={[styles.bottomCard, { backgroundColor: rented ? '#36728D' : '#A5A5A5' }]}>
                {rented ?
                    <>
                        <Text style={styles.cardDescription}>Alugado por <Text style={{ fontWeight: 'bold' }}>Patrick Statzner</Text></Text>
                        <Text style={styles.cardDescription}>Na cidade de <Text style={{ fontWeight: 'bold' }}>Petropolis - RJ</Text></Text>
                    </>
                    :
                    <Text style={[styles.cardDescription, {fontWeight:'bold'}]}>Aguardando respostas...</Text>
                }
            </View>
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
    topCard: {
        height: 160
    },
    bottomCard: {
        height: 82,
        width: '100%',
        padding: 10
    },
    bannerImage: {
        height: '100%',
        width: '100%',
    },
    gradient: {
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    carName: {
        position: 'absolute',
        color: 'white',
        fontWeight: 'bold',
        bottom: 0,
        padding: 10,
        fontSize: 22
    },
    cardDescription: {
        color: 'white',
        fontSize: 18
    }
})