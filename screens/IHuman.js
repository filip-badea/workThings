import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {normalize} from './Intro';

class IHuman extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.root}>
                <View style={styles.backButton}>
                    <Button
                        containerStyle={styles.buttonContainer}
                        buttonStyle={styles.buttonStyle}
                        title="I, Human"
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
                                I, HUMAN project uses human emotional cohesion mediated by technology to influence the
                                feeding conditions of unicellular organisms, in an attempt to identify emergent
                                properties at
                                different scales.
                                A circuit of interconnected masks howls like wolves asking to be fed with emotions. They
                                attempt to hack the biological system of the users by collecting their biometrical data
                                and analyze
                                their individual emotional status, as well as the degree of cohesion of the group. The
                                visitors are invited to override their personal context and pay attention to the
                                emotional status of the
                                others in order to emotionally synchronize and control a bio-photonics experiment and
                                observe
                                it in real time.
                                I, HUMAN is a trans-disciplinary project, a mixture of multimedia installation,
                                performance, using deep learning algorithms and bio-photonics, to investigate subjects
                                such as swarm
                                intelligence. I, HUMAN is developed around the idea of interconnectivity, trying to
                                visually illustrate
                                how a local, individual interaction can sometimes produce collective outcomes.
                            </Text>

                            <Text style={styles.collaboratorsTitle}>
                                Collaborators:
                            </Text>

                            <Text style={styles.collaborators}>
                                Marian Zamfirescu (research)
                            </Text>
                            <Text style={styles.collaborators}>
                                Alexandru-Florin Vartic, Sorin Olexiuc (programming)
                            </Text>
                            <Text style={styles.collaborators}>
                                Radu Mititelu
                            </Text>
                            <Text style={styles.collaborators}>
                                Mitoș Micleușanu (sound design)
                            </Text>
                            <Text style={styles.collaborators}>
                                Bogdan Călin (laser physics)
                            </Text>
                        </View>
                    </View>
                    {/*<View style={styles.root}>*/}

                </ScrollView>
            </View>
        );
    }
}

export default IHuman;

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
        fontFamily: 'Typonil-Bold',
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
        fontFamily: 'Typonil-Bold',
        fontSize: TITLE_FONT_SIZE,
        color: 'white',
    },
    collaborators: {
        marginTop: 8,
        // fontFamily: 'AnonymousPro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
    },
});
