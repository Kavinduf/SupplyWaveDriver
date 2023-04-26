import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DarkGreenButton from "../Components/DarkGreenButton";
import OutlineButton from "../Components/OutlineButton";

const HomeDriver = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopView}>
        <View style={styles.TopsubView}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="location-sharp" size={24} color="#2A8B00" />

            <View style={styles.pickupView}>
              <Text style={{ fontWeight: "500" }}>Pickup</Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: 30 }}></View>

            <View style={{ width: 305 }}>
              <Text>9/3, Canon Jacob Mendis Mawatha, Idama , Moratuwa</Text>
              <Text>City</Text>
              <Text>Province</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomView}>
          <View style={styles.bottomRow}>
            <Feather name="clock" size={20} color="#5b5b5b" />
            <Text style={styles.bottomTextRight}>12/05/2023 (05.30 PM)</Text>
          </View>
          <View style={styles.bottomRow}>
            <Text style={styles.bottomTextLeft}>Total Distance: </Text>
            <Text style={styles.bottomTextRight}>0.00 KM</Text>
          </View>
          <View style={styles.bottomRow}>
            <Text style={styles.bottomTextLeft}>Total Earning: </Text>
            <Text style={styles.bottomTextRight}>LKR 5000.00</Text>
          </View>
          <View style={styles.bottomRowButton}>
            <View style={{ width: 150 }}>
              <DarkGreenButton title={"ACCEPT"} />
            </View>
            <View style={{ width: 150 }}>
              <OutlineButton title={"REJECT"} />
            </View>
          </View>
        </View>
      </View>
      {/* hello */}
      {/* hello */}
      {/* hello */}
      {/* hello */}
      <View style={styles.TopView}>
        <View style={styles.TopsubView}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="location-sharp" size={24} color="#2A8B00" />

            <View style={styles.pickupView}>
              <Text style={{ fontWeight: "500" }}>Pickup</Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: 30 }}></View>

            <View style={{ width: 305 }}>
              <Text>9/3, Canon Jacob Mendis Mawatha, Idama , Moratuwa</Text>
              <Text>City</Text>
              <Text>Province</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomView}>
          <View style={styles.bottomRow}>
            <Feather name="clock" size={20} color="#5b5b5b" />
            <Text style={styles.bottomTextRight}>12/05/2023 (05.30 PM)</Text>
          </View>
          <View style={styles.bottomRow}>
            <Text style={styles.bottomTextLeft}>Total Distance: </Text>
            <Text style={styles.bottomTextRight}>0.00 KM</Text>
          </View>
          <View style={styles.bottomRow}>
            <Text style={styles.bottomTextLeft}>Total Earning: </Text>
            <Text style={styles.bottomTextRight}>LKR 5000.00</Text>
          </View>
          <View style={styles.bottomRowButton}>
            <View style={{ width: 150 }}>
              <DarkGreenButton title={"ACCEPT"} />
            </View>
            <View style={{ width: 150 }}>
              <OutlineButton title={"REJECT"} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeDriver;

const styles = StyleSheet.create({
  TopView: {
    backgroundColor: "#FFF",
    marginHorizontal: 10,
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
  },
  TopsubView: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  pickupView: {
    backgroundColor: "#BDE4B8",
    padding: 4,
    borderRadius: 5,
    marginStart: 5,
    marginBottom: 5,
  },
  bottomView: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: "#BDE4B8",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  bottomTextRight: {
    marginStart: 7,
    fontWeight: "600",
  },
  bottomTextLeft: {
    color: "#5b5b5b",
    fontWeight: "500",
    marginStart: 3,
  },
  bottomRowButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
});
