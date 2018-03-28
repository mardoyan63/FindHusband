import React from 'react';
import {
  DrawerNavigator,
  StackNavigator
} from 'react-navigation';
import { withRkTheme } from 'react-native-ui-kitten';
import { bootstrap } from './config/bootstrap';
import { AppLoading, Font } from 'expo';
import { View } from "react-native";
import MainStack from './routes/MainStackNavigator';
import TabNavigator from './routes/MainTabNavigation';
import { AsyncStorage } from 'react-native'

import Reducer from './reducers/Reducers'
import { Provider } from 'react-redux'
import { createStore,} from 'redux'

const store = createStore(Reducer,)

bootstrap();

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

export default class App extends React.Component {
  getValue = async () => {

    try {
      const value = await AsyncStorage.getItem('start');
      if (value !== null) {
        // We have data!!
        this.setState({
          start: true
        })
      }
      else {
        this.setState({
          start: false
        })
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  state = {
    loaded: false,
    start: false
  };

  componentWillMount() {
    this.getValue()
    this._loadAssets();
  }

  _loadAssets = async () => {
    await Font.loadAsync({
      'fontawesome': require('./assets/fonts/fontawesome.ttf'),
      'icomoon': require('./assets/fonts/icomoon.ttf'),
      'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    });
    this.setState({ loaded: true });
  };

  render() {

    if (!this.state.loaded) {
      return <AppLoading />;
    }
    if (this.state.start) {
      return (
        <Provider store={store}>
        <View style={{ flex: 1 }}>
          <TabNavigator />
        </View>
        </Provider>
      );
    }
    else {
      return (
        <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MainStack />
        </View>
        </Provider>
      );
    }

  }
}

Expo.registerRootComponent(App);
