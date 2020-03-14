import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import QRLogo from '../../assets/images/Logo_trans.png';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('result'), 5000);
    });
  };

  async componentDidMount() {
    const splashData = await this.performTimeConsumingTask();
    const {navigation} = this.props;
    if (splashData !== null) {
      navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.Splash}>
        <Image style={styles.Logo} source={QRLogo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    height: 113,
    width: 310,
    margin: 20,
    transform: [{rotate: '-45deg'}],
  },
});

export default SplashScreen;
