import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  Tela_Principal_fundo:{
    flex:1, backgroundColor:'lightgray',
    alignItems:'center', justifyContent:'space-around'
  },
  Tela_Principal_Cab:{
    flex:0.5, width:'90%', backgroundColor: "white", borderTopLeftRadius: 30,
    alignItems:'center', justifyContent:'center', marginTop: 10
  },
  Tela_Principal_Substitulo1:{
    fontSize: 25, alignSelf: 'center'
  },
  Tela_Principal_Titulo:{
    fontSize: 30, alignSelf: 'center', fontWeight: 'bold'
  },
  Tela_Principal_Substitulo2:{
    fontSize: 20, alignSelf: 'center'
  },
  Tela_Principal_Corpo:{
    flex:0.5,
    justifyContent:'center', alignItems:'center', backgroundColor: 'white', width: '90%', gap: 15
  },
  Tela_Principal_Botoes:{
    borderRadius: 30, borderColor: 'darkred', borderWidth: 3, padding: 15, width: 150, alignItems: 'center'
  },
  Tela_Principal_Rodape:{
    marginBottom: 20, flexDirection: 'row', width: '90%', backgroundColor: 'white', borderBottomRightRadius: 30, gap: 150, padding: 30
  },
  Tela_Fundo_Pags:{
    flex:1, backgroundColor:'darkred',
    alignItems:'center', justifyContent:'space-around'
  },
  Tela_Carnaval_Cab:{
    flex:0.2, width:'90%', backgroundColor: "white", borderTopLeftRadius: 30,
    alignItems:'center', justifyContent:'center', marginTop: 10, flexDirection: 'row'
  },
  Tela_Carnaval_Substitulo1:{
    fontSize: 20, color: 'darkred'
  },
  Tela_Carnaval_Titulo:{
    fontSize: 25, alignSelf: 'center', fontWeight: 'bold', paddingTop: 10
  },
  Principal_Corpo_Pag:{
    flex:0.9,
    justifyContent:'center',  backgroundColor: 'white', width: '90%', gap: 15
  },
  Tela_Pag_Titulo:{
    fontSize: 25, padding: 15, color: 'darkred'
  },
  Tela_Pag_Texto:{
    fontSize: 15, padding: 15
  }
});

export { estilos }