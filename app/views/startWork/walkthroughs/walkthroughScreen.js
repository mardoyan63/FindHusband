import React from 'react';
import {
  View,
} from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';
import { GradientButton } from '../../../components/';
import { Walkthrough } from '../../../components/walkthrough';
import { Walkthrough1 } from './walkthrough1';
import { Walkthrough2 } from './walkthrough2';
import { Walkthrough3 } from './walkthrough3';
import { PaginationIndicator } from '../../../components';


export class WalkthroughScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  changeIndex(index) {
    this.setState({ index })
  }

  render() {
    return (
      <View style={styles.contaner}>
        <View style={styles.screen}>
          <Walkthrough onChanged={(index) => this.changeIndex(index)}>
            <Walkthrough1 />
            <Walkthrough2 />
            <Walkthrough3 />
          </Walkthrough>
          <PaginationIndicator length={3} current={this.state.index} />
        </View>
        {
          this.state.index === 2 ?
            <GradientButton
              rkType='large'
              style={styles.button}
              text="Start"
              onPress={()=>{this.props.navigation.navigate('enter')}} /> : null
        }
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  contaner: {
    backgroundColor: theme.colors.screen.base,
    flex: 1
  },
  screen: {
    height: '85%',
    backgroundColor: theme.colors.screen.base,
    paddingVertical: 28,
    alignItems: 'center',
    //flex: 1,
  },
  button: {
    //marginTop: 25,
    marginHorizontal: 100,
  }
}));