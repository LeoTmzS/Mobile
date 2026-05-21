import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { estilos } from "../stylesheet/estilos";

function Amazonia() {
  const autor = "Luiz Corcini";
  const data = "dd/mm/aaaa";

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('historia');

  const conteudo = {
    historia: {
      titulo: '📜 História',
      texto: [
        'A Amazônia cobre cerca de 40% do território brasileiro e abrange 9 países da América do Sul. Foi descoberta pelos europeus no século XVI com a expedição de Francisco de Orellana (1541), que percorreu o rio Amazonas de ponta a ponta.',
        'O nome "Amazonas" tem origem na mitologia grega: os exploradores relataram ter encontrado guerreiras femininas, semelhantes às Amazonas da lenda.',
      ],
    },
    fauna: {
      titulo: '🐆 Fauna',
      texto: [
        'A Amazônia abriga mais de 10% de todas as espécies de animais do planeta, incluindo onças-pintadas, botos-cor-de-rosa, ariranhas, antas e tucanos.',
        'O rio Amazonas possui mais de 3.000 espécies de peixes — mais do que todo o Oceano Atlântico.',
        'A arara-azul e o peixe-boi amazônico estão entre as espécies ameaçadas de extinção que dependem desse bioma.',
      ],
    },
    flora: {
      titulo: '🌿 Flora',
      texto: [
        'A floresta Amazônica é composta por mais de 40.000 espécies de plantas. A seringueira, o cacaueiro e a vitória-régia são algumas das mais famosas.',
        'A vitória-régia (Victoria amazonica) tem folhas que podem suportar até 40 kg de peso e flores que mudam de branco para rosa durante a floração.',
        'A floresta é chamada de "pulmão do mundo" por produzir 20% do oxigênio da Terra.',
      ],
    },
    clima: {
      titulo: '🌧️ Clima',
      texto: [
        'O clima amazônico é equatorial, com temperaturas médias entre 24°C e 26°C e chuvas abundantes que chegam a 3.000 mm anuais.',
        'A floresta gera seu próprio ciclo de chuvas através dos "rios voadores": enormes massas de umidade que percorrem o continente e abastecem o centro-sul do Brasil.',
      ],
    },
  };

  const secao = conteudo[categoriaSelecionada];
  let img1 = require("../Img/amazonia.jpg");

  return (
    <View style={estilos.Tela_Fundo_Pags}>
      <View style={[estilos.Tela_Carnaval_Cab, { backgroundColor: '#145214' }]}>
        <Text style={{ fontSize: 60 }}>🌳</Text>
        <View style={estilos.Container_Textos}>
          <Text style={[estilos.Tela_Carnaval_Substitulo1, { color: '#a8d5a2' }]}>
            Bioma
          </Text>
          <Text style={[estilos.Tela_Carnaval_Titulo, { color: '#ffffff' }]}>
            Amazônia
          </Text>
        </View>
      </View>

      <View style={[estilos.PickerContainer, { backgroundColor: '#1e3d1e' }]}>
        <Text style={estilos.PickerLabel}>Explorar:</Text>
        <Picker
          selectedValue={categoriaSelecionada}
          onValueChange={(valor) => setCategoriaSelecionada(valor)}
          style={estilos.Picker}
          dropdownIconColor="#a8d5a2"
        >
          <Picker.Item label="📜 História" value="historia" />
          <Picker.Item label="🐆 Fauna" value="fauna" />
          <Picker.Item label="🌿 Flora" value="flora" />
          <Picker.Item label="🌧️ Clima" value="clima" />
        </Picker>
      </View>

      <View style={estilos.Principal_Corpo_Pag}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[estilos.Tela_Pag_Titulo, { color: '#145214' }]}>
            {secao.titulo}
          </Text>
          {secao.texto.map((paragrafo, index) => (
            <Text key={index} style={estilos.Tela_Pag_Texto}>
              {paragrafo}
            </Text>
          ))}

          <View style={[estilos.CuriosidadeBox, { borderLeftColor: '#145214' }]}>
            <Text style={estilos.CuriosidadeDestaque}>💡 Você sabia?</Text>
            <Text style={estilos.Tela_Pag_Texto}>
              O rio Amazonas despeja cerca de 20% de toda a água doce dos rios do
              mundo no oceano.
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

export default Amazonia;
