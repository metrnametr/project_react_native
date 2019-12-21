import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../../theme.js';
import CategoryItem from '../components/CategoryItem';
import CurrencyCircle from '../components/CurrencyCircle';

const categories = [
  {
    id: '1',
    icon: 'car',
    title: 'Автомобиль',
    color: '#F06292',
    count: 50
  },
  {
    id: '2',
    icon: 'home',
    title: 'Дом',
    color: '#BA68C8',
    count: 150
  },
  {
    id: '3',
    icon: 'hammer',
    title: 'Инструменты',
    color: '#E57373',
    count: 17000
  },
  {
    id: '4',
    icon: 'airplane',
    title: 'Перелеты',
    color: '#1E88E5',
    count: 1700
  },
  {
    id: '5',
    icon: 'baseball-ball',
    title: 'Спорт',
    color: '#DCE775',
    count: 11700
  },
  {
    id: '6',
    icon: 'heart',
    title: 'Здоровье',
    color: '#F50057',
    count: 700
  },
  {
    id: '7',
    icon: 'world',
    title: 'Мир',
    color: '#303F9F',
    count: 700
  },
  {
    id: '8',
    icon: 'shopping-cart',
    title: 'Покупки',
    color: '#FFF59D',
    count: 700
  }
];

const ContainerCurrency = (props) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.rowContainer }>
        {categories
          .slice(0, 4)
          .map((category) => (
            <CategoryItem
              key={ category.id }
              title={ category.title }
              icon={ category.icon }
              count={ category.count }
              color={ category.color }
            />
          ))}
      </View>

      <View style={ styles.columnContainer }>
        <View style={ { justifyContent: 'space-around' } }>
          {categories
            .slice(4, 6)
            .map((category) => (
              <CategoryItem
                key={ category.id }
                title={ category.title }
                icon={ category.icon }
                count={ category.count }
                color={ category.color }
              />
            ))}
        </View>
        <CurrencyCircle />
        <View style={ { justifyContent: 'space-around' } }>
          {categories
            .slice(6, 8)
            .map((category) => (
              <CategoryItem
                key={ category.id }
                title={ category.title }
                icon={ category.icon }
                count={ category.count }
                color={ category.color }
              />
            ))}
        </View>
      </View>

      <View style={ styles.rowContainer }>
        {categories
          .slice(8, 12)
          .map((category) => (
            <CategoryItem
              key={ category.id }
              title={ category.title }
              icon={ category.icon }
              count={ category.count }
              color={ category.color }
            />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    // flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: theme.mainColor
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative'
  },
  columnContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default ContainerCurrency;
