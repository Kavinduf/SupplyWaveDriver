import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";

const DarkGreenButton = ({ onClick, title }) => {
  return (
    <Button
      color={"#2A8B00"}
      radius={7}
      raised
      onPress={onClick}
      title={title}
      titleStyle={{ color: "#BDE4B8", fontWeight: "bold", fontSize: 16 }}
      buttonStyle={{
        height: 40,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: "#2A8B00",
      }}
    />
  );
};

export default DarkGreenButton;

const styles = StyleSheet.create({});
