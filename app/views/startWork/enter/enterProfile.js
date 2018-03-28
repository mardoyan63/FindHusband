import React from 'react';
import {
  View,
  Image,
  Keyboard,
  AsyncStorage
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../../assets/icons';
import {GradientButton} from '../../../components/gradientButton';
import {RkTheme} from 'react-native-ui-kitten';
import {scale, scaleModerate, scaleVertical} from '../../../utils/scale';

export class EnterProfile extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  getValue = async () => {

    try {
        const value = await AsyncStorage.getItem('start');
        if (value !== null) {
            // We have data!!
            console.log(value);
            
        }
        else{
            console.log('___');
        }
    } catch (error) {
        // Error retrieving data
    }
}
removeValue = async () => {

    try {
        await AsyncStorage.removeItem('start');
        
        
    } catch (error) {
        // Error retrieving data
    }
    
    

}

  render() {
    return (
        <View style={styles.screen}>
        <View style={styles.header}>
        <Image style={styles.image} source={require('../../../assets/girl.jpg')}/>
        </View>
        <View style={styles.content}>
          <View>
            <GradientButton style={styles.save} rkType='large' text='Registration' onPress={() => {this.props.navigation.navigate('registr')}}/>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>Don’t have an account?</RkText>
              <RkButton rkType='clear' onPress={() => {this.props.navigation.navigate('login')}}>
                <RkText rkType='header6'> Login </RkText>
              </RkButton>
            </View>
          </View>
          <View style={styles.buttons}>
            <RkButton onPress={this.getValue} style={styles.button1} rkType='social'>
              <RkText style={{color: 'white'}} rkType='awesome hero'>{FontAwesome.twitter}</RkText>
            </RkButton>
            <RkButton onPress={this.removeValue} style={styles.button3} rkType='social'>
              <RkText style={{color: 'white'}} rkType='awesome hero'>{FontAwesome.facebook}</RkText>
            </RkButton>
            <RkButton style={styles.button2} rkType='social'>
              <RkText style={{color: 'white'}} rkType='awesome hero'>{FontAwesome.google}</RkText>
            </RkButton>
          </View>
        </View>
      </View >
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    flex: 1,
  },
  header: {
    height: "60%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width: '100%',
  },
  
  save: {
    marginVertical: 20
  },
  buttons: {
    marginVertical: 20,
    flexDirection: 'row',
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button1: {
      backgroundColor: RkTheme.current.colors.twitter,
    borderWidth: 0,
  },
  button2: {
    backgroundColor: RkTheme.current.colors.google,
  borderWidth: 0,
},
button3: {
    backgroundColor: RkTheme.current.colors.facebook,
  borderWidth: 0,
},
  footer: {}
}));