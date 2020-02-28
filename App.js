import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Intro from './screens/Intro';
import Artist from './screens/Artist';
import About from './screens/About';
import IHuman from './screens/IHuman';
import MainMenu from './screens/MainMenu';
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
                    <Stack.Screen name="Artist" component={Artist} />
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


export default App;
