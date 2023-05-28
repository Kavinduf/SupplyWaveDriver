import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Pressable,
  FlatList,
  Platform,
  Linking,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import GreenButtonDeliver from '../Components/GreenButtonDeliver';
import GreenButton from '../Components/GreenButton';
import GreenButtonPickup from '../Components/GreenButtonPickup';
import OrderCard from '../Components/ActivePackageDetails/OrderCard';
import moment from 'moment';
import { db } from '../firebase';
import { onSnapshot, doc, updateDoc } from 'firebase/firestore';

const ActivePackageDetails = ({ route }) => {
  const [packageData, setPackageData] = useState(route.params.item);

  const openMap = async () => {
    const destination = encodeURIComponent(`${packageData.brandAddress}`);
    const provider = Platform.OS === 'ios' ? 'apple' : 'google';
    const link = `http://maps.${provider}.com/?daddr=${destination}`;

    try {
      const supported = await Linking.canOpenURL(link);

      if (supported) Linking.openURL(link);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let unsubscribe;
    const ref = doc(db, 'packages', packageData.id);
    unsubscribe = onSnapshot(ref, (querySnapshot) => {
      let delivered = true;
      querySnapshot.data().orders.forEach((order) => {
        if (order.status !== 'delivered') {
          delivered = false;
        }
      });
      if (delivered) {
        updateDoc(doc(db, 'packages', packageData.id), {
          status: 'delivered',
        });
      }
      setPackageData({
        id: querySnapshot.id,
        ...querySnapshot.data(),
      });
    });
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.TopView}>
          {/* Pickup start */}

          {/* {Time and date start} */}

          <View style={styles.TopsubView}>
            <View style={styles.bottomRow}>
              <Feather
                name='clock'
                size={20}
                color='#5b5b5b'
                style={{ marginStart: 5 }}
              />
              <Text style={styles.bottomTextRight}>
                {moment(packageData.createdAt.seconds * 1000).format(
                  'DD/MM/YYYY (hh:mm A)'
                )}
              </Text>
            </View>
            {/* {Time and date end} */}
            {/* Package id start */}
            <View style={styles.bottomRow}>
              <FontAwesome5
                name='hashtag'
                size={18}
                color='#5b5b5b'
                style={{ marginStart: 5 }}
              />
              <Text style={styles.bottomTextRight}>{packageData.id}</Text>
            </View>

            {/* Package id end */}
          </View>
          <FlatList
            ListHeaderComponent={
              <View style={{ marginHorizontal: 10 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    justifyContent: 'space-between',
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <Ionicons name='location-sharp' size={24} color='#2A8B00' />

                    <View style={styles.pickupView}>
                      <Text style={{ fontWeight: '500' }}>Pickup</Text>
                    </View>
                  </View>
                  <Pressable onPress={openMap}>
                    <FontAwesome5
                      name='paper-plane'
                      size={20}
                      color='#2A8B00'
                    />
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <View style={{ marginStart: 30 }}>
                    <Text style={{ fontWeight: '600' }}>
                      {packageData.brandName}
                    </Text>
                    <Text>{packageData.brandAddress}</Text>
                    <Text style={{ fontWeight: '600' }}>
                      {packageData.brandPhoneNo}
                    </Text>
                  </View>
                </View>
                <View style={styles.line}></View>
              </View>
            }
            data={packageData.orders}
            ItemSeparatorComponent={() => {
              return (
                <View style={{ height: 1, backgroundColor: '#E5E5E5' }}></View>
              );
            }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <OrderCard item={item} packageId={packageData.id} />
            )}
          />
        </View>
      </View>
      {/* <View style={styles.bottomView}>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomTextLeft}>Delivery Price: </Text>
          <Text style={styles.bottomTextRight}>
            LKR {route.params.package?.delivery?.price}
          </Text>
        </View>
      </View> */}
      {packageData.status !== 'delivered' && (
        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            textAlign: 'center',
            color: '#5b5b5b',
            fontWeight: 'bold',
          }}
        >
          Waiting to complete...
        </Text>
      )}
      {packageData.status === 'delivered' && (
        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            textAlign: 'center',
            color: '#5b5b5b',
            fontWeight: 'bold',
          }}
        >
          Completed
        </Text>
      )}
      {/* <View style={styles.button}>
        <Button title={'Delivered'} />
      </View> */}
    </SafeAreaView>
  );
};

export default ActivePackageDetails;

const styles = StyleSheet.create({
  TopView: {
    backgroundColor: '#FFF',
    // marginHorizontal: 15,
    // borderRadius: 10,
    shadowColor: '#000',
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
    backgroundColor: '#F5F5F5',
  },
  pickupView: {
    backgroundColor: '#BDE4B8',
    padding: 4,
    borderRadius: 5,
    marginStart: 5,
    marginBottom: 5,
  },
  DropView: {
    backgroundColor: '#FFD984',
    padding: 4,
    borderRadius: 5,
    marginStart: 8,
    marginBottom: 5,
  },
  orderId: {
    backgroundColor: '#FFD984',
    padding: 4,
    borderRadius: 5,
    marginStart: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    backgroundColor: '#eeeeee',
    height: 2,
    marginTop: 5,
  },
  bottomView: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: '#BDE4B8',
    // borderBottomStartRadius: 10,
    // borderBottomEndRadius: 10,
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
    marginTop: 0,
    marginBottom: 5,
  },
  bottomTextRight: {
    fontSize: 15,
    marginStart: 7,
    fontWeight: '600',
  },
  bottomTextLeft: {
    fontSize: 15,
    color: '#5b5b5b',
    fontWeight: '500',
    marginStart: 3,
  },
  button: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  Subbutton: {
    paddingHorizontal: 25,
    width: 250,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
