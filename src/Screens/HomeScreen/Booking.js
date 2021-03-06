import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BackgroundOrange from '../../Components/Commons/headers/BackgroundOrange';
import Tickets from './Tickets';
import SearchFrom from '../../Components/Commons/Forms/SearchForm';
import FlatLists from '../../Components/Commons/Lists/FlatLists';
import Colors from '../../../Themes/Colors/colors.json';
import {createStackNavigator} from 'react-navigation-stack';

class Booking extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('title'),
  });
  render() {
    const {navigation} = this.props;
    console.log(navigation.state.params.title);
    return (
      <View>
        <BackgroundOrange Form={<SearchFrom />} />
        <ScrollView style={{marginTop: Dimensions.get('window').height - 460}}>
          <FlatLists navigation={navigation} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bookingBtn: {
    backgroundColor: Colors.GREEN_PRIMARY,
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    margin: 20,
  },
  ContainerList: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 1},
    shadowRadius: 1,
    shadowOpacity: 1.0,
    elevation: 2,
    flex: 1,
    flexDirection: 'row',
  },
  EventLogo: {
    height: Dimensions.get('screen').height - 400,
    width: Dimensions.get('screen').width - 60,
  },
  EventTitle: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  Timer: {
    padding: 20,
    paddingTop: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  Location: {
    padding: 20,
    color: Colors.ORANGE_PRIMARY,
  },
  imageBackground: {
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowOffset: {width: 2, height: 2},
    elevation: 5,
    padding: 20,
    margin: 10,
  },
  cardBackground: {
    margin: 30,
    marginTop: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 1.0,
    elevation: 3,
    backgroundColor: 'white',
  },
  containerPrice: {
    backgroundColor: Colors.RED_PRIMARY,
    borderRadius: 50,
    padding: 10,
    alignSelf: 'center',
  },
  price: {
    color: 'white',
    margin: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  organisateur: {
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default Booking;
