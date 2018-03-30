import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import{ Icon } from 'react-native-elements';

export class Walkthrough2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.textsContainer}>
          <RkText rkType='header2' style={styles.text1}>How it Works?</RkText>
          <RkText rkType='header2' style={styles.text2}>Meet a wonderful man</RkText>
        </View>
        <View style={styles.imageContainer1}>
          <View style={styles.empty}></View>
          <View style={styles.imageContainer2}>
            <Image style={styles.image} source={require('../../../assets/app-images/girl.jpg')} />
            <View style={styles.iconContainer}>
            <Icon
              name='home'
                color='#fab2ae'
              />
          </View>
          </View>
          
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text3}>
          To search, use the directory.{'\n'}
          Mark those who liked.
          </Text>
          </View>
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
    color: '#242858',
  },
  text2: {
    color: '#fab2ae',
    fontSize: 22,
    marginTop: 35
  },
  textsContainer: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer1: {
    marginTop: '9%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer2: {
    height: 164,
    width: 164,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '15deg'}, {translateX: 32}, {translateY: -15}],
    borderRadius: 12
  },
  empty:{
    position: 'absolute',
    height: 150,
    width: 150,
    backgroundColor: '#e2e2e2',
    borderRadius: 12
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 12
  },
  iconContainer: {
    position: 'absolute',
    bottom: 15,
    right: 12,
    backgroundColor: '#fff',
    height: 38,
    width: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer:{
    height: '26%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3:{
    fontSize: 16,
    textAlign: 'center',
    color: '#242858',
    fontWeight: '100',
  }
}));