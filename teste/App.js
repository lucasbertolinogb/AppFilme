import { Text, StyleSheet, View } from 'react-native';
import Teste from './src/components/Teste';
import Contador from './src/components/contador';
import { useEffect, useState } from 'react';
import Filme from './src/components/Filme';

const listaFilmes = [
  {
    titulo: "It -A Coisa",
    sinopse: "Sinopse do filme do It",
    urlPoster: "https://br.web.img3.acsta.net/pictures/17/03/30/22/44/345288.jpg"
  },
  {
    titulo: "Gato de botas 2",
    sinopse: "Sinopse do Gato de botas 2",
    urlPoster: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/02/25/1070078955-puss-in-boots-the-last-wish.jpg"
  },
  {
   titulo: "Mario -O filme",
   sinopse: "Sinopse do filme do Mario",
   urlPoster: "https://br.web.img2.acsta.net/pictures/23/04/03/19/45/2854005.jpg"
  },
  {
    titulo: "Sonic -O filme",
    sinopse: "Sinopse do filme do Sonic",
    urlPoster: "https://gujsp.com.br/wp-content/uploads/2020/04/E2DA5A7E-EF86-40BA-A219-F2A1A836E599.jpeg"
   } 
  
]

export default function App() {
  return (
    <View style={styles.container}>
      {listaFilmes.map(filme => <Filme filme={filme} />)}
    </View>
  );
}


/*parte de carregar o site por 2 segundos
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000) // 2 segundos de pausa
  }, [])

  return (
    <View style={styles.container}>
      {loading === true ? <Contador /> : 
      <Text>Carregando...</Text>}
    </View>
  );
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  img: {
    width: 50,
    height: 50
  }
});
