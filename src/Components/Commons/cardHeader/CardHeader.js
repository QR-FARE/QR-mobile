import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

export default class CardHeader extends React.Component {
  render() {
    const {Content} = this.props;
    return <View style={styles.Container}>{Content}</View>;
  }
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    //height: Dimensions.get('screen').height - 40,
    width: Dimensions.get('screen').width - 40,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 3},
    shadowColor: 'black',
    shadowOpacity: 1.0,
    elevation: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 20,
    marginTop: 110,
    borderRadius: 20,
  },
});
