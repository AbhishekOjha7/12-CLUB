import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import DotComponent from '../components/dotComponent';
import {normalize} from '../utils/dimensions';
import CustomButton from '../components/customButton';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('screen');
const MoneyModal = ({
  modalOpen,
  setModalOpen,
  onChoose,
}: {
  modalOpen: any;
  setModalOpen: any;
  onChoose: (amt: string) => void;
}) => {
  const navigation = useNavigation<any>();
  const [text, setText] = useState('100000');
  console.log('++', text);

  const _onChangeText = (txt: any) => {
    setText(txt);
    console.log('===>', txt);
  };

  return (
    <View style={{flex: 1, width: width, alignSelf: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          setModalOpen(!modalOpen);
        }}
        style={{flex: 0.6}}>
        <View style={styles.cardView}>
          <View style={{padding: normalize(20)}}>
            <Text style={styles.addMoney}>{'Add Money'}</Text>
          </View>
          <DotComponent />
          <View style={styles.firstBoxView}>
            <Text style={styles.enterAmount}>{'Enter Amount'}</Text>
            <TouchableOpacity style={{}}>
              <TextInput
                value={text}
                onChangeText={_onChangeText}
                style={styles.moneyModalView}
              />
              {/* <Text style={styles.moneyModalText}>{'₹100000'}</Text> */}
            </TouchableOpacity>
          </View>
          <DotComponent />
          <View style={styles.secondBoxView}>
            <Text style={styles.enterAmount}>{'Max.Amount '}</Text>
            <Text style={styles.moneyModalText}>{'₹1000000'}</Text>
          </View>
          <CustomButton
            onPress={() => {
              setModalOpen(!modalOpen);
              onChoose(text);
            }}
            buttonTxt={'CHOOSE AMOUNT'}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MoneyModal;

const styles = StyleSheet.create({
  cardView: {
    // height: normalize(220),
    borderWidth: 0,
    marginHorizontal: 13,
    // backgroundColor: '#E6EEEF',
    backgroundColor: 'white',
    marginTop: normalize(440),
    borderRadius: 10,
    width: width,
    height: height / 2.8,
    alignSelf: 'center',
  },
  addMoney: {
    fontWeight: '900',
    fontSize: 26,
    color: 'black',
  },
  enterAmount: {
    fontSize: 28,
    color: 'black',
    marginRight: 5,
  },
  moneyModalView: {
    alignItems: 'center',
    backgroundColor: '#E6EEEF',
    paddingVertical: normalize(18),
    paddingHorizontal: normalize(8),
    borderBottomWidth: 3,
    borderBottomColor: '#045856',
  },
  moneyModalText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    // textAlign: 'right',
  },
  firstBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: normalize(20),
    // borderWidth: 1,
  },
  secondBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalize(20),
    marginTop: normalize(15),
    justifyContent: 'space-between',
  },
});
