import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import defaultStyles from '../../global/styles/styles.jsx'

//Components
import Card from '../../components/cards/profileCard.jsx';

//Icons
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';


export default function Profile() {

    const [activeTab, setActiveTab] = useState("rented");

    return (
        <>
            <StatusBar style="dark" />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>PERFIL</Text>
                <Text style={styles.headerText}>Gerencie suas configurações, adicione carros e os meios de pagamento ou recebimento.</Text>
                <View style={{ width: '100%', height: 1, backgroundColor: '#C4C4C4', marginTop: 10 }}></View>
            </View>
            <ScrollView style={{ padding: 10 }}>
                <Text style={styles.titleText}>Configurações Gerais</Text>
                <Card icon={require('../../src/icons/person.png')} description={"Configurações Pessoais"} route={""} />
                <Card icon={require('../../src/icons/correct.png')} description={"Confirmar sua Identidade"} route={""} />
                <Card icon={require('../../src/icons/dolar.png')} description={"Pagamentos"} route={""} />
                <Card icon={require('../../src/icons/car2.png')} description={"Seus Carros"} route={""} />


                <Text style={styles.titleText}>Compartilhar</Text>
                <Card icon={require('../../src/icons/twoPerson.png')} description={"Indicar Amigos"} route={""} />

                <Text style={styles.titleText}>Regras</Text>
                <Card icon={require('../../src/icons/book.png')} description={"Termos de Serviço"} route={""} />

                <Text style={styles.titleText}>Algo Errado?</Text>
                <Card icon={require('../../src/icons/question.png')} description={"Entre em contato conosco"} route={""} />

                <Text style={styles.titleText}>Sair</Text>
                <Card icon={require('../../src/icons/logout.png')} description={"toque para sair da conta"} route={""} />

                <View style={{ padding: 10 }}>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#C4C4C4' }}></View>
                </View>
                <Text style={{ textAlign: 'center', color: '#C4C4C4', marginBottom: 20 }}>Versão 0.0.1 do App</Text>
            </ScrollView>

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
        color: '#464646'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: "#1D3D4C",
        marginBottom: 10
    }

});
