import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput  } from 'react-native';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../src/images/Logo.png')}
                />
            </View>
            <Pressable style={styles.containerLoginGoogle}>
                <Image
                    style={styles.googleLogo}
                    source={require('../../src/images/google_icon.png')}
                />
                <Text style={styles.googleText}>Login pelo Google</Text>
            </Pressable>
            <View style={styles.orContainer}>
                <View style={styles.line}/>
                <Text style={{color:'white'}}>ou</Text>
                <View style={styles.line}/>
            </View>
            <View style={{width:'100%', alignItems:'center'}}>
                <Text style={styles.loginText}>Login pelo email</Text>
                <View style={styles.inputBackground}>
                    <TextInput 
                    style={styles.inputText}
                    placeholder="Email"
                    />
                </View>
                <View style={styles.inputBackground}>
                    <TextInput 
                    style={styles.inputText}
                    secureTextEntry={true}
                    placeholder="Senha"
                    />
                </View>
                <Pressable
                    style={[styles.inputButtonBackground, {alignItems:'center'}]}
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text style={{color:'white', fontWeight:'bold'}}>ENTRAR</Text>
                </Pressable>
                <Text style={styles.link}>Esqueceu a senha?</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('SignUp')} style={styles.footerWrapper}>
                <Text style={styles.footerText}>Não tem uma conta?</Text>
                <Text style={[styles.link, {marginLeft:3}]}>Registre-se agora</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#1D3D4C',
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        display:'flex',
        justifyContent:'space-between' 
    },
    logo: {
        width: 250,
        height: 250,
    },
    googleLogo:{
        width: 35,
        height: 35,
    },
    containerLoginGoogle: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        fontSize: 18
    },
    googleText:{
        fontSize:18,
        marginLeft:5,
        color: '#545454'
    },
    orContainer:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    line:{
        width:'40%',
        backgroundColor:'white',
        height:1
    },
    loginText:{
        color:'white',
        fontSize:16,
        textAlign:'center'
    },
    inputBackground:{
        backgroundColor:'white',
        width: '100%',
        height: 45,
        borderRadius:10,
        justifyContent:'center',
        paddingLeft:15,
        marginTop:20
    },
    inputButtonBackground:{
        backgroundColor:'#2457C5',
        width: '100%',
        height: 45,
        borderRadius:10,
        justifyContent:'center',
        marginTop:20
    },
    inputText:{
        width: '100%'
    },
    footerWrapper:{
        display: 'flex',
        flexDirection:'row'
    },
    footerText:{
        color:'white'
    },
    link:{
        color:'#2457C5',
        fontWeight:'bold',
        textDecorationLine:'underline'
    }

});
