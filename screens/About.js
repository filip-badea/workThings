import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {normalize} from './Intro';

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

                <ScrollView>

                <View style={styles.textFull}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>
                            The Status Quo
                        </Text>

                        <Text style={styles.textBody}>
                            Social and environmental issues, together with the appearance of
                            the pivotal Generation Z, produces a disruption in the modes of
                            production and consumption, that is, a new way of living.
                        </Text>

                        <Text style={styles.textTitle}>
                            Vision
                        </Text>

                        <Text style={styles.textBody}>
                            Through art, we communicate that technological innovation adds social value.
                        </Text>

                        <Text style={styles.textTitle}>
                            Mission
                        </Text>

                        <Text style={styles.textBody}>
                            Via its curation of artists and works, Halucinarium ArtOn aims to inspire innovation for novel
                            products and services, as well as using emotional intelligence towards a new way of
                            communication. ArtOn creates a bridge between consumer and brand.
                        </Text>
                    </View>

                </View>
                </ScrollView>
            </View>
        );
    }
}

export default About;

const TITLE_FONT_SIZE = normalize(18);
const BODY_FONT_SIZE = normalize(16);

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#212121',
        flex: 1,
        alignItems: 'center',
    },
    buttonStyle: {
        backgroundColor: '#ffff',
        height: 50,
    },
    buttonContainer: {
        width: '90%',
        marginTop: normalize(30),
        backgroundColor: '#ffff',
    },
    buttonText: {
        fontFamily: 'TyponilBold',
        fontSize: normalize(18),
        color: '#212121',
    },
    textFull: {
        flex: 1,
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        width: '90%',
        textAlign: 'center'
    },
    title: {
        paddingTop: normalize(20),
        fontFamily: 'TyponilBold',
        fontSize: TITLE_FONT_SIZE,
        color: 'white',
    },
    textTitle: {
        paddingTop: normalize(20),
        fontFamily: 'TyponilBold',
        fontSize: TITLE_FONT_SIZE,
        color: 'white',
    },
    textBody: {
        paddingTop: 5,
        fontFamily: 'AnonymousPro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
    },

});
