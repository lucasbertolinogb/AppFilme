import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../components/styles';
  
  const baseUrl ="https://api.otaviolube.com";

export default function CardFilme({ filme }){

    return (
         <View style={styles.box}>
           
            <Image style={styles.imagem}source={{ uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url }}/>
           
            <Text style={styles.titulo}>{filme.titulo} </Text>

            <Text style={styles.sinopse}>{filme.sinopse}</Text>
           
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttomLetra}>Comprar</Text>
            </TouchableOpacity>
          
          </View>
    )
  }
