import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MercadosScreen from "./screens/mercados";
import MovimientosScreen from "./screens/movimientos";
import TradesScreen from "./screens/trades";

import StackScreen from "./screens/stack";

import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Mercados"
      screenOptions={{
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Mercados",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="barchart" size={size} color={color} />
          ),
          tabBarBadge: 2,
          headerShown: false,
        }}
        name="Mercados"
        component={MercadosScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Trades",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" size={size} color={color} />
          ),
          headerShown: false,
        }}
        name="Trades"
        component={TradesScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Movimientos",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="wallet" size={size} color={color} />
          ),
          headerShown: false,
        }}
        name="Movimientos"
        component={MovimientosScreen}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
