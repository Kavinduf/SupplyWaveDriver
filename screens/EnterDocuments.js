import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import React, { useState } from 'react';
// import DropDown from "../Components/DropDown";
import GreenButton from '../Components/GreenButton';
import { KeyboardAvoidingView } from 'react-native';
import { Dialog, Image } from '@rneui/themed';
// import { useAppContext } from "../context/appContext";

import * as ImagePicker from 'expo-image-picker';
import { useAppContext } from '../context/appContext';

const EnterDocuments = ({ navigation, route }) => {
  const { register, updateUser, user } = useAppContext();
  const [state, setState] = useState({
    ...route.params.values,
    drivingLicenseFrontImg: route.params.editMode
      ? user.drivingLicenseFrontImg
      : null,
    drivingLicenseBackImg: route.params.editMode
      ? user.drivingLicenseBackImg
      : null,
    vehicleInsuranceFrontImg: route.params.editMode
      ? user.vehicleInsuranceFrontImg
      : null,
    vehicleInsuranceBackImg: route.params.editMode
      ? user.vehicleInsuranceBackImg
      : null,
    registrationCertificateImg: route.params.editMode
      ? user.registrationCertificateImg
      : null,
  });

  console.log('state', route.params);

  const pickImage = async (type) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!result.canceled) {
      const file = result.assets[0].uri;
      const fileName = file.split('/').pop();
      const fileType = 'image/' + fileName.split('.').pop();
      setState({
        ...state,
        [type]: { type: fileType, uri: file, name: fileName },
      });
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const json = {
    address: '11/13 Temple Road, Colombo',
    dob: '2001/10/23',
    drivingLicenseBackImg: {
      name: '80E13AD8-9F67-438F-BC65-0EB49CEC8E70.jpg',
      type: 'image/jpg',
      uri: 'file:///var/mobile/Containers/Data/Application/F72BA55A-4DBF-43DA-8C12-743AE82530CC/Library/Caches/ExponentExperienceData/%2540venushka%252FSupplyWaveDriver/ImagePicker/80E13AD8-9F67-438F-BC65-0EB49CEC8E70.jpg',
    },
    drivingLicenseExpiry: '2023/07/29',
    drivingLicenseFrontImg: {
      name: 'BBA2E69F-E12B-4B46-A45A-85298F18AA43.jpg',
      type: 'image/jpg',
      uri: 'file:///var/mobile/Containers/Data/Application/F72BA55A-4DBF-43DA-8C12-743AE82530CC/Library/Caches/ExponentExperienceData/%2540venushka%252FSupplyWaveDriver/ImagePicker/BBA2E69F-E12B-4B46-A45A-85298F18AA43.jpg',
    },
    email: 'driver@gmail.com',
    mobileNumber: '0754994484',
    name: 'Driver',
    nic: '20404494',
    password: 'secret',
    profileImage: {
      name: '4E154C5D-7980-4804-B4CF-0B10491D4142.jpg',
      type: 'image/jpg',
      uri: 'file:///var/mobile/Containers/Data/Application/F72BA55A-4DBF-43DA-8C12-743AE82530CC/Library/Caches/ExponentExperienceData/%2540venushka%252FSupplyWaveDriver/ImagePicker/4E154C5D-7980-4804-B4CF-0B10491D4142.jpg',
    },
    registrationCertificateImg: {
      name: '999FE567-DA66-4AEF-AB09-4E7125AF5B1E.jpg',
      type: 'image/jpg',
      uri: 'file:///var/mobile/Containers/Data/Application/F72BA55A-4DBF-43DA-8C12-743AE82530CC/Library/Caches/ExponentExperienceData/%2540venushka%252FSupplyWaveDriver/ImagePicker/999FE567-DA66-4AEF-AB09-4E7125AF5B1E.jpg',
    },
    vehicleInsuranceBackImg: {
      name: 'E6519603-DD58-46EE-9AB4-2E1764528E36.jpg',
      type: 'image/jpg',
      uri: 'file:///var/mobile/Containers/Data/Application/F72BA55A-4DBF-43DA-8C12-743AE82530CC/Library/Caches/ExponentExperienceData/%2540venushka%252FSupplyWaveDriver/ImagePicker/E6519603-DD58-46EE-9AB4-2E1764528E36.jpg',
    },
    vehicleInsuranceFrontImg: {
      name: 'ED429033-2DAF-4854-BDBD-9E024311E93A.jpg',
      type: 'image/jpg',
      uri: 'file:///var/mobile/Containers/Data/Application/F72BA55A-4DBF-43DA-8C12-743AE82530CC/Library/Caches/ExponentExperienceData/%2540venushka%252FSupplyWaveDriver/ImagePicker/ED429033-2DAF-4854-BDBD-9E024311E93A.jpg',
    },
    vehicleModel: 'Honda',
    vehiclePlateNumber: 'ABC1234',
    vehicleSpecification: 'Test',
    vehicleType: 'Bike',
  };

  const onRegister = async () => {
    if (route.params.editMode) {
      await updateUser(state);
      return;
    }

    console.log(state);
    if (
      state.address === '' ||
      state.dob === '' ||
      !state.profileImage ||
      !state.drivingLicenseBackImg ||
      state.drivingLicenseExpiry === '' ||
      !state.drivingLicenseFrontImg ||
      state.email === '' ||
      state.mobileNumber === '' ||
      state.name === '' ||
      state.nic === '' ||
      state.password === '' ||
      !state.registrationCertificateImg ||
      !state.vehicleInsuranceBackImg ||
      !state.vehicleInsuranceFrontImg ||
      state.vehicleModel === '' ||
      state.vehiclePlateNumber === '' ||
      state.vehicleSpecification === '' ||
      state.vehicleType === ''
    ) {
      Alert.alert('Please fill all the fields');
      return;
    }
    try {
      setIsLoading(true);
      await register(state);
      setIsLoading(false);
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ backgroundColor: '#FFF' }}>
          <Dialog
            isVisible={isLoading}
            overlayStyle={{
              width: 90,
              height: 90,
            }}
          >
            <Dialog.Loading />
          </Dialog>
          <KeyboardAvoidingView
            behavior='position'
            style={{ flex: 1, padding: 20 }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                marginBottom: 25,
                alignSelf: 'center',
              }}
            >
              Enter document images
            </Text>

            {/* {Image 1 row start} */}

            {!route.params.editMode && (
              <View style={styles.imageRow}>
                <View>
                  <View style={styles.imageBorder}>
                    {!state.drivingLicenseFrontImg && (
                      <Image
                        onPress={() => pickImage('drivingLicenseFrontImg')}
                        style={{ width: 120, height: 120, borderRadius: 10 }}
                        source={require('../assets/login-png.png')}
                      />
                    )}
                    {state.drivingLicenseFrontImg && (
                      <Image
                        onPress={() => pickImage('drivingLicenseFrontImg')}
                        style={{ width: 120, height: 120, borderRadius: 10 }}
                        source={{
                          uri: state.drivingLicenseFrontImg.uri,
                        }}
                      />
                    )}
                  </View>
                  <View style={styles.imageTextView}>
                    <Text style={styles.imageText}>Driving licence</Text>
                    <Text style={styles.imageText}> (Front)</Text>
                  </View>
                </View>
                <View>
                  <View style={styles.imageBorder}>
                    {!state.drivingLicenseBackImg && (
                      <Image
                        onPress={() => pickImage('drivingLicenseBackImg')}
                        style={{ width: 120, height: 120, borderRadius: 10 }}
                        source={require('../assets/login-png.png')}
                      />
                    )}
                    {state.drivingLicenseBackImg && (
                      <Image
                        onPress={() => pickImage('drivingLicenseBackImg')}
                        style={{ width: 120, height: 120, borderRadius: 10 }}
                        source={{
                          uri: state.drivingLicenseBackImg.uri,
                        }}
                      />
                    )}
                  </View>
                  <View style={styles.imageTextView}>
                    <Text style={styles.imageText}>Driving licence </Text>
                    <Text style={styles.imageText}>(Back) </Text>
                  </View>
                </View>
              </View>
            )}
            {/* {Image 1  row End} */}

            {/* {Image 2 row start} */}

            <View style={styles.imageRow}>
              <View>
                <View style={styles.imageBorder}>
                  {!state.vehicleInsuranceFrontImg && (
                    <Image
                      onPress={() => pickImage('vehicleInsuranceFrontImg')}
                      style={{ width: 120, height: 120, borderRadius: 10 }}
                      source={require('../assets/login-png.png')}
                    />
                  )}
                  {state.vehicleInsuranceFrontImg && (
                    <Image
                      onPress={() => pickImage('vehicleInsuranceFrontImg')}
                      style={{ width: 120, height: 120, borderRadius: 10 }}
                      source={{
                        uri:
                          state.vehicleInsuranceFrontImg.uri ||
                          state.vehicleInsuranceFrontImg,
                      }}
                    />
                  )}
                </View>
                <View style={styles.imageTextView}>
                  <Text style={styles.imageText}>Vehicle Insurance</Text>
                  <Text style={styles.imageText}> (Front)</Text>
                </View>
              </View>
              <View>
                <View style={styles.imageBorder}>
                  {!state.vehicleInsuranceBackImg && (
                    <Image
                      onPress={() => pickImage('vehicleInsuranceBackImg')}
                      style={{ width: 120, height: 120, borderRadius: 10 }}
                      source={require('../assets/login-png.png')}
                    />
                  )}
                  {state.vehicleInsuranceBackImg && (
                    <Image
                      onPress={() => pickImage('vehicleInsuranceBackImg')}
                      style={{ width: 120, height: 120, borderRadius: 10 }}
                      source={{
                        uri:
                          state.vehicleInsuranceBackImg.uri ||
                          state.vehicleInsuranceBackImg,
                      }}
                    />
                  )}
                </View>
                <View style={styles.imageTextView}>
                  <Text style={styles.imageText}>Vehicle Insurance</Text>
                  <Text style={styles.imageText}>(Back) </Text>
                </View>
              </View>
            </View>

            {/* {Image 2  row End} */}

            {/* {Image 3 row start} */}

            <View style={styles.imageRow}>
              <View>
                <View style={styles.imageBorder}>
                  {!state.registrationCertificateImg && (
                    <Image
                      onPress={() => pickImage('registrationCertificateImg')}
                      style={{ width: 120, height: 120, borderRadius: 10 }}
                      source={require('../assets/login-png.png')}
                    />
                  )}
                  {state.registrationCertificateImg && (
                    <Image
                      onPress={() => pickImage('registrationCertificateImg')}
                      style={{ width: 120, height: 120, borderRadius: 10 }}
                      source={{
                        uri:
                          state.registrationCertificateImg.uri ||
                          state.registrationCertificateImg,
                      }}
                    />
                  )}
                </View>
                <View style={styles.imageTextView}>
                  <Text style={styles.imageText}>Registration</Text>
                  <Text style={styles.imageText}>certificate</Text>
                </View>
              </View>
              {/* <View>
                <View style={styles.imageBorder}>
                  <Image
                    onPress={() => pickImage('vehicleInsuranceBackImg')}
                    style={{ width: 120, height: 120, borderRadius: 10 }}
                    source={require('../assets/login-png.png')}
                  />
                </View>
                <View style={styles.imageTextView}>
                  <Text style={styles.imageText}>Vehicle Insurance</Text>
                  <Text style={styles.imageText}>(Back) </Text>
                </View>
              </View> */}
            </View>

            {/* {Image 3  row End} */}
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.buttonView}>
        <View style={styles.button}>
          <GreenButton
            title={route.params.editMode ? 'UPDATE' : 'REGISTER'}
            onClick={onRegister}
            //  onClick={onRegister}
          />
        </View>
      </View>
    </View>
  );
};

export default EnterDocuments;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 10,
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  TopView: {
    justifyContent: 'space-between',
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    marginTop: 15,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageBorder: {
    width: 120,
    height: 120,
    borderColor: '#2A8B00',
    borderStyle: 'dashed',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  imageTextView: { alignItems: 'center', marginTop: 5 },
  imageText: {
    fontWeight: '500',
    color: 'gray',
    fontSize: 13,
  },
  button: {
    marginHorizontal: 20,
    paddingTop: 15,
  },
  buttonView: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
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
