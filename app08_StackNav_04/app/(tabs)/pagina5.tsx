import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import TelaNumero from '../../src/Telas/TelaNumero';

export default function Pagina5() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0f1f0f' }}>
      <View style={{ flex: 1 }}><TelaNumero number={5} /></View>
      <View style={{ padding: 20, gap: 12, backgroundColor: '#0f1f0f' }}>
        <Pressable style={{ backgroundColor: '#1a3a1a', padding: 15, borderRadius: 8, alignItems: 'center' }} onPress={() => router.push('/(tabs)/pagina6')}>
          <Text style={{ color: '#a8d5a2', fontWeight: 'bold' }}>Ir para Página 6</Text>
        </Pressable>
        <Pressable style={{ backgroundColor: '#1a3a1a', padding: 15, borderRadius: 8, alignItems: 'center' }} onPress={() => router.push('/(tabs)/pagina7')}>
          <Text style={{ color: '#a8d5a2', fontWeight: 'bold' }}>Ir para Página 7</Text>
        </Pressable>
      </View>
    </View>
  );
}