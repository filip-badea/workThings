import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {normalize} from './Intro';

class InsatiableMachines extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.root}>
                <View style={styles.backButton}>
                    <Button
                        containerStyle={styles.buttonContainer}
                        buttonStyle={styles.buttonStyle}
                        title="Insatiable Machines"
                        titleStyle={styles.buttonText}
                        raised
                        iconContainerStyle={styles.iconStyle}
                        icon={
                            <Icon name="keyboard-arrow-left" size={30} color="#212121"/>
                        }
                        iconLeft
                        onPress={() => navigate('MainMenu')}
                    />
                </View>
                <ScrollView style={styles.scroll}>
                    <View style={styles.textFull}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textBody}>
                                Insatiable Machines is a solo show of artist Saint Machine curated by Carmen Casiuc.
                                Part of the ”Reedeming Time” Halucinarium Program, it showcases an artistic
                                investigation into how humans, living organisms and machines control and communicate
                                with each other through a complex dynamics of grace and greed.
                                Working with programmers, physicists, engineers, 3D animators and sound artists, Saint
                                Machine develops sophisticated systems to realize ambitious productions in which the
                                experience of the public becomes an integral part of the artwork.
                                Revealing a renewed sensibility towards new technologies and a critical view of their
                                ubiquitous adoption in today’s society, Insatiable machines by Saint Machine generates
                                an all-encompassing sensing environment of mutually programming harmony that reflects
                                upon the modeling of collective affects produced within the holy tension of love and
                                power between human, machines and nature.
                            </Text>

                        </View>
                    </View>
                    {/*<View style={styles.root}>*/}

                </ScrollView>
            </View>
        );
    }
}

export default InsatiableMachines;

const TITLE_FONT_SIZE = normalize(18);
const BODY_FONT_SIZE = normalize(16);

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#212121',
        flex: 1,
    },
    backButton: {
        alignItems: 'center',
    },
    buttonStyle: {
        backgroundColor: '#ffff',
        height: 50,
    },
    buttonContainer: {
        width: '90%',
        margin: 'auto',
        marginTop: normalize(30),
        backgroundColor: '#ffff',
    },
    buttonText: {
        fontFamily: 'TyponilBold',
        fontSize: normalize(18),
        color: '#212121',
    },
    scroll: {
        backgroundColor: '#212121',
        flex: 1,
        marginBottom: 30,
    },
    textFull: {
        alignItems: 'center',
    },
    textContainer: {
        width: '90%',
    },
    textBody: {
        paddingTop: 20,
        fontFamily: 'AnonymousPro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
        textAlign: 'center',
    },
    collaboratorsTitle: {
        marginTop: 20,
        fontFamily: 'TyponilBold',
        fontSize: TITLE_FONT_SIZE,
        color: 'white',
    },
    collaborators: {
        marginTop: 8,
        fontFamily: 'AnonymousPro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
    },
});
