import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

import moment from 'moment';

import AppTextBold from './ui/AppTextBold';


const TimerSlider = () => {

  const [startTime, setStartTime] = useState(0);
  return (
    <View style={ styles.container }>
      <IconButton color="white" style={ styles.iconButton } icon="arrow-left-circle-outline" onPress={ () => setStartTime(startTime - 1) }/>
      <AppTextBold>
        {
          startTime === 0 ? moment().format('MMM Do YYYY') :
            startTime < 0 ? moment().subtract(Math.abs(startTime), 'days').format('MMM Do YYYY') :
              moment().add(startTime, 'days').format('MMM Do YYY')
        } 
      </AppTextBold>
      <IconButton color="white" style={ styles.iconButton } icon="arrow-right-circle-outline" onPress={ () => setStartTime(startTime + 1) }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: theme.mainColorDark,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  iconButton: {
    color: 'white'
  }
});

export default TimerSlider;