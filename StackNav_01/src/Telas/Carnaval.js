import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {estilos} from "../stylesheet/estilos";

function Carnaval() {
    let img2 =require("../Img/car.png");
    let img3 =require("../Img/latim.jpg");
    let autor = "Luiz Corcini";
    let data = "dd/mm/aaaa";
  return (
    <View style={estilos.Tela_Fundo_Pags}>
        <View id="Pag_Cab" style={estilos.Tela_Carnaval_Cab}>
            <Image source={img2} style={{ width: 150, height: 100 }}/>
            <View style={estilos.Container_Textos}>
                <Text style={estilos.Tela_Carnaval_Substitulo1}> CARNAVAL </Text>
                <Text style={estilos.Tela_Carnaval_Titulo}> Curiosidades </Text>
            </View>
        </View>
        <View id="Principal_Corpo_Pag" style={estilos.Principal_Corpo_Pag}>
           <ScrollView> 
            <Text style={estilos.Tela_Pag_Titulo}> História </Text>
            <Text style={estilos.Tela_Pag_Texto}> A história do Carnaval tem origem em antigas celebrações pagãs da Antiguidade (como as saturnálias romanas), 
                marcadas pela inversão de papéis sociais. Com a ascensão do Cristianismo, a Igreja incorporou a festa ao calendário cristão, oficializando-a como 
                o período de despedida dos prazeres mundanos antes da Quaresma. </Text>
                <Text style={estilos.Tela_Pag_Titulo}> Por mais que não tenha surgido no Brasil, é o país que mais celebra o caranaval no mundo </Text>
                <Text style={estilos.Tela_Pag_Titulo}> Curiosidades </Text>
                <Image source={img3} style={{ width: 150, height: 100, marginLeft: 30 }}/>
                <Text style={estilos.Tela_Pag_Texto}> Originado da expressão latina carnem levare, refere-se à proibição de comer carne durante a Quaresma. </Text>
                <Text style={estilos.Tela_Pag_Texto}> O Galo da Madrugada, no Recife (PE), é reconhecido pelo Guinness Book como o maior bloco de carnaval do mundo. </Text>
                <Text style={estilos.Tela_Pag_Titulo}> Baile de Mascaras </Text>
                <Text style={estilos.Tela_Pag_Texto}> O uso de máscaras no Carnaval de Veneza, que influenciou o modelo brasileiro, servia para ocultar a identidade social, permitindo que todas as classes sociais se misturassem. </Text>
            

           </ScrollView>

        </View>
        <View id="Principal_Rodape" style={estilos.Tela_Principal_Rodape}>
            <Text> {autor} </Text>
            <Text> {data} </Text>
        </View>
    </View>
  );
}
export default Carnaval;