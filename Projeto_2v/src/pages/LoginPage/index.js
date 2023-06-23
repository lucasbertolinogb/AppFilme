import { TextInput, Text, TouchableOpacity ,
    Image, View } from "react-native";

import styles from "./styles";
import { Link } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage(){

    const { signIn } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            
            <TextInput placeholder="email (example@gmail.com)" style={styles.input}/>
           
            <TextInput placeholder="senha (1234)" style={styles.input}/>
                       
            <TouchableOpacity style={styles.btnLogin} 
                 onPress={() => signIn()}>

                <Text>Login</Text>

            </TouchableOpacity>

            <View style={styles.ViewLinks} >

                <Link to={{screen: "RegisterPage"}}>Registre-se</Link>
                
                <Link to={{screen: "ForgetPasswordPage"}}>Esqueceu a senha?</Link>

            </View>
        </View>
    )
}
