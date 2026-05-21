import React from 'react';
import Principal from "./src/Telas/Principal";
import Amazonia from "./src/Telas/Amazonia";
import Cerrado from "./src/Telas/Cerrado";
import Pantanal from "./src/Telas/Pantanal";
import Caatinga from "./src/Telas/Caatinga";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={Principal}
          options={{
            title: "Biomas do Brasil",
            headerStyle: { backgroundColor: '#1a3a1a' },
            headerTintColor: '#a8d5a2'
          }}
        />
        <Stack.Screen name="Amazonia" component={Amazonia}
          options={{
            title: "Amazônia",
            headerStyle: { backgroundColor: '#145214' },
            headerTintColor: '#d4edda'
          }}
        />
        <Stack.Screen name="Cerrado" component={Cerrado}
          options={{
            title: "Cerrado",
            headerStyle: { backgroundColor: '#7a5c1e' },
            headerTintColor: '#fef3cd'
          }}
        />
        <Stack.Screen name="Pantanal" component={Pantanal}
          options={{
            title: "Pantanal",
            headerStyle: { backgroundColor: '#1a5276' },
            headerTintColor: '#d6eaf8'
          }}
        />
        <Stack.Screen name="Caatinga" component={Caatinga}
          options={{
            title: "Caatinga",
            headerStyle: { backgroundColor: '#784212' },
            headerTintColor: '#fdebd0'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
