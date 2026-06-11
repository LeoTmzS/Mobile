import { MaterialIcons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Menu lateral customizado nativo do Expo Router
function CustomDrawerContent() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets(); // Garante que o menu não fique embaixo da barra de status

  // Definição dos seus botões de navegação
  const menuItems = [
    { label: 'Home', path: '/', icon: 'home' as const },
    { label: 'Tela 2', path: '/tela2', icon: 'forest' as const },
    { label: 'Tela 3', path: '/tela3', icon: 'place' as const },
  ];

  return (
    <View style={[styles.drawerContainer, { paddingTop: insets.top + 20 }]}>
      {menuItems.map((item) => {
        // Verifica se a aba está ativa
        const isActive = pathname === item.path || (item.path === '/' && pathname === '/index');

        return (
          <Pressable
            key={item.path}
            onPress={() => router.navigate(item.path as any)}
            style={[
              styles.drawerItem,
              isActive && styles.drawerItemActive
            ]}
          >
            <MaterialIcons 
              name={item.icon} 
              size={22} 
              color={isActive ? '#a8d5a2' : '#666'} 
            />
            <Text style={[
              styles.drawerLabel,
              { color: isActive ? '#a8d5a2' : '#666' }
            ]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={() => <CustomDrawerContent />}
        screenOptions={{
          headerStyle: { backgroundColor: '#1a3a1a' },
          headerTintColor: '#a8d5a2',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: 'Meu Aplicativo',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#0f1f0f',
    paddingHorizontal: 12,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
  },
  drawerItemActive: {
    backgroundColor: '#1a3a1a',
  },
  drawerLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
  },
});