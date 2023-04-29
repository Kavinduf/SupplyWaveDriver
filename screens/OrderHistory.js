import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DarkGreenButton from "../Components/DarkGreenButton";
import OutlineButton from "../Components/OutlineButton";

const OrderHistory = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Completed Orders</Text>
      </View>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.TopView}>
            <View style={styles.TopsubView}>
              <View style={{ marginStart: 10, marginBottom: 15 }}>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>
                  Earning: LKR 5000.00
                </Text>
              </View>
              <View style={styles.line}></View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Ionicons name="location-sharp" size={24} color="#2A8B00" />

                <View style={styles.bottomView}>
                  <Text style={{ fontWeight: "600" }}>Maliban Pvt Ltd</Text>
                  <Text>9/3, Canon Jacob Mendis Mawatha, Idama , Moratuwa</Text>
                  <Text>City</Text>
                  <Text>Province</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottomRow}>
              <Feather name="clock" size={20} color="#2A8B00" />
              <Text style={styles.bottomTextRight}>12/05/2023 (05.30 PM)</Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  TopView: {
    backgroundColor: "#FFF",
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
    marginTop: 15,
    paddingBottom: 10,
  },
  TopsubView: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingTop: 20,
    paddingBottom: 5,
  },
  bottomView: {
    width: 305,
    justifyContent: "center",
    marginStart: 6,
    marginTop: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  heading: {
    // marginTop: 10,
    alignSelf: "center",
    fontWeight: "700",
    fontSize: 19,
    color: "#2A8B00",
  },
  headingView: {
    marginTop: 15,
    backgroundColor: "#BDE4B8",
    padding: 25,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  line: {
    backgroundColor: "#eeeeee",
    height: 2,
  },

  bottomRow: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  bottomTextRight: {
    marginStart: 7,
    fontWeight: "500",
  },
});
