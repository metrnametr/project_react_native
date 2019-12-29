import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import CashList from '../containers/CashList';
import NavBar from '../components/NavBar';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { theme } from '../../theme';
import AppHeaderIcon from '../components/ui/AppHeaderIcon';

const wallets = [
  {
    id: '1',
    title: 'Наличные',
    cash: 7444,
    typeCurrency: 'USD',
    typeCash: 'money',
    description: 'Мой самый первый кошелек',
    icon: 'money',
    categories: [
      {
                
      }
    ]
  }
];

const CashScreen = (props) => {
  const { navigation: { navigate } } = props;
  return (
    <View style={ { backgroundColor: theme.mainColorDark, flex: 1 } }>
      {/* <NavBar title="Cash Screen" /> */}
      <View style={ { flex: 4, backgroundColor: theme.mainColor} }>
        <CashList />
      </View>
      <FAB
        style={ styles.fab }  
        icon="plus"
        onPress={ () => navigate('AddCashScreen') }
      />
    </View>
  );
};

CashScreen.navigationOptions = ({ navigation }) => {
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    // flex: 1,
    backgroundColor: theme.primaryColorDark
  },
});

export default CashScreen;