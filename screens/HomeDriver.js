import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DarkGreenButton from '../Components/DarkGreenButton';
import OutlineButton from '../Components/OutlineButton';
import { db } from '../firebase';
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import OrderCard from '../Components/OrderCard';
import { useAppContext } from '../context/appContext';

// Find orders screen start

function FindOrders({ navigation }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let unsubscribe;
    const q = query(
      collection(db, 'packages'),
      where('status', '==', 'shipped'),
      where('delivery.deliveryBy', '==', 'driver'),
      where('delivery.driver', '==', null)
    );
    unsubscribe = onSnapshot(q, (querySnapshot) => {
      const orders = [];
      querySnapshot.forEach((doc) => {
        orders.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setOrders(orders);
    });
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  return (
    // <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <OrderCard item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
}
// Find orders screen end
// Active orders screen start

function ActiveOrders({ navigation }) {
  const { user } = useAppContext();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;
    let unsubscribe;
    const q = query(
      collection(db, 'packages'),
      where('status', '==', 'shipped'),
      where('delivery.deliveryBy', '==', 'driver'),
      where('delivery.driver.id', '==', user.uid)
    );
    unsubscribe = onSnapshot(q, (querySnapshot) => {
      const orders = [];
      querySnapshot.forEach((doc) => {
        orders.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setOrders(orders);
    });
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <OrderCard item={item} activeOrder={true} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
}

// Active orders screen end

const Tab = createMaterialTopTabNavigator();

const HomeDriver = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            color: '#2A8B00',
            fontWeight: '700',
            textTransform: 'capitalize',
          },
          tabBarStyle: {
            backgroundColor: '#BDE4B8',
            marginHorizontal: 60,
            marginTop: 15,
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2.5,
            elevation: 1,
          },

          tabBarIndicatorStyle: {
            backgroundColor: '#2A8B00',
            height: 5,
            borderRadius: 50,

            // marginStart: 6,
          },
        }}
      >
        <Tab.Screen name='Find Orders' component={FindOrders} />
        <Tab.Screen name='Active Orders ' component={ActiveOrders} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeDriver;

const styles = StyleSheet.create({
  TopView: {
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
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
    backgroundColor: '#F5F5F5',
  },
  pickupView: {
    backgroundColor: '#BDE4B8',
    padding: 4,
    borderRadius: 5,
    marginStart: 5,
    marginBottom: 5,
  },
  orderId: {
    backgroundColor: '#BDE4B8',
    padding: 4,
    borderRadius: 5,
    marginStart: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomView: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: '#BDE4B8',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  bottomTextRight: {
    marginStart: 7,
    fontWeight: '600',
  },
  bottomTextLeft: {
    color: '#5b5b5b',
    fontWeight: '500',
    marginStart: 3,
  },
  bottomRowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    marginHorizontal: 3,
  },
});
