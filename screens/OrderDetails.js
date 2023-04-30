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
import { FontAwesome5 } from "@expo/vector-icons";
import GreenButtonDeliver from "../Components/GreenButtonDeliver";
import GreenButton from "../Components/GreenButton";
import GreenButtonPickup from "../Components/GreenButtonPickup";

const OrderDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.TopView}>
          {/* Pickup start */}

          {/* {Time and date start} */}

          <View style={styles.TopsubView}>
            <View style={styles.bottomRow}>
              <Feather
                name="clock"
                size={20}
                color="#5b5b5b"
                style={{ marginStart: 5 }}
              />
              <Text style={styles.bottomTextRight}>12/05/2023 (05.30 PM)</Text>
            </View>
            {/* {Time and date end} */}
            {/* Package id start */}
            <View style={styles.bottomRow}>
              <FontAwesome5
                name="hashtag"
                size={18}
                color="#5b5b5b"
                style={{ marginStart: 5 }}
              />
              <Text style={styles.bottomTextRight}>1253716235</Text>
            </View>

            {/* Package id end */}

            <View style={styles.line}></View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Ionicons name="location-sharp" size={24} color="#2A8B00" />

              <View style={styles.pickupView}>
                <Text style={{ fontWeight: "500" }}>Pickup</Text>
              </View>
              <View style={{ marginStart: 240, alignSelf: "center" }}>
                <FontAwesome5 name="paper-plane" size={20} color="#2A8B00" />
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ width: 30 }}></View>

              <View style={{ width: 330 }}>
                <Text style={{ fontWeight: "600" }}>Maliban Pvt Ltd</Text>
                <Text>
                  9/3, Canon Jacob Mendis Mawatha, Idama , Moratuwa, City,
                  Province
                </Text>
                <Text style={{ fontWeight: "600" }}>0763622407</Text>
              </View>
            </View>
            <View style={styles.Subbutton}>
              <GreenButtonPickup title={"Picked"} />
            </View>
            <View style={styles.line}></View>
          </View>

          {/* pickup end */}

          {/* {Drop start} */}
          <View style={styles.TopSecondView}>
            <View style={{ flexDirection: "row" }}>
              <Feather name="box" size={20} color="#FFD984" />

              <View style={styles.DropView}>
                <Text style={{ fontWeight: "500" }}>Drop</Text>
              </View>
              <View style={styles.orderId}>
                <FontAwesome5 name="hashtag" size={13} color="black" />
                <Text style={{ marginStart: 5 }}>327864823476</Text>
              </View>
              <View style={{ marginStart: 115, alignSelf: "center" }}>
                <FontAwesome5 name="paper-plane" size={20} color="#FFD984" />
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ width: 30 }}></View>

              <View style={{ width: 330 }}>
                <Text style={{ fontWeight: "600" }}>Elisha super store</Text>
                <Text>
                  9/3, Canon Jacob Mendis Mawatha, Idama , Moratuwa, City,
                  Province
                </Text>
                <Text style={{ fontWeight: "600" }}>0763622407</Text>
              </View>
            </View>
            <View style={styles.Subbutton}>
              <GreenButtonDeliver title={"Delivered"} />
            </View>
            <View style={styles.line}></View>
          </View>

          {/* {Drop end} */}

          {/* {Drop start} */}
          <View style={styles.TopSecondView}>
            <View style={{ flexDirection: "row" }}>
              <Feather name="box" size={20} color="#FFD984" />

              <View style={styles.DropView}>
                <Text style={{ fontWeight: "500" }}>Drop</Text>
              </View>
              <View style={styles.orderId}>
                <FontAwesome5 name="hashtag" size={13} color="black" />
                <Text style={{ marginStart: 5 }}>327864823476</Text>
              </View>
              <View style={{ marginStart: 115, alignSelf: "center" }}>
                <FontAwesome5 name="paper-plane" size={20} color="#FFD984" />
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ width: 30 }}></View>

              <View style={{ width: 330 }}>
                <Text style={{ fontWeight: "600" }}>Elisha super store</Text>
                <Text>
                  9/3, Canon Jacob Mendis Mawatha, Idama , Moratuwa, City,
                  Province
                </Text>
              </View>
            </View>
            <View style={styles.Subbutton}>
              <GreenButtonDeliver title={"Delivered"} />
            </View>
            {/* <View style={styles.line}></View> */}
          </View>

          {/* {Drop end} */}
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomTextLeft}>Total Distance: </Text>
          <Text style={styles.bottomTextRight}>0.00 KM</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomTextLeft}>Total Earning: </Text>
          <Text style={styles.bottomTextRight}>LKR 5000.00</Text>
        </View>
      </View>
      <View style={styles.button}>
        <GreenButton title={"Completed"} />
      </View>
    </SafeAreaView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  TopView: {
    backgroundColor: "#FFF",
    // marginHorizontal: 15,
    // borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
    marginTop: 10,
  },
  TopsubView: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingBottom: 10,
  },
  TopSecondView: {
    paddingHorizontal: 10,
    paddingTop: 0,
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
  DropView: {
    backgroundColor: "#FFD984",
    padding: 4,
    borderRadius: 5,
    marginStart: 8,
    marginBottom: 5,
  },
  orderId: {
    backgroundColor: "#FFD984",
    padding: 4,
    borderRadius: 5,
    marginStart: 10,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    backgroundColor: "#eeeeee",
    height: 2,
    marginTop: 5,
  },
  bottomView: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "#BDE4B8",
    // borderBottomStartRadius: 10,
    // borderBottomEndRadius: 10,
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
    marginTop: 0,
    marginBottom: 5,
  },
  bottomTextRight: {
    fontSize: 15,
    marginStart: 7,
    fontWeight: "600",
  },
  bottomTextLeft: {
    fontSize: 15,
    color: "#5b5b5b",
    fontWeight: "500",
    marginStart: 3,
  },
  button: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  Subbutton: {
    paddingHorizontal: 25,
    width: 250,
    alignSelf: "center",
    marginVertical: 10,
  },
});
