import React,{useState, useEffect} from "react";
import { StyleSheet, Text, View, StatusBar,FlatList, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { FontAwesome,Entypo, FontAwesome5 } from '@expo/vector-icons';
import { getNews } from '../news';
import Article from './Article';

function News(props){

    const [articles,setArticles] = useState([])
    const [refreshing, setRefreshing] = useState(true)
    const [companyName, setComapanyName] =useState('Microsoft')
  
    // componentDidMount() {
    //   this.fetchNews(this.state.companyName);
    // }

    useEffect(()=>{
        fetchNews(companyName)
    },[])
   
    const fetchNews = (companyName) => {
      getNews(companyName)
        .then(articles =>{setArticles(articles)
        setRefreshing(false)} )
        .catch(() => setRefreshing(false));
    }
  
    const handleRefresh = () => {
        setRefreshing(true)
        fetchNews(companyName)
    }
    
    const handleCompanyName = (text) => {
      setComapanyName(text)
    }

    return (
        
        <View style={styles.container4}>
        
          <View style={styles.container5}>
          <TextInput style = {styles.input1}
                 underlineColorAndroid = "transparent"
                 placeholder = "Enter Company Name"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {handleCompanyName}/>
          <TextInput />
          <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => handleRefresh(companyName)
                 }>
                   <FontAwesome5 name="search" size={24}/>
              </TouchableOpacity>
              </View>
        <FlatList
          data={articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={item => item.url}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
        </View>
      );
    }

export default News

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