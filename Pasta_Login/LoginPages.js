import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';




export default function LoginPages(){
    return(
        <View style={styles.container}>
        <Text>Teste login</Text>
        <TouchableOpacity onPress={handleLinkPress}>
          <Text>Link</Text>
        </TouchableOpacity>
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
  });
  
