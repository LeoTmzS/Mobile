import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { estilos } from "../stylesheet/estilos";

function Caatinga() {
  const autor = "Luiz Corcini";
  const data = "dd/mm/aaaa";

  const [topico, setTopico] = useState('geral');

  const conteudo = {
    geral: {
      titulo: '🌵 Sobre a Caatinga',
      itens: [
        'A Caatinga é o único bioma exclusivamente brasileiro, presente principalmente no Nordeste.',
        'Cobre cerca de 11% do território nacional, abrangendo 9 estados brasileiros.',
        'O nome Caatinga vem do tupi-guarani e significa "mata branca" — referência às árvores que perdem as folhas na seca.',
        'Ao contrário do que muitos pensam, a Caatinga não é um deserto: tem chuvas irregulares de 250 a 1.000 mm por ano.',
      ],
    },
    adaptacoes: {
      titulo: '🔬 Adaptações à Seca',
      itens: [
        'As plantas da Caatinga desenvolveram estratégias únicas: perdem as folhas para economizar água (caducifólias) e muitas têm espinhos para reduzir a transpiração.',
        'O umbuzeiro armazena centenas de litros de água em suas raízes tuberosas, garantindo sua sobrevivência por anos de seca.',
        'Animais como o sapo-cachorro entram em estivação (hibernação de verão), enterrando-se para sobreviver à seca.',
        'O mandacaru floresce à noite, atraindo morcegos que o polinizam em troca de néctar e abrigo.',
      ],
    },
    fauna: {
      titulo: '🦎 Fauna',
      itens: [
        'A Caatinga abriga mais de 180 espécies de répteis, incluindo o famoso bode-de-perna-curta e a cobra-de-duas-cabeças.',
        'O ararinha-azul, espécie extinta na natureza, é natural da Caatinga e está em programa de reintrodução.',
        'A onça-parda (suçuarana) é o maior predador do bioma e um indicador da saúde do ecossistema.',
        'O tatu-bola, símbolo da região, enrola-se completamente em forma de bola ao se sentir ameaçado.',
      ],
    },
    cultura: {
      titulo: '🎭 Cultura e Bioma',
      itens: [
        'A Caatinga está no DNA da cultura nordestina: o cangaço, as festas juninas, o forró e a literatura de cordel dialogam com a paisagem seca.',
        'O mandacaru e o xique-xique são símbolos da resiliência nordestina e aparecem em músicas, poesias e artesanatos.',
        'A planta aroeira fornece madeira e resina usadas há séculos na medicina popular da região.',
        'Comunidades quilombolas e indígenas preservam conhecimentos ancestrais sobre plantas medicinais da Caatinga.',
      ],
    },
  };

  const secao = conteudo[topico];

  return (
    <View style={[estilos.Tela_Fundo_Pags, { backgroundColor: '#fdf6ec' }]}>
      <View style={[estilos.Tela_Carnaval_Cab, { backgroundColor: '#784212' }]}>
        <Text style={{ fontSize: 60 }}>🌵</Text>
        <View style={estilos.Container_Textos}>
          <Text style={[estilos.Tela_Carnaval_Substitulo1, { color: '#f0b27a' }]}>
            Bioma
          </Text>
          <Text style={[estilos.Tela_Carnaval_Titulo, { color: '#ffffff' }]}>
            Caatinga
          </Text>
        </View>
      </View>

      <View style={[estilos.PickerContainer, { backgroundColor: '#6e2c0e' }]}>
        <Text style={estilos.PickerLabel}>Tópico:</Text>
        <Picker
          selectedValue={topico}
          onValueChange={(valor) => setTopico(valor)}
          style={estilos.Picker}
          dropdownIconColor="#f0b27a"
        >
          <Picker.Item label="🌵 Sobre a Caatinga" value="geral" />
          <Picker.Item label="🔬 Adaptações à Seca" value="adaptacoes" />
          <Picker.Item label="🦎 Fauna" value="fauna" />
          <Picker.Item label="🎭 Cultura e Bioma" value="cultura" />
        </Picker>
      </View>

      <View style={estilos.Principal_Corpo_Pag}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[estilos.Tela_Pag_Titulo, { color: '#784212' }]}>
            {secao.titulo}
          </Text>
          {secao.itens.map((item, index) => (
            <View key={index} style={[estilos.CuriosidadeItem, { borderLeftColor: '#784212' }]}>
              <Text style={estilos.Tela_Pag_Texto}>{item}</Text>
            </View>
          ))}

          <View style={[estilos.CuriosidadeBox, { borderLeftColor: '#784212', marginTop: 16 }]}>
            <Text style={estilos.CuriosidadeDestaque}>💡 Você sabia?</Text>
            <Text style={estilos.Tela_Pag_Texto}>
              A Caatinga é o único bioma semiárido do mundo com tanta biodiversidade: são
              mais de 1.900 espécies de plantas, 591 de pássaros e 178 de répteis.
            </Text>
          </View>
        </ScrollView>
      </View>

      <View style={estilos.Tela_Principal_Rodape}>
        <Text>{autor}</Text>
        <Text>{data}</Text>
      </View>
    </View>
  );
}

export default Caatinga;
