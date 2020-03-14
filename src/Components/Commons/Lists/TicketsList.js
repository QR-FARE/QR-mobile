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
import Swipeout from 'react-native-swipeout';

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
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {},
      onOpen: (secId, rowId, direction) => {},
      backgroundColor: 'none',
      right: [
        {
          onPress: () => {},
          text: <Icon name="trash" style={{fontSize: 20, color: 'white'}} />,
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      secId: 1,
    };
    return (
      <Swipeout {...swipeSettings}>
        <View style={styles.ContainerList}>
          <Image source={Im} style={styles.EventLogo} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.EventTitle}>{this.props.item}</Text>
            <View style={styles.Location}>
              <Text style={styles.where}>
                <Icon name="map-marker-alt" /> Dakar
              </Text>
            </View>
            <View style={styles.Timer}>
              <Text>
                <Icon name="clock" /> 12h30
              </Text>
            </View>
          </View>
        </View>
      </Swipeout>
    );
  }
}

export default class TicketsList extends React.Component {
  swipeBtn = [
    {
      text: <Icon name="trash" style={{color: 'white', fontSize: 20}} />,
      backgroundColor: Colors.RED_PRIMARY,
      type: 'delete',
    },
  ];
  render() {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.List}
        data={DATA}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => {}}>
            <Item index={index} item={item.title} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
      />
    );
  }
}

const styles = StyleSheet.create({
  List: {},
  ContainerList: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 1},
    shadowRadius: 1,
    shadowOpacity: 1.0,
    elevation: 2,
  },
  EventLogo: {
    height: 100,
    width: 150,
    alignSelf: 'center',
  },
  EventTitle: {
    color: 'black',
    fontFamily: Fonts.titleEvents,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  Timer: {marginLeft: 10, fontFamily: Fonts.time},
  Location: {margin: 10},
  ContentPrice: {
    backgroundColor: '#F75454',
    borderRadius: 80,
    padding: 10,
    marginLeft: 50,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  Price: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: Fonts.price,
  },
  where: {
    color: Colors.ORANGE_PRIMARY,
  },
});
