import React from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
import Colors from '../../../../Themes/Colors/colors.json';
import CardHeader from '../cardHeader/CardHeader';
import BG from '../../../assets/images/background.png';

export default class BackgroundOrange extends React.Component {
  render() {
    const {Form} = this.props;
    return (
      <View>
        <View style={styles.Shape}>
          <CardHeader Content={Form} />
          <Image source={BG} style={styles.bgImage} opacity={0.3} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    top: 0,
    width: Dimensions.get('screen').width,
    height: 150,
  },
  Shape: {
    backgroundColor: Colors.BLUE_PRIMARY,
    height: 150,
    position: 'absolute',
    zIndex: 1,
    width: Dimensions.get('screen').width,
  },
});
