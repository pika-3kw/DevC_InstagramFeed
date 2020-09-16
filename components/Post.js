import React from "react";
import { View, StyleSheet } from "react-native";

import PostOwn from "./PostOwn";
import PostImage from "./PostImage";
import PostActions from "./PostActions";

const Post = ({ postImageUrl, username }) => {
  return (
    <View style={styles.post}>
      <PostOwn username={username} />
      <PostImage imgUrl={postImageUrl} />
      <PostActions />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#ecf0f1",
    paddingVertical: 10,
    marginVertical: 10,
  },
});

export default Post;
