import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import TelaNumero from '../../src/Telas/TelaNumero';

export default function Pagina2() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0f1f0f' }}>
      <View style={{ flex: 1 }}><TelaNumero number={2} /></View>
      <View style={{ padding: 20, backgroundColor: '#0f1f0f' }}>
        <Pressable style={{ backgroundColor: '#1a3a1a', padding: 15, borderRadius: 8, alignItems: 'center' }} onPress={() => router.push('/pagina3')}>
          <Text style={{ color: '#a8d5a2', fontWeight: 'bold' }}>Ir para Página 3</Text>
        </Pressable>
      </View>
    </View>
  );
}