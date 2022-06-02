import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TradesScreen = () => {
  
  return (
    <View  style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Pantalla de trades
      </Text>
    </View>
  );
};

export default TradesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'whi',
    alignItems: 'center',
    justifyContent: 'center',
  }  
});
