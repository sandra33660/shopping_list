import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import ShoppingItem from "./components/ShoppingItem";
import ShoppingInput from "./components/ShoppingInput";

export default function App() {
  const [listShopping, setListShopping] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addShoppingHandler = (ShoppingTitle) => {
    if (ShoppingTitle.length === 0) {
      return;
    }
    setListShopping((currentShopping) => [
      ...currentShopping,
      { id: Math.random().toString(), value: ShoppingTitle },
    ]);
    setIsAddMode(false);
  };

  const removeShoppinggHandler = (shoppingId) => {
    setListShopping((currentShopping) => {
      return currentShopping.filter((shopping) => shopping.id != shoppingId);
    });
  };
  const cancelShoppingAddittionHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button
        title="Ajouter à la liste"
        color="#BA55D3"
        onPress={() => setIsAddMode(true)}
      />
      <ShoppingInput
        visible={isAddMode}
        onAddShopping={addShoppingHandler}
        onCancel={cancelShoppingAddittionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listShopping}
        renderItem={(itemData) => (
          <ShoppingItem
            id={itemData.item.id}
            onDelete={removeShoppinggHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
