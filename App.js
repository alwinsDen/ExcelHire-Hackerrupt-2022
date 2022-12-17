/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './pages/Login';
import ProductPage2 from './pages/ProductPage2';
import ProductPage3 from './pages/ProductPage3';
import ProductPage4 from './pages/ProductPage4';
import ProductPage5 from './pages/ProductPage5';
import ProductPage6 from './pages/ProductPage6';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import ProductPage7 from './pages/ProductPage7';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name={'login'}
          component={MainPage}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={'product-page'}
          component={ProductPage2}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={'product-page3'}
          component={ProductPage3}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={'product-page4'}
          component={ProductPage4}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={'product-page5'}
          component={ProductPage5}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={'product-page6'}
          component={ProductPage6}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={'product-page7'}
          component={ProductPage7}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
