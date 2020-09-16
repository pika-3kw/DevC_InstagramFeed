import React from "react";
import { View, StyleSheet, Image } from "react-native";

const PostImage = ({ imgUrl }) => {
  return (
    <View style={styles.postImage}>
      <Image
        source={{
          uri: imgUrl,
        }}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postImage: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  image: {
    width: "100%",
    height: 350,
    marginVertical: 10,
  },
});

export default PostImage;
