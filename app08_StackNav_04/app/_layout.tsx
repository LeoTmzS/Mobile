import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// Componente customizado para renderizar as opções do menu lateral
function CustomDrawerContent() {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu Aplicativo</Text>
      </View>
      
      <View style={styles.menuItems}>
        <Pressable style={styles.menuItem} onPress={() => router.push('/')}>
          <Text style={styles.menuItemText}>🏠 Home</Text>
        </Pressable>
        
        <Pressable style={styles.menuItem} onPress={() => router.push('/pagina2')}>
          <Text style={styles.menuItemText}>🌲 Página 2</Text>
        </Pressable>
        
        <Pressable style={styles.menuItem} onPress={() => router.push('/pagina4')}>
          <Text style={styles.menuItemText}>📍 Página 4</Text>
        </Pressable>
        
        <Pressable style={styles.menuItem} onPress={() => router.push('/pagina5')}>
          <Text style={styles.menuItemText}>🥞 Página 5</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function RootLayout() {
  return (
    <Drawer
      drawerContent={() => <CustomDrawerContent />}
      screenOptions={{
        headerShown: true, // Mantém apenas este cabeçalho ativo no app todo
        headerTitle: 'Menu Aplicativo', 
        headerStyle: { backgroundColor: '#1a3a1a' },
        headerTintColor: '#a8d5a2',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerStyle: { backgroundColor: '#0f1f0f', width: 240 },
      }}
    >
      {/* Registra apenas o grupo de abas principal para manter a árvore limpa */}
      <Drawer.Screen name="(tabs)" options={{ title: 'Início' }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: { flex: 1, backgroundColor: '#0f1f0f', paddingTop: 50 },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#2e5c2e', marginBottom: 10 },
  headerText: { color: '#a8d5a2', fontSize: 18, fontWeight: 'bold' },
  menuItems: { paddingHorizontal: 10, gap: 4 },
  menuItem: { padding: 14, borderRadius: 6 },
  menuItemText: { color: '#a8d5a2', fontSize: 16, fontWeight: '500' },
});