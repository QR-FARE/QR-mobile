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
import Im from '../../assets/images/dadj.jpg';
import Colors from '../../../Themes/Colors/colors.json';

class Booking extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <BackgroundOrange
          Form={
            <TouchableOpacity style={styles.bookingBtn}>
              <Text style={{color: 'white', fontSize: 15}}>Reserver</Text>
            </TouchableOpacity>
          }
        />
        <ScrollView style={{marginTop: Dimensions.get('window').height - 460}}>
          <View style={styles.imageBackground}>
            <Image source={Im} style={styles.EventLogo} />
          </View>
          <View style={styles.cardBackground}>
            <Text style={styles.EventTitle}>
              {navigation.getParam('title')}
            </Text>
            <Text style={styles.Location}>
              <Icon name="map-marker-alt" /> Dakar
            </Text>
            <Text style={styles.Timer}>20H30</Text>
            <View style={styles.containerPrice}>
              <Text style={styles.price}>10000 FCFA</Text>
            </View>
            <Text style={styles.organisateur}>Organisé par Event ®</Text>
          </View>
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
