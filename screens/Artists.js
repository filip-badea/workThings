import React from 'react';
import {StyleSheet, View, Text, Image, Modal} from 'react-native';
import {Icon, Button} from 'react-native-elements'
import Hydra from "../assets/images/artistpage_hydra.png";
import Machine from "../assets/images/artistpage_saint.png";
import {normalize} from "./Intro";

class Artists extends React.Component {

    state = {
        moreHydra: false,
        moreMachine: false
    };

    render() {
        const {navigate} = this.props.navigation;
        const {moreHydra, moreMachine} = this.state;
        return (
            <View style={styles.root}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={moreHydra || moreMachine}
                    onRequestClose={() => {
                        this.setState({moreHydra: false, moreMachine: false})
                    }}>
                    <View style={styles.modalFull}>
                        <View style={styles.closeMore}>
                            <Button
                                buttonStyle={styles.buttonClose}
                                title=""
                                titleColor="white"
                                raised
                                iconContainerStyle={styles.iconContainerStyle}
                                icon={
                                    <Icon name="close" size={20} color="white"/>
                                }
                                onPress={() => this.setState({moreHydra: false, moreMachine: false})}
                            />
                        </View>
                        <View style={styles.modal}>
                            {
                                moreHydra ?
                                    <Text>
                                        <Text style={styles.textBody}>
                                            AGF is an Italian fashion designer and performer working between London and
                                            Berlin. Anticipating a digital humanist utopia in which physical
                                            regeneration
                                            and emotional enhancement is sustainable and possible through sensory-based
                                            interfaces and prosthetics, she focused on developing senses-based
                                            interfaces
                                            for AR and VR environments. Past collaborations include artistic direction
                                            for
                                            Prada in collaboration with Arca and for Chanel with Nozomi Iijima. Costude
                                            design for artists such as Hannah Perry, Keiken, Vessel, New Noveta, Zoe
                                            Williams.
                                        </Text>
                                        <Text style={styles.textBody}>
                                            [LOCKED]
                                        </Text>
                                    </Text> :
                                    <Text>
                                        <Text style={styles.textBody}>
                                            Saint Machine (RO) is a Romanian experimental artist, author of immersive
                                            installations that investigate biological processes and study the notion of
                                            space as a living structure. Her organism-like sculptures emit light, carry
                                            a
                                            digital core, using the human body to function and question the willingness
                                            to
                                            cede human physicality and biological needs in exchange for digital content.
                                        </Text>

                                        <Text style={styles.textBody}>
                                            [LOCKED]
                                        </Text>
                                    </Text>
                            }


                        </View>
                    </View>
                </Modal>
                <Button
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.buttonStyle}
                    title="ARTISTS"
                    titleStyle={styles.buttonText}
                    raised
                    iconContainerStyle={styles.iconStyle}
                    icon={
                        <Icon name="keyboard-arrow-left" size={30} color="#212121"/>
                    }
                    iconLeft
                    onPress={() => navigate('MainMenu')}
                />
                <View style={styles.artistsContainer}>
                    <View style={styles.artistsInfo}>
                        <View style={styles.artistInfo}>
                            <Text style={styles.textTitle}>AGF HYDRA</Text>
                            <Text style={styles.textBody}>
                                AGF is an Italian fashion designer and performer working between London and
                                Berlin. Anticipating a digital humanist utopia in which physical regeneration and
                                emotional enhancement is sustainable and possible through sensory-based interfaces and
                                prosthetics, she focused on developing senses-based interfaces for AR and VR
                                environments.
                            </Text>

                            <Button
                                containerStyle={styles.buttonMoreContainer}
                                buttonStyle={styles.buttonMore}
                                raised
                                title="Show More"
                                titleStyle={styles.buttonText}
                                onPress={() => this.setState({moreHydra: true})}
                            />

                        </View>
                        <View style={styles.artistPhoto}>
                            <Image
                                style={{
                                    width: 130,
                                    height: 130,
                                    resizeMode: 'contain'
                                }}
                                source={Hydra}
                            />
                        </View>

                    </View>
                    <View style={styles.artistsInfo}>
                        <View style={styles.artistInfo}>
                            <Text style={styles.textTitle}>SAINT MACHINE</Text>
                            <Text style={styles.textBody}>
                                Saint Machine (RO) is a Romanian experimental artist, author of immersive installations
                                that investigate biological processes and study the notion of space as a living
                                structure.
                            </Text>

                            <Button
                                containerStyle={styles.buttonMoreContainer}
                                buttonStyle={styles.buttonMore}
                                raised
                                title="Show More"
                                titleColor="white"
                                titleStyle={styles.buttonText}
                                onPress={() => this.setState({moreMachine: true})}
                            />
                        </View>
                        <View style={styles.artistPhoto}>
                            <Image
                                style={{
                                    width: 130,
                                    height: 130,
                                    resizeMode: 'contain'
                                }}
                                source={Machine}
                            />
                        </View>

                    </View>

                </View>


            </View>
        );
    }
}

export default Artists;

const TITLE_FONT_SIZE = normalize(11);
const BODY_FONT_SIZE = normalize(10);

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#212121',
        flex: 1,
        alignItems: 'center',
    },
    artistsContainer: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
    },
    artistsInfo: {
        flexDirection: 'row',
        // alignItems: 'center'
    },
    artistInfo: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center'
    },
    artistPhoto: {
        paddingTop: 40,
        flex: 1,
        alignItems: 'center',
    },
    textTitle: {
        paddingTop: normalize(10),
        fontFamily: 'typonil-bold',
        fontSize: TITLE_FONT_SIZE,
        color: 'white'
    },
    textBody: {
        paddingTop: normalize(10),
        fontFamily: 'anonymous-pro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
        textAlign: 'center',
    },
    buttonMore: {
        backgroundColor: '#fff',
        height: 30,
    },
    buttonMoreContainer: {
        marginTop: normalize(10),
        height: 30,
    },
    buttonStyle: {
        backgroundColor: '#ffff',
        height: 50,
    },
    buttonContainer: {
        width: '90%',
        marginTop: normalize(30),
        // backgroundColor: '#FFD600'
    },
    buttonText: {
        fontFamily: 'typonil-bold',
        fontSize: TITLE_FONT_SIZE,
        color: '#212121',
    },
    buttonClose: {
        // height: 30,
        backgroundColor: 'red',
    },
    iconContainerStyle: {
        backgroundColor: 'red',
        height: 20,
    },
    modalFull: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center'
    },
    modal: {
        flex: 1,
        width: '90%',
    },
    closeMore: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
    },
});