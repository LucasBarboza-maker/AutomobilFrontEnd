import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';


export default function Card({data}) {
  return (
    <View style={styles.cardBody}>
      <View style={styles.header}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>{data.user}</Text>
        <View>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>{data.rating}/5 <FontAwesome name='star' size={15} color="white" /></Text>
        </View>
      </View>
      <View style={{padding:10}}>
        <Text style={{textAlign:'justify'}}>{data.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    height: 150,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight:10
  },
  header: {
    height: 50,
    backgroundColor: '#36728D',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  }
})