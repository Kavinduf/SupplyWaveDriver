import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { Image } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import { color } from '@rneui/base';
import { KeyboardAvoidingView } from 'react-native';
import GreenButton from '../Components/GreenButton';

const RegistrationSuccessful = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* header section start */}

        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 50 }}>
            Thanks for registering
          </Text>

          <Text style={{ color: '#737373', marginTop: 20, marginStart: 2 }}>
            It will take 2-5 working days to verify your account.
          </Text>
          <Text style={{ color: '#737373' }}>
            We will notify you when the registration has been
          </Text>
          <Text style={{ color: '#737373' }}>verified.</Text>

          {/* header section end */}

          {/* Image start */}

          <Image
            source={require('../assets/DocumentsFirstPage-image.png')}
            style={{
              width: 240,
              height: 240,
              marginTop: 50,
            }}
          />
          {/* Image  end */}

          {/* button start*/}
        </View>
        <View
          style={{
            marginTop: 100,
            marginHorizontal: 10,
          }}
        >
          <GreenButton
            onClick={() => {
              navigation.navigate('HomeDriver');
            }}
            title={'CONTINUE'}
          />
        </View>

        {/* button end*/}
      </SafeAreaView>
    </View>
  );
};
export default RegistrationSuccessful;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    // alignItems: "center",
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    fontSize: 30,
  },
});
