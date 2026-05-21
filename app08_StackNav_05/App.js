import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/Telas/Principal';
import Tela01 from './src/Telas/Tela01';
import Tela02 from './src/Telas/Tela02';
import Tela03 from './src/Telas/Tela03';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: '🎮 Game Hub',
            headerStyle: { backgroundColor: '#0f0f1a' },
            headerTintColor: '#c084fc',
          }}
        />
        <Stack.Screen
          name="Tela01"
          component={Tela01}
          options={{
            title: '⚔️ RPG',
            headerStyle: { backgroundColor: '#1a0a2e' },
            headerTintColor: '#f0abfc',
          }}
        />
        <Stack.Screen
          name="Tela02"
          component={Tela02}
          options={{
            title: '🔫 FPS',
            headerStyle: { backgroundColor: '#0a1a0a' },
            headerTintColor: '#86efac',
          }}
        />
        <Stack.Screen
          name="Tela03"
          component={Tela03}
          options={{
            title: '🏎️ Corrida',
            headerStyle: { backgroundColor: '#1a0f00' },
            headerTintColor: '#fbbf24',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
