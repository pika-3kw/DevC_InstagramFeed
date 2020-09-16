import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { Feather } from "@expo/vector-icons";

const Appbar = () => {
  return (
    <View style={styles.appbar}>
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Feather style={styles.inboxIcon} name="inbox" size={30} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  appbar: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  logo: {
    height: "70%",
  },
  inboxIcon: {
    position: "absolute",
    bottom: 15,
    right: 15,
  },
});

export default Appbar;
