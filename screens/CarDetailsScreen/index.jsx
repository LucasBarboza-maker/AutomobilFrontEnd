import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable, Dimensions, ScrollView } from 'react-native';
import defaultStyles from '../../global/styles/styles.jsx'
import Constants from 'expo-constants';
import BackButton from '../../components/buttons/BackButton.jsx';

//Components
import CommentCard from '../../components/cards/commentCard.jsx';

//Icons
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';


export default function CarDetail({ navigation }) {

    const [activeTab, setActiveTab] = useState("rented");
    const [comments, setComments] = useState([{ id: 1, message: "“It’s a very graceful place, even with this vehicle on my side, i could enjoy my time in this city.”", user: "Lucas R Barboza", rating: 5 }, { id: 2, message: "That's the name of your sex tape!", user: "Jake Peralta", rating: 5 }])

    return (
        <>
            <StatusBar style="dark" />
            <View style={{ height: Constants.statusBarHeight, backgroundColor: '#E8E8E8' }} />
            <BackButton topPosition={Constants.statusBarHeight + 10} navigator={navigation} />
            <View style={styles.photoSlider}>
                <View style={styles.ratingAndShareContainer}>
                    <Text style={{marginRight:5,color:'white', fontWeight:'bold'}}>4/5</Text>
                    <FontAwesome name="star" size={25} color="#E8E8E8" />
                </View>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.carNameContainer}>
                        <Text style={styles.carName}>Peugeot Brabo</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoWrapper}>
                            <FontAwesome name="check" size={18} color="green" />
                            <Text style={{ color: '#9A9A9A', marginLeft: 3 }}>Utilizar a trabalho</Text>
                        </View>
                        <View style={styles.infoWrapper}>
                            <Text style={{ fontWeight: 'bold', color: 'green' }}>10</Text>
                            <Text style={{ color: '#9A9A9A', marginLeft: 3 }}>Comentários</Text>
                        </View>
                        <View style={styles.infoWrapper}>
                            <FontAwesome name='clock-o' size={20} color="green" />
                            <Text style={{ color: '#9A9A9A', marginLeft: 3 }}>Indeterminado</Text>
                        </View>
                    </View>
                    <View style={styles.userContainer}>
                        <View style={styles.userPhotoAndInfoWrapper}>
                            <View style={styles.userInforWrapper}>
                                <Text>Dono:<Text style={{ color: '#36728D', fontWeight: 'bold' }}> Lucas Barboza</Text></Text>
                                <Text>Modelo:<Text style={{ color: '#36728D', fontWeight: 'bold' }}> PEUGEOT E-208 GT</Text></Text>
                            </View>
                            <View style={styles.userPhotoWrapper}></View>
                        </View>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={{ fontSize: 20, marginTop: 10 }}>Descrição</Text>
                        <Text style={{ textAlign: 'justify', marginBottom: 10 }}>O carro é semi-novo totalmente cuidado e conservado, sempre utilizo uma gasolina de qualidade e com o oléo sempre trocado.</Text>
                    </View>
                    <View style={styles.commentsContainer}>
                        <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 10 }}>Comentários</Text>
                        <FlatList
                            data={comments}
                            horizontal={true}
                            renderItem={(item) => {
                                return (
                                    <CommentCard data={item.item} />
                                )
                            }}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.rentButtonContainer}>
                <Text style={{color:'white', fontSize:18}}>R$ 60 por dia ou 500 por mês</Text>
                <Pressable onPress={() => navigation.navigate('ConfirmRent')} style={{borderColor:'white', borderWidth:0.8, padding:10, borderRadius:10}}><Text style={{color:'white', fontWeight:'bold', fontSize:18}}>Reservar</Text></Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8E8E8",
        padding: 10
    },
    photoSlider: {
        height: 250,
        width: '100%',
        backgroundColor: 'gray',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        zIndex: -1,
        display:'flex',
        overflow:'hidden'
    },
    carNameContainer: {
    },
    carName: {
        fontSize: 25,
        color: '#2F2D2D'
    },
    infoContainer: {
        borderColor: '#C4C4C4',
        borderBottomWidth: 0.8,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between'
    },
    infoWrapper: {
        width: '33.3%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userContainer: {
        height: 100,
        width: '100%',
        borderBottomWidth: 0.8,
        borderColor: '#C4C4C4',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row'
    },
    userPhotoAndInfoWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    userPhotoWrapper: {
        width: 70,
        height: 70,
        backgroundColor: 'gray',
        borderRadius: 35
    },
    checkImage: {
        width: '30%',
        height: '100%'
    },
    descriptionContainer: {
        borderBottomWidth: 0.8,
        borderColor: '#C4C4C4',
    },
    commentsContainer: {
        borderBottomWidth: 0.8,
        borderColor: '#C4C4C4',
        paddingBottom: 10
    },
    rentButtonContainer: {
        backgroundColor: '#36728D',
        width: '100%',
        height: 70,
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        flexDirection:'row',
        alignItems:'center',
        elevation:5
    },
    ratingAndShareContainer:{
        position:'absolute',
        width:70,
        height:50,
        backgroundColor:'#36728D',
        bottom:0,
        left:10,
        elevation:5,
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});
