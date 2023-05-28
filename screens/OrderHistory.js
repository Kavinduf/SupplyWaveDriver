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
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DarkGreenButton from '../Components/DarkGreenButton';
import OutlineButton from '../Components/OutlineButton';
import { db } from '../firebase';
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import { useAppContext } from '../context/appContext';
import OrderCard from '../Components/OrderHistory/OrderCard';

const OrderHistory = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const { user } = useAppContext();

  useEffect(() => {
    let unsubscribe;
    const q = query(
      collection(db, 'packages'),
      where('status', '==', 'delivered'),
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
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Completed Orders</Text>
      </View>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <OrderCard item={item} navigation={navigation} />
        )}
        key={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default OrderHistory;

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
    justifyContent: 'center',
    marginStart: 6,
    marginTop: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    // marginTop: 10,
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 19,
    color: '#2A8B00',
  },
  headingView: {
    marginTop: 15,
    backgroundColor: '#BDE4B8',
    padding: 25,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  line: {
    backgroundColor: '#eeeeee',
    height: 2,
  },

  bottomRow: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomTextRight: {
    marginStart: 7,
    fontWeight: '500',
  },
});
