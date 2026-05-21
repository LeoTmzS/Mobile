import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { estilos } from "../stylesheet/estilos";

function Cerrado() {
  const autor = "Luiz Corcini";
  const data = "dd/mm/aaaa";

  const [abaSelecionada, setAbaSelecionada] = useState('historia');

  const especies = [
    { id: '1', nome: 'Ipê-Amarelo', tipo: 'Planta', emoji: '🌼', status: 'Vulnerável' },
    { id: '2', nome: 'Lobo-Guará', tipo: 'Animal', emoji: '🐺', status: 'Vulnerável' },
    { id: '3', nome: 'Tamanduá-Bandeira', tipo: 'Animal', emoji: '🐜', status: 'Vulnerável' },
    { id: '4', nome: 'Pequi', tipo: 'Planta', emoji: '🫒', status: 'Estável' },
    { id: '5', nome: 'Araçari', tipo: 'Ave', emoji: '🦜', status: 'Estável' },
    { id: '6', nome: 'Tatu-Canastra', tipo: 'Animal', emoji: '🦔', status: 'Em perigo' },
  ];

  function renderEspecie({ item }) {
    const corStatus =
      item.status === 'Em perigo'
        ? '#c0392b'
        : item.status === 'Vulnerável'
        ? '#e67e22'
        : '#27ae60';
    return (
      <View style={estilos.EspecieCard}>
        <Text style={estilos.EspecieEmoji}>{item.emoji}</Text>
        <View style={{ flex: 1 }}>
          <Text style={estilos.EspecieNome}>{item.nome}</Text>
          <Text style={estilos.EspecieTipo}>{item.tipo}</Text>
        </View>
        <View style={[estilos.StatusBadge, { backgroundColor: corStatus }]}>
          <Text style={estilos.StatusTexto}>{item.status}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[estilos.Tela_Fundo_Pags, { backgroundColor: '#fef9f0' }]}>
      <View style={[estilos.Tela_Carnaval_Cab, { backgroundColor: '#7a5c1e' }]}>
        <Text style={{ fontSize: 60 }}>🌾</Text>
        <View style={estilos.Container_Textos}>
          <Text style={[estilos.Tela_Carnaval_Substitulo1, { color: '#fde8b0' }]}>
            Bioma
          </Text>
          <Text style={[estilos.Tela_Carnaval_Titulo, { color: '#ffffff' }]}>
            Cerrado
          </Text>
        </View>
      </View>

      <View style={estilos.AbaContainer}>
        <TouchableOpacity
          style={[
            estilos.AbaBtn,
            abaSelecionada === 'historia' && { backgroundColor: '#7a5c1e' },
          ]}
          onPress={() => setAbaSelecionada('historia')}
        >
          <Text style={[estilos.AbaBtnTexto, abaSelecionada === 'historia' && { color: '#fff' }]}>
            📜 Info
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            estilos.AbaBtn,
            abaSelecionada === 'especies' && { backgroundColor: '#7a5c1e' },
          ]}
          onPress={() => setAbaSelecionada('especies')}
        >
          <Text style={[estilos.AbaBtnTexto, abaSelecionada === 'especies' && { color: '#fff' }]}>
            🐾 Espécies
          </Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.Principal_Corpo_Pag}>
        {abaSelecionada === 'historia' ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[estilos.Tela_Pag_Titulo, { color: '#7a5c1e' }]}>📜 Sobre o Cerrado</Text>
            <Text style={estilos.Tela_Pag_Texto}>
              O Cerrado é o segundo maior bioma da América do Sul, cobrindo cerca de 24% do
              território brasileiro. É considerado a savana mais biodiversa do mundo, com mais
              de 11.000 espécies de plantas nativas catalogadas.
            </Text>
            <Text style={[estilos.Tela_Pag_Titulo, { color: '#7a5c1e' }]}>🔥 Ameaças</Text>
            <Text style={estilos.Tela_Pag_Texto}>
              Já perdeu mais de 50% de sua cobertura original para a agricultura e pecuária. É
              considerado um dos hotspots de biodiversidade mais ameaçados do planeta.
            </Text>
            <Text style={[estilos.Tela_Pag_Titulo, { color: '#7a5c1e' }]}>💧 Importância Hídrica</Text>
            <Text style={estilos.Tela_Pag_Texto}>
              O Cerrado é o berço das águas do Brasil: nasce no bioma o Pantanal, o Araguaia, o
              Tocantins e afluentes do São Francisco, abastecendo 8 das 12 regiões hidrográficas
              do país.
            </Text>
            <View style={[estilos.CuriosidadeBox, { borderLeftColor: '#7a5c1e' }]}>
              <Text style={estilos.CuriosidadeDestaque}>💡 Você sabia?</Text>
              <Text style={estilos.Tela_Pag_Texto}>
                As raízes das plantas do Cerrado podem chegar a 20 metros de profundidade,
                adaptando-se à seca prolongada.
              </Text>
            </View>
          </ScrollView>
        ) : (
          <FlatList
            data={especies}
            keyExtractor={(item) => item.id}
            renderItem={renderEspecie}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      <View style={estilos.Tela_Principal_Rodape}>
        <Text>{autor}</Text>
        <Text>{data}</Text>
      </View>
    </View>
  );
}

export default Cerrado;
