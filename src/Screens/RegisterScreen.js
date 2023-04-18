import React,{ useState, useEffect }  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput, ScrollView,  } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
//import { TextInput } from "react-native-paper";
import imgphoto from "../Components/images/user2.jpg";
import * as ExpoImagePicker from 'expo-image-picker';


const RegisterScreen = ({navigation}) => {
  const [image, setImage] = useState(null);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [role, setRole] = useState("");
  const [twitter, setTwitter] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");
  
  const RegisterScreen = async () => {
    // No permissions request is necessary for launching the image library
   // const [status, requestPermission] = ExpoImagePicker.useCameraPermissions();
    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.uri);
    }
  };
  return (
      <ScrollView style={styles.container}>

  
       <View style={styles.addphotoContaianer}>
       <TouchableOpacity
        onPress={RegisterScreen}>
       {/* <Image source={imgphoto} style={styles.img}/> */}
        <Text style={styles.addphoto}>ADD PROFILE PHOTO</Text>
        <Image source={{uri:image}} style={styles.img} />
       </TouchableOpacity>
      </View> 
        <View style={styles.inputContainer}>
          <Text style={styles.inputemail}>Full Name</Text>
          <TextInput style={styles.inputLfelid} placeholder="Nicholas Boadi Ofori" onChange={fullname}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputpassword}>Email</Text>
          <TextInput type="text" placeholder="nickdanconstractions@gmail.com"
          style={styles.inputLfelidpassword} 
         // secureTextEntry={true}
         onChange={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputemail}>Phone No</Text>
          <TextInput style={styles.inputLfelid} 
            placeholder="+233(244) 245190"
            onChange={phoneNo}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputpassword}>Role</Text>
          <TextInput 
          placeholder="Administrator" 
          style={styles.inputLfelidpassword} 
          //secureTextEntry={true}
          onChange={role}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputemail}>Twitter</Text>
          <TextInput style={styles.inputLfelid} 
          placeholder="@baniico"
          onChange={twitter}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputpassword}>LinkedIn</Text>
          <TextInput 
          placeholder="/baniico"  
          style={styles.inputLfelidpassword} 
          //secureTextEntry={true}
          onChange={LinkedIn}
          />
        </View>
        <TouchableOpacity style={styles.LoginButton}>
          <Text style={styles.LoginButtonText}>REGISTER</Text>
        </TouchableOpacity>
        </ScrollView>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"99%",
    backgroundColor: "white",
    marginTop: 10,
    alignSelf: "center",
    backgroundColor:"white",
    borderBottomWidth: 1,
    borderRadius: 20,
    borderBottomColor: "orange"
  },
  img: {
    width: "100%",
    height: 250,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: 'center',
    //marginVertical:20,
   // tinColor:"orange"
  },
  inputContainer: {
    marginVertical: 10,
    flexDirection: "row",
    width:"40%",
    marginHorizontal: 5,
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
    marginHorizontal:5,
    marginVertical: 5,
    fontWeight: "bold",
    color:"gray",
    fontSize:16,
  },
  inputLfelidpassword: {
    width: 300,
    borderWidth: 0,
    backgroundColor: "white",
    textAlign:"right",
    //secureTextEntry:"true",
    //outlineStyle: 'none',
    marginRight:90,
  },
  LoginButton: {
    backgroundColor: "#ff1a75",
    width: 300,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 2,
    marginTop:29,
    marginBottom:50,
    borderRadius: 10,
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



