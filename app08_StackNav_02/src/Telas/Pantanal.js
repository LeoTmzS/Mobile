import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, FlatList } from 'react-native';
import { estilos } from "../stylesheet/estilos";

function Pantanal() {
  const autor = "Luiz Corcini";
  const data = "dd/mm/aaaa";

  const [mostrarAnimais, setMostrarAnimais] = useState(true);

  const animais = [
    { id: '1', nome: 'Jacaré-do-Pantanal', emoji: '🐊', pop: '~10 milhões' },
    { id: '2', nome: 'Tuiuiú', emoji: '🦢', pop: 'Símbolo do Pantanal' },
    { id: '3', nome: 'Onça-Pintada', emoji: '🐆', pop: 'Maior densidade do mundo' },
    { id: '4', nome: 'Capivara', emoji: '🦫', pop: 'Maior roedor do mundo' },
    { id: '5', nome: 'Ariranha', emoji: '🦦', pop: 'Em perigo de extinção' },
  ];

  const plantas = [
    { id: '1', nome: 'Camalote', emoji: '🌸', info: 'Planta aquática flutuante' },
    { id: '2', nome: 'Paratudo', emoji: '🌳', info: 'Árvore símbolo do Pantanal' },
    { id: '3', nome: 'Aguapé', emoji: '💜', info: 'Cobertura dos espelhos d\'água' },
    { id: '4', nome: 'Landi', emoji: '🌿', info: 'Madeira resistente da planície' },
    { id: '5', nome: 'Ipê-do-Pantanal', emoji: '🌼', info: 'Floração no período seco' },
  ];

  function renderAnimal({ item }) {
    return (
      <View style={[estilos.EspecieCard, { borderLeftColor: '#1a5276', borderLeftWidth: 4 }]}>
        <Text style={estilos.EspecieEmoji}>{item.emoji}</Text>
        <View style={{ flex: 1 }}>
          <Text style={estilos.EspecieNome}>{item.nome}</Text>
          <Text style={estilos.EspecieTipo}>{item.pop}</Text>
        </View>
      </View>
    );
  }

  function renderPlanta({ item }) {
    return (
      <View style={[estilos.EspecieCard, { borderLeftColor: '#1e8449', borderLeftWidth: 4 }]}>
        <Text style={estilos.EspecieEmoji}>{item.emoji}</Text>
        <View style={{ flex: 1 }}>
          <Text style={estilos.EspecieNome}>{item.nome}</Text>
          <Text style={estilos.EspecieTipo}>{item.info}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[estilos.Tela_Fundo_Pags, { backgroundColor: '#eaf4fb' }]}>
      <View style={[estilos.Tela_Carnaval_Cab, { backgroundColor: '#1a5276' }]}>
        <Text style={{ fontSize: 60 }}>🐊</Text>
        <View style={estilos.Container_Textos}>
          <Text style={[estilos.Tela_Carnaval_Substitulo1, { color: '#aed6f1' }]}>
            Bioma
          </Text>
          <Text style={[estilos.Tela_Carnaval_Titulo, { color: '#ffffff' }]}>
            Pantanal
          </Text>
        </View>
      </View>

      <View style={[estilos.SwitchContainer, { backgroundColor: '#d6eaf8', padding: 12, margin: 10, borderRadius: 12 }]}>
        <Text style={[estilos.SwitchLabel, { color: '#1a5276', fontWeight: 'bold' }]}>
          {mostrarAnimais ? '🐊 Fauna' : '🌿 Flora'}
        </Text>
        <Switch
          value={!mostrarAnimais}
          onValueChange={(val) => setMostrarAnimais(!val)}
          trackColor={{ false: '#1a5276', true: '#1e8449' }}
          thumbColor={'#ffffff'}
        />
        <Text style={[estilos.SwitchLabel, { color: '#1e8449', fontWeight: 'bold' }]}>
          Flora
        </Text>
      </View>

      <View style={estilos.Principal_Corpo_Pag}>
        {mostrarAnimais ? (
          <>
            <Text style={[estilos.Tela_Pag_Titulo, { color: '#1a5276' }]}>
              Fauna do Pantanal
            </Text>
            <Text style={estilos.Tela_Pag_Texto}>
              O Pantanal possui a maior concentração de jacarés do mundo e é o melhor lugar
              do planeta para observação de onças-pintadas selvagens.
            </Text>
            <FlatList
              data={animais}
              keyExtractor={(item) => item.id}
              renderItem={renderAnimal}
              scrollEnabled={true}
              style={{ maxHeight: 280 }}
            />
          </>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[estilos.Tela_Pag_Titulo, { color: '#1e8449' }]}>
              Flora do Pantanal
            </Text>
            <Text style={estilos.Tela_Pag_Texto}>
              A vegetação pantaneira é um mosaico de diferentes biomas: cerrado, floresta
              amazônica e mata atlântica convivem na planície inundável.
            </Text>
            <FlatList
              data={plantas}
              keyExtractor={(item) => item.id}
              renderItem={renderPlanta}
              scrollEnabled={false}
            />
          </ScrollView>
        )}

        <View style={[estilos.CuriosidadeBox, { borderLeftColor: '#1a5276' }]}>
          <Text style={estilos.CuriosidadeDestaque}>💡 Você sabia?</Text>
          <Text style={estilos.Tela_Pag_Texto}>
            O Pantanal é declarado Patrimônio Natural da Humanidade pela UNESCO e reserva
            da biosfera desde 2000.
          </Text>
        </View>
      </View>

      <View style={estilos.Tela_Principal_Rodape}>
        <Text>{autor}</Text>
        <Text>{data}</Text>
      </View>
    </View>
  );
}

export default Pantanal;
