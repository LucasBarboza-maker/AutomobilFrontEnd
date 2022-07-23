import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Animated, Easing, ScrollView, Dimensions } from 'react-native';
import BackButton from '../../components/buttons/BackButton';
import Constants from 'expo-constants';
import DatePicker from 'react-native-modern-datepicker';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { transformMomentInDate, formatDateToUSAStyle } from '../../utils/dataFormatter';


export default function SignUp({ navigation }) {

  const [user, setUser] = useState({});
  const [calendarAnimOrientation, setCalendarAnimOrientation] = useState(1);
  const [animatedValue] = useState(new Animated.Value(0));

  const handleAnimation = () => {

    if (calendarAnimOrientation == 0) {
      setCalendarAnimOrientation(1)
    }


    Animated.timing(animatedValue, {
      toValue: calendarAnimOrientation,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(({ finished }) => {
      if (finished) {
        if (calendarAnimOrientation == 1) {
          setCalendarAnimOrientation(0)
        }
      }
    })

  }


  return (
    <ScrollView>
      <StatusBar style="light" />

      <View style={[styles.container, { minHeight: Dimensions.get('screen').height - (Constants.statusBarHeight + 40), display: 'flex', justifyContent: 'space-between' }]}>
        <BackButton navigator={navigation}></BackButton>
        <View style={{ height: Constants.statusBarHeight }}></View>

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
          <Pressable onPress={() => handleAnimation()} style={{ backgroundColor: 'white', width: '100%', height: 45, borderRadius: 10, paddingLeft: 15, marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text>{user.birthDate != undefined && user.birthDate != null ? `${formatDateToUSAStyle(user.birthDate)}` : "Data de Nascimento"}</Text>
            <View style={{ backgroundColor: '#2457C5', width: 50, height: '100%', borderBottomRightRadius: 10, borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
              <FontAwesome style={{ height: 25, width: 25 }} name={calendarAnimOrientation == 1 ? "calendar" : "close"} size={25} color="white" />
            </View>
          </Pressable>

          <Animated.View style={{
            backgroundColor: "white", marginTop: 10, width: '100%', transform: [{ scaleX: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) }, { scaleY: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) }]
          }} >
            <DatePicker
              onDateChange={(e) => { setUser({ ...user, birthDate: e }) }}
              style={{ width: '100%', height: calendarAnimOrientation == 1 ? 0 : 'auto' }}

            />
          </Animated.View>
          <View style={{ zIndex: -1, width: '100%' }}>
            <View style={styles.inputBackground}>
              <TextInput
                style={styles.inputText}
                secureTextEntry={true}
                placeholder="Phone Number"
              />
            </View>
            <View style={styles.inputBackground}>
              <TextInput
                style={styles.inputText}
                secureTextEntry={true}
                placeholder="Phone Number"
              />
            </View>

          </View>
        </View>
        <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', zIndex: -1, marginTop: 10 }} onPress={() => { setUser({ ...user, termsAndConditions: !user.termsAndConditions }) }}>
          {user.termsAndConditions == false ?
            <FontAwesome style={{ height: 35, width: 35, marginRight: 13 }} name="check-circle-o" size={35} color="gray" />
            :
            <FontAwesome style={{ height: 35, width: 35, marginRight: 13 }} name="check-circle" size={35} color="green" />
          }
          <Text style={{ color: 'white' }}>Agree with <Text style={{ color: '#2457C5', fontWeight: 'bold' }}>Terms and Conditions</Text></Text>
        </Pressable>
        <Pressable
          style={[styles.inputButtonBackground, { alignItems: 'center', zIndex: -1 }]}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Registrar</Text>
        </Pressable>
      </View>
    </ScrollView>
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
