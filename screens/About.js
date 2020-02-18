import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Icon, Button} from 'react-native-elements'
import {normalize} from "./Intro";
import Halucinarium from "../assets/images/artOnAbout.png";

class About extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.root}>
                <Button
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.buttonStyle}
                    title="HALUCINARIUM"
                    titleStyle={styles.buttonText}
                    raised
                    iconContainerStyle={styles.iconStyle}
                    icon={
                        <Icon name="keyboard-arrow-left" size={30} color="#212121"/>
                    }
                    iconLeft
                    onPress={() => navigate('MainMenu')}
                />
                {/*<Text style={styles.title}>HALUCINARIUM ArtOn</Text>*/}

                <Image
                    style={styles.imageStyle}
                    source={Halucinarium}
                />

                <View style={styles.textContainer}>


                    <Text style={styles.textTitle}>
                        The Status Quo
                    </Text>

                    <Text style={styles.textBody}>
                        Social and environmental issues, together with the appearance of the
                        pivotal Generation Z, produces a disruption in the modes of production and consumption, that is,
                        a new way of living.
                    </Text>

                    <Text style={styles.textTitle}>
                        Vision
                    </Text>

                    <Text style={styles.textBody}>
                        ArtON empowers companies to capture the full value of the connection between art, technology and
                        society.
                    </Text>

                    <Text style={styles.textTitle}>
                        Mission
                    </Text>

                    <Text style={styles.textBody}>
                        Via its curation of artists and works, Halucinarium ArtON aims to inspire innovation for novel
                        products and services, as well as using emotional intelligence towards a new way of
                        communication.
                    </Text>
                    <Text style={styles.textBody}>
                        ArtON creates a bridge between consumer and brand.
                    </Text>


                </View>
            </View>
        );
    }
}

export default About;

const TITLE_FONT_SIZE = normalize(13);
const BODY_FONT_SIZE = normalize(11);

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#212121',
        flex: 1,
        alignItems: 'center',
    },
    imageStyle: {
        width: normalize(70),
        height: normalize(70),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: normalize(20)
    },
    textContainer: {
        flex: 1,
        width: '90%'
    },
    title: {
        paddingTop: normalize(20),
        fontFamily: 'typonil-bold',
        fontSize: TITLE_FONT_SIZE,
        color: 'white'
    },
    textTitle: {
        paddingTop: normalize(20),
        fontFamily: 'typonil-bold',
        fontSize: TITLE_FONT_SIZE,
        color: 'white'
    },
    textBody: {
        paddingTop: 5,
        fontFamily: 'anonymous-pro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
    },
    buttonStyle: {
        backgroundColor: '#ffff',
        height: 50,
    },
    buttonContainer: {
        width: '90%',
        marginTop: normalize(30),
        backgroundColor: '#ffff'
    },
    buttonText: {
        fontFamily: 'typonil-bold',
        fontSize: normalize(14),
        color: '#212121'
    },
});