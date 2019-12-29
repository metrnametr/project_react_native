import React from 'react';
import { Platform, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import MainScreen from '../screens/MainScreen';
import CashScreen from '../screens/CashScreen';

import CreateBankScreen from '../screens/CreateBankScreen';

import { theme } from '../../theme';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MainStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        // headerLeft:(<Button onPress={() => navigation.openDrawer()} title="qwe" />),
        // header: null
      })
    },
  },
  {
    ...config,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.mainColorDark,
      },
    }
  }
);



MainStack.navigationOptions = {
  tabBarLabel: 'Transaction',
  tabBarIcon: ({ focused }) => (
    <Icon
      // focused={focused}
      name="rotate-3d"
      color="white"
    />
  ),
  activeColor: 'white',
};

MainStack.path = '';

const CashStack = createStackNavigator({
  Cash: {
    screen: CashScreen,
    navigationOptions: () => ({
      // header: null,
    })
  },
  AddCashScreen: {
    screen: CreateBankScreen,
  },
}, {
  ...config,
  initialRouteName: 'Cash',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: theme.mainColorDark,
    },
  }
});


CashStack.navigationOptions = ({navigation, focused}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarLabel: 'Bank',
    tabBarIcon: () => (
      <Icon
      // focused={focused}
        name="bank"
        color="white"
      />
    ),
    tabBarVisible
  };
};


CashStack.path = '';

const MainTabNavigator =  createMaterialBottomTabNavigator({
  Main: { screen: MainStack },
  Cash: { screen: CashStack }
}, {

});

export default MainTabNavigator;
