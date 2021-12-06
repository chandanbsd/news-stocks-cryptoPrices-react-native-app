import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, StatusBar,FlatList, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome,Entypo, FontAwesome5 } from '@expo/vector-icons';
import Crypto from './components/Crypto';
import Stocks from './components/Stocks';
import News from './components/News';
import { getNews } from './news';
import Article from './components/Article';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { ALPHA_VANTAGE_KEY } from '@env'

const alpha = require('alphavantage')({ key: ALPHA_VANTAGE_KEY });
const Tab = createBottomTabNavigator();


export default function App() {
  
  return (
   
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={
          {
            tabBarOptions: {
              style: {
                backgroundColor: 'black',
              },
            },
          }
        }
      >
        <Tab.Screen name="News" component={News} 
          options = {{
            tabBarIcon: ({ tintColor, focused }) =>(
            <FontAwesome name="newspaper-o" size={24} color={focused ? "red" : "grey"} />
          ),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          title: 'News',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
        }/>
        
        <Tab.Screen name="Stocks" component={Stocks}
        options = {{
          tabBarIcon: ({ tintColor, focused }) =>(
          <Entypo name="line-graph" size={24} color={focused ? "green" : "grey"} />
          ),
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'grey',
          title: 'Stocks',
          headerStyle: {
            backgroundColor: '#4FA64F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

        <Tab.Screen name="Crypto" component={Crypto} 
        options = {{
          tabBarIcon: ({ tintColor, focused }) =>(
            <FontAwesome5 name="bitcoin" size={24} color={focused ? "gold" : "grey"} />
            ),
            tabBarActiveTintColor: 'gold',
            tabBarInactiveTintColor: 'grey',
            title: 'Crypto',
            headerStyle: {
              backgroundColor: '#d4af37',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, container2: {
    flex: 1,
    backgroundColor: '#ABD5AB',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  container3: {
    flex: 1,
    backgroundColor: '#f6d56d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container4: {
    backgroundColor: '#ff9d5c',
    width: "100%"
  },

  container5:{
    backgroundColor: "#ff9d5c",
    flexDirection: 'row',
    width: "100%",
  },
  header: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  list: {
    width: "90%",
  },
  searchInput: {
    borderBottomColor: "#4657CE",
    borderBottomWidth: 1,
    width: "80%",
    textAlign: "center",
  },icon:{
    width:20,
    height:20
  },addPanel:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',

  },button: {
    alignItems: "center",
    backgroundColor: "#EAEAEA",
  },input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 2,
    padding: 3,
    width: 50,
    margin: 5,
  },cityPanel:{
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 3,
    margin: 5,
    flexDirection: 'column', 
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:"white",
  }, innerView:{
    width:"90%",
  },
  topBar:{
    backgroundColor:"red"
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: 'grey',
    marginRight:50,
    height: 60,
    width:60,
    justifyContent: "center",
    alignItems: "center"
  
 },
 submitButton2: {
  backgroundColor: 'grey',
  padding: 10,
  margin: 15,
  marginTop: 5,
  height: 40,
  width:"30%",
  justifyContent: "center",
  alignItems: "center"

},
 submitButtonText:{
    color: 'white',
    fontSize:20
 },
 input1:{
   margin: 10,
   width: "76%",
   height: 40
 }

});
