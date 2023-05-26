import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
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
    picture: {
        width: 400,
        height: 200
    },
    titlespot:{
        fontStyle:'italic',
        fontWeight: 900,
        fontSize: 30,
        paddingTop: 20,
        color:'#00353F',
        paddingBottom: 4
    },
    location: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#00353F',
        fontStyle:'italic',
    },
    description: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'#00353F',
        fontStyle:'italic',
        paddingVertical: 5,
        
    },
    textdetail: {
        paddingHorizontal: 10,
        backgroundColor:'#FFBF66'
    },
 
    map: {
      width: 370,
      height: 297,
    },    
    
});

export default styles