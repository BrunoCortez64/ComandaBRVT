import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={require('./assets/drink.jpg')} />
      <Text style={styles.subtitulo}>Sistema</Text>
      <Text style={styles.titulo}>Drink's</Text>
      <TextInput style={styles.input} placeholder='E-mail' />
      <TextInput style={styles.input} placeholder='Senha' secureTextEntry />
      <Text style={styles.botao}>Entrar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9CAB3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtitulo: {
    color: '#121A2C',
    fontSize: 17,
  },
  
  titulo: {
    color: '#121A2C',
    fontSize: 32,
    fontWeight: 'bold'
  },

  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderColor: '#747474',
    backgroundColor: '#FFF',
    borderWidth: 1,
    marginVertical: 20
  },

  botao: {
    backgroundColor: '#121A2C',
    color: '#FFBA26',
    paddingVertical: 8,
    paddingHorizontal: 60,
    borderRadius: 4
  },

  imagem: {
    width: '100%',
    height: 250,
    position: 'absolute',
    top: 0
  }
});
