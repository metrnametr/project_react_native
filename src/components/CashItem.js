import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { theme } from '../../theme';

const { Item, Icon } = List;

const CashItem = (props) => {
  const { title, icon } = props;
  return (
    <View style={ styles.listItemContainer }>
      <Item
        style={ styles.listItem }
        titleStyle={ { color: 'white' } }
        title={ title }
        left={ () => <Icon style={ styles.itemIcon } icon={ icon } color="white" /> }
        right={ () => <Text  style={ styles.countText } >7000</Text> }
        description="hello"
        descriptionStyle={ { color: 'white' } }
      />
    </View>
  );
};


const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 0.2,
    borderColor: '#eee'
  },
  countText: {
    color: 'white',
    paddingBottom: 10,
    fontSize: 20,
    letterSpacing: 1,
    alignSelf: 'flex-end',
  },
  listItem: {
    width: '100%',
    color: 'white',
  },
  itemIcon: {
    backgroundColor: theme.purpleColor,
    width: 55,
    borderRadius: 5
  }
});

export default CashItem;