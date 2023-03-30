import React from 'react'
import Logo from "../Components/images/construction-company-logo.png"
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({navigation}) => {
  return (
   <View style={styles.container}>
     <View style={styles.logoContainer}>
       <Image source={Logo} style={styles.img} />
     
      </View>
     <View style={styles.logoContainer}>
      <Text style={styles.logoText}>NickDan CONSTRUCTION COMPANY CONTACTS</Text>
      </View>
      
      <View style={styles.logoContainer}>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("Index")
      }}>
      <Text style={styles.LetstartText}>GET STARTED</Text>
      </TouchableOpacity>
      <View style={styles.LetstartText2}>
      </View>
     
      </View>
     
    
   </View>
  )
}
export default Home;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f2f2f2",
        marginTop:0,
        alignSelf:"center",
        marginHorizontal:20,
    },
    LetstartText2:{
      width:130,
      height:4,
      marginLeft:30,
     alignSelf:"center",
     backgroundColor:"red",
  
    },
    logoContainer:{
      backgroundColor:"#f2f2f2",
      width:350,
      height:250,
      marginBottom:0,
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20
    },
    logoText:{
      color:"gray",
     textAlign:"center",
     marginTop:80,
     fontSize:25,
     fontWeight:"bold",
     fontWeight:"bold",
      justifyContent: 'center',
      
    },
    LetstartText:{
     textAlign:"center",
     marginTop:80,
     fontSize:22,
     fontWeight:"bold",
      justifyContent: 'center',
      
      
    },

    img:{
        width:350,
        height:300,
        alignItems:"center"
    },

});


