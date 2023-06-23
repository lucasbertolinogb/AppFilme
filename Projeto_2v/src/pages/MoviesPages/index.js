import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import CardFilme from '../../components/index';
import { SafeAreaView } from 'react-native-web';

export default function MoviesPages() {
    
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
        <SafeAreaView style={style.container}>

            {filmes.length > 0 ? <ScrollView horizontal>
                {filmes.map(filme => <CardFilme key={filme.id}
                 filme={filme.attributes}/>)
                }
            </ScrollView> : <ActivityIndicator size= {'large'}/>}

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },

  });
