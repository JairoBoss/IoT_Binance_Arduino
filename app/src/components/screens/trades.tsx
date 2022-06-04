import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Reinput from "reinput";
import MovimientoService from "../../services/Movimiento.service";

const TradesScreen = () => {
  const [datos, setDatos] = useState({
    usuario: "",
  });

  const [datosError, setDatosError] = useState({
    usuario: "",
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "ETHUSDT", value: "ETHUSDT" },
    { label: "BTCUSDT", value: "BTCUSDT" },
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: "Compra", value: "Compra" },
    { label: "Venta", value: "Venta" },
  ]);

  const [number, onChangeNumber] = React.useState(null);

  const accion = async () => {
    const data = {
      usuario: datos.usuario,
      moneda: value,
      tipo: value1,
      cantidad: number,
    };
    setDatos({ ...datos, usuario: "" });
    setValue(null);
    setValue1(null);
    onChangeNumber(null);
    const consulta = await MovimientoService.create(data);
    console.log(consulta);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Pantalla de trades
      </Text>
      <Reinput
        label="Usuario"
        paddingBottom={1}
        paddingTop={1}
        marginTop={1}
        marginBottom={1}
        onBlur={() => {
          if (datos.usuario == "") {
            setDatosError({ ...datosError, usuario: "Campo requerido" });
          } else {
            setDatosError({ ...datosError, usuario: null });
          }
        }}
        error={datosError.usuario}
        onChangeText={(usuario) => setDatos({ ...datos, usuario: usuario })}
        value={datos.usuario}
      />
      <DropDownPicker
        placeholder="Seleciona una moneda"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <DropDownPicker
        placeholder="Compra o Venta"
        open={open1}
        value={value1}
        items={items1}
        setOpen={setOpen1}
        setValue={setValue1}
        setItems={setItems1}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Cantidad"
        keyboardType="numeric"
      />
      <Button onPress={() => accion()} title="Ir" color="#841584" />
    </View>
  );
};

export default TradesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'whi',
    // alignItems: "center",
    // justifyContent: "center",
    margin: "20%",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
});
