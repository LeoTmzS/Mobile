import { StyleSheet } from "react-native";
import Portifolio from "../Telas/Portifolio";

const estilos = StyleSheet.create({
  Home_Fundo: {
    flex: 1,
    backgroundColor: "#161c2d",
    alignItems: "center",
    justifyContent: "space-around",
  },
  Home_Corpo: {
    marginTop: 20,
    flex: 0.9,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  Home_Titulo: {
    fontSize: 45,
    color: "#363636", fontWeight: 'bold',
  },
  Home_Subtitulo: {
    fontSize: 20,
    lineHeight: 50,
    color: "gray"
  },
  Home_Titulo2: {
    fontSize: 35,
    color: "#1E90FF", fontWeight: 'bold'
  },
  Home_Rodape: {
    flex: 0.06,
    backgroundColor: "#363636",
    width: "90%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4
  },
  Home_Rodape_Texto: {
    color: "white"
  },
  Portifolio_Fundo: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "space-around",
  },
  Portifolio_Titulo: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  Portifolio_Imagem: {
    width: 200,
    height: 200,
  },
  Portifolio_Subtitulo: {
    fontSize: 20,
    lineHeight: 50,
    color: "blue",
  },
  Portifolio_Vsub: {
    textAlign: "left"
  },
  fundo: {
    flex: 1,
    padding: 20,
  },
  cartao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,       // Cantos arredondados
    padding: 20,            // Espaço interno
    marginBottom: 15,       // Espaço entre os cartões
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Sombra para Android
    elevation: 2,
    width: '98%',           
  },
  titulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,       
  },
  texto: {
    fontSize: 13,
    color: '#333333',
    marginBottom: 6,       
  },
  fundo1: {
    flex: 1,
    backgroundColor: '#E1F0FA',
  },
  tituloPrincipal1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  cartao1: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    width: '80%',
    alignSelf: 'center'
  },
  tituloCartao1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  texto1: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 10, 
  },
  input1: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 15,
    fontSize: 15,
    marginBottom: 15,
    width: '80%',
    alignSelf: 'center'
  },
  botao2: {
    backgroundColor: '#2563EB',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    marginBottom: 40, 
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',        
  },
  textoBotao2: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputMensagem: {
    height: 120, // Define uma altura maior para a caixa de mensagem
  }
});

export { estilos }