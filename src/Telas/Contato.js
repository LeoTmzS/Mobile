import React from 'react';
import {estilos} from "../stylesheet/estilos";
import { ScrollView, View, Text, TouchableOpacity, TextInput} from 'react-native';

function Contato() {
  return (
    <ScrollView style={estilos.fundo1}>
      
      {/* Título Principal */}
      <Text style={estilos.tituloPrincipal1}>Entre em Contato</Text>

      {/* Cartão de Informações */}
      <View style={estilos.cartao1}>
        <Text style={estilos.tituloCartao1}>Informações de Contato</Text>
        <Text style={estilos.texto1}>Celular: (41) 91234-5678</Text>
        <Text style={estilos.texto1}>Email: ts.leoonardo@gmail.com</Text>
        <Text style={estilos.texto1}>LinkedIn: linkedin.com/in/Leonardo-Tomaz</Text>
        <Text style={estilos.texto1}>Instagram: @leonardtmz</Text>
        <Text style={estilos.texto1}>YouTube: youtube.com/@vcsabia</Text>
        <Text style={estilos.texto1}>Curitiba - PR</Text>
      </View>

      {/* Subtítulo */}
      <Text style={estilos.tituloPrincipal1}>Enviar Mensagem</Text>

      {/* Campos de Formulário */}
      <TextInput 
        style={estilos.input1} 
        placeholder="Digite seu nome" 
      />
      
      <TextInput 
        style={estilos.input1} 
        placeholder="Digite sua Mensagem" 
      />

      <TouchableOpacity style={estilos.botao2}>
        <Text style={estilos.textoBotao2}>Enviar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
export default Contato;
