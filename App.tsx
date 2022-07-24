import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { RootStackParamList } from './screens/RootStackParamList';

import Home from './screens/HomeScreen';
import Login from './screens/LoginScreen';
import SignUp from './screens/SignUpScreen';
import Main from './config/tab'
import SearchList from './screens/SearchListScreen'
import RegisterCar from './screens/RegisterCarScreen'
import CarDetails from './screens/CarDetailsScreen'
import MyCarDetails from './screens/MyCarDetailsScreen'

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer >
      <Navigator screenOptions={{
          headerShown: false
        }}>
        <Screen name="Login" component={Login}/>
        <Screen name="SignUp" component={SignUp}/>
        <Screen name="Main" component={Main} />
        <Screen name="Home" component={Home} />
        <Screen name="SearchList" component={SearchList}/>
        <Screen name="RegisterCar" component={RegisterCar}/>
        <Screen name="CarDetails" component={CarDetails}/>
        <Screen name="MyCarDetails" component={MyCarDetails}/>
      </Navigator>
    </NavigationContainer>

  );
}

export default App;