import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import BackButton from '../../components/buttons/BackButton';
import Constants from 'expo-constants';

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={{ height: Constants.statusBarHeight }}></View>
      <BackButton navigator={navigation}></BackButton>
      
      <View style={{ width: '100%', alignItems: 'center' }}>
      <Text style={{ textAlign: 'left', width: '100%', fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 50 }}>Registration Form:</Text>
        <View style={styles.inputBackground}>
          <TextInput
            style={styles.inputText}
            placeholder="Name"
          />
        </View>
        <View style={styles.inputBackground}>
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Surname"
          />
        </View>
        <View style={styles.inputBackground}>
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Email"
          />
        </View>
        <View style={styles.inputBackground}>
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Phone Number"
          />
        </View>
        <Pressable
          style={[styles.inputButtonBackground, { alignItems: 'center' }]}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize:22 }}>Registrar</Text>
        </Pressable>
      </View>
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
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
  },
  logo: {
    width: 250,
    height: 250,
  },
  googleLogo: {
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
    flexDirection: 'row',
    fontSize: 18
  },
  googleText: {
    fontSize: 18,
    marginLeft: 5,
    color: '#545454'
  },
  orContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  line: {
    width: '40%',
    backgroundColor: 'white',
    height: 1
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  inputBackground: {
    backgroundColor: 'white',
    width: '100%',
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 15,
    marginTop: 20
  },
  inputButtonBackground: {
    backgroundColor: '#2457C5',
    width: '100%',
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20
  },
  inputText: {
    width: '100%'
  },
  footerWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  footerText: {
    color: 'white'
  },
  link: {
    color: '#2457C5',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }

});
