import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const ShoppingInput = (props) => {
  const [enteredShopping, setEnteredShopping] = useState("");

  const shoppingInputHandler = (enteredText) => {
    setEnteredShopping(enteredText);
  };
  const addShoppingHandler = () => {
    props.onAddShopping(enteredShopping);
    setEnteredShopping("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ajouter à la liste de course"
          style={styles.input}
          onChangeText={shoppingInputHandler}
          value={enteredShopping}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.Button}>
            <Button title="ANNULER" color="#FF1493" onPress={props.onCancel} />
          </View>
          <View style={styles.Button}>
            <Button
              title="AJOUTER"
              color="#9370DB"
              onPress={addShoppingHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "purple",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default ShoppingInput;
