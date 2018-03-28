import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';

export class Walkthrough2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let image = RkTheme.current.name === 'light'
      ? <Image source={require('../../../assets/images/kittenImage.png')}/>
      : <Image source={require('../../../assets/images/kittenImageDark.png')}/>;

    return (
      <View style={styles.screen}>
        <RkText rkType='header2' style={styles.text1}>Welcome to Kitten Tricks</RkText>
        <RkText rkType='header2' style={styles.text2}>Welcome to Kitten Tricks</RkText>
        {image}
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    alignItems: 'center',
    //justifyContent: 'center',
    flex: 1
  },
  text1: {
    marginTop: 20
  },
  text2: {
    marginTop: 20
  }
}));