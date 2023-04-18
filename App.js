import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Home from "./src/Screens/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Index from './src/Screens/Index';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import QRGenerator from "./src/Screens/QRGenerator";
import BQScanner from './src/Screens/BQScanner';
import Profile from './src/Screens/Profile';
import MemmberProfile from './src/Screens/MemmberProfile';
import TakeImage from './src/Screens/TakeImage';
import { Entypo, AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome, Feather } from "@expo/vector-icons";



export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator
    //  screenOptions={{
    //      header:()=>null
    //  }}
      >
        <Stack.Screen
         name="Home" 
         component={Home} 
         options={{ headerShown: false }}
         />
        <Stack.Screen 
        name="Index" 
        component={Index} 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="QRGenerator" 
        component={QRGenerator} 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
          options={
          {
            title:"Sign In",
            headerStyle:{
              backgroundColor:"#ff1a75"
            },

            headerTintColor:"white",
            headerTitleAlign:"center",
            
            headerTitleStyle:{
              fontSize:30,
              fontWeight:"bold",
              //fontFamily:""
            }
          }
        }
        name="LoginScreen" component={LoginScreen} />
        <Stack.Screen 
            options={
              {
                title:"Register",
                headerStyle:{
                  backgroundColor:"#ff1a75"
                },
    
                headerTintColor:"white",
                headerTitleAlign:"center",
    
                headerTitleStyle:{
                  fontSize:30,
                  fontWeight:"normal",
                  //fontFamily:""
                }
              }
            }
        name="RegisterScreen" component={RegisterScreen}  />
       
       
       
        <Stack.Screen 
          options={
          {
            title:"",
            headerStyle:{
              backgroundColor:"#ff1a75"
            },

            headerTintColor:"white",
            headerTitleAlign:"center",

            headerTitleStyle:{
              fontSize:30,
              fontWeight:"bold",
              //fontFamily:""
            }
          }
        }
        name="BQScanner" component={BQScanner} />
          <Stack.Screen 
          
        //   options={
        //   {
        //     title:"My Profile",
        //     headerStyle:{
        //       backgroundColor:"#ff4d4d"
        //     },
        //     headerTintColor:"white",
        //     headerTitleAlign:"center",
        //     headerTitleStyle:{
        //       fontSize:30,
        //       fontWeight:"normal",
        //       //fontFamily:""
        //     }
        //   }
        // }
        name="Profile" component={Profile} 
        options={{ headerShown: false }}
        />
          <Stack.Screen 
          options={
          {
            title:"Member Profile",
            headerStyle:{
              backgroundColor:"#ff1a75"
            },
            headerTintColor:"white",
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:30,
              fontWeight:"normal",
              //fontFamily:""
            }
          }
        }
        name="MemmberProfile" component={MemmberProfile} />
        <Stack.Screen 
          options={
          {
            title:"Member Profile",
            headerStyle:{
              backgroundColor:"#ff1a75"
            },
            headerTintColor:"white",
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:30,
              fontWeight:"normal",
              //fontFamily:""
            }
          }
        }
        name="TakeImage" component={TakeImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
    marginHorizontal:15,
    borderRadius:5
  },
});
