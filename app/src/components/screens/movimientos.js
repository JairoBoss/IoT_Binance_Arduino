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
import { Movimiento } from "../../models/Movimiento";
import MovimientoService from "../../services/Movimiento.service";
import { VStack, Box, Divider } from "native-base";

const MovimientosScreen = () => {
  const [loading, setLoading] = useState(false);
  const [movimientos, setMovimientos] = useState([]);
  useEffect(() => {
    obtenerMovimientos();
  }, []);

  const obtenerMovimientos = async () => {
    setLoading(true);
    try {
      const results = await MovimientoService.getAll();
      console.log(results);
      setMovimientos(results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container1}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              marginTop: "20%",
            }}
          >
            Pantalla de movimientos
          </Text>
          {movimientos.map((element, index) => {
            return (
              <Text
                style={{
                  fontSize: 30,
                  textAlign: "center",
                  marginTop: "20%",
                }}
              >
                {JSON.stringify(element)}
              </Text>
            );
          })}
          <Button
            onPress={() => obtenerMovimientos()}
            title="Movimientos"
            color="#841584"            
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MovimientosScreen;

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
