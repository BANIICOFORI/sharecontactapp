import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import imgphoto from "../Components/images/Mphoto.jpg"

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={imgphoto} style={styles.img} />

      <View style={styles.inputContainer}>
        <Text style={styles.inputemail}>Email</Text>
        <TextInput style={styles.inputLfelid} placeholder="nickdanconstractions@gmail.com"/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputpassword}>Password</Text>
        <TextInput  
        style={styles.inputLfelidpassword} 
        secureTextEntry={true}
          
        />
      </View>
      <TouchableOpacity style={styles.LoginButton}>
        <Text style={styles.LoginButtonText}>SING IN</Text>
      </TouchableOpacity>
     
        <TouchableOpacity>
          <Text style={styles.ForgotpasswordText}>Forgort? Reset Password</Text>
          <View style={styles.ForgotpasswordTextLine}></View>
        </TouchableOpacity>
    
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 380,
    backgroundColor: "white",
    marginTop: 1,
    alignSelf: "center",
    backgroundColor:"white",
    borderBottomWidth: 5,

    borderRadius: 20,
    borderBottomColor: "orange"
  },
  img: {
    width: 380,
    height: 200,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: 'center',
    marginVertical: 1
  },
  inputContainer: {
    marginVertical: 20,
    flexDirection: "row"
  },
  inputemail: {
    marginHorizontal: 15,
    marginVertical: 15,
    fontWeight: "bold",
    color:"gray",
    fontSize:18,
  },
  inputLfelid: {
    width: 300,
    borderWidth: 0,
   backgroundColor: "white",
    borderColor: "white",
    textAlign:"right"
  },
  inputpassword: {
    marginHorizontal: 15,
    marginVertical: 15,
    fontWeight: "bold",
    color:"gray",
    fontSize:18,
  },
  inputLfelidpassword: {
    width: 270,
    borderWidth: 0,
    backgroundColor: "white",
    textAlign:"right",
    secureTextEntry:"true",
    outlineStyle: 'none',
  },
  LoginButton: {
    backgroundColor: "#ff4d4d",
    width: 360,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom:50,
    borderRadius: 5,
  },
  LoginButtonText:{
    textAlign:"center",
    fontSize:22,
    color:"white",
    fontWeight:"bold",
  },
  ForgotpasswordTextLine:{
    width:128,
    height:2,
    marginLeft:85,
    //marginHorizontal:50,
   //alignSelf:"center",
   backgroundColor:"#ff1a75",
  },
  ForgotpasswordText:{
    textAlign:"left",
    fontSize:18,
    color:"gray",
    marginLeft:10
  },
});


