import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NavBar from '../components/NavBar';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { theme } from '../../theme';
import AppHeaderIcon from '../components/ui/AppHeaderIcon';
import ContainerCategory from '../containers/ContainerCategory';

// import BottomNavigation from '../src/containers/BottomNavigation';   

const MainScreen = (props) => {
  return (
    <View style={ { backgroundColor: theme.mainColorDark, flex: 1 } }>
      {/* <NavBar title="Transations Screen" /> */}
      <ContainerCategory />
    </View>
  );
};

MainScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
        <Item title="goBack" iconName="md-menu" onPress={ () => navigation.goBack() } />
        {/* <HiddenItem title="hidden in overflow menu" onPress={ () => alert('hidden in overflow') } /> */}
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    // backgroundColor: theme.mainColorDark
  }
});

export default MainScreen;