import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import React from 'react'


import BQScanner from "./BQScanner"

const QRGenerator = ({navigation}) => {
    const userInfo = {
        fullname: "Nicholas",
        email:"admin@gmail.com",
        phone:"0244556677",
        twitter:"@baniico",
        linkedin:"/baniico"
    };
    //console.log(JSON.stringify(userInfo)); 
  return (
    <View> 
  
      <View style={styles.TopContainer}>   
              {/* <Image style={styles.StarImg2}  source={require("./images/ios-arrow-round-back.png")} />  */}
             <View style={styles.StarImg2}>
                  <Text style={styles.logoTest}>NickDanTech</Text>
             </View>
              <TouchableOpacity onPress={()=>{
                  navigation.navigate("Profile")
              }}>
              <Image style={styles.StarImg1}  source={require("../Components/images/1038797.png")} />
              </TouchableOpacity>
    </View> 
    <View style={styles.toptextContainer}>
      <Text style={styles.toptext}>Exchange Contact Information</Text>
    </View>
    <View style={styles.toptextContainer1}>
    <Text style={styles.toptext1}>Scan this QR below to share your contacts</Text>
    </View>
     <View style={styles.QRCode}>
     <QRCode
      value={JSON.stringify(userInfo)}
       //style={styles.QRCode}
       size={250}
    />
     </View>
     <View style={styles.profileContainer}>
      <View>
      <Image style={styles.Image} source={require("../Components/images/profile.jpg")} />
      </View>
        <View style={styles.infoContainer}>
        <Text style={styles.name}>Nicholas Boadi Ofori</Text>
        <Text>0244852180</Text>
        </View>  
        </View>
     <View style={styles.bottomContainer}>
      <View>
      <Text style={styles.wantText}>Want to add a new connection?</Text>
      </View>
      <View style={styles.scanContainer}>
    <TouchableOpacity onPress={()=>{
       navigation.navigate("BQScanner")
     }}>
     <Text style={styles.LetstartText}>Scan QR</Text>
     </TouchableOpacity>
    </View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:20,
        //backgroundColor:"red",
    },
    QRCode:{
        justifyContent:"center",
        alignItems:"center",
       // backgroundColor:"red",
        fontSize:250,
        //width:"100%",
       // height:"40%",
        marginTop:1,
       // size={250} 
    },
    LetstartText:{
     textAlign:"center",
      alignSelf:"center",
      color:"#ff1a75",
      fontSize:20,
      fontWeight:"bold",
      marginHorizontal:10,
       justifyContent: 'center',
     
     },
     LetstartText2:{
      width:70,
      height:2,
      //marginLeft:30,
      marginHorizontal:50,
     alignSelf:"center",
     backgroundColor:"#ff1a75",
    },
    toptextContainer:{
      marginTop:20,
      marginHorizontal:40
    },
    toptextContainer1:{
      width:"85%",
      marginTop:10 ,
      marginHorizontal:40,
      marginBottom:40,
    },
    toptext:{
      fontSize:21,
      //fontWeight:"bold",
    },
    toptext1:{
      fontSize:21,
      color:"gray"
     // fontWeight:"bold",
    },
    bottomContainer:{
      width:"100%",
      height:"15%",
     flexDirection:"row",
      borderColor:"black",
      borderTopWidth:1,
      
      marginTop:60
      
    },
    Image: {
      width: 100,
       height:100,
       marginHorizontal:20, 
      marginTop:60,
     // alignSelf: "",
      borderRadius: 50
    },
    wantText:{
      marginTop:36,
     // marginRight:40,
     marginHorizontal:20
    },
    scanContainer:{
      width:130,
      height:50,
      borderWidth:1,
      marginTop:20,
      
      justifyContent:"center",
    
      borderColor:"red"
    },
    infoContainer:{
     //width:70,
      justifyContent:"center",
      marginHorizontal:0,
      //flexDirection:"row",
      marginTop:70,
     //flex:4
    },
    name:{
      fontWeight:"bold",
      fontSize:17
    },
    profileContainer:{
      flexDirection:"row"
    },
    StarsTop:{ 
      marginHorizontal:10,
      //marginTop:39,
     // marginBottom:90,
      flexDirection:"row",
      justifyContent: 'space-between',
      backgroundColor:"blue",
      marginBottom:20
    },
    StarsTopArrow:{
      marginTop:10,
      marginHorizontal:10,
      alignSelf: "flex-start",
      alignItems:"flex-start",
      borderRadius:20
    },
    StarImg:{
      width:20,
      height:20,
      marginHorizontal:10,
     },
     StarImg2:{
       marginTop:2,
       fontSize:25,
       //width:40,
       //height:40,
      // borderRadius:20,
      // backgroundColor:"white",
       alignSelf:"center",
       marginHorizontal:10,
      },
     StarImg1:{
       marginTop:2,
       width:40,
       height:40,
       borderRadius:20,
       position:"relative",
       marginLeft:60
      //backgroundColor:"red"

       

      //alignItems:"flex-end",
      },
      TopContainer:{
        flexDirection:"row",
        marginTop:10,
        height:100,
        width:"100%",
        backgroundColor:"#ff1a75",
       //justifyContent: 'space-between',
       //alignSelf:"center",
      justifyContent:"center",
       alignItems:"center",
      // marginVertical:20,
      marginHorizontal:5
      },
      logoTest:{
        fontSize:30,
        color:"white",
        fontWeight:"bold",
        marginLeft:50
      },
  });
  export default QRGenerator;