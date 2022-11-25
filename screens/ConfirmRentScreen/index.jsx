import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable, Dimensions, ScrollView, Animated, Easing } from 'react-native';
import defaultStyles from '../../global/styles/styles.jsx'
import Constants from 'expo-constants';
import BackButton from '../../components/buttons/BackButton.jsx';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-modern-datepicker';

//Components
import CommentCard from '../../components/cards/commentCard.jsx';

//Icons
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';


export default function CarDetail({ navigation }) {

  const [carToRent, setCarToRent] = useState({ isCarUndeterminedTime: false });
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
    <>
      <StatusBar style="dark" />
      <View style={{ height: Constants.statusBarHeight, backgroundColor: '#E8E8E8' }} />
      <BackButton topPosition={Constants.statusBarHeight + 10} navigator={navigation} />
      <View style={styles.photoSlider}>
        <View style={styles.ratingAndShareContainer}>
          <Text style={{ marginRight: 5, color: 'white', fontWeight: 'bold' }}>4/5</Text>
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
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Confirmation form:</Text>
          <View style={{ width: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text>
              Uso para trabalho ou passeio?
            </Text>
            <View
              style={{ width: '35%', justifyContent: 'center' }}
            >
              <Picker
                selectedValue={carToRent.carReasonToUse}
                onValueChange={(itemValue, itemIndex) =>
                  setCarToRent({ ...carToRent, carReasonToUse: itemValue })
                }>
                <Picker.Item style={{ fontSize: 15 }} label="Passeio" value="tour" />
                <Picker.Item style={{ fontSize: 15 }} label="Trabalho" value="job" />
                <Picker.Item style={{ fontSize: 15 }} label="Ambos" value="both" />
              </Picker>
            </View>
          </View>
          <View style={{ width: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text>
              Alugar por tempo indeterminado?
            </Text>
            <View
              style={{ width: '35%', justifyContent: 'center' }}
            >
              <Picker
                selectedValue={carToRent.isCarUndeterminedTime}
                onValueChange={(itemValue, itemIndex) =>
                  setCarToRent({ ...carToRent, isCarUndeterminedTime: itemValue })
                }>
                <Picker.Item style={{ fontSize: 15 }} label="Não" value={false} />
                <Picker.Item style={{ fontSize: 15 }} label="Sim" value={true} />
              </Picker>
            </View>

          </View>
          {carToRent.isCarUndeterminedTime === false ?
            <>
              <Text>Alugado de:</Text>
              <Pressable onPress={() => handleAnimation()} style={{ backgroundColor: 'white', width: '100%', height: 45, borderRadius: 10, paddingLeft: 15, marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>25/07/2022</Text>
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
              <Text>Devolução em:</Text>
              <Pressable onPress={() => handleAnimation()} style={{ backgroundColor: 'white', width: '100%', height: 45, borderRadius: 10, paddingLeft: 15, marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>26/07/2022</Text>
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
            </>
            :
            <>
            </>
          }
        </View>

      </ScrollView>
      <View style={styles.rentButtonContainer}>
        <Text style={{ color: 'white', fontSize: 18 }}>R$ 60 por dia ou 500 por mês</Text>
        <Pressable style={{ borderColor: 'white', borderWidth: 0.8, padding: 10, borderRadius: 10 }}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Confirmar</Text></Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E8E8",
    padding: 10,
    minHeight: Dimensions.get("screen").height - (Constants.statusBarHeight + 70 + 300)
  },
  photoSlider: {
    height: 250,
    width: '100%',
    backgroundColor: 'gray',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    zIndex: -1,
    display: 'flex',
    overflow: 'hidden'
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
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5
  },
  ratingAndShareContainer: {
    position: 'absolute',
    width: 70,
    height: 50,
    backgroundColor: '#36728D',
    bottom: 0,
    left: 10,
    elevation: 5,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
