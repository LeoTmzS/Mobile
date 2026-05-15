import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {estilos} from "../stylesheet/estilos";
import { useNavigation } from '@react-navigation/native';
function Principal() {
    let img1 = require("../Img/pump.png");
    let autor = "Luiz Corcini";
    let data = "dd/mm/aaaa"
    const nav = useNavigation();
    function acessaTela(Tela){
        if (Tela =='C') nav.navigate("Carnaval");
        else if (Tela =='J') nav.navigate("FestaJunina");
        else if (Tela =='H') nav.navigate("Halloween");
    }
  return (
    <View style={estilos.Tela_Principal_fundo}>
        <View id="Principal_Cab" style={estilos.Tela_Principal_Cab}>
            <Text style={estilos.Tela_Principal_Substitulo1}> Tela Principal </Text>
            <Text style={estilos.Tela_Principal_Titulo}> Stack Navigation </Text>
            <Text style={estilos.Tela_Principal_Subtitulo2}> DSV Mobile </Text>
            <Image source={img1} style={{ width: 240, heigh: 200 }}/>
        </View>
        <View id="Principal_Corpo" style={estilos.Tela_Principal_Corpo}>
            <Text style={estilos.Tela_Principal_Substitulo1}> Curiosidades </Text>
            <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela("C")}>
                <Text> Carnaval </Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela("J")}>
                <Text> Festa Junina </Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela("H")}>
                <Text> Halloween </Text>
            </TouchableOpacity>
        </View>
        <View id="Principal_Rodape" style={estilos.Tela_Principal_Rodape}>
            <Text> {autor} </Text>
            <Text> {data} </Text>
        </View>
    </View>
  );
}

export default Principal;