import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6951F5',
    },
    imgLogo:{
        height: '150px',
        width: '150px',
        marginBottom: '10px'
    },
    input:{
        border: '1px solid black',
        width: '70%',
        height: 30,
        padding: 5,
        marginBottom: 10,
        borderRadius: 5
    },
    btnLogin:{
        border: '2px solid black',
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#6977F5',
        
    },
    ViewLinks:{
        marginTop: 10,
        flexDirection: 'row',
        width: '68%',
        justifyContent: 'space-between'
    }
    
})

export default styles;
