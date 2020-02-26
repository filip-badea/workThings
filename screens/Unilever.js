import React from 'react';
import {StyleSheet, View, ScrollView, Text, Linking, Image} from 'react-native';
import {Icon, Button} from 'react-native-elements'
import {normalize} from "./Intro";
import Unilever from "../assets/images/AboutUni.png";

class Stages extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.root}>
                <Button
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.buttonStyle}
                    title="UNiLEVER"
                    titleStyle={styles.buttonText}
                    raised
                    iconContainerStyle={styles.iconStyle}
                    icon={
                        <Icon name="keyboard-arrow-left" size={30} color="#212121"/>
                    }
                    iconLeft
                    onPress={() => navigate('MainMenu')}
                />
                <View style={styles.textContainer}>
                    <ScrollView style={styles.scrollView}>

                        <Image
                            style={styles.imageStyle}
                            source={Unilever}
                        />

                        <Text>
                            <Text style={styles.textBodyBold}>Unilever</Text>
                            <Text style={styles.textBody}> is one of the world’s leading suppliers of Beauty &
                                Personal Care, Home Care, and Foods & Refreshment products with sales in over 190
                                countries
                                and reaching 2.5 billion consumers a day. It has 161,000 employees and generated sales
                                of
                                €53.7 billion in 2017. Over half (57%) of the company’s footprint is in developing and
                                emerging markets. Unilever has more than 400 brands found in homes all over the world,
                                including Dove, Rexona, Axe, Domestos, Cif, Hellmann’s, Delikat, Dero, Lipton, Algida,
                                Ben &
                                Jerry’s and Magnum.
                            </Text>
                        </Text>

                        <Text style={styles.textBody}>
                            <Text style={styles.textBodyBold}>Unilever’s Sustainable Living Plan </Text>
                            <Text style={styles.textBody}>(USLP) underpins the company’s strategy and commits
                                to:
                            </Text>
                        </Text>

                        <Text style={styles.textBodyBullet}>
                            • Helping more than a billion people take action to improve their health and well-being by
                            2020
                        </Text>
                        <Text style={styles.textBodyBullet}>
                            • Halving the environmental impact of our products by 2030
                        </Text>
                        <Text style={styles.textBodyBullet}>
                            • Enhancing the livelihoods of millions of people by 2020
                        </Text>

                        <Text style={styles.textBody}>
                            The USLP creates value by driving growth and trust,
                            eliminating costs and reducing risks. The company’s sustainable living brands are
                            growing 46% faster than the rest of the business and delivered 70% of the company’s
                            growth in 2017.
                            Unilever was ranked as an industry leader in the 2018 Dow Jones Sustainability Index. In
                            the FTSE4Good Index, it achieved the highest environmental score of 5. It led the list
                            of Global Corporate Sustainability Leaders in the 2017 GlobeScan/SustainAbility annual
                            survey for the seventh year running, and achieved four A ratings across Climate Change,
                            Water, Forests and Supplier Engagement in CDP's 2018 Global Supply Chain report.
                            Unilever has pledged to become carbon positive in its operations by 2030, and to ensure
                            100% of its plastic packaging is fully reusable, recyclable or compostable by 2025.
                        </Text>

                        <Text style={styles.textBody}>
                            <Text style={styles.textBody}>
                                For more information about Unilever and its brands, please visit: </Text>
                            <Text style={styles.textBodyLink}
                                  onPress={() => Linking.openURL('www.unilever.com')}>
                                www.unilever.com
                            </Text>


                        </Text>

                        <Text style={styles.textBody}>
                            <Text style={styles.textBody}>
                                For more information on the USLP:
                            </Text>
                            <Text style={styles.textBodyLink}
                                  onPress={() => Linking.openURL('www.unilever.com/sustainable-living/')}>
                                www.unilever.com/sustainable-living/
                            </Text>
                        </Text>


                    </ScrollView>

                </View>
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
    imageStyle: {
        width: normalize(70),
        height: normalize(70),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: normalize(20)
    },
    textContainer: {
        flex: 1,
        width: '90%',
        textAlign: 'center'
    },
    buttonStyle: {
        backgroundColor: 'white',
        height: 50,
    },
    buttonContainer: {
        width: '90%',
        marginTop: normalize(30),
    },
    buttonText: {
        fontFamily: 'typonil-bold',
        fontSize: normalize(11),
        color: '#212121',
    },
    scrollView: {
        marginTop: normalize(20),
        marginHorizontal: 20,
    },
    textTitle: {
        marginTop: normalize(25),
        fontFamily: 'typonil-bold',
        fontSize: normalize(10),
        color: 'white'
    },
    margin: {
        marginTop: normalize(15)
    },
    textBody: {
        marginTop: normalize(15),
        fontFamily: 'anonymous-pro',
        fontSize: normalize(10),
        color: 'white',
    },
    textBodyBullet: {
        marginTop: normalize(5),
        fontFamily: 'anonymous-pro',
        fontSize: normalize(10),
        color: 'white',
    },
    textBodyLink: {
        marginTop: normalize(15),
        fontFamily: 'anonymous-pro',
        fontSize: normalize(10),
        color: '#448AFF',
    },
    textBodyBold: {
        marginTop: normalize(15),
        fontFamily: 'anonymous-pro-bold',
        fontSize: normalize(10),
        color: 'white',
    },
});