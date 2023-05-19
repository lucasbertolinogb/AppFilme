import { Text, StyleSheet, View } from "react-native-web";
import { useNavigation } from '@react-navigation/native';


export default function RegisterPages(){
    const navigation = useNavigation();

    const goToProfile = () => {
        navigation.navigate('Profile');
      };
    
    return(
        <Button title="Go to Profile" onPress={goToProfile} />
        
    
    
    );
}
