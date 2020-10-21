import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ShoppingItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#7FFFD4",
    borderColor: "#00FFFF",
    borderRadius: 10,
  },
});
export default ShoppingItem;
