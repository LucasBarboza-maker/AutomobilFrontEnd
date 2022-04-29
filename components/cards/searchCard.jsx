import { StyleSheet, Pressable, Text, View } from 'react-native';
import defaultStyles from '../../global/styles/styles.jsx'

//Icons
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



export default function ProfileCard({ description, navigation }) {
    return (
        <Pressable onPress={() => { navigation.navigate('SearchList') }} style={styles.cardBody}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Entypo name="location-pin" size={32} color="#7c84d3" />
                <Text style={{fontSize:20, color:"#9b9b9b", marginLeft:10}}>Petrópolis - RJ</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#9b9b9b" />
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30
    }
})