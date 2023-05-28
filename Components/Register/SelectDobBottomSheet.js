import { StyleSheet, Text, View } from 'react-native';
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Button } from '@rneui/themed';
import { db } from '../../firebase';
import { updateDoc, doc, collection } from 'firebase/firestore';
import DatePicker from 'react-native-modern-datepicker';

const SelectDob = ({ bottomSheetRef, state, setState, dobSelect }) => {
  const snapPoints = useMemo(() => ['50%', '75%'], []);
  const keyboardRef = useRef(null);

  console.log(dobSelect);
  console.log(state);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
    >
      <View style={styles.contentContainer}>
        {dobSelect && (
          <DatePicker
            maximumDate='2004-10-22'
            current='2001-10-22'
            mode='calendar'
            onSelectedChange={(date) =>
              setState((prevState) => ({ ...prevState, dob: date }))
            }
          />
        )}
        {!dobSelect && (
          <DatePicker
            mode='calendar'
            onSelectedChange={(date) =>
              setState((prevState) => ({
                ...prevState,
                drivingLicenseExpiry: date,
              }))
            }
          />
        )}
        <Button
          title={'Save'}
          color={'black'}
          radius={5}
          raised
          onPress={() => bottomSheetRef.current.close()}
        />
      </View>
    </BottomSheet>
  );
};

export default memo(SelectDob);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    // flexDirection: 'row',
    gap: 10,
  },
});
