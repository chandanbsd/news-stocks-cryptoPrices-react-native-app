// Acknowledgement: The following portion of the code is from the youtube tutorial of CoinGeko API
// https://youtu.be/k9ptn9zNHng



import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, StatusBar,FlatList, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import CoinItem from "./CoinItem";

function Crypto(props){
    const [coins, setCoins] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("");
    const loadData = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json();
      setCoins(data);
    };
  
    useEffect(() => {
      loadData();
    }, []);
  
    return(
  
      <View style={styles.container3}>
        <StatusBar backgroundColor="#141414" />
  
        <View style={styles.header}>
          <Text style={styles.title}>Search:</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search a Coin"
            placeholderTextColor="#858585"
            onChangeText={(text) => text && setSearch(text)}
          />
        </View>
  
        <FlatList
          style={styles.list}
          data={coins.filter(
            (coin) =>
              coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
              coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CoinItem coin={item} />}
          refreshing={refreshing}
          onRefresh={async () => {
            setRefreshing(true);
            await loadData();
            setRefreshing(false);
          }}
        />
      </View>
  
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

  export default Crypto