import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../components/styles';
import { Link } from '@react-navigation/native';
  
  const baseUrl ="https://api.otaviolube.com";

export default function CardFilme({ filme }){

    return (
         <View style={styles.container}>
           
            <Image style={styles.imagem}source={{ uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url }}/>
           
            <Text style={styles.titulo}>{filme.titulo} </Text>

            <Text style={styles.sinopse}>{filme.sinopse.length >
            200 ? filme.sinopse.substring(0,200) + "..." : filme.sinopse}</Text>

            <Link to={{screen: "MovieDetailsPage",
          params: {filme: filme}}}>Saiba mais...</Link>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttomLetra}>Comprar</Text>
            </TouchableOpacity>
          
          </View>
    )
  }
