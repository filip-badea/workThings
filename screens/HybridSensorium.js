import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {normalize} from './Intro';

class HybridSensorium extends React.Component {

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
                                Hybrid Sensorium explores the way we sense our body within physical space and the
                                sensory distortions caused both by mediating technology and direct contact. The artwork
                                is placed in immediate physical contact with the visitor, both thus becoming vulnerable
                                to emotional contamination.
                                A fabricated structure is superposed on the natural medium of the body, an artificial,
                                permeable membrane that tries to condition our biological needs in an osmotic feeding
                                ritual. The organism tests our willingness to cede personal physicality to a constructed
                                environment, a suspended reality caused by a gap in the objective reality. You can
                                interact with it by inserting your head through its orifice. The cavity responds to your
                                breathing rhythm in real time, trying to adapt it to its needs, while the breathless
                                visitor will enter a cycle of sensorial aberrations.
                            </Text>

                            <Text style={styles.collaboratorsTitle}>
                                Collaborators:
                            </Text>

                            <Text style={styles.collaborators}>
                                Reniform aka Sergiu Negulici (animation)
                            </Text>
                            <Text style={styles.collaborators}>
                                Mitoș Micleușanu (sound design)
                            </Text>
                            <Text style={styles.collaborators}>
                                Răzvan Vasilache (interactivity programming)
                            </Text>
                            <Text style={styles.collaborators}>
                                Radu Mititelu (electronics engineering)
                            </Text>
                            <Text style={styles.collaborators}>
                                Sorin Olexiuc & Alexandru-Florin Vartic (behaviour archive & statistics programing)
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default HybridSensorium;

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
        fontFamily: 'AnonymousPro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
    },
});
