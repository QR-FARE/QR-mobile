import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import HomeScreen from './src/Screens/HomeScreen';
import QRScreen from './src/Screens/QRScreen';
import TicketsScreen from './src/Screens/TicketsScreen';
import ProfilScreen from './src/Screens/ProfilScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from './Themes/Colors/colors.json';

const TabBarComponent = props => <BottomTabBar {...props} />;

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    QR: {
      screen: QRScreen,
    },
    Tickets: {
      screen: TicketsScreen,
    },
  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={styles.tabBar} />
    ),
    tabBarOptions: {
      labelStyle: {
        color: 'white',
        fontSize: 13,
      },
      showIcon: true,
      activeTintColor: Colors.ORANGE_PRIMARY,
    },
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: 'black',
      },
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Home') {
          return <Icon name="home" size={30} color="white" solid />;
        } else if (routeName === 'QR') {
          return <Icon name="qrcode" size={30} color="white" />;
        } else if (routeName === 'Tickets') {
          return <Icon name="ticket" size={30} color="white" />;
        }
      },
    }),
  },
);

const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: 'white',
    shadowOffset: {height: 2, width: 1},
    shadowColor: 'black',
    elevation: 5,
    backgroundColor: Colors.BLUE_PRIMARY,
  },
});

export default createAppContainer(AppNavigator);
