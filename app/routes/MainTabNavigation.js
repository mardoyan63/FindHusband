import React from 'react';
import { StackNavigator } from 'react-navigation';
import {  PersonProfile, MassagesList } from '../views'
import { Ionicons } from '@expo/vector-icons';
import SelectionList from '../views/selection/Selection'
const MainTab = StackNavigator(
  {
    profile: {
      screen: PersonProfile,
    },
    list: {
      screen: SelectionList,
    },
    massages: {
      screen: MassagesList,
    }
  },
  {
    transitionConfig:() => ({
      transitionSpec: {
        duration: 0,
      },
    }),
    initialRouteName: 'list',
    headerMode: 'none',
  }
);
export default MainTab;