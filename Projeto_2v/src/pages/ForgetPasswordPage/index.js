import { TextInput, Text, TouchableOpacity ,
    Image, View } from "react-native";

import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function ForgetPasswordPage(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            
            <TextInput placeholder="email (example@gmail.com)" style={styles.input}/>
                      
            <TouchableOpacity style={styles.btnLogin}>

                <Text>Login</Text>

            </TouchableOpacity>

            <View style={styles.ViewLinks} >

                <Link to={{screen: "RegisterPage"}}>Registre-se</Link>
                
                <Link to={{screen: "LoginPage"}}>Voltar para o login</Link>

            </View>
        </View>
    )
}
