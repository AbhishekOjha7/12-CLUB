import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/headerComponent';
import {useNavigation} from '@react-navigation/native';
import {normalize} from '../utils/dimensions';
import DotComponent from '../components/dotComponent';
import SqureDot from '../components/squreDot';
import CustomButton from '../components/customButton';
import MoneyModal from '../modalScreen/MoneyModal';
import Modal from 'react-native-modal';
const MoneyAdd = ({route}: any) => {
  // const {text} = route.params;
  console.log('adfffff>>', route);

  const navigation = useNavigation<any>();
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [money, setMoney] = React.useState('0');
  const BackNavigation = () => {
    navigation.goBack();
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
    // navigation.navigate('MoneyModal');
  };
  const handleMoney = (amount: string) => {
    setMoney(amount);
  };
  const oneDayReturn = (money * 12) / 100;
  console.log('moenttt', oneDayReturn);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent onPress={BackNavigation} />

      <View style={styles.cardView}>
        <View style={{padding: normalize(20)}}>
          <Text style={styles.addMoney}>{'Add Money'}</Text>
        </View>
        <DotComponent />
        <View style={styles.firstBoxView}>
          <Text style={styles.enterAmount}>{'Enter Amount'}</Text>
          <TouchableOpacity style={styles.moneyModalView} onPress={toggleModal}>
            <Text style={styles.moneyModalText}>
              {money === '0' ? '₹100000' : `₹${money}`}
            </Text>
          </TouchableOpacity>
        </View>
        <DotComponent />
        <View style={styles.secondBoxView}>
          <Text style={styles.enterAmount}>{'Max.Amount '}</Text>
          <Text style={styles.moneyModalText}>{'₹1000000'}</Text>
        </View>
      </View>

      <View style={styles.maininvestmentCard}>
        <Text style={styles.amountInclude}>{'Amount includes'}</Text>
        <View style={styles.investmentView}>
          <View style={styles.investmentText}>
            <Text style={styles.enterAmount}>{'Investment'}</Text>
            <View>
              <Text style={styles.lakh}>
                {money === '0' ? '₹100000' : `₹${money}`}
              </Text>
            </View>
          </View>
          <View style={styles.earnView}>
            <SqureDot />
            <Text style={styles.earnText}>{'Earning of ₹32.88 / day'}</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 200}}>
        <CustomButton
          // onPress={}

          buttonTxt={'ADD MONEY'}
        />
      </View>
      <Modal isVisible={modalOpen}>
        <MoneyModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          onChoose={handleMoney}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default MoneyAdd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardView: {
    height: normalize(220),
    borderWidth: 0,
    marginHorizontal: 13,
    backgroundColor: '#E6EEEF',
    marginTop: normalize(20),
    borderRadius: 10,
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
    backgroundColor: 'white',
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
  amountInclude: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  investmentView: {
    height: normalize(100),
    borderWidth: 0.2,
    borderRadius: 10,
    marginTop: normalize(10),
  },
  investmentText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(10),
  },
  lakh: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
  },
  earnView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  earnText: {
    color: 'black',
    fontSize: 16,
    right: normalize(10),
  },
  maininvestmentCard: {
    marginTop: normalize(25),
    marginHorizontal: normalize(13),
  },
});
