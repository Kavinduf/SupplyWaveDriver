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
import PackageDetails from "./screens/PackageDetails";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import { AppProvider } from "./context/appContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ActivePackageDetails from "./screens/ActivePackageDetails";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeDriver}
          options={{
            tabBarActiveTintColor: "#2A8B00",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Order History"
          component={OrderHistory}
          options={{
            tabBarActiveTintColor: "#2A8B00",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="history"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarActiveTintColor: "#2A8B00",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const StackNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeDriver" component={BottomTabNavigator} />
          <Stack.Screen name="MobileRegister" component={MobileRegister} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
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
          {/* <Stack.Screen
            name='HomeDriver'
            component={HomeDriver}
            // options={{
            //   headerShown: true,
            //   title: "SupplyWave",
            // }}
          /> */}
          <Stack.Screen
            name="OrderHistory"
            component={OrderHistory}
            options={{
              headerShown: true,
              title: "Order History",
            }}
          />
          <Stack.Screen
            name="PackageDetails"
            component={PackageDetails}
            options={{
              headerShown: true,
              title: "Order Details",
            }}
          />
          <Stack.Screen
            name="ActivePackageDetails"
            component={ActivePackageDetails}
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
      <AppProvider>
        <StackNavigator />
      </AppProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
