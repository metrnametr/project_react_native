import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import CreateBankForm from '../containers/CreateBankForm';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { theme } from '../../theme';
import AppHeaderIcon from '../components/ui/AppHeaderIcon';

const CreateBankScreen = (props) => {
  return (
    <View style={ styles.container }>
      {/* <NavBar title="Create bank" /> */}
      <CreateBankForm />
    </View>
  );
};

CreateBankScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
        <Item title="check" iconName="md-checkmark" onPress={ () => console.log(2) } />
        {/* <HiddenItem title="hidden in overflow menu" onPress={ () => alert('hidden in overflow') } /> */}
      </HeaderButtons>
    ),
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
        <Item title="goBack" iconName="md-arrow-round-back" onPress={ () => navigation.goBack() } />
        {/* <HiddenItem title="hidden in overflow menu" onPress={ () => alert('hidden in overflow') } /> */}
      </HeaderButtons>
    ),
    headerCenter: <Text>Text</Text>
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.mainColor,
    // paddingHorizontal: 10
  }
});

export default CreateBankScreen;