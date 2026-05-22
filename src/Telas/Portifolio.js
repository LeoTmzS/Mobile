import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {estilos} from "../stylesheet/estilos";
function Portifolio() {
    
    return (
        <View style={estilos.Portifolio_Fundo}>
            <Image 
                source={require("../Img/trabson1.png")} 
                style={estilos.Portifolio_Imagem} 
            />
            <Text style={estilos.Portifolio_Titulo}>Meu Portifólio</Text>
            

            <ScrollView style={estilos.fundo}>
                <Text style={estilos.Portifolio_Subtitulo}>Acadêmicos</Text>
                {/* Cartão 1 */}
            <View style={estilos.cartao}>
                <Text style={estilos.titulo}>Analise e Desenvolvimento de Sistemas</Text>
                <Text style={estilos.texto}>- Unicesumar (Graduação)</Text>
                <Text style={estilos.texto}>- Em andamento </Text>
            </View>

            {/* Cartão 2 */}
            <View style={estilos.cartao}>
                <Text style={estilos.titulo}>Administração</Text>
                <Text style={estilos.texto}>- Descomplica (Graduação)</Text>
                <Text style={estilos.texto}>- Em andamento</Text>
            </View>

            <Text style={estilos.Portifolio_Subtitulo}>Estágios</Text>
                {/* Cartão 1 */}
            <View style={estilos.cartao}>
                <Text style={estilos.titulo}> Savana - Mercedez-Benz</Text>
                <Text style={estilos.texto}>- Administração </Text>
                <Text style={estilos.texto}>- 10/2023 - 09/2024 </Text>
            </View>

            {/* Cartão 2 */}
            <View style={estilos.cartao}>
                <Text style={estilos.titulo}>Fertipar Fertilizantes do Paraná </Text>
                <Text style={estilos.texto}>- Descomplica </Text>
                <Text style={estilos.texto}>- 09/2024 - 08/2025 </Text>
            </View>
        </ScrollView>
        </View>
    );
}
export default Portifolio;