import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width: '100%',
        height: 180 ,
        backgroundColor: 'yellow',
        borderRadius: 15
    },
    viewImagem: {
        width: '30%',
        padding: '10px',
    },
    viewDados: {
        width: '70%',
        padding: 10
    },
    poster : {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    sinopse: {
        marginBottom: 10
    },
    btnComprar: {
        borderRadius: 15,
        bottom: 10
        
    }

});

export default styles;
