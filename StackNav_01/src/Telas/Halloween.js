import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {estilos} from "../stylesheet/estilos";

function Halloween() {
    let img6 =require("../Img/hall.jpg");
    let img7 =require("../Img/hallow.jpg");
    let autor = "Luiz Corcini";
    let data = "dd/mm/aaaa";
  return (
    <View style={estilos.Tela_Fundo_Pags}>
        <View id="Pag_Cab" style={estilos.Tela_Carnaval_Cab}>
            <Image source={img6} style={{ width: 150, height: 100, borderRadius: 20 }}/>
            <View style={estilos.Container_Textos}>
                <Text style={estilos.Tela_Carnaval_Substitulo1}> Halloween </Text>
                <Text style={estilos.Tela_Carnaval_Titulo}> Curiosidades </Text>
            </View>
        </View>
        <View id="Principal_Corpo_Pag" style={estilos.Principal_Corpo_Pag}>
           <ScrollView> 
            <Text style={estilos.Tela_Pag_Titulo}> História </Text>
            <Text style={estilos.Tela_Pag_Texto}> A celebração é uma tradição celta antiga, popularizada nos EUA por imigrantes irlandeses no século XIX. </Text>
                <Text style={estilos.Tela_Pag_Titulo}> Mas como se tornou a festa que conhecemos? </Text>
                <Text style={estilos.Tela_Pag_Titulo}> Curiosidades </Text>
                <Image source={img7} style={{ width: 150, height: 100, marginLeft: 30, borderRadius: 20 }}/>
                <Text style={estilos.Tela_Pag_Texto}>  O costume de ir de porta em porta vem do século IX, chamado "souling", onde pessoas pediam comida em troca de orações pelos mortos. </Text>
                <Text style={estilos.Tela_Pag_Texto}> Originalmente, na Irlanda, eram esculpidos nabos para fazer lanternas (Jack o'Lantern), mas ao chegarem na América, os imigrantes trocaram por abóboras por serem maiores e mais fáceis de esculpir. </Text>
                <Text style={estilos.Tela_Pag_Titulo}> Nome Verdadeiro </Text>
                <Text style={estilos.Tela_Pag_Texto}> A palavra Halloween vem de "All Hallow's Eve", ou seja, a véspera de todos os santos. </Text>
            

           </ScrollView>

        </View>
        <View id="Principal_Rodape" style={estilos.Tela_Principal_Rodape}>
            <Text> {autor} </Text>
            <Text> {data} </Text>
        </View>
    </View>
  );
}
export default Halloween;