import React from 'react';

import {Platform, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Intro from '../screens/Intro';

const WIDTH = Dimensions.get('window').width;

const DrawerNavigatorConfig = {
    drawerWidth: WIDTH * 0.80,
};

const Drawer = createDrawerNavigator({
        Intro: {
            screen: Intro,
        }
    },
    DrawerNavigatorConfig
);


export default createAppContainer(Drawer);