import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-remix-icon';

import Home from './Home';
import SendETH from './Send';
import Wallet from './Wallet';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <View className="h-screen">
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let IconName: string;

            if (route.name === 'Home') {
              IconName = focused ? 'home-fill' : 'home-line';
            } else if (route.name === 'SendETH') {
              IconName = focused ? 'arrow-right-up-fill' : 'arrow-right-up-line';
            } else if (route.name === 'Wallet') {
              IconName = focused ? 'wallet-3-fill' : 'wallet-3-line';
            } else {
              IconName = focused ? 'settings-3-fill' : 'settings-3-line';
            }

            return <Icon name={IconName} />;
          },
          tabBarStyle: {
            backgroundColor: '#FFF',
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
          headerShown: false,
          tabBarShowLabel: true,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="SendETH" component={SendETH} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </View>
  );
};

export default Main;
