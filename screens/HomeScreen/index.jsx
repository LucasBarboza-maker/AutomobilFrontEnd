import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList } from 'react-native';
import defaultStyles from '../../global/styles/styles.jsx'

//Components
import Card from '../../components/cards/homecard.jsx';
import BannerCard from '../../components/cards/homeBannerCard.jsx';

//Modal
import SearchModal from '../../components/modal/searchModal.jsx';

//Icons
import { FontAwesome } from '@expo/vector-icons';


export default function Home({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <StatusBar style="light" />
            <SearchModal active={modalVisible} setActive={setModalVisible} navigation={navigation}/>
            <ScrollView>
                <View style={styles.topBanner}>
                    <Image
                        style={styles.bannerImage}
                        source={require('../../src/images/Carro_banner_1.png')}
                    />
                    <View style={[defaultStyles.inputText, { position: 'absolute', top: 50, maxWidth: '90%', alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }]}>
                        <TextInput
                            placeholder={'Pesquise em cidades'}
                            style={{ fontSize: 20, alignSelf: 'center' }}
                            onFocus={() => setModalVisible(true)}
                        />
                        <FontAwesome name="search" size={20} color="#1D3D4C" style={defaultStyles.inputIcon} />
                    </View>
                    <Text style={styles.bannerText}>Alugue um carro</Text>
                    <Text style={styles.bannerBoldText}>Rapidamente!</Text>
                </View>
                <View style={styles.winTextWrapper}>
                    <Text style={{ fontSize: 25, color: '#2B2B2B' }}><Text style={{ fontWeight: 'bold' }}>Ganhe</Text> uma renda extra{"\n"}com o seu carro!</Text>
                </View>
                <View style={styles.bannerAnnouncementWrapper}>
                    <Text style={{ fontSize: 20, color: '#282828' }}>Toque para anunciar um carro</Text>
                </View>
                <View style={defaultStyles.hr} />
                <Text style={{ fontSize: 20, color: '#282828', marginLeft: 10 }}>Ultimos carros:</Text>
                <FlatList
                    data={[{ id: 1, nome: "Peugeot" }, { id: 2, nome: "Ford" }]}
                    renderItem={(item) => {
                        return (
                            <Card></Card>)
                    }}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    style={{marginBottom:20}}
                />
                <View style={{padding:10}}>
                    <Text style={{fontSize:25, marginLeft:5, marginTop:5}}>Cuidados com o {"\n"}<Text style={{fontWeight:'bold'}}>Carro Alugado!</Text></Text>
                    <BannerCard/>
                </View>
                <View style={{padding:10}}>
                    <Text style={{fontSize:25, marginLeft:5, marginTop:5}}>Alguma <Text style={{fontWeight:'bold'}}>dúvida?</Text></Text>
                    <BannerCard/>
                </View>

            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1D3D4C',
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        display: 'flex',
        justifyContent: 'space-between'
    },
    topBanner: {
        overflow: 'hidden',
        height: 500,
        borderBottomRightRadius: 50,
        backgroundColor: '#1D3D4C',
    },
    bannerImage: {
        height: '100%',
        width: '100%'
    },
    bannerText: {
        color: 'white',
        fontSize: 40,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 90
    },
    bannerBoldText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 40
    },
    winTextWrapper: {
        padding: 10,
    },
    bannerAnnouncementWrapper: {
        backgroundColor: '#C4C4C4',
        width: 290,
        height: 50,
        borderRadius: 15,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
