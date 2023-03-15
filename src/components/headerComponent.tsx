import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {images} from '../utils/images';
import {normalize, vh} from '../utils/dimensions';

const HeaderComponent = ({onPress}: any) => {
  return (
    <View style={styles.headerMainView}>
      <TouchableOpacity
        onPress={onPress}
        hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
        <Image
          resizeMode="contain"
          source={images.backArrrow}
          style={styles.backImageIconStyle}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitleStyle}>{'Add Money to 12% Club'}</Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerMainView: {
    height: vh(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: normalize(6),
  },
  backImageIconStyle: {
    width: normalize(30),
    height: normalize(20),
  },
  headerTitleStyle: {
    flex: 1,
    color: 'black',
    fontSize: normalize(22),
    fontWeight: 'bold',
    marginHorizontal: normalize(8),
  },
});
