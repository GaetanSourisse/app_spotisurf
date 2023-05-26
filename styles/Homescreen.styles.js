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
    subtitleapp: {
      fontWeight:'bold',
      fontSize:20,
      textDecorationLine:'underline',
      backgroundColor:'#FFBF66',
      color:'#00353F'
    },
    favorite: {
      backgroundColor:'#FFBF66',
      alignItems: 'center',
      paddingVertical: 20,
    },
    spotlist: {
      backgroundColor:'#FFBF66',
      marginBottom:300,
      alignItems: 'center'
      
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      
    },
    titlespot: {
      fontStyle:'italic',
      fontWeight:900,
      fontSize: 15,   
      color:'#00353F',
      paddingBottom: 4,
      marginHorizontal: 10
    },
    subtitlespot: {
      fontStyle:'italic',
      fontWeight:900,
      fontSize: 12,   
      color:'#00353F',
      paddingBottom: 4,
      marginHorizontal: 10,
      width: 150
    },
    picture:{
      width:160,
      height:200,
      borderRadius:7,
      marginBottom: 20,
      marginHorizontal: 10
    }
});

export default styles
