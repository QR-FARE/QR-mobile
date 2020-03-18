import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Colors from '../../../../Themes/Colors/colors.json';
import Fonts from '../../../../Themes/Fonts/Fonts.json';
import Im from '../../../assets/images/dadj.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DATA = [
  {
    title: 'QR-FARE',
    key: '1',
  },
  {
    title: 'QR-FARE',
    key: '2',
  },
  {
    title: 'QR-FARE',
    key: '3',
  },
  {
    title: 'QR-FARE',
    key: '4',
  },
  {
    title: 'QR-FARE',
    key: '5',
  },
  {
    title: 'QR-FARE',
    key: '6',
  },
  {
    title: 'QR-FARE',
    key: '7',
  },
];
class Item extends React.Component {
  render() {
    return (
      <View style={styles.ContainerList}>
        <Image source={Im} style={styles.EventLogo} />
        <View style={{marginLeft: 10, marginTop: 10}}>
          <View style={styles.Location}>
            <View style={styles.entity1}>
              <Text style={styles.event}>DADJU & Maitre GIMS</Text>
              <Text style={styles.type}>3D</Text>
            </View>
            <Text style={styles.where}>Dakar</Text>
          </View>
          <View style={styles.TimerPrice}>
            <Text style={{color: Colors.BLUE_PRIMARY, fontSize: 15}}>
              12h30 GMT
            </Text>
            <Text style={styles.Price}>10000 FCFA</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default class FlatLists extends React.Component {
  render() {
    return (
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.List}
        data={DATA}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('TicketsS', {
                id: item.key,
                title: this.props.navigation.getParam('title'),
              })
            }>
            <Item item={item.title} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
      />
    );
  }
}

const styles = StyleSheet.create({
  List: {
    margin: 20,
    marginTop: 20,
  },
  ContainerList: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.BLUE_PRIMARY,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 1},
    shadowRadius: 1,
    shadowOpacity: 1.0,
    elevation: 2,
    marginRight: 0,
    flex: 1,
    flexDirection: 'row',
    height: Dimensions.get('screen').height - 450,
    //width: Dimensions.get('screen').width - 170,
  },
  EventLogo: {
    height: Dimensions.get('window').height - 500,
    width: 100,
    alignSelf: 'center',
  },
  event: {
    color: Colors.BLUE_PRIMARY,
    fontSize: 15,
  },
  type: {
    color: Colors.BLUE_PRIMARY,
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 15,
  },
  TimerPrice: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 30,
    fontFamily: Fonts.time,
  },
  Location: {margin: 10, flex: 1, flexDirection: 'column'},
  Price: {
    color: 'black',
    fontFamily: Fonts.price,
    fontWeight: 'bold',
    paddingLeft: 30,
    fontSize: 15,
  },
  where: {
    color: Colors.BLUE_PRIMARY,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 15,
  },
  entity1: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'space-around',
  },
});
