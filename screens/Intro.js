import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Linking} from 'react-native';
import HalucinariumLogoWhite from '../assets/images/HalucinariumIntro.png';
import {Button, SocialIcon } from 'react-native-elements';
import {Dimensions} from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on small iphone dimensions
const scale = (SCREEN_HEIGHT / 568 + SCREEN_WIDTH / 320) / 2;

export function normalize(size) {
    const newSize = size * scale;
    return Math.round(newSize);
}

const TITLE_FONT_SIZE = normalize(20);
const BODY_FONT_SIZE = normalize(18);


class Intro extends React.Component {


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.root}>
                <View style={styles.imageView}>
                    <Image
                        style={styles.imageStyle}
                        source={HalucinariumLogoWhite}
                    />
                    <Text style={styles.textPresents}>
                        presents
                    </Text>
                </View>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.textView}>

                        <Text style={styles.bodyText}>
                            An artistic investigation of interspecies relationships
                            mediated by biometric data networks that speculates
                            on the expansion of the cyberspace into all the
                            processes of living organisms.
                        </Text>

                    </View>


                </ScrollView>

                <View style={styles.enterButton}>
                    <Button
                        containerStyle={styles.buttonContainer}
                        buttonStyle={styles.buttonStyle}
                        raised
                        title="EMOTIONALLY CONNECT"
                        titleColor="white"
                        titleStyle={styles.buttonText}
                        onPress={() => navigate('MainMenu')}
                    />
                </View>

            </View>
        );
    }

}

export default Intro;

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#212121',
        flex: 1,
    },
    imageView: {
        paddingTop: normalize(50),
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageStyle: {
        width: '90%',
        height: 40,
        resizeMode: 'contain',
    },
    textPresents: {
        marginTop: 10,
        fontFamily: 'AnonymousPro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
        textAlign: 'center',
    },
    scrollView: {
        flex: 1,
        marginTop: 25,
    },

    textView: {
        flex: 1,
        marginTop: 25,
        alignItems: 'center',
    },
    bodyText: {
        width: '90%',
        fontFamily: 'AnonymousPro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
        flex: 1,
        textAlign: 'center',
    },
    enterButton: {
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonStyle: {
        backgroundColor: '#fff',
        height: 60,
    },

    buttonText: {
        fontFamily: 'TyponilBold',
        fontSize: TITLE_FONT_SIZE,
        color: 'black',
        textAlign: 'center',

    },
    buttonContainer: {
        width: '80%',
    },
});
