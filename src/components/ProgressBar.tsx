import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Stop,
  Text,
} from 'react-native-svg';
import {normalize} from '../utils/dimensions';
import MoneyText from './meoneyText';
const ProgressBar = () => {
  const AnimatedCirle = Animated.createAnimatedComponent(Circle);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const data = {
    percentage: 50,
    radius: 165,
    strokwidth: 5,
    color: 'black',
    delay: 0,
    max: 100,
  };
  const circleRef = useRef();
  const halfCircle = data.radius + data.strokwidth; //170
  const circleCirumfrence = Math.PI * data.radius; //518
  const zeroOffset = circleCirumfrence - (circleCirumfrence * 75) / 100; //31
  const strokeDashoffset =
    circleCirumfrence - (circleCirumfrence * (75 - data.percentage)) / 100;
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Svg
        style={styles.svgStyle}
        width={data.radius * 2}
        height={halfCircle}
        viewBox={`0 0  ${halfCircle * 2} ${halfCircle}`}>
        <G y={`${halfCircle / 2}`} x={`${halfCircle}`}>
          <Text
            fill={'#000'}
            fontSize={35}
            fontWeight={'bolder'}
            textAnchor={'middle'}>
            {'₹0'}
          </Text>
          <Text fill={'#000'} fontSize={16} textAnchor={'middle'} y={30}>
            {'BALANCE'}
          </Text>
        </G>
        <G
          rotation={'45'}
          origin={`${halfCircle}`}
          y={`${(data.radius * 4) / 5}`}>
          <Circle
            cx={'15%'}
            cy={'15%'}
            stroke={data.color}
            strokeWidth={data.strokwidth}
            r={data.radius}
            fill={'transparent'}
            strokeOpacity={0.2}></Circle>
          <AnimatedCirle
            cx={'15%'}
            cy={'15%'}
            stroke={'#045856'}
            strokeWidth={data.strokwidth}
            r={data.radius}
            fill={'transparent'}
            strokeOpacity={1}
            strokeDasharray={circleCirumfrence}
            strokeDashoffset={animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [zeroOffset, strokeDashoffset],
            })}
            // strokeDashoffset={strokeDashoffset}
            strokeLinecap={'round'}
            ref={circleRef}></AnimatedCirle>
        </G>
      </Svg>
      <MoneyText />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 1,
    // backgroundColor: 'yellow',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    // right: 80,
  },
  svgStyle: {
    // backgroundColor: 'yellow',
    marginTop: 30,
    // marginLeft: 120,
    // borderWidth: 1,
  },
  rsText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default ProgressBar;
