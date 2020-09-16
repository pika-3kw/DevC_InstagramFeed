import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Appbar from "./components/Appbar";
import Body from "./components/Body";

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
