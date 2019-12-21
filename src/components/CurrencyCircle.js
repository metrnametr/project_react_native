import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../theme';

const CurrencyCircle = (props) => {
  return (
    <View style={ styles.circle }>
      <Text style={ styles.text }>10000</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    // width: Dimensions.get('window').width * 0.17,
    // height: Dimensions.get('window').width * 0.17,
    // backgroundColor: theme.orangeColor,
    // margin: 5,
    // borderRadius: Dimensions.get('window').width * 0.17,        
    // position: "absolute",
    // left: Dimensions.get('window').width * 0.24,
    // top: Dimensions.get('window').width * 0.08,
    height: Dimensions.get('window').width * 0.5,
    width: Dimensions.get('window').width * 0.5,
    borderRadius: Dimensions.get('window').width * 0.5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'tra',
    borderWidth: 10,
    borderColor: theme.primaryColor
  },
  text: {
    color: theme.purpleColor,
    fontSize: 25,
    fontWeight: '100',
    fontFamily: 'roboto-light'
  }
});

export default CurrencyCircle;