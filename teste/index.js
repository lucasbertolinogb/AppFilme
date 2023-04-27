import { Image, Button, Text, View } from "react-native";
import styles from "./style";

export default function Filme(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImagem}>
                <Image style={styles.poster} source={{
                uri: props.filme.urlPoster}} />
            </View>
            
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>{props.filme.titulo}</Text>
                <Text style={styles.sinopse}>{props.filme.sinopse}</Text>
                <Button style={styles.btnComprar}title="Comprar"/>
            </View>

        </View>
    );
}
