import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import MobileRegister from "./screens/MobileRegister";
import MobileVerification from "./screens/MobileVerification";
import EnterDriverDetails from "./screens/EnterDriverDetails";
import EnterVehicleInformation from "./screens/EnterVehicleInformation";
import DocumentsFirstPage from "./screens/DocumentsFirstPage";
import EnterDocuments from "./screens/EnterDocuments";
import RegistrationSuccessful from "./screens/RegistrationSuccessful";
import HomeDriver from "./screens/HomeDriver";
import OrderHistory from "./screens/OrderHistory";
import OrderDetails from "./screens/OrderDetails";

export default function App() {
  const Stack = createNativeStackNavigator();

  const StackNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OrderDetails"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="MobileRegister" component={MobileRegister} />
          <Stack.Screen
            name="EnterDriverDetails"
            component={EnterDriverDetails}
            options={{
              headerShown: true,
              title: "Registration",
            }}
          />
          <Stack.Screen
            name="EnterVehicleInformation"
            component={EnterVehicleInformation}
            options={{
              headerShown: true,
              title: "Registration",
            }}
          />
          <Stack.Screen
            name="EnterDocuments"
            component={EnterDocuments}
            options={{
              headerShown: true,
              title: "Registration",
            }}
          />
          <Stack.Screen
            name="HomeDriver"
            component={HomeDriver}
            // options={{
            //   headerShown: true,
            //   title: "SupplyWave",
            // }}
          />
          <Stack.Screen
            name="OrderHistory"
            component={OrderHistory}
            options={{
              headerShown: true,
              title: "Order History",
            }}
          />
          <Stack.Screen
            name="OrderDetails"
            component={OrderDetails}
            options={{
              headerShown: true,
              title: "Order Details",
            }}
          />
          <Stack.Screen
            name="RegistrationSuccessful"
            component={RegistrationSuccessful}
          />
          <Stack.Screen
            name="DocumentsFirstPage"
            component={DocumentsFirstPage}
          />

          <Stack.Screen
            name="MobileVerification"
            component={MobileVerification}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <View style={styles.container}>
      <StackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
