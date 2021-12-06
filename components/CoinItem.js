// Acknowledgement: The following portion of the code is from the youtube tutorial of CoinGeko API
// https://youtu.be/k9ptn9zNHng

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }) => (
  <View style={styles.containerItem}>
    
    <View style={styles.coinName}>
      <Image source={{ uri: coin.image }} style={styles.image} />
      <View style={styles.containerNames}>
        <Text style={styles.text}>{coin.name}</Text>
        <Text style={styles.textSymbol}>{coin.symbol}</Text>
      </View>
    </View>
    
    <View>
      <Text style={styles.textPrice}>${coin.current_price}</Text>
      <Text
        style={[
          styles.pricePercentage,
          coin.price_change_percentage_24h > 0
            ? styles.priceUp
            : styles.priceDown,
        ]}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </Text>
    </View>
    
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  textPrice: {
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#fc4422",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
});

export default CoinItem;