import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-ionicons';
import { theme } from '../../theme.js';


const Count = ({ count }) => (
  <View style={ styles.containerCount }>
    <Text style={ styles.text }>{count}</Text>
    <Text style={ { marginHorizontal: 2 } }>
      <Icon ios='logo-usd' android='logo-usd' size={ 13 } color="white" />
    </Text>
  </View>
);
const CategoryItem = (props) => {
  const { icon = 'add', title = 'Здоровье', count = '50', color = theme.orangeColor } = props;
  return (
    <TouchableOpacity onPress={ () => console.log('1') } activeOpacity={ 1 }>
      <View style={ styles.container }>
        <Text numberOfLines={ 1 } ellipsizeMode='tail' style={ styles.text }>{title}</Text>
        <Count count={ 0 } />
        <View style={ [styles.icon, { backgroundColor: color }] }>
          <Icon name={ icon } ios={ `ios-${icon}` } android={ `md-${icon}` } size={ 25 } color="white" />
        </View>
        <Count count={ count } />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  containerCount: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: Dimensions.get('window').width * 0.14,
    height: Dimensions.get('window').width * 0.14,
    margin: 5,
    borderRadius: Dimensions.get('window').width * 0.14,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    color: 'white',
    fontSize: 12,
    maxWidth: Dimensions.get('window').width * 0.15,
    
  }
});
export default CategoryItem;