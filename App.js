import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/Telas/Home';
import Portifolio from './src/Telas/Portifolio';
import Contato from './src/Telas/Contato';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs';

function App() {
  const Tab = createNativeBottomTabNavigator();
  return (
    <NavigationContainer>
        <StatusBar backgroundColor="darkblue" 
                   barStyle="light-content" />
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Portifolio" component={Portifolio} />
          <Tab.Screen name="Contato" component={Contato} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;