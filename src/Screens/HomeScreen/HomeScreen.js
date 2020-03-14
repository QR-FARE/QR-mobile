import React from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import BackgroundOrange from '../../Components/Commons/headers/BackgroundOrange';
import SearchFrom from '../../Components/Commons/Forms/SearchForm';
import Booking from './Booking';
import ButtonCompo from '../../Components/Commons/Buttons/ButtonGM';
import FlatLists from '../../Components/Commons/Lists/FlatLists';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../../../Themes/Colors/colors.json';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <BackgroundOrange Form={<SearchFrom />} />
        <ScrollView style={styles.EventsZone}>
          <View style={styles.viewButton}>
            <ButtonCompo style={styles.btnFlex} />
            <ButtonCompo />
            <ButtonCompo />
            <ButtonCompo />
            <ButtonCompo />
            <ButtonCompo />
            <ButtonCompo />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  HomeS: {screen: HomeScreen, navigationOptions: {header: null}},
  BookingS: {
    screen: Booking,
    navigationOptions: {
      headerBackTitleStyle: {backgroundColor: Colors.BLUE_PRIMARY},
      headerStyle: {
        backgroundColor: Colors.ORANGE_PRIMARY,
        elevation: 0,
      },
      headerTintColor: 'white',
    },
  },
});

const styles = StyleSheet.create({
  TopEvents: {
    margin: 80,
    marginLeft: 20,
    marginBottom: 0,
    fontSize: 20,
  },
  lineSeparator: {
    height: 1,
    backgroundColor: 'black',
    margin: 20,
    marginTop: 0,
    marginBottom: 0,
  },
  EventsZone: {
    marginTop: Dimensions.get('window').height - 480,
  },
  viewButton: {
    margin: 50,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default HomeStack;
