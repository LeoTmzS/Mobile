import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Switch } from 'react-native';
import { estilos } from "../stylesheet/estilos";
import { useNavigation } from '@react-navigation/native';

function Principal() {
  const nav = useNavigation();
  const autor = "Luiz Corcini";
  const data = "dd/mm/aaaa";

  const [modoEscuro, setModoEscuro] = useState(false);

  const biomas = [
    {
      id: '1',
      nome: 'Amazônia',
      rota: 'Amazonia',
      emoji: '🌳',
      descricao: 'Maior floresta tropical do mundo',
      cor: '#145214',
    },
    {
      id: '2',
      nome: 'Cerrado',
      rota: 'Cerrado',
      emoji: '🌾',
      descricao: 'Savana mais biodiversa do planeta',
      cor: '#7a5c1e',
    },
    {
      id: '3',
      nome: 'Pantanal',
      rota: 'Pantanal',
      emoji: '🐊',
      descricao: 'Maior área úmida tropical do mundo',
      cor: '#1a5276',
    },
    {
      id: '4',
      nome: 'Caatinga',
      rota: 'Caatinga',
      emoji: '🌵',
      descricao: 'Único bioma exclusivamente brasileiro',
      cor: '#784212',
    },
  ];

  const fundoTela = modoEscuro ? '#0d1f0d' : '#f0f7f0';
  const corTexto = modoEscuro ? '#a8d5a2' : '#1a3a1a';
  const corCard = modoEscuro ? '#1a2e1a' : '#ffffff';

  function renderBioma({ item }) {
    return (
      <TouchableOpacity
        style={[estilos.BiomaCard, { backgroundColor: item.cor }]}
        onPress={() => nav.navigate(item.rota)}
      >
        <Text style={estilos.BiomaEmoji}>{item.emoji}</Text>
        <View style={estilos.BiomaCardTexto}>
          <Text style={estilos.BiomaCardNome}>{item.nome}</Text>
          <Text style={estilos.BiomaCardDesc}>{item.descricao}</Text>
        </View>
        <Text style={estilos.BiomaCardSeta}>›</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[estilos.Tela_Principal_fundo, { backgroundColor: fundoTela }]}>
      <View style={estilos.Tela_Principal_Cab}>
        <Text style={[estilos.Tela_Principal_Substitulo1, { color: corTexto }]}>
          Explore os
        </Text>
        <Text style={estilos.Tela_Principal_Titulo}>🌿 Biomas do Brasil</Text>
        <Text style={[estilos.Tela_Principal_Subtitulo2, { color: corTexto }]}>
          Conheça a biodiversidade brasileira
        </Text>

        <View style={estilos.SwitchContainer}>
          <Text style={[estilos.SwitchLabel, { color: corTexto }]}>
            {modoEscuro ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
          </Text>
          <Switch
            value={modoEscuro}
            onValueChange={(valor) => setModoEscuro(valor)}
            trackColor={{ false: '#a8d5a2', true: '#2d5a27' }}
            thumbColor={modoEscuro ? '#a8d5a2' : '#1a3a1a'}
          />
        </View>
      </View>

      <View style={[estilos.Tela_Principal_Corpo, { backgroundColor: modoEscuro ? '#111d11' : '#e8f5e9' }]}>
        <Text style={[estilos.SecaoTitulo, { color: corTexto }]}>Selecione um Bioma:</Text>
        <FlatList
          data={biomas}
          keyExtractor={(item) => item.id}
          renderItem={renderBioma}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={estilos.Tela_Principal_Rodape}>
        <Text style={{ color: corTexto }}>{autor}</Text>
        <Text style={{ color: corTexto }}>{data}</Text>
      </View>
    </View>
  );
}

export default Principal;
