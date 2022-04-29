import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { RootStackParamList } from './screens/RootStackParamList';

import Home from './screens/HomeScreen';
import Login from './screens/LoginScreen';
import Main from './config/tab'
import SearchListScreen from './screens/SearchListScreen'
import RegisterCarScreen from './screens/RegisterCarScreen'

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer >
      <Navigator screenOptions={{
          headerShown: false
        }}>
        <Screen name="Login" component={Login}/>
        <Screen name="Main" component={Main} />
        <Screen name="Home" component={Home} />
        <Screen name="SearchList" component={SearchListScreen}/>
        <Screen name="RegisterCar" component={RegisterCarScreen}/>
      </Navigator>
    </NavigationContainer>

  );
}

export default App;