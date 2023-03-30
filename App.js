import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/Screens/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Index from './src/Screens/Index';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    // <View style={styles.container}>
    //  <Home />
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   header:()=>null
      // }}
      >
  
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen 
          options={
          {
            title:"Sign In",
            headerStyle:{
              backgroundColor:"#ff4d4d"
            },

            headerTintColor:"white",
            headerTitleAlign:"center",

            headerTitleStyle:{
              fontSize:30,
              fontWeight:"bold",
              fontFamily:""
            }
          }
        }
        name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'orange',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop:30,
    // marginHorizontal:15,
    // borderRadius:5
  },
});
