import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { AsyncStorage } from 'react-native'

import API from '../../networking/api-service'

export class PersonProfile extends Component {
    constructor(props) {
        super(props)
        this.state={
            loading: false
        }
    }
    async clearStore() {
        try {
            await AsyncStorage.clear()
            console.log('clear');

        }
        catch (error) {
            console.log(error);

        }
    }
    render() { 
        return (
            <View>
                <Button
                    text='BUTTON'
                    onPress={this.clearStore}
                />
            </View>

        )
    }
}
