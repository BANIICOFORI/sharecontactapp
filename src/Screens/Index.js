import React from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import Logo from "../Components/images/photo1.jpg"

const Index = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={Logo} style={styles.img} />
    
     </View>
    <View style={styles.logoContainer}>
     <Text style={styles.logoText}>KEEP INTOUCH WITH THE PEOPLE OF CONSTRUCTION</Text>
     <Text style={styles.logoText2}>Sigin or Register with your NickDan email </Text>
     </View>
     <View style={styles.LoginRegisterContainer}>
     <View>
     <TouchableOpacity onPress={()=>{
       navigation.navigate("RegisterScreen")
     }}>
     <Text style={styles.LetstartText}>REGISTER</Text>
     </TouchableOpacity>
     <View style={styles.LetstartText2}>
     </View >
     </View>
     <View>
     <TouchableOpacity onPress={()=>{
       navigation.navigate("LoginScreen")
     }}>
     <Text style={styles.LetstartText}>SIGN IN</Text>
     </TouchableOpacity>
     <View style={styles.LetstartText2}>
     </View>
     </View>
     </View>
    
   
  </View>
  )
}

export default Index;
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:380,
        backgroundColor:"#f2f2f2",
        marginTop:38,
        alignSelf:"center",
        justifyContent:"center",
        marginHorizontal:0,
        borderWidth:1,
    //   borderBottomWidth:5,
    //  borderTopWidth:40,
      borderRadius:20,
      borderBottomColor:"orange"
       
    },
    LetstartText2:{
      width:70,
      height:2,
      //marginLeft:30,
      marginHorizontal:50,
     alignSelf:"center",
     backgroundColor:"red",
    
    },
    logoContainer:{
      backgroundColor:"#f2f2f2",
      width:380,
      height:280,
      marginBottom:20,
      //borderBottomRightRadius:20,
      //borderBottomLeftRadius:20
    },
    logoText:{
      color:"#4d4d4d",
     //textAlign:"center",
     marginTop:20,
     fontSize:18,
     //fontWeight:"bold",
     fontWeight:"bold",
      justifyContent: 'center',
      marginHorizontal:20
      
    },
    logoText2:{
        color:"#8c8c8c",
       textAlign:"center",
       marginTop:10,
       fontSize:18,
        //justifyContent: 'center',
        
      },
    LetstartText:{
     textAlign:"center",
     marginTop:40,
     fontSize:20,
     fontWeight:"bold",
     marginHorizontal:10,
      justifyContent: 'center',
    },
    img:{
        width:360,
        height:360,
        //alignItems:"center",
         alignSelf:"center",
        //justifyContent: 'center',
       // marginVertical:5
    },
    LoginRegisterContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:100,
        borderRadius:20
        
    },

});

