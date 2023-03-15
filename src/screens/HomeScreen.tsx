import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import ProgressBar from '../components/ProgressBar';
import {images} from '../utils/images';
import {normalize} from '../utils/dimensions';
import CustomButton from '../components/customButton';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = ({route}: any) => {
  const navigation = useNavigation<any>();
  // const {money} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.haederView}>
        <Image style={styles.club} source={images.club} />
        <TouchableOpacity style={styles.menuView}>
          <Image style={styles.menuIcon} source={images.menu} />
        </TouchableOpacity>
      </View>
      <View style={styles.headTextView}>
        <Text style={styles.headerText}>
          {'Hi'} <Text style={styles.boldText}>{'Abhishek Ojha,'}</Text>
        </Text>
        <Text style={styles.headerText}>{'Your account balance'}</Text>
      </View>
      <ScrollView>
        <View style={styles.progressView}>
          <Text style={styles.earn12}>{'Earn @12%*'}</Text>
          <ProgressBar />
          <CustomButton
            onPress={() => navigation.navigate('MoneyAdd')}
            buttonTxt={'ADD MONEY'}
          />
        </View>
        <View style={styles.card}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  haederView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  club: {
    height: normalize(50),
    width: normalize(130),
    // left: normalize(9),
    marginHorizontal: normalize(5),
    resizeMode: 'contain',
  },
  menuView: {
    alignSelf: 'center',
  },
  menuIcon: {
    height: normalize(30),
    width: normalize(60),
    resizeMode: 'contain',
    left: normalize(7),
  },
  headerText: {
    fontSize: 22,
    color: 'black',
  },
  headTextView: {
    marginHorizontal: normalize(9),
    marginTop: normalize(3),
  },
  boldText: {
    fontWeight: 'bold',
  },
  progressView: {
    width: normalize(350),
    // height: normalize(400),
    borderWidth: 0.2,
    borderRadius: 5,
    marginHorizontal: normalize(13),
    // marginTop: normalize(25),
  },
  earn12: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  card: {},
});
