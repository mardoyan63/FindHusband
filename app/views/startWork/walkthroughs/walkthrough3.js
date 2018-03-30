import React from 'react';
import {
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

export class Walkthrough3 extends React.Component {

    constructor(props) {
        super(props);
      }
    
      render() {
        return (
          <View style={styles.screen}>
            <View style={styles.textsContainer}>
              <RkText rkType='header2' style={styles.text1}>How it Works?</RkText>
              <RkText rkType='header2' style={styles.text2}>Communicate</RkText>
            </View>
            <View style={styles.imageContainer1}>
              <View style={styles.lovers}>
              <View style={styles.imageContainerDown}>
                <Image style={styles.image} source={require('../../../assets/app-images/girl.jpg')} />
              </View>
              <View style={styles.imageContainerUp}>
                <Image style={styles.image} source={require('../../../assets/app-images/girl.jpg')} />
              </View>
              </View>
              
              <View style={styles.iconContainer}>
                <Icon
                  name='home'
                    color='#fab2ae'
                  />
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text  style={styles.text3}>
              Communicate, give gifts, exchange{'\n'}
              messages and use video calls{'\n'}
              from complete realism.
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
        height: '44%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      lovers:{
        height: '100%',
        width: 256,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageContainerUp: {
        position: 'absolute',
       right: 0,
        height: 162,
        width: 162,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fab2ae',
        borderRadius: 81,
      },
      imageContainerDown:{
        position: 'absolute',
        left: 0,
        height: 162,
        width: 162,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#242858',
        borderRadius: 81,
      },
      image: {
        flex: 1,
        width: '100%',
        borderRadius: 81,
      },
      iconContainer: {
        position: 'absolute',
        bottom: 15,
        right: 20,
        height: 38,
        width: 38,
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