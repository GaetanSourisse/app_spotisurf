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
    // card: {
    //   display: 'flex',
     
    // },
    framepicture: {
      alignItems:'center'
    },
    picture:{
      width:170,
      height:170,
      borderRadius: 85,
      marginTop: 20,
    },
    name: {
      marginLeft: 10,
      fontWeight:'bold',
      fontSize:20,
      color:'#00353F',
      marginTop: 20
    },
    speciality: {
      
      fontWeight:'bold',
      fontSize:20,
      color:'#00353F',
      marginTop: 20
    },
    dropdown: {
      marginLeft: 10,
      width: 300,
    }
});

export default styles