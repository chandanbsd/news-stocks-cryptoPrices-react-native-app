import React, {useEffect, useState} from "react";
import { FontAwesome,Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, View, StatusBar,FlatList, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
const alpha = require('alphavantage')({ key: 'XSQA123RZ0SBB56X' });

function Stocks(props){
    const [panels, setPanels] = useState([]);
    const [stockSymbol, setStockSymbol] = useState(null);
   
  
    // const getStock = async(stockName)=>{
    //   let symbol = eval('`'+stockName+'`');
    //   setStockSymbol(stockSymbol)
    //   await alpha.data.intraday(symbol).then(data =>{
    //     console.log(data["Time Series (1min)"]["2021-11-11 15:02:00"]["4. close"]);
    //     return data["Time Series (1min)"]["2021-11-11 15:02:00"]["4. close"];
    //   });
    // }
    
    const getStock = async(stockName)=>{
        let symbol = eval('`'+stockName+'`');
        setStockSymbol(stockSymbol)
        const data = await alpha.data.intraday(symbol)
          console.log(data);
          return data;
        ;
      }
  
    const addPanel = (stockName)=>{
       
      getStock(stockName).then( data =>{
        const dataJson = Object.values(data["Time Series (1min)"])
        console.log(dataJson)
       console.log(data["Time Series (1min)"])
     
       let newPanel = {
         stock:data["Meta Data"]["2. Symbol"],
         id: Date.now(),
         open_value: "$" + dataJson[0]["1. open"].slice(0, -2), 
         high_value: "$" +dataJson[0]["2. high"].slice(0, -2),
         low_value: "$" +dataJson[0]["3. low"].slice(0, -2),
         close_value: "$" +dataJson[0]["4. close"].slice(0, -2),
         onClick:removePanel
       }
        setPanels([...panels,newPanel])
        console.log(newPanel)
      })
    }
  
    const removePanel = (id)=>{
      setPanels(prevPanels => (prevPanels.filter(item => item.id !== id)))
    }
  
    return(
        <View style={styles.container2}>
        <KeyboardAvoidingView behavior="padding" style={styles.innerView}>
            <AddPanel onClick={addPanel}/>
            
            <FlatList
                data={panels}
                renderItem={({item}) => <StockPanel {...item} />}
                keyExtractor={item => item.id}
            />
    
            </KeyboardAvoidingView>
        </View>
    );
}
  
function StockPanel(props){

    return(
        <View style={styles.cityPanel}>
            <Caption stock={props.stock}/>
            <OpenValue open_value={props.open_value}/>
            <HighValue high_value={props.high_value}/>
            <LowValue low_value={props.low_value}/>
            <CloseValue close_value={props.close_value}/>
            <DeleteButton onClick={props.onClick} id={props.id}/>
        </View>
    )
}

function AddPanel(props){

    const [stockName, setStockName] = useState("")

    let getText = (text)=>{
        setStockName(text)
    }

    return(
        <View style={styles.addPanel}>
        <TextInput
            style={styles.input}
            onChangeText={getText}
            value={stockName}
            placeholder="Stock Symbol"
        />

        <TouchableOpacity
            style={styles.submitButton}
            onPress={
            ()=>{
                props.onClick(stockName)
                setStockName("")
            }
            }
        >
            <Entypo name="add-to-list" size={20} color="white" />
        </TouchableOpacity>
        </View>
    )
}

function Caption(props){
    return(
        <Text>Stock Name: {props.stock}</Text>
    )
}

function OpenValue(props){
    return(

        <Text>Opening Value: {props.open_value}</Text>

    )
}

function HighValue(props){
    return(
        <Text>High Value: {props.high_value}</Text>
    )
}

function LowValue(props){
    return(
        <Text>Low Value: {props.low_value}</Text>
    )
}

function CloseValue(props){
    return(
        <Text>Close Value: {props.close_value}</Text>
    )
}

function DeleteButton(props){

    const onClick = ()=>{
        let id = props.id
        props.onClick(id)
    }

    return(
        <TouchableOpacity
            style={styles.submitButton2}
            onPress={onClick}
        >
            <Text style={{color:"white"}}>Remove</Text>

            <FontAwesome name="remove" size={20} color="red" /> 
        </TouchableOpacity>
    )
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

  export default Stocks;