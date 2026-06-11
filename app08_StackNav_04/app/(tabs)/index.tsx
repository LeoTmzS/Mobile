import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import TelaNumero from '../../src/Telas/TelaNumero'; // Mantém o caminho relativo correto para o seu componente

export default function Tela1() {
  return (
    <View style={styles.container}>
      {/* Área que renderiza o componente visual principal com o número 1 */}
      <View style={styles.screenArea}>
        <TelaNumero number={1} color="#a8d5a2" bg="#0f1f0f" />
      </View>
      
      {/* Área dos botões direcionando para as páginas dentro da subpasta */}
      <View style={styles.buttonArea}>
        <Pressable 
          style={styles.button} 
          onPress={() => router.push('/(tabs)/pagina2')}
        >
          <Text style={styles.buttonText}>Ir para Página 2</Text>
        </Pressable>
        
        <Pressable 
          style={styles.button} 
          onPress={() => router.push('/(tabs)/pagina4')}
        >
          <Text style={styles.buttonText}>Ir para Página 4</Text>
        </Pressable>
        
        <Pressable 
          style={styles.button} 
          onPress={() => router.push('/(tabs)/pagina5')}
        >
          <Text style={styles.buttonText}>Ir para Página 5</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0f1f0f' 
  },
  screenArea: { 
    flex: 1 
  },
  buttonArea: { 
    padding: 25, 
    gap: 12, 
    backgroundColor: '#0f1f0f',
    paddingBottom: 40 // Margem inferior segura para não sobrepor o menu de abas inferior
  },
  button: { 
    backgroundColor: '#1a3a1a', 
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#2e5c2e' 
  },
  buttonText: { 
    color: '#a8d5a2', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
});