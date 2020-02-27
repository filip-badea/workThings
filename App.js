/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import Intro, {normalize} from './screens/Intro'
import Artists from "./screens/Artists";
import About from "./screens/About";
import IHuman from "./screens/IHuman";
import MainMenu from './screens/MainMenu'
import HybridSensorium from './screens/HybridSensorium';
import SacredEgg from './screens/SacredEgg';
import InsatiableMachines from './screens/InsatiableMachines';


const Stack = createStackNavigator();

{/*<StatusBar barStyle="dark-content" />*/}
{/*<View style={styles.body}>*/}
{/*<Text style={styles.sectionTitle}>Step One</Text>*/}
{/*</View>*/}

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="none"
                    screenOptions={{
                    gestureEnabled: true,
                    // cardOverlayEnabled: true,
                    ...TransitionPresets.SlideFromRightIOS,
                }}>
                    <Stack.Screen name="Intro" component={Intro} />
                    <Stack.Screen name="MainMenu" component={MainMenu} />
                    <Stack.Screen name="Artists" component={Artists} />
                    <Stack.Screen name="About" component={About} />
                    <Stack.Screen name="IHuman" component={IHuman} />
                    <Stack.Screen name="SacredEgg" component={SacredEgg} />
                    <Stack.Screen name="HybridSensorium" component={HybridSensorium} />
                    <Stack.Screen name="InsatiableMachines" component={InsatiableMachines} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
