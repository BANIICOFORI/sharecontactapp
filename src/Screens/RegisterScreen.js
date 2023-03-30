import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import imgphoto from "../Components/images/user2.jpg"

const RegisterScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
       <View style={styles.addphotoContaianer}>
       <Image source={imgphoto} style={styles.img}/>
       <TouchableOpacity>
        <Text style={styles.addphoto}>ADD PROFILE PHOTO</Text>
       </TouchableOpacity>
      </View> 
        <View style={styles.inputContainer}>
          <Text style={styles.inputemail}>Full Name</Text>
          <TextInput style={styles.inputLfelid} placeholder="Nicholas Boadi Ofori"/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputpassword}>Email</Text>
          <TextInput  placeholder="nickdanconstractions@gmail.com"
          style={styles.inputLfelidpassword} 
          secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputemail}>Phone No</Text>
          <TextInput style={styles.inputLfelid} 
            placeholder="+233(244) 245190"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputpassword}>Role</Text>
          <TextInput 
          placeholder="Administrator" 
          style={styles.inputLfelidpassword} 
          //secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputemail}>Twitter</Text>
          <TextInput style={styles.inputLfelid} placeholder="@baniico"/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputpassword}>LinkedIn</Text>
          <TextInput 
          placeholder=""  
          style={styles.inputLfelidpassword} 
          //secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.LoginButton}>
          <Text style={styles.LoginButtonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
  )
}

export default RegisterScreen;

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
    width: 70,
    height: 80,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: 'center',
    //marginVertical:20,
   // tinColor:"orange"
  },
  inputContainer: {
    marginVertical: 10,
    flexDirection: "row",
    width:100,
  },
  inputemail: {
    marginHorizontal: 5,
    marginVertical: 5,
    fontWeight: "bold",
    color:"gray",
    fontSize:14,
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
    marginVertical: 5,
    fontWeight: "bold",
    color:"gray",
    fontSize:16,
  },
  inputLfelidpassword: {
    width: 360,
    borderWidth: 0,
    backgroundColor: "white",
    textAlign:"right",
    secureTextEntry:"true",
    outlineStyle: 'none',
  },
  LoginButton: {
    backgroundColor: "#ff1a75",
    width: 360,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 2,
    marginTop:29,
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
  addphoto:{
    textAlign:"center",
    color:"#ff1a75"
  },
  addphotoContaianer:{
    marginBottom:20
  },
});



