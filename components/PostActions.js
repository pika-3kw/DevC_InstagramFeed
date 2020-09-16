import React from "react";
import { View, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const PostActions = () => {
  return (
    <View style={styles.postActions}>
      <Feather style={styles.postIcon} name="heart" size={30} color="black" />
      <FontAwesome5
        style={styles.postIcon}
        name="comment-alt"
        size={30}
        color="black"
      />
      <Entypo
        style={styles.postIcon}
        name="share-alternative"
        size={30}
        color="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postActions: {
    flexDirection: "row",
    marginTop: 10,
  },
  postIcon: {
    marginHorizontal: 10,
  },
});

export default PostActions;
