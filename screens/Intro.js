import React from 'react';
import {StyleSheet, View, Text, Image, Modal, ScrollView} from 'react-native';
import HalucinariumLogoWhite from '../assets/images/HalucinariumIntro.png'
import {Icon, Button, Input} from 'react-native-elements'
import {Dimensions} from 'react-native';
import Global from '../Global';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on small iphone dimensions
const scale = (Math.pow(SCREEN_HEIGHT / 568, 2) + Math.pow(SCREEN_WIDTH / 320, 2)) / 2;

export function normalize(size) {
    const newSize = size * scale;
    return Math.round(newSize);
}

const TITLE_FONT_SIZE = normalize(14);
const BODY_FONT_SIZE = normalize(12);


class Intro extends React.Component {

    state = {
        more: false,
        name: ''
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.root}>
                <Modal
                    style={styles.modal}
                    animationType="slide"
                    transparent={true}
                    visible={this.state.more}
                    onRequestClose={() => {
                        console.log('Modal has been closed.');
                        this.setState({more: false})
                    }}>
                    <View style={styles.modalFull}>
                        <View style={styles.closeMore}>
                            <Button
                                buttonStyle={styles.buttonClose}
                                title=""
                                titleStyle={styles.buttonText}
                                raised
                                iconContainerStyle={styles.iconContainerStyle}
                                icon={
                                    <Icon name="close" size={20} color="white"/>
                                }
                                onPress={() => this.setState({more: false})}
                            />
                        </View>

                        <View style={styles.modal}>
                            <Text style={styles.bodyText}>
                                Keep YOU Alive is a phygital game brought to you by Unilever & Halucinarium. It's an
                                adventure beyond screen-based experiences. It's an alternative present in which virtual
                                tactility and connected sustainability are not only far-fetched utopia, but a vital
                                evolutionary step.
                                Become part of a world built through empathic interactions between humans and machines
                                and
                                manifest the all-encompassing connection supporting life on Earth.
                                Expect nothing and feel everything. Access this reality within YOU.
                            </Text>

                            <Text style={styles.bodyText}>
                                Unlock each stage and reconnect with you.
                            </Text>
                        </View>


                    </View>

                </Modal>
                <View style={styles.imageView}>
                    <Image
                        style={styles.imageStyle}
                        source={HalucinariumLogoWhite}
                    />
                </View>
                <View style={styles.textView}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>
                            Unilever and Halucinarium ArtOn present a dual poetical experience:
                        </Text>

                        <View style={styles.combined}>
                            <Text style={styles.titleText}>Hydra -</Text>
                            <Text style={styles.bodyTextCombined}>
                                Sensorial immersion through a blend of the digital and the physical
                            </Text>
                        </View>

                        <Text style={styles.andStyle}>and</Text>


                        <View style={styles.combined}>
                            <Text style={styles.titleText}>I, Human -</Text>
                            <Text style={styles.bodyTextCombined}>
                                Employing emotional intelligence to generate life energy
                            </Text>
                        </View>

                        <Text style={styles.bodyText}>
                            Allow us to transport you out of the everyday routine and to open your creative pores.
                        </Text>

                    </View>

                    <View style={styles.buttons}>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            raised
                            title="Show More"
                            titleColor="white"
                            titleStyle={styles.buttonText}
                            onPress={() => this.setState({more: true})}
                        />

                        <Button
                            containerStyle={styles.buttonEnter}
                            buttonStyle={styles.buttonStyle}
                            raised
                            title="ENTER"
                            titleColor="white"
                            titleStyle={styles.buttonText}
                            onPress={() => navigate('MainMenu')}
                        />
                    </View>

                </View>
            </ScrollView>
        );
    }

    submitName = () => {
        const {expoPushToken} = this.state;
        console.log('Voting..');
        this.setState({unlockPressed: true});
        fetch('http://192.168.100.2:3020/vote', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                stage: 1,
                token: expoPushToken
            }),
        }).catch(error => {
            console.log(error);
        });
    };

}

export default Intro;

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#212121',
        flex: 1
    },
    modalFull: {
        flex: 1,
        backgroundColor: '#212121',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        marginHorizontal: 20,
    },
    closeMore: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: normalize(15),
    },
    imageView: {
        paddingTop: normalize(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputStyle: {
        marginTop: normalize(15),
        backgroundColor: 'white',
        borderRadius: 2,
    },
    imageStyle: {
        width: '90%',
        height: normalize(20),
        resizeMode: 'contain'
    },
    combined: {
        marginTop: normalize(20),
        flexDirection: 'row',
        alignItems: 'center',
    },
    textView: {
        flex: 1,
        marginTop: normalize(25),
        alignItems: 'center',
    },
    textContainer: {
        width: '80%',
    },
    titleText: {
        fontFamily: 'typonil-bold',
        fontSize: TITLE_FONT_SIZE,
        color: 'white',
        textAlign: 'center',
    },
    andStyle: {
        fontFamily: 'typonil-bold',
        fontSize: TITLE_FONT_SIZE,
        marginTop: normalize(25),
        color: 'white',
        textAlign: 'center',
    },
    bodyTextCombined: {
        fontFamily: 'anonymous-pro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
        flex: 1,
        marginLeft: 10,
        textAlign: 'center',
    },
    bodyText: {
        marginTop: normalize(20),
        fontFamily: 'anonymous-pro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
        textAlign: 'center',
    },
    buttonClose: {
        backgroundColor: 'red',
    },
    buttonStyle: {
        backgroundColor: '#fff',
        height: 50,
    },
    iconContainerStyle: {
        backgroundColor: 'red',
        height: 20,
    },
    buttonContainer: {
        backgroundColor: '#FFD600'
    },
    buttonText: {
        fontFamily: 'typonil-bold',
        fontSize: TITLE_FONT_SIZE,
        color: 'black',
    },
    buttonEnter: {
        marginLeft: normalize(30),
    },
    buttons: {
        marginTop: normalize(30),
        alignItems: 'center',
        flexDirection: 'row'
    },
});