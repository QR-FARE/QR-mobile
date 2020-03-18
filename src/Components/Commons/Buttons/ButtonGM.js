import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native';
import Colors from '../../../../Themes/Colors/colors.json';
import Ico from '../../../assets/Ico/CINE-ICO.png';

class ButtonGM extends Component {
  onChangeS = async () => {
    this.props.onChangeScreen;
    console.log(this.props);
  };
  render() {
    const {name, ico, navigation} = this.props;
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('BookingS', {title: name})}>
        <Image style={styles.imgIco} source={ico} />
        <Text style={styles.txt}>{name}</Text>
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
    flexBasis: 50,
    width: 120,
    height: 120,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5,
    marginTop: 0,
    marginLeft: 0,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.BLUE_PRIMARY,
  },
  txt: {
    color: 'black',
  },
  imgIco: {
    height: 50,
    width: 50,
  },
});

export default ButtonGM;
