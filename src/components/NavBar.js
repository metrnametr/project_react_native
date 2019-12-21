import React, { useRef, useContext } from 'react';
import { View, Text, DrawerLayoutAndroid, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../theme';
import { DrawerContext } from '../context/DrawerContext';

import TimerSlider from './TimerSlider';


const NavBar = ({ title }) => {
  const { openDrawer } = useContext(DrawerContext);
  return (
    <View style={ styles.navbar }>
      <View style={ styles.navbarCenter }>
        <IconButton size={ 30 } icon="menu" onPress={ () => openDrawer() } color="white" />
        {/* <Text style={ styles.text }>
          {title}
        </Text> */}
      </View>
      <TimerSlider />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    backgroundColor: theme.mainColorDark,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },
  navbarCenter: {
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: theme.mainColorDark,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
    // height: 70,
    // paddingBottom: 15,
    // marginBottom: 15
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: 'black'},
  main: {paddingLeft: 3},
});

export default NavBar;
