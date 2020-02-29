import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import Machine from '../assets/images/artistpage_saint.png';
import {normalize} from './Intro';

class Artist extends React.Component {


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.root}>
                <View style={styles.backContainer}>
                    <Button
                        containerStyle={styles.buttonContainer}
                        buttonStyle={styles.buttonStyle}
                        title="SAINT MACHINE"
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
                <View style={styles.artistContainer}>

                    <View style={styles.artistPhoto}>
                        <Image
                            style={{
                                width: 130,
                                height: 130,
                                resizeMode: 'contain',
                            }}
                            source={Machine}
                        />
                    </View>
                    <ScrollView style={styles.artistInfo}>
                        <Text style={styles.textBody}>
                            SAINT MACHINE is the pseudonym of a Romanian experimental artist, the author of body
                            responsive installations that investigate biological processes and study the notion of space
                            as living structure. Her works are organism-like sculptures that carry a digital core, use
                            the human body to function and question the willingness to cede physicality and biological
                            needs in exchange for digital content. In the interaction with these hybrid organisms
                            emitting light, one’s success in controlling them is always equivalent to letting oneself
                            assimilated by them. Her body responsive installations have been presented in prestigious
                            media art festival such as Ars Electronica (AT), Athens Digital Arts Festival (GR), MADATAC,
                            Medialab-Prado (ES), Laval Virtual (FR).
                        </Text>

                    </ScrollView>
                </View>

            </View>
        );
    }
}

export default Artist;

const TITLE_FONT_SIZE = normalize(18);
const BODY_FONT_SIZE = normalize(16);

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#212121',
        width: '100%',
        flex: 1,
    },
    backContainer: {
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
        fontFamily: 'Typonil-Bold',
        fontSize: normalize(18),
        color: '#212121',
    },
    artistContainer: {
        flex: 1,
        alignItems: 'center',
    },
    artistInfo: {
        flex: 1,
        width: '90%',
        marginTop: normalize(20),
        marginBottom: normalize(20),
    },
    artistPhoto: {
        paddingTop: normalize(20),
        alignItems: 'center',
    },
    textBody: {
        fontFamily: 'AnonymousPro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
        textAlign: 'center',
    },
});
