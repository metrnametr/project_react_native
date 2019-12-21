import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';

const AppHeaderIcon = (props) => (
  <HeaderButton { ...props } IconComponent={ Icon } iconSize={ 24 } color="white" />
);

export default AppHeaderIcon;
