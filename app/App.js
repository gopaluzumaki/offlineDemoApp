import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView,Text} from 'react-native';
import {connect} from 'react-redux';

import LandingScreen from './Screens/LandingScreen';

import {getUsers} from './actions';

import DetectOffline from './components/DetectOffline';

import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from
    "react-navigation-material-bottom-tabs";
  
import HomeScreen from "./Screens/HomeScreen";
import SettingScreen from "./Screens/SettingScreen";
import AddFriendsScreen from './Screens/AddFriendsScreen';


import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const App = () => {

  
  const config = {
    screens: {
      HomeScreen:'HomeScreen',
      StackNavigator: {
        screens: {
          AddFriendsScreen:{ 
            path:'AddFriendsScreen/:id',
          parse: {
            id: (id) => `${id}`,
          }
        }
        },
      },
      SettingScreen: 'SettingScreen',
    },
  };
  
  const linking = {
    prefixes: ['myapp://'],
    config,
  };
  const TabNavigator = createMaterialBottomTabNavigator(
    {
      HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: "Home",
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name="md-home"
              size={tabInfo.focused ? 26 : 20}
              color={tabInfo.tintColor}
            />
          ),
        },
      },
      StackNavigator: {
        screen: StackNavigator,
        path:'StackNavigator',
        navigationOptions: {
          tabBarLabel: "Friends",
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name="md-person-circle-outline"
              size={tabInfo.focused ? 26 : 20}
              color={tabInfo.tintColor}
            />
          ),
        },
      },
      SettingScreen: {
        screen: SettingScreen,
        navigationOptions: {
          tabBarLabel: "Settings",
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name="md-settings-outline"
              size={tabInfo.focused ? 26 : 20}
              color={tabInfo.tintColor}
            />
          ),
        },
      },
    },
    {
      initialRouteName: "HomeScreen",
      barStyle: { backgroundColor: "#00bfff" },
    }
  );
    
  const Navigator = createAppContainer(TabNavigator);

  return (
    <>
    {/* <DetectOffline /> */}
<NavigationContainer linking={linking}>
  <Navigator />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, {})(App);






