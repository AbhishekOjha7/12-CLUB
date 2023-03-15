import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';

const MoneyText = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={{right: normalize(80)}}>
          <Text style={styles.rsText}>{'₹ 1000000'}</Text>
          <Text>{'INVEST(12%)'}</Text>
        </View>
        <View style={{left: 82}}>
          <Text style={styles.rsText}>{'₹ 0'}</Text>
          <Text>{'AVAILABLE'}</Text>
        </View>
      </View>
    </View>
  );
};

export default MoneyText;

const styles = StyleSheet.create({
  rsText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'right',
    fontWeight: '500',
  },
});
