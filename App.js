import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 30 }}>

      <View style={{ height: '40%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./img/steam.png')} style={{ width: 220, height: 220, resizeMode: 'contain' }} />
      </View>

      <View style={{ height: '20%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: '#333333', marginBottom: 15}}>Bem-vindo(a) a Steam!</Text>
        <Text style={{ fontSize: 18, color: '#170097', lineHeight: 22}}> Explore o universo de jogos mais popular do mundo! </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        
        <View style={{ borderWidth: 1, borderColor: '#cccccc', borderRadius: 30, paddingVertical: 12, width: 120, alignItems: 'center', marginRight: 15 }}>
          <Text style={{ color: '#00559C', fontSize: 16 }}>Pular</Text>
        </View>

        <View style={{ backgroundColor: '#00559C', borderRadius: 30, paddingVertical: 12, width: 120, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Próximo</Text>
        </View>

      </View>

    </View>
  );
}

export default App;