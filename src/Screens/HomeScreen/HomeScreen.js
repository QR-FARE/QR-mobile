import React from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import BackgroundOrange from '../../Components/Commons/headers/BackgroundOrange';
import SearchFrom from '../../Components/Commons/Forms/SearchForm';
import Booking from './Booking';
import Tickets from './Tickets';
import ButtonCompo from '../../Components/Commons/Buttons/ButtonGM';
//import FlatLists from '../../Components/Commons/Lists/FlatLists';
import CONCERTICO from '../../assets/Ico/concert-ico.png';
import CINEICO from '../../assets/Ico/CINE-ICO.png';
import CONFERENCEICO from '../../assets/Ico/conference-ico.png';
import DEGUSTATIONICO from '../../assets/Ico/degustation-ico.png';
import PROFILICO from '../../assets/Ico/profil-ico.png';
import LISTEICO from '../../assets/Ico/tickets-ico.png';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../../../Themes/Colors/colors.json';

class HomeScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <BackgroundOrange Form={<SearchFrom />} />
        <ScrollView style={styles.EventsZone}>
          <View style={styles.viewButton}>
            <ButtonCompo name="CINEMA" ico={CINEICO} navigation={navigation} />
            <ButtonCompo
              name="CONCERT"
              ico={CONCERTICO}
              navigation={navigation}
            />
          </View>
          <View style={styles.viewButtonO}>
            <ButtonCompo
              name="DEGUSTATION"
              ico={DEGUSTATIONICO}
              navigation={navigation}
            />
            <ButtonCompo
              name="CONFERENCE"
              ico={CONFERENCEICO}
              navigation={navigation}
            />
          </View>
          <View style={styles.viewButtonO}>
            <ButtonCompo
              name="PROFIL"
              ico={PROFILICO}
              navigation={navigation}
            />
            <ButtonCompo name="LISTE" ico={LISTEICO} navigation={navigation} />
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
        backgroundColor: Colors.BLUE_PRIMARY,
        elevation: 0,
      },
      headerTintColor: 'white',
    },
  },
  TicketsS: {
    screen: Tickets,
    navigationOptions: {
      headerBackTitleStyle: {backgroundColor: Colors.BLUE_PRIMARY},
      headerStyle: {
        backgroundColor: Colors.BLUE_PRIMARY,
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
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  viewButtonO: {
    marginTop: 0,
    margin: 50,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default HomeStack;
