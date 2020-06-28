import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import LoginScreen from './Components/Login/Login';
import SingUpScreen from './Components/Login/SingUp';
import HomeScreen from './Components/Screen/Home';
import PerfilScreen from './Components/Screen/Perfil';
import SaveScreen from './Components/Screen/Save';
import NotificacionesScreen from './Components/Screen/Notificaciones';
import {Ionicons} from '@expo/vector-icons';

import * as firebase from 'firebase';

export const firebaseconfig={
  apiKey:"AIzaSyAOsPb9WUfsv7QIQF1wz_63RPMZxPd0Viw",
  authDomain:"login-2e4a3.firebaseapp.com",
  databaseURL:"https://login-2e4a3.firebaseio.com",
  projectId: "login-2e4a3",
  storageBucket:""
};



firebase.initializeApp(firebaseconfig);

const StackLogin=createStackNavigator({
  Login:LoginScreen,
  SingUp:SingUpScreen
  
  },
  {
    initialRouteName: 'Login',
  });

  const StackHome=createStackNavigator(
    {HomeScreen},
    
    );
    const StackPerfil=createStackNavigator(
      {PerfilScreen},
      
      );
      const StackNotificaciones=createStackNavigator(
        {NotificacionesScreen},
        
        );
        const StackEvento=createStackNavigator(
          {SaveScreen},
          
          );
      
    

  //const TabBarComponent = props => <BottomTabBar {...props} />;
  
  const TabScreens = createBottomTabNavigator(
    {
      Home:{screen:StackHome,
        navigationOptions:{
          tabBArLabel:'Perfil',
          tabBarIcon:({tintColor})=>(
           <Ionicons
            name="ios-home"
            color={tintColor} size={32}
          />
          )
          }
      },
      Eventos:{screen:StackEvento,
        navigationOptions:{
          tabBArLabel:'Perfil',
          tabBarIcon:({tintColor})=>(
           <Icon 
            name="md-book"
            color={tintColor} size={32}
          />
          )
          }
        },
        Notificacion:{screen:StackNotificaciones,
          navigationOptions:{
            tabBArLabel:'Noticaciones',
            tabBarIcon:({tintColor})=>(
             <Icon 
              name="md-heart"
              color={tintColor} size={32}
            />
            )
            }
        },
        Perfil:{screen:StackPerfil,
          navigationOptions:{
            tabBArLabel:'Perfil',
            tabBarIcon:({tintColor})=>(
             <Icon 
              name="md-person"
              color={tintColor} size={32}
            />
            )
            }
        }

    },
    { 
   
      tabBarOptions:{
        activeTintColor:'white',
        inactiveTintColor:'steelblue',
        titleStyle:'white',
        
       style:{
          /*  borderTopWidth:0,
            shadowOffser:{widt:5,height:3},
            shadowColor:'black',
            shadowOpacity:0.7,
            color:'red'*/
            backgroundColor: 'deepskyblue',
      }
      },
      
    /*  tabBarComponent: props => (
        <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
      ),*/
    }
  );
const AppSwitch=createSwitchNavigator({
   Login:StackLogin,
   Main:TabScreens,
},
{
  initialRouteName: 'Login',
});
  const AppContainer=createAppContainer(AppSwitch);



export default class Main extends Component {
  render(){
  return (
            <AppContainer />
    );
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
