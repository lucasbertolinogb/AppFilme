import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


export default function App() {

  let [filmes, setFilmes] = useState([]);

  

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';
  
  const MAX_WIDTH = Dimensions.get('window').width*0.8;
  const MAX_HEIGHT =  Dimensions.get('window').height*0.6;

  
  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto);
        setFilmes(objeto.data);
      })

  }, []);



/*
return (
  <View style={styles.container}>
    {filmes.map(filme => <Text filme={filme.attributes.titulo} />)}
    
  </View>
);
}*/
/*
  return (
    <View style={styles.container}>
      {filmes.length > 0 ? filmes.map(filme => <Text>{filme.attributes.titulo} {filme.attributes.sinopse}</Text>  )  
      : <Text>Carregando</Text>}
    </View>
  );
}
*/

return (
  <View style={styles.container}>
    {filmes.length > 0 ? filmes.map(filme => (
      <View>

        <Text>{filme.attributes.titulo} </Text>
        <Text>{filme.attributes.sinopse}</Text>

        
        <TouchableOpacity style={styles.button}>
          <Text>Comprar</Text>
        </TouchableOpacity>

        <View style={styles.viewImagem}>
                
          <Image
          source={{ uri: 'https://api.otaviolube.com/'+ filme.attributes.poster }}
          style={styles.imagem}
          />
            
            <Image
          source={{ uri: baseURL + filme.poster.data.attributes.url }}
          style={styles.imagem}
          />
          

        </View>
            


      </View>
    )) : <Text>Carregando</Text>}
  </View>
    


);
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    backgroundColor: 'yellow',
    margin: '30px',
    alignContent: 'center',
    height: 'MAX_HEIGHT',
    width: 'MAX_WIDTH'

  },
  button: {
    textAlign: 'center'
  },


  imagem: {
    width: 100,
    height: 100
  },
  viewImagem: {
    width: '30%',
    padding: '10px',
},
})
