import React from 'react';
import {
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { RkStyleSheet } from 'react-native-ui-kitten';
import { GradientButton } from '../../../components/';
import { Walkthrough } from '../../../components/walkthrough';
import { Walkthrough1 } from './walkthrough1';
import { Walkthrough2 } from './walkthrough2';
import { Walkthrough3 } from './walkthrough3';
import { PaginationIndicator } from '../../../components';


export class WalkthroughScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  changeIndex(index) {
    this.setState({ index })
  }

  render() {
    let button= this.state.index === 2 ?
    <Button
    buttonStyle={styles.button}
    titleStyle={{fontSize: 20, fontWeight: 'normal',}}
      title="Start"
      onPress={() => { this.props.navigation.navigate('enter') }} /> : null
    return (
      <View style={{flex: 1}}>
      <View style={styles.header}></View>
      <View style={styles.contaner}>
        <View style={styles.screen}>
          <Walkthrough onChanged={(index) => this.changeIndex(index)}>
            <Walkthrough1 />
            <Walkthrough2 />
            <Walkthrough3 />
          </Walkthrough>
          <PaginationIndicator length={3} current={this.state.index} />
        </View>
        <View style={styles.buttonContainer}>
          {button}
        </View>
      </View>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  header: {
    height: 24,
    width: '100%',
    backgroundColor: '#fcd9d7'
  },
  contaner: {
    backgroundColor: theme.colors.screen.base,
    flex: 1
  },
  screen: {
    height: '80%',
    backgroundColor: theme.colors.screen.base,
    //paddingVertical: 28,
    alignItems: 'center',
    //flex: 1,
  },
  buttonContainer:{
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red'
  },
  button: {
    height: 44,
    width: 160,
    backgroundColor: '#242858',
    borderRadius: 22,
    marginTop: 20,
  }
}));