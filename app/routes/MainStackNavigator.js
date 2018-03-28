//import React from 'react';
import { StackNavigator } from 'react-navigation';
import { EnterProfile, RegistrationProfile, LoginProfile, WalkthroughScreen } from '../views'
import MainTab from './MainTabNavigation'

const MainStack = StackNavigator({
    start: {
        screen: WalkthroughScreen,
    },
    enter:{
        screen: EnterProfile,
    },
    registr:{
        screen: RegistrationProfile,
    },
    login: {
        screen: LoginProfile,
    },
    tabnav: {
        screen: MainTab,
    }
    
},
    {
        headerMode: 'none',
        initialRouteName: 'start' ,
    }
)

export default MainStack;