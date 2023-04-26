import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";

const OutlineButton = ({ onClick, title }) => {
  return (
    <Button
      color={"#BDE4B8"}
      radius={7}
      raised
      onPress={onClick}
      title={title}
      titleStyle={{ color: "#2A8B00", fontWeight: "bold", fontSize: 16 }}
      buttonStyle={{
        height: 40,
        borderColor: "#2A8B00",
        borderWidth: 2,
        borderRadius: 7,
      }}
    />
  );
};

export default OutlineButton;

const styles = StyleSheet.create({});
