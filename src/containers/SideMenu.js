import React from 'react';
import PropTypes from 'prop-types';

import { NavigationActions } from 'react-navigation';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { theme } from '../../theme';

const SideMenu = (props) => {
//   const navigateToScreen = (route) => {
//     const navigateAction = NavigationActions.navigate({
//       routeName: route
//     });
//     props.navigation.dispatch(navigateAction);
//   };

  console.log('231');
  return (
    <View style={ styles.container }>
      <Text>Side Bar</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.mainColor
  }
});

// SideMenu.propTypes = {
//   navigation: PropTypes.object
// };

export default SideMenu;
