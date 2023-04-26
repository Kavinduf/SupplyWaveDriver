import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { Image } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { color } from "@rneui/base";
import { KeyboardAvoidingView } from "react-native";
import GreenButton from "../Components/GreenButton";

export default function DocumentsFirstPage({ navigation }) {
  return (
    <View style={{ backgroundColor: "#FFF", flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* header section start */}

        <Text onPress={() => navigation.navigate("EnterVehicleInformation")}>
          Back
        </Text>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 50 }}>
            Enter Photos Of Your
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 5 }}>
            Documents
          </Text>
          <Text style={{ color: "#737373", marginTop: 20 }}>
            Please make sure the details are
          </Text>
          <Text style={{ color: "#737373", marginTop: 5 }}>
            clearly visible
          </Text>

          {/* header section end */}

          {/* Image start */}

          <Image
            source={require("../assets/DocumentsFirstPage-image.png")}
            style={{
              width: 240,
              height: 240,
              marginTop: 50,
            }}
          />
          {/* Image  end */}

          {/* button start*/}
        </View>
        <View
          style={{
            marginTop: 100,
            marginHorizontal: 10,
          }}
        >
          <GreenButton
            onClick={() => {
              navigation.navigate("EnterDocuments");
            }}
            title={"Continue"}
          />
        </View>

        {/* button end*/}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    // alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 20,
    fontSize: 30,
  },
});
