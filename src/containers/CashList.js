import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import CashItem from '../components/CashItem';

import { theme } from '../../theme';

const { Section, Subheader } = List;

const CashList = (props) => {
  return (
    <ScrollView>
      <Section style={ styles.list }>
        <Subheader style={ styles.titleList }>Накопления</Subheader>
        <CashItem title="Title" icon="wallet" />
        <CashItem title="Title" icon="wallet" />
      </Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {},
  titleList: {
    color: 'white'
  }
});

export default CashList;
