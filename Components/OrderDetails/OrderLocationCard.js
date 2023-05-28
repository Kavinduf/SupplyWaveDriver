import {
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

const OrderLocationCard = ({ item }) => {
  const openMap = async () => {
    const destination = encodeURIComponent(`${item.deliverStore.address}`);
    const provider = Platform.OS === 'ios' ? 'apple' : 'google';
    const link = `http://maps.${provider}.com/?daddr=${destination}`;

    try {
      const supported = await Linking.canOpenURL(link);

      if (supported) Linking.openURL(link);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View style={styles.TopSecondView}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Feather name='box' size={20} color={'#FFD984'} />

            <View style={[styles.DropView]}>
              <Text style={{ fontWeight: '500' }}>Drop</Text>
            </View>
            <View style={[styles.orderId]}>
              <FontAwesome5 name='hashtag' size={13} color='black' />
              <Text style={{ marginStart: 5 }}>{item.id}</Text>
            </View>
          </View>
          <Pressable onPress={openMap}>
            <FontAwesome5 name='paper-plane' size={20} color={'#FFD984'} />
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* <View style={{ width: 30 }}></View> */}

          <View style={{ paddingHorizontal: 30 }}>
            <Text style={{ fontWeight: '600' }}>
              {item.deliverStore.shopName}
            </Text>
            <Text>{item.deliverStore.address}</Text>
            <Text style={{ fontWeight: '600' }}>
              {item.deliverStore.mobileNumber}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default OrderLocationCard;

const styles = StyleSheet.create({
  TopSecondView: {
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 10,
    marginVertical: 10,
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
});
