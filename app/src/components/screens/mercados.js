import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import BinanceService from "../../services/Binance.service";

const MercadosScreen = () => {
  const [loading, setLoading] = useState(false);
  const [btcPrice, setBTCPrice] = useState();
  const [ethPrice, setETHPrice] = useState();
  const [valor, setValor] = useState(1);

  useEffect(() => {
    obtenerPrecios();
  }, [valor]);

  const obtenerPrecios = async () => {
    setLoading(true);
    try {
      const btcPriceReal = await BinanceService.getBTC();
      const ethPriceReal = await BinanceService.getETH();
      setBTCPrice(btcPriceReal);
      console.log(btcPriceReal);
      setETHPrice(ethPriceReal);
      console.log(ethPriceReal);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container1}>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            marginTop: "20%",
          }}
        >
          Pantalla de mercados
        </Text>
        <Text>{JSON.stringify(btcPrice)}</Text>
        <Text>{JSON.stringify(ethPrice)}</Text>
        <Button
          onPress={() => setValor((valor + 1))}
          title="Precios"
          color="#841584"
        />
      </SafeAreaView>
      <ScrollView style={styles.scrollView}></ScrollView>
    </View>
  );
};

export default MercadosScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    // backgroundColor: 'whi',
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {},
});
