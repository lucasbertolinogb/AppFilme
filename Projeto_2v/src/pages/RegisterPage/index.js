import { TextInput, Text, TouchableOpacity ,
    Image, View } from "react-native";

import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function RegisterPage(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            
            <TextInput placeholder="username" style={styles.input}/>
            
            <TextInput placeholder="email (example@gmail.com)" style={styles.input}/>
            
            <TextInput placeholder="senha (1234)" style={styles.input}/>
           
            <TouchableOpacity style={styles.btnLogin}>

                <Text>Registrar</Text>

            </TouchableOpacity>

            <View style={styles.ViewLinks} >

                <Link to={{screen: "LoginPage"}}>Voltar para o Login</Link>
                
                <Link to={{screen: "ForgetPasswordPage"}}>Esqueceu a senha?</Link>

            </View>
        </View>
    )
}
