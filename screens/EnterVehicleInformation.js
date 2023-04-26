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
              Vehicle information
            </Text>
            <Text style={{ fontWeight: "500", color: "gray", marginTop: 15 }}>
              Vehicle type*
            </Text>
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
                placeholder="Select vehicle Type"
                placeholderTextColor="gray"
                // numberOfLines={4}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
            <Text style={{ fontWeight: "500", color: "gray", marginTop: 15 }}>
              Vehicle model*
            </Text>
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
                placeholder="Select vehicle model"
                placeholderTextColor="gray"
                // numberOfLines={4}
                maxLength={13}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
            <Text style={{ fontWeight: "500", color: "gray", marginTop: 15 }}>
              Vehicle specification*
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
                textContentType="name"
                selectionColor="#2A8B00"
                placeholder="Select vehicle specification"
                placeholderTextColor="gray"
                // numberOfLines={4}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
            <Text style={{ fontWeight: "500", color: "gray", marginTop: 15 }}>
              Vehicle plate number*
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
                textContentType="name"
                selectionColor="#2A8B00"
                placeholder="Select vehicle plate number"
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
              navigation.navigate("DocumentsFirstPage", {
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
    marginTop: 10,
    borderRadius: 5,
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
