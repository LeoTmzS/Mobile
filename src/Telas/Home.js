import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {estilos} from "../stylesheet/estilos";
import { useNavigation } from '@react-navigation/native';
function Home() {
    
  return (
    <View style={estilos.Home_Fundo}>
      <View style={estilos.Home_Corpo}>
        <Text style={estilos.Home_Titulo}>Página Home</Text>
        <Text style={estilos.Home_Subtitulo}>Bem-vindo(a)!</Text>
        <Text style={estilos.Home_Subtitulo}>Componente</Text>
        <Text style={estilos.Home_Titulo2}>Tab Navigation</Text>
      </View>
      <View style={estilos.Home_Rodape}>
        <Text style={estilos.Home_Rodape_Texto}>Leonardo Tomaz * 21/05/2026 </Text>
      </View>
    </View>
  );
}

export default Home;