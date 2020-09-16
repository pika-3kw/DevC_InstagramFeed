import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Post from "./Post";

const postData = [
  {
    id: 1,
    username: "Giang Nam",
    postImageUrl:
      "https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg",
  },
  {
    id: 2,
    username: "pika-3kw",
    postImageUrl:
      "https://agotourist.com/wp-content/uploads/2018/09/cong-troi-da-lat-view.jpg",
  },
  {
    id: 3,
    username: "nam99hy",
    postImageUrl:
      "https://img.mayflower.vn/2018/09/bo-hoa-ve-dep-dac-biet-89.jpg",
  },
];

const Body = () => {
  const renderAllPost = (data) =>
    data.map((item) => (
      <Post
        key={item.id}
        username={item.username}
        postImageUrl={item.postImageUrl}
      />
    ));

  return (
    <View style={styles.body}>
      <ScrollView>{renderAllPost(postData)}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 8,
  },
});

export default Body;
