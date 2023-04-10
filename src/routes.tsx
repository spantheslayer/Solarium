import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import SendETH from './pages/Send';

import Main from './pages/Main';

const Stack = createStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="SendETH" component={SendETH} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
