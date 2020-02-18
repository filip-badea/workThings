import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements'

import {normalize} from "./Intro";



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
                            title="Artists"
                            titleStyle={styles.buttonText}
                            onPress={() => navigate('Artists')}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            color='#FFD600'
                            title="Stages"
                            titleStyle={styles.buttonText}
                            onPress={() => navigate('Stages')}
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
                    <View style={styles.buttonView}>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            color='#FFD600'
                            title="About Unilever"
                            titleStyle={styles.buttonText}
                            onPress={() => navigate('Unilever')}
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
        height: 60,
        backgroundColor: '#ffff',
    },
    buttonText: {
        fontFamily: 'typonil-bold',
        fontSize: normalize(14),
        color: '#212121',
    },
});