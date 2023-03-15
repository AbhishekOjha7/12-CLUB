import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';
import {useNavigation} from '@react-navigation/native';

export default function CustomButton({onPress, buttonTxt}: any) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonTxt}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#045856',
    borderRadius: 10,
    padding: normalize(15),
    alignItems: 'center',
    // marginVertical: 10,
    marginHorizontal: 14,
    marginTop: normalize(30),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
