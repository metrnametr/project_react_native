import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import AppText from './AppText';
import { theme } from '../../../theme';


const AppRadioButton = ({ value, checked, text, onPress, color = theme.primaryColorDark }) => {
  const onTouch = () => onPress(value);
  return (
    <TouchableOpacity onPress={ onTouch }>
      <View style={ styles.radioContainer }>
        <RadioButton 
          onPress={ onTouch }
          status={ value === checked ? 'checked' : 'unchecked' }
          style={ styles.radio }
          uncheckedColor="white"
          color={ color }
          value={ value }
        />
        <AppText style={ styles.text }>{text}</AppText>
      </View>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',  
    backgroundColor: theme.mainColorDark
  },
  radio: {

  },
  text: {
    color: 'white'
  }
});

export default AppRadioButton;