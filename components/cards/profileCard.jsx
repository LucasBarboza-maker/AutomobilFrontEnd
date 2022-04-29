import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, Pressable } from 'react-native';
import defaultStyles from '../../global/styles/styles.jsx'
import { LinearGradient } from 'expo-linear-gradient';


export default function ProfileCard({ description, icon }) {
    return (
        <Pressable onPress={() => { console.log(description) }} style={styles.cardBody}>
            <View style={styles.imageAndDescription}>
                <Image
                    style={styles.bannerImage}
                    source={icon}
                />
                <Text style={styles.description}>{description}</Text>
            </View>
            <Image
                style={styles.arrowRight}
                source={require('../../src/icons/arrowRight.png')}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    cardBody: {
        width: '100%',
        height: 90,
        elevation: 5,
        marginBottom: 15,
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:30
    },
    bannerImage: {
        width: 30,
        resizeMode:'contain',
        
    },
    imageAndDescription: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    description: {
        marginLeft: 10,
        fontSize: 18
    },
    arrowRight: {
        width: 12,
        height: 19,
    }
})