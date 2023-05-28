import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import DarkGreenButton from './DarkGreenButton';
import OutlineButton from './OutlineButton';
import moment from 'moment';

const OrderCard = ({ activeOrder, item, navigation }) => {
  return (
    <Pressable
      style={styles.TopView}
      onPress={() => {
        if (activeOrder) {
          navigation.navigate('ActivePackageDetails', {
            item: item,
          });
          return;
        }
        navigation.navigate('PackageDetails', {
          item: item,
        });
      }}
    >
      <View style={styles.TopsubView}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name='location-sharp' size={24} color='#1d940d' />
          <View style={styles.pickupView}>
            <Text style={{ fontWeight: '500' }}>PickUp</Text>
          </View>
          <View style={styles.orderId}>
            <FontAwesome5 name='hashtag' size={13} color='black' />
            <Text style={{ marginStart: 5 }}>{item.id}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: 30 }}></View>

          <View style={{ width: 305 }}>
            <Text style={{ fontWeight: '600' }}>{item.brandName}</Text>
            <Text>{item.brandAddress}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.bottomRow}>
          <Feather name='clock' size={20} color='#5b5b5b' />
          <Text style={styles.bottomTextRight}>
            {moment(item.createdAt.seconds * 1000).format(
              'DD/MM/YYYY (hh:mm A)'
            )}
          </Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomTextLeft}>Total Distance: </Text>
          <Text style={styles.bottomTextRight}>0.00 KM</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomTextLeft}>Total Earning: </Text>
          <Text style={styles.bottomTextRight}>LKR {item.delivery.price}</Text>
        </View>
        {false && (
          <View style={styles.bottomRowButton}>
            <View style={{ width: 150 }}>
              <DarkGreenButton title={'ACCEPT'} />
            </View>
            <View style={{ width: 150 }}>
              <OutlineButton title={'REJECT'} />
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default memo(OrderCard);

const styles = StyleSheet.create({
  TopsubView: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingBottom: 10,
  },
  pickupView: {
    backgroundColor: '#BDE4B8',
    padding: 4,
    borderRadius: 5,
    marginStart: 5,
    marginBottom: 5,
  },

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
