import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({

  Tela_Principal_fundo: {
    flex: 1,
    backgroundColor: '#f0f7f0',
  },

  Tela_Principal_Cab: {
    backgroundColor: '#1a3a1a',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },

  Tela_Principal_Substitulo1: {
    fontSize: 13,
    color: '#a8d5a2',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 2,
  },

  Tela_Principal_Titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },

  Tela_Principal_Subtitulo2: {
    fontSize: 13,
    color: '#a8d5a2',
    marginBottom: 12,
  },

  Tela_Principal_Corpo: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 14,
    paddingTop: 10,
  },

  Tela_Principal_Rodape: {
    backgroundColor: '#1a3a1a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  
  SwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 8,
  },

  SwitchLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  SecaoTitulo: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a3a1a',
    marginBottom: 10,
    marginTop: 4,
  },

  BiomaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    marginBottom: 12,
    padding: 14,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
  },

  BiomaEmoji: {
    fontSize: 36,
    marginRight: 14,
  },

  BiomaCardTexto: {
    flex: 1,
  },

  BiomaCardNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  BiomaCardDesc: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },

  BiomaCardSeta: {
    fontSize: 28,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: 'bold',
  },

  Tela_Fundo_Pags: {
    flex: 1,
    backgroundColor: '#f5fbf5',
  },

  Tela_Carnaval_Cab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#145214',
    paddingVertical: 18,
    paddingHorizontal: 16,
    gap: 14,
  },

  Container_Textos: {
    flex: 1,
  },

  Tela_Carnaval_Substitulo1: {
    fontSize: 12,
    color: '#a8d5a2',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },

  Tela_Carnaval_Titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  Principal_Corpo_Pag: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },

  Tela_Pag_Titulo: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1a3a1a',
    marginTop: 14,
    marginBottom: 6,
  },

  Tela_Pag_Texto: {
    fontSize: 14,
    color: '#2c3e2d',
    lineHeight: 22,
    marginBottom: 10,
    textAlign: 'justify',
  },

  PickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e3d1e',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  PickerLabel: {
    color: '#a8d5a2',
    fontWeight: '700',
    fontSize: 14,
    marginRight: 8,
  },

  Picker: {
    flex: 1,
    color: '#ffffff',
    height: 44,
  },

  AbaContainer: {
    flexDirection: 'row',
    backgroundColor: '#f5e6c8',
    borderBottomWidth: 1,
    borderBottomColor: '#d4ac5a',
  },

  AbaBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  AbaBtnTexto: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7a5c1e',
  },

  EspecieCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#7a5c1e',
  },

  EspecieEmoji: {
    fontSize: 30,
    marginRight: 12,
  },

  EspecieNome: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2c3e2d',
  },

  EspecieTipo: {
    fontSize: 12,
    color: '#7f8c7f',
    marginTop: 2,
  },

  StatusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },

  StatusTexto: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '700',
  },

  CuriosidadeBox: {
    backgroundColor: '#f0f9f0',
    borderLeftWidth: 4,
    borderLeftColor: '#145214',
    borderRadius: 8,
    padding: 14,
    marginTop: 16,
    marginBottom: 10,
  },

  CuriosidadeDestaque: {
    fontSize: 14,
    fontWeight: '800',
    color: '#145214',
    marginBottom: 6,
  },

  CuriosidadeItem: {
    borderLeftWidth: 3,
    borderLeftColor: '#784212',
    paddingLeft: 12,
    marginBottom: 12,
  },
});
