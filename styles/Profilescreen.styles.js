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
      alignContent:'center',
      marginLeft: 10,
      fontWeight:'bold',
      fontSize:25,
      color:'#00353F',
      marginTop: 20
    },
    speciality: {
      position:'relative',
      zIndex:3,
      fontWeight:'bold',
      fontSize:20,
      color:'#00353F',
      marginTop: 20
    },
    dropdown: {
      position:'relative',
      zIndex:5,
      marginLeft: 10,
      width: 300,
    },
    favorite: {
      position:'relative',
      zIndex:3,
      fontWeight:'bold',
      fontSize:20,
      color:'#00353F',
      marginTop: 20,
      marginLeft: 10
    },
    addspot: {
      marginTop: 160,
      alignItems:'center'
    },
    button: {
      width: 150,
      height: 40,
      backgroundColor: '#00353F',
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 10
      
    },
    textadd: {
      color: '#D46F4D',
      fontWeight: 'bold'
    }
});

export default styles