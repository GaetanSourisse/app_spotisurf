import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
      paddingVertical: 30,
      backgroundColor:'#00353F',
    
    },
    titleapp: {
      textAlign: 'center',
      marginTop: 15,
      fontWeight: 'bold',
      fontSize:30,
      color:'#D46F4D',
      
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFBF66'
    },
    signupText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#00353F',
        marginBottom: 30
    },
    signupInput: {
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: "#8e93a1",
        marginBottom: 30,
    },
    buttonStyle: {
        backgroundColor: '#00353F',
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 15,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#D46F4D',
        textTransform: 'uppercase',
        fontWeight: 'bold'
        
    },
    imageContainer: { justifyContent: "center", alignItems: "center" },
    imageStyles: { width: 100, height: 100, marginVertical: 20 }
})
export default styles
