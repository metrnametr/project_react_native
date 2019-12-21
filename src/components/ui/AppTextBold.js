import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const AppText = (props) => <Text { ...props } style={ [styles.text, props.style] }>{props.children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'roboto-bold',
    color: 'white'
  }
});

export default AppText;