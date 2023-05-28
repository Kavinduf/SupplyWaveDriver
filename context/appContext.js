import { useContext, createContext, useReducer, useState } from 'react';
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import reducer from './reducer';
import { auth, db, storage } from '../firebase';
import { Alert, Linking } from 'react-native';
import { SET_USER, UPDATE_USER } from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  user: null,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = async (state) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );
      let profileImage = '';
      let drivingLicenseFrontImg = '';
      let drivingLicenseBackImg = '';
      let vehicleInsuranceFrontImg = '';
      let vehicleInsuranceBackImg = '';
      let registrationCertificateImg = '';

      if (state.profileImage) {
        profileImage = await uploadImage(
          state.profileImage,
          userCredential.user.uid
        );
      }
      if (state.drivingLicenseFrontImg) {
        drivingLicenseFrontImg = await uploadImage(
          state.profileImage,
          userCredential.user.uid + 'drivingLicenseFrontImg'
        );
      }
      if (state.drivingLicenseBackImg) {
        drivingLicenseBackImg = await uploadImage(
          state.drivingLicenseBackImg,
          userCredential.user.uid + 'drivingLicenseBackImg'
        );
      }
      if (state.vehicleInsuranceFrontImg) {
        vehicleInsuranceFrontImg = await uploadImage(
          state.vehicleInsuranceFrontImg,
          userCredential.user.uid + 'vehicleInsuranceFrontImg'
        );
      }
      if (state.vehicleInsuranceBackImg) {
        vehicleInsuranceBackImg = await uploadImage(
          state.vehicleInsuranceBackImg,
          userCredential.user.uid + 'vehicleInsuranceBackImg'
        );
      }
      if (state.registrationCertificateImg) {
        registrationCertificateImg = await uploadImage(
          state.registrationCertificateImg,
          userCredential.user.uid + 'registrationCertificateImg'
        );
      }
      const docRef = await setDoc(doc(db, 'drivers', userCredential.user.uid), {
        ...state,
        uid: userCredential.user.uid,
        profileImage,
        drivingLicenseFrontImg,
        drivingLicenseBackImg,
        vehicleInsuranceFrontImg,
        vehicleInsuranceBackImg,
        registrationCertificateImg,
      });
      dispatch({
        type: SET_USER,
        payload: {
          ...state,
          uid: userCredential.user.uid,
          profileImage,
          drivingLicenseFrontImg,
          drivingLicenseBackImg,
          vehicleInsuranceFrontImg,
          vehicleInsuranceBackImg,
          registrationCertificateImg,
        },
      });
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({
          ...state,
          profileImage,
          drivingLicenseFrontImg,
          drivingLicenseBackImg,
          vehicleInsuranceFrontImg,
          vehicleInsuranceBackImg,
          registrationCertificateImg,
        })
      );
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  const login = async (user) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const userData = await getDoc(
        doc(db, 'drivers', userCredential.user.uid)
      );

      if (!userData.exists()) {
        Alert.alert('Error', 'User not found');
        return;
      }

      await AsyncStorage.setItem('user', JSON.stringify(userData.data()));
      dispatch({ type: SET_USER, payload: userData.data() });
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  const autoLogin = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    if (user) {
      dispatch({ type: SET_USER, payload: user });
    }
  };

  const logout = async () => {
    auth.signOut();
    await AsyncStorage.removeItem('user');
    dispatch({ type: SET_USER, payload: null });
  };

  const uploadImage = async (image, fileName) => {
    try {
      const response = await fetch(image.uri);
      const blob = await response.blob();
      // console.log(blob);
      const storageRef = ref(storage, `images/${fileName}`);
      await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      throw error;
    }
  };

  const updateUser = async (user, image) => {
    console.log(typeof user.drivingLicenseFrontImg === 'string');
    console.log(user);
    try {
      let url = '';
      const userJson = {
        name: user.name,
        mobileNumber: user.mobileNumber,
        address: user.address,
      };
      if (image) {
        url = await uploadImage(image, user.uid);
        userJson.profileImage = url;
      }

      if (user.vehicleType) {
        userJson.vehicleType = user.vehicleType;
      }
      if (user.vehiclePlateNumber) {
        userJson.vehiclePlateNumber = user.vehiclePlateNumber;
      }
      if (user.vehicleModel) {
        userJson.vehicleModel = user.vehicleModel;
      }
      if (user.vehicleSpecification) {
        userJson.vehicleSpecification = user.vehicleSpecification;
      }

      if (
        user.drivingLicenseFrontImg &&
        typeof user.drivingLicenseFrontImg !== 'string'
      ) {
        userJson.drivingLicenseFrontImg = await uploadImage(
          user.drivingLicenseFrontImg,
          user.uid + 'drivingLicenseFrontImg'
        );
      }

      if (
        user.drivingLicenseBackImg &&
        typeof user.drivingLicenseBackImg !== 'string'
      ) {
        userJson.drivingLicenseBackImg = await uploadImage(
          user.drivingLicenseBackImg,
          user.uid + 'drivingLicenseBackImg'
        );
      }

      if (
        user.vehicleInsuranceFrontImg &&
        typeof user.vehicleInsuranceFrontImg !== 'string'
      ) {
        userJson.vehicleInsuranceFrontImg = await uploadImage(
          user.vehicleInsuranceFrontImg,
          user.uid + 'vehicleInsuranceFrontImg'
        );
      }

      if (
        user.vehicleInsuranceBackImg &&
        typeof user.vehicleInsuranceBackImg !== 'string'
      ) {
        userJson.vehicleInsuranceBackImg = await uploadImage(
          user.vehicleInsuranceBackImg,
          user.uid + 'vehicleInsuranceBackImg'
        );
      }

      if (
        user.registrationCertificateImg &&
        typeof user.registrationCertificateImg !== 'string'
      ) {
        userJson.registrationCertificateImg = await uploadImage(
          user.registrationCertificateImg,
          user.uid + 'registrationCertificateImg'
        );
      }

      const docRef = await updateDoc(doc(db, 'drivers', user.uid), userJson);

      dispatch({
        type: UPDATE_USER,
        payload: {
          ...userJson,
        },
      });
      await AsyncStorage.setItem('user', JSON.stringify({ ...state.user }));
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  const openMap = async (address) => {
    try {
      const destination = encodeURIComponent(`${address}`);
      const provider = Platform.OS === 'ios' ? 'apple' : 'google';
      const link = `http://maps.${'google'}.com/?daddr=${destination}`;
      const supported = await Linking.canOpenURL(link);

      if (supported) Linking.openURL(link);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        autoLogin,
        register,
        logout,
        login,
        updateUser,
        uploadImage,
        openMap,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
