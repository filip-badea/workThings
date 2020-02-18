import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon, Button} from 'react-native-elements'
class Stages extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.root}>
                <Button
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.buttonStyle}
                    title="STAGES"
                    titleStyle={styles.buttonText}
                    raised
                    iconContainerStyle={styles.iconStyle}
                    icon={
                        <Icon name="keyboard-arrow-left" size={30} color="#212121"/>
                    }
                    iconLeft
                    onPress={() => navigate('MainMenu')}
                />
                <Text style={styles.textBody}>The Fruit & Natural Juice Bar</Text>
                <Text style={styles.textBody}>The Ritual Tea Experience</Text>
                <Text style={styles.textBody}>The Phygital Program by AGF HYDRA and Maurice Andresen</Text>
                <Text style={styles.textBody}>The Japanese Gourmet Bar</Text>
                <Text style={styles.textBody}>I, Human by Saint Machine</Text>
            </View>
        );
    }
}

export default Stages;

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#212121',
        flex: 1,
        alignItems: 'center',
    },
    buttonStyle: {
        backgroundColor: 'white',
        height: 50,
    },
    buttonContainer: {
        width: '90%',
        marginTop: 50,
    },
    buttonText: {
        fontFamily: 'typonil-bold',
        color: '#212121',
        fontSize: 20,
    },
    textBody: {
        paddingTop: 20,
        fontFamily: 'anonymous-pro',
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
});