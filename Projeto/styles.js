import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width*0.8;
const MAX_HEIGHT =  Dimensions.get('window').height*0.6;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: MAX_HEIGHT,
      width: MAX_WIDTH
      
    },
    button: {
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#00ffff',
      width: '90%'
    },
    buttomLetra: {
      fontSize: '20px',
      color: 'green'
    },
    titulo: {
      fontSize: '24px',
      marginBottom: '10px' ,
      fontWeight: 'bold'
    },
    sinopse: {
      marginBottom: 10
    },
    box: {
      backgroundColor: 'yellow',
      margin: 15,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagem: {
      height: '200px',
      width: '150px',
      resizeMode: 'cover',
      marginBottom: 10,
    },

  
  })
  
export default styles;
