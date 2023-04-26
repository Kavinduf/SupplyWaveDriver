import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import React, { useState } from "react";
// import DropDown from "../Components/DropDown";
import GreenButton from "../Components/GreenButton";
import { KeyboardAvoidingView } from "react-native";
import { Dialog, Image } from "@rneui/themed";
// import { useAppContext } from "../context/appContext";

const EnterDocuments = ({ navigation, route }) => {
  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  //   nic: "",
  //   address: "",
  //   password: "",
  //   mobileNumber: route.params.mobileNumber,
  // });

  // const [isLoading, setIsLoading] = useState(false);
  // const { register } = useAppContext();

  // const onRegister = async () => {
  //   if (
  //     state.name === "" ||
  //     state.email === "" ||
  //     state.nic === "" ||
  //     state.address === "" ||
  //     state.password === "" ||
  //     state.mobileNumber === ""
  //   ) {
  //     Alert.alert("Please fill all the fields");
  //     return;
  //   }
  //   try {
  //     setIsLoading(true);
  //     await register({
  //       name: state.name,
  //       email: state.email,
  //       nic: state.nic,
  //       address: state.address,
  //       password: state.password,
  //       mobileNumber: state.mobileNumber,
  //     });
  //     setIsLoading(false);
  //   } catch (e) {
  //     Alert.alert("Error", e.message);
  //   }
  // };
  return (
    <View style={{ backgroundColor: "#FFF", flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ backgroundColor: "#FFF" }}>
          {/* <Dialog
              isVisible={isLoading}
              sty
              overlayStyle={{
                width: 90,
                height: 90,
              }}
            >
              <Dialog.Loading />
            </Dialog> */}
          <KeyboardAvoidingView
            behavior="position"
            style={{ flex: 1, padding: 20 }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginBottom: 25,
                alignSelf: "center",
              }}
            >
              Enter document images
            </Text>

            {/* {Image 1 row start} */}

            <View style={styles.imageRow}>
              <View>
                <View style={styles.imageBorder}>
                  <Image
                    style={{ width: 120, height: 120, borderRadius: 10 }}
                    source={require("../assets/login-png.png")}
                  />
                </View>
                <View style={styles.imageTextView}>
                  <Text style={styles.imageText}>Driving licence</Text>
                  <Text style={styles.imageText}> (Front)</Text>
                </View>
              </View>
              <View>
                <View style={styles.imageBorder}>
                  <Image
                    style={{ width: 120, height: 120, borderRadius: 10 }}
                    source={require("../assets/login-png.png")}
                  />
                </View>
                <View style={styles.imageTextView}>
                  <Text style={styles.imageText}>Driving licence </Text>
                  <Text style={styles.imageText}>(Back) </Text>
                </View>
              </View>
            </View>

            {/* {Image 1  row End} */}

            {/* {Image 2 row start} */}

            <View style={styles.imageRow}>
              <View>
                <View style={styles.imageBorder}>
                  <Image
                    style={{ width: 120, height: 120, borderRadius: 10 }}
                    source={require("../assets/login-png.png")}
                  />
                </View>
                <View style={styles.imageTextView}>
                  <Text style={styles.imageText}>Vehicle Insurance</Text>
                  <Text style={styles.imageText}> (Front)</Text>
                </View>
              </View>
              <View>
                <View style={styles.imageBorder}>
                  <Image
                    style={{ width: 120, height: 120, borderRadius: 10 }}
                    source={require("../assets/login-png.png")}
                  />
                </View>
                <View style={styles.imageTextView}>
                  <Text style={styles.imageText}>Vehicle Insurance</Text>
                  <Text style={styles.imageText}>(Back) </Text>
                </View>
              </View>
            </View>

            {/* {Image 2  row End} */}

            {/* {Image 3 row start} */}

            <View style={styles.imageRow}>
              <View>
                <View style={styles.imageBorder}>
                  <Image
                    style={{ width: 120, height: 120, borderRadius: 10 }}
                    source={require("../assets/login-png.png")}
                  />
                </View>
                <View style={styles.imageTextView}>
                  <Text style={styles.imageText}>Registration</Text>
                  <Text style={styles.imageText}>certificate</Text>
                </View>
              </View>
              <View>
                <View style={styles.imageBorder}>
                  <Image
                    style={{ width: 120, height: 120, borderRadius: 10 }}
                    source={require("../assets/login-png.png")}
                  />
                </View>
                <View style={styles.imageTextView}>
                  <Text style={styles.imageText}>Vehicle Insurance</Text>
                  <Text style={styles.imageText}>(Back) </Text>
                </View>
              </View>
            </View>

            {/* {Image 3  row End} */}
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.buttonView}>
        <View style={styles.button}>
          <GreenButton
            title={"REGISTER"}
            onClick={() => {
              navigation.navigate("RegistrationSuccessful", {
                // mobileNumber: value,
              });
            }}
            //  onClick={onRegister}
          />
        </View>
      </View>
    </View>
  );
};

export default EnterDocuments;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 10,
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  TopView: {
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    marginTop: 15,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageBorder: {
    width: 120,
    height: 120,
    borderColor: "#2A8B00",
    borderStyle: "dashed",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 15,
  },
  imageTextView: { alignItems: "center", marginTop: 5 },
  imageText: {
    fontWeight: "500",
    color: "gray",
    fontSize: 13,
  },
  button: {
    marginHorizontal: 20,
    paddingTop: 15,
  },
  buttonView: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
    paddingBottom: 30,
  },
});
