import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/HomeScreen';
import Cars from '../../screens/CarsScreen';
import Chat from '../../screens/ChatScreen';
import Profile from '../../screens/ProfileScreen';
import HomeTabIconSvg from "../../components/SVGComponents/HomeTab";
import HomeTabInactiveIconSvg from "../../components/SVGComponents/HomeTabInactive";
import CarsTabIconSvg from "../../components/SVGComponents/CarsTab";
import CarsTabInactiveIconSvg from "../../components/SVGComponents/CarsTabInactive";
import ProfileTabIconSvg from "../../components/SVGComponents/ProfileTab";
import ProfileTabInactiveIconSvg from "../../components/SVGComponents/ProfileTabInactive";
import TablesTabIconSvg from "../../components/SVGComponents/TablesTab";
import TablesTabInactiveIconSvg from "../../components/SVGComponents/TablesTabInactive";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    
      <Tab.Navigator 
      activeColor="#00aea2"
      shifting={true}
      screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#1D3D4C",
            tabBarInactiveTintColor: "gray",
          }}>
        <Tab.Screen
          name="Início"
          component={Home}
          options={{
            activeColor:'white',
            title: 'Início',
            tabBarIcon: ({size,focused,color}) => {
              if(focused == true){
                return (
                  <HomeTabIconSvg/>
                );
              }else if(focused == false){
                return (
                  <HomeTabInactiveIconSvg/>
                );    
              }
            },
          }}
        />
        <Tab.Screen
          name="Carros"
          component={Cars}
          options={{
            title: 'Carros',
            tabBarIcon: ({size,focused,color}) => {
              if(focused == true){
                return (
                  <CarsTabIconSvg color={'#1D3D4C'}/>

                );
              }else if(focused == false){
                return (
                  <CarsTabInactiveIconSvg color={'#000000'}/>

                );    
              }
            },
          }}
        />
        <Tab.Screen
          name="Produtos"
          component={Chat}
          options={{
            title: 'Conversas',
            tabBarIcon: ({size,focused,color}) => {
              if(focused == true){
                return (
                  <TablesTabIconSvg color={'#1D3D4C'}/>

                );
              }else if(focused == false){
                return (
                  <TablesTabInactiveIconSvg color={'#000000'}/>
                );    
              }
            },
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            title: 'Perfil',
            tabBarIcon: ({size,focused,color}) => {
              if(focused == true){
                return (
                  <ProfileTabIconSvg color={'#1D3D4C'}/>

                );
              }else if(focused == false){
                return (
                  <ProfileTabInactiveIconSvg color={'#000000'}/>

                );    
              }
            },
          }}
        />
        
        

      </Tab.Navigator>
  );
}