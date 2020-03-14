import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  CameraRoll,
} from 'react-native';
import BackgroundOrange from '../../Components/Commons/headers/BackgroundOrange';
import SearchFrom from '../../Components/Commons/Forms/SearchForm';
import TicketsList from '../../Components/Commons/Lists/TicketsList';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../../../Themes/Colors/colors.json';

class QRScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <BackgroundOrange
          Form={<Text style={{alignSelf: 'center'}}>12 Tickets Réservés</Text>}
        />
        <ScrollView contentContainerStyle={{marginTop: 200}}>
          <TicketsList navigation={navigation} />
        </ScrollView>
      </View>
    );
  }
}

const QRStack = createStackNavigator({
  QRS: {screen: QRScreen, navigationOptions: {header: null}},
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
  EventsZone: {},
});

export default QRStack;
