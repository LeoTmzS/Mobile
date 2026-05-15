import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {estilos} from "../stylesheet/estilos";

function FestaJunina() {
    let img4 =require("../Img/festa.jpg");
    let img5 =require("../Img/sant.jpg");
    let autor = "Luiz Corcini";
    let data = "dd/mm/aaaa";
  return (
    <View style={estilos.Tela_Fundo_Pags}>
        <View id="Pag_Cab" style={estilos.Tela_Carnaval_Cab}>
            <Image source={img4} style={{ width: 150, height: 100 }}/>
            <View style={estilos.Container_Textos}>
                <Text style={estilos.Tela_Carnaval_Substitulo1}> Festa Junina </Text>
                <Text style={estilos.Tela_Carnaval_Titulo}> Curiosidades </Text>
            </View>
        </View>
        <View id="Principal_Corpo_Pag" style={estilos.Principal_Corpo_Pag}>
           <ScrollView> 
            <Text style={estilos.Tela_Pag_Titulo}> História </Text>
            <Text style={estilos.Tela_Pag_Texto}> A origem remonta a celebrações germânicas e romanas que comemoravam o início do verão e 
                agradeciam pela colheita, buscando afastar maus espíritos. </Text>
                <Text style={estilos.Tela_Pag_Titulo}> Originalmente, em Portugal, a celebração era chamada de festa joanina </Text>
                <Text style={estilos.Tela_Pag_Titulo}> Curiosidades </Text>
                <Image source={img5} style={{ width: 150, height: 100, marginLeft: 30 }}/>
                <Text style={estilos.Tela_Pag_Texto}> A festa homenageia Santo Antônio (dia 13), São João (dia 24) e São Pedro (dia 29). </Text>
                <Text style={estilos.Tela_Pag_Texto}> A tradição da fogueira herdou costumes celtas e greco-romanos de agradecimento. No Brasil, acredita-se que ela purifica e protege. </Text>
                <Text style={estilos.Tela_Pag_Titulo}> Bandeirinhas </Text>
                <Text style={estilos.Tela_Pag_Texto}> Inicialmente, elas serviam para adornar os mastros que carregavam as imagens dos três santos festejados no mês: Santo Antônio, São João e São Pedro. </Text>
            

           </ScrollView>

        </View>
        <View id="Principal_Rodape" style={estilos.Tela_Principal_Rodape}>
            <Text> {autor} </Text>
            <Text> {data} </Text>
        </View>
    </View>
  );
}
export default FestaJunina;