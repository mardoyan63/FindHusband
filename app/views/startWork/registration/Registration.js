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
import { Text } from 'react-native'

export class RegistrationProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  openApp = async ()=>{
      try{
          await AsyncStorage.setItem('start', 'start');
          this.props.navigation.navigate('tabnav')
      }catch(error){
          console.log(error);
          
      }
  }

  render() {
    return (
        <View style={styles.screen}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Registration</Text>
        <RkTextInput placeholder='Login'/>
        <RkTextInput placeholder='Login'/>
        <RkTextInput placeholder='Login'/>
        </View>
        <View style={styles.content}>
          <View>
            <GradientButton colors={["blue", "red"]} style={styles.save} rkType='large' text='Registration' onPress={this.openApp}/>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>Don’t have an account?</RkText>
              <RkButton rkType='clear' onPress={() => {}}>
                <RkText rkType='header6'> Sign up now </RkText>
              </RkButton>
            </View>
          </View>
          <View style={styles.buttons}>
            <RkButton style={styles.button1} rkType='social'>
              <RkText style={{color: 'white'}} rkType='awesome hero'>{FontAwesome.twitter}</RkText>
            </RkButton>
            <RkButton style={styles.button3} rkType='social'>
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
    //justifyContent: 'space-around',
  },
  headerText:{
      color: 'blue',
    fontSize: 25,
    fontWeight: '300',
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