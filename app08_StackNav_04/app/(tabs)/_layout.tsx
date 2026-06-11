import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Desativa cabeçalhos duplicados internos
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
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
      }}
    >
      {/* APENAS ESTAS 4 APARECERÃO NO MENU INFERIOR */}
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
        name="pagina2"
        options={{
          title: 'Página 2',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="forest" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="pagina4"
        options={{
          title: 'Página 4',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="place" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="pagina5"
        options={{
          title: 'Página 5',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="layers" color={color} size={size} />
          ),
        }}
      />

      {/* ESCONDE ABSOLUTAMENTE TODAS AS OUTRAS TELAS DO MENU INFERIOR */}
      <Tabs.Screen name="pagina3" options={{ href: null }} />
      <Tabs.Screen name="pagina6" options={{ href: null }} />
      <Tabs.Screen name="pagina7" options={{ href: null }} />
      <Tabs.Screen name="pagina8" options={{ href: null }} />
      <Tabs.Screen name="pagina9" options={{ href: null }} />
    </Tabs>
  );
}