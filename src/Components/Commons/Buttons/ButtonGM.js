import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Colors from '../../../../Themes/Colors/colors.json';
import Ico from '../../../assets/Ico/CINE-ICO.png';

class ButtonGM extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Button</Text>
        <Image style={styles.imgIco} source={Ico} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5,
  },
  txt: {
    color: 'black',
  },
  imgIco: {
    height: 30,
    width: 30,
  },
});

export default ButtonGM;
