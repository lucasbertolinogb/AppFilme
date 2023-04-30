import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import CardFilme from './src/components';

export default function App() {

  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto);
        setFilmes(objeto.data);
      })

  }, []);



return (
  <View style={style.container}>
    
    {filmes.length > 0 ? filmes.map(filme => <CardFilme key={filme.id} filme={filme.attributes}/>) : 
    <Text style={{}}>Carregando</Text>}
      
  </View>


  );
}

    const style = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

    });
