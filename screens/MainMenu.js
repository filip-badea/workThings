import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {normalize} from './Intro';


class Intro extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.root}>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            color='#FFD600'
                            title="Insatiable Machines"
                            titleStyle={styles.buttonText}
                            onPress={() => navigate('InsatiableMachines')}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            color='#FFD600'
                            title="I, Human"
                            titleStyle={styles.buttonText}
                            onPress={() => navigate('IHuman')}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            color='#FFD600'
                            title="Sacred Egg"
                            titleStyle={styles.buttonText}
                            onPress={() => navigate('SacredEgg')}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            color='#FFD600'
                            title="Hybrid Sensorium"
                            titleStyle={styles.buttonText}
                            onPress={() => navigate('HybridSensorium')}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            color='#FFD600'
                            title="About Artist"
                            titleStyle={styles.buttonText}
                            onPress={() => navigate('Artist')}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            title="About Halucinarium"
                            titleStyle={styles.buttonText}
                            color='#FFD600'
                            onPress={() => navigate('About')}
                        />
                    </View>
                </View>

            </View>
        );
    }
}

export default Intro;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        height: '75%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    buttonStyle: {
        height: 50,
        backgroundColor: '#ffff',
    },
    buttonText: {
        fontFamily: 'Typonil-Bold',
        fontSize: normalize(20),
        color: '#212121',
    },
});
