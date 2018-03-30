import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { AsyncStorage } from 'react-native'


import API from '../../networking/api-service'

export class PersonProfile extends Component {
    apiService = new API()
    constructor(props) {

        super(props)
        this.state = {
            name: '',
            nameValid: false,
            password: '',
            passwordValid: false,
            allValid: false,
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
    validateName(text){
        var val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(val.test(text)){
            console.log('valid');
            this.setState({
                name: text,
                nameValid: true
            },()=>this.validate())
        }
        else{
            console.log('invalid');
            this.setState({
                nameValid: false
            },()=>this.validate())
        }
    }
validatePasswod(text){
    var val = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
    if(val.test(text)){
        console.log('valid');
        this.setState({
            password: text,
            passwordValid: true
        },()=>this.validate())
    }
    else{
        console.log('invalid');
        this.setState({
            passwordValid: false
        },()=>this.validate())
    }
}
validate(){
    if(this.state.nameValid && this.state.passwordValid){
        this.setState({
            allValid: true,
        })
    }
    else{
        this.setState({
            allValid: false,
        })
    }
}
    render() {
        return (
            <View style={styles.container}>
                <Button
                    text='BUTTON'
                    buttonStyle={this.state.allValid ? styles.btt : styles.bttDisabled}
                    disabled={!this.state.allValid}
                    disabledTitleStyle={{Color: 'red'}}
                    onPress={()=>{console.log(this.state.name+','+this.state.password);
                    }}
                />
                <Button
                    text='sdfsdf'
                    onPress={this.clearStore}
                />
                <Input
                placeholder='Name'
                onChangeText={(text)=>this.validateName(text)}
                />
                <Input
                placeholder='Password'
                onChangeText={(text)=>this.validatePasswod(text)}
                />
            </View>

        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    bttDisabled:{
        backgroundColor: 'red'
    },
    btt:{

    }
})
