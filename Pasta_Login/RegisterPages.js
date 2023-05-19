import { Text, StyleSheet, View, Button } from "react-native-web";
import { useNavigation } from '@react-navigation/native';


export default function RegisterPages(){
    const navigation = useNavigation();

    const goToProfile = () => {
        navigation.navigate('Profile');
      };
    
    return(
        <View>
            <Text>Register Page</Text>
            <Button title="Go to Profile" onPress={goToProfile} />
        </View>
    
    
    );
}
