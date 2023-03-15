// import React, {useState, useEffect, useRef} from 'react';
// import {View, StyleSheet, Animated, Text} from 'react-native';
// import Svg, {Circle, Defs, G, LinearGradient, Stop} from 'react-native-svg';
// const App = () => {
//   const AnimatedCirle = Animated.createAnimatedComponent(Circle);
//   const animatedValue = useRef(new Animated.Value(0)).current;
//   const [progress, setProgress] = useState(new Animated.Value(0));
//   const data = {
//     percentage: 100,
//     radius: 150,
//     strokwidth: 5,
//     color: 'black',
//     delay: 0,
//     max: 100,
//   };
//   const circleRef = useRef();
//   const halfCircle = data.radius + data.strokwidth;
//   const circleCirumfrence = Math.PI * data.radius;
//   const zeroOffset = circleCirumfrence - (circleCirumfrence * 75) / 100;
//   const strokeDashoffset =
//     circleCirumfrence - (circleCirumfrence * (75 - data.percentage)) / 100;
//   useEffect(() => {
//     Animated.timing(animatedValue, {
//       toValue: 1,
//       duration: 3000,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   return (
//     <View style={styles.mainContainer}>
//       <Svg
//         style={styles.svgStyle}
//         width={data.radius * 2}
//         height={data.radius * 2}
//         viewBox={`0 0  ${halfCircle * 2} ${halfCircle * 2}`}>
//         <G rotation={'45'} origin={`${halfCircle}`}>
//           <Circle
//             cx={'43%'}
//             cy={'43%'}
//             stroke={data.color}
//             strokeWidth={data.strokwidth}
//             r={data.radius}
//             fill={'transparent'}
//             strokeOpacity={0.2}></Circle>
//           <AnimatedCirle
//             cx={'43%'}
//             cy={'43%'}
//             stroke={'red'}
//             strokeWidth={data.strokwidth}
//             r={data.radius}
//             fill={'transparent'}
//             strokeOpacity={1}
//             strokeDasharray={circleCirumfrence}
//             strokeDashoffset={animatedValue.interpolate({
//               inputRange: [0, 1],
//               outputRange: [zeroOffset, strokeDashoffset],
//             })}
//             // strokeDashoffset={strokeDashoffset}
//             strokeLinecap={'round'}
//             ref={circleRef}
//           />
//         </G>
//       </Svg>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bar: {
//     width: '80%',
//     height: 10,
//     backgroundColor: '#eee',
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   progress: {
//     height: '100%',
//     backgroundColor: '#007AFF',
//   },
//   mainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',

//     // right: 80,
//   },
//   svgStyle: {
//     // backgroundColor: 'yellow',
//     // marginTop: 30,
//     // marginLeft: 120,
//   },
// });

// export default App;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProgressBar from './src/components/ProgressBar';
import HomeScreen from './src/screens/HomeScreen';
import NavigationScreen from './src/router/NavigationScreen';

const App = () => {
  return (
    <>
      <NavigationScreen />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
