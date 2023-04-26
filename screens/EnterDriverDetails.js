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

const EnterDriverDetails = ({ navigation, route }) => {
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
                marginBottom: 5,
              }}
            >
              Personal information
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.imageBorder}>
                <Image
                  style={{ width: 100, height: 100, borderRadius: 10 }}
                  source={require("../assets/login-png.png")}
                />
              </View>
              <Text style={styles.imageText}>
                Enter an image which clearly shows the face
              </Text>
            </View>
            <View style={styles.textInput}>
              <TextInput
                editable
                // value={state.name}
                // onChangeText={(text) =>
                //   setState({
                //     ...state,
                //     name: text,
                //   })
                // }
                textContentType="name"
                selectionColor="#2A8B00"
                placeholder="Full Name*"
                placeholderTextColor="gray"
                // numberOfLines={4}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>

            <View style={styles.textInput}>
              <TextInput
                editable
                // value={state.nic}
                // onChangeText={(text) =>
                //   setState({
                //     ...state,
                //     nic: text,
                //   })
                // }
                textContentType="name"
                selectionColor="#2A8B00"
                placeholder="NIC number*"
                placeholderTextColor="gray"
                // numberOfLines={4}
                maxLength={13}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                editable
                // value={state.email}
                // onChangeText={(text) =>
                //   setState({
                //     ...state,
                //     email: text,
                //   })
                // }
                textContentType="name"
                selectionColor="#2A8B00"
                placeholder="Date of birth*"
                placeholderTextColor="gray"
                // numberOfLines={4}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                editable
                // value={state.email}
                // onChangeText={(text) =>
                //   setState({
                //     ...state,
                //     email: text,
                //   })
                // }
                textContentType="name"
                selectionColor="#2A8B00"
                placeholder="Driving licence expiry*"
                placeholderTextColor="gray"
                // numberOfLines={4}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                editable
                numberOfLines={4}
                // value={state.address}
                // onChangeText={(text) =>
                //   setState({
                //     ...state,
                //     address: text,
                //   })
                // }
                textContentType="name"
                selectionColor="#2A8B00"
                placeholder="Address*"
                placeholderTextColor="gray"
                // numberOfLines={4}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 15,
              }}
            >
              Login information
            </Text>
            <View style={styles.textInput}>
              <TextInput
                editable
                // value={state.email}
                // onChangeText={(text) =>
                //   setState({
                //     ...state,
                //     email: text,
                //   })
                // }
                textContentType="emailAddress"
                selectionColor="#2A8B00"
                placeholder="Email*"
                placeholderTextColor="gray"
                // numberOfLines={4}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                editable
                // value={state.password}
                // onChangeText={(text) =>
                //   setState({
                //     ...state,
                //     password: text,
                //   })
                // }
                textContentType="password"
                secureTextEntry={true}
                selectionColor="#2A8B00"
                placeholder="Password*"
                placeholderTextColor="gray"
                // numberOfLines={4}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.buttonView}>
        <View style={styles.button}>
          <GreenButton
            title={"CONTINUE"}
            onClick={() => {
              navigation.navigate("EnterVehicleInformation", {
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

export default EnterDriverDetails;

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
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  textInput: {
    // backgroundColor: value,
    borderColor: "#bcbcbc",
    borderWidth: 1,
    padding: 5,
    marginTop: 15,
    borderRadius: 5,
  },
  imageBorder: {
    width: 100,
    height: 100,
    borderColor: "#2A8B00",
    borderStyle: "dashed",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 15,
  },
  imageText: {
    marginStart: 25,
    marginTop: 15,
    fontWeight: "500",
    color: "gray",
    width: 200,
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
