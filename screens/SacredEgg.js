import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {normalize} from './Intro';

class SacredEgg extends React.Component {

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
                                Sacred Egg is an interactive installation that swallows your head and feeds on your
                                energy to stay alive. After connecting your head to the egg orifice, the tubular embryo
                                inside starts to breathe and keeps breathing as long as you stay connected. The moment
                                you take your head out of the egg, it reacts violently, screaming, throwing triangles
                                and eventually dying. Sacred Egg points to the continuous present in the making, it is
                                about potentiality, perpetually repetitive but insufficient physicality, continuous
                                death and revival. While offering the illusion of control, it is stealing your senses,
                                absorbing your attention. Looking from behind, all there is left of you is a beheaded
                                hanging body, voided of individual will and responding only to the feeding needs of an
                                insatiable hybrid egg.
                            </Text>

                            <Text style={styles.collaboratorsTitle}>
                                Collaborators:
                            </Text>

                            <Text style={styles.collaborators}>
                                Sergiu Negulici (animation)
                            </Text>
                            <Text style={styles.collaborators}>
                                Mitoș Micleușanu (sound design)
                            </Text>
                            <Text style={styles.collaborators}>
                                Marius Farcaș, Alexandru Palade (programming)
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SacredEgg;

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
        // fontFamily: 'TyponilBold',
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
        // fontFamily: 'AnonymousPro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
        textAlign: 'center',
    },
    collaboratorsTitle: {
        marginTop: 20,
        // fontFamily: 'TyponilBold',
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

