import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Deixe false! O cabeçalho de cima agora é controlado pelo Drawer
        tabBarActiveTintColor: '#a8d5a2',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: '#1a3a1a',
          borderTopColor: '#2e5c2e',
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="tela2"
        options={{
          title: 'Tela 2',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="forest" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="tela3"
        options={{
          title: 'Tela 3',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="place" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}