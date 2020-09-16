import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const PostOwn = ({ username }) => {
  return (
    <View style={styles.postOwn}>
      <Image
        source={{
          uri:
            "https://i.pinimg.com/236x/b4/a3/5b/b4a35b768e6ad75b184f2e104d9eb650.jpg",
        }}
        style={styles.avatar}
        resizeMode="contain"
      />
      <Text style={styles.name}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postOwn: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  avatar: {
    flex: 1,
    width: 60,
    height: 60,
    borderRadius: 999,
    marginHorizontal: 10,
  },
  name: {
    flex: 4,
    fontSize: 18,
  },
});

export default PostOwn;
