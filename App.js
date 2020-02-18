import React from 'react';
import {StyleSheet, View, ActivityIndicator, Vibration, Modal, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from "react-navigation-stack";
import * as Font from 'expo-font';
import {AppLoading, Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import {Button, Icon} from 'react-native-elements'

import Intro, {normalize} from './screens/Intro'
import Artists from "./screens/Artists";
import Unilever from "./screens/Unilever";
import About from "./screens/About";
import Stages from "./screens/Stages";
import MainMenu from './screens/MainMenu'

const AppNavigator = createStackNavigator(
    {
        Intro: {
            screen: Intro,
        },
        MainMenu: {
            screen: MainMenu,
        },
        Stages: {
            screen: Stages,
        },
        Artists: {
            screen: Artists,
        },
        Unilever: {
            screen: Unilever,
        },
        About: {
            screen: About,
        },
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS
        }
    }
);

const Navigator = createAppContainer(AppNavigator);

const fetchFonts = () => {
    return Font.loadAsync({
        'anonymous-pro': require('./assets/fonts/AnonymousPro.ttf'),
        'anonymous-pro-bold': require('./assets/fonts/AnonymousProB.ttf'),
        'typonil-bold': require('./assets/fonts/TyponilBold.otf'),
    });
};

const BODY_FONT_SIZE = normalize(12);

class App extends React.Component {
    state = {
        fontLoaded: false,
        expoPushToken: '',
        notification: null,
        unlockPressed: false,
        stageToUnlock: null,
    };

    registerForPushNotificationsAsync = async () => {
        if (Constants.isDevice) {
            const {status: existingStatus} = await Permissions.getAsync(
                Permissions.NOTIFICATIONS
            );
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const {status} = await Permissions.askAsync(
                    Permissions.NOTIFICATIONS
                );
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            let token = await Notifications.getExpoPushTokenAsync();
            console.log(token);
            this.setState({expoPushToken: token});
        } else {
            alert('Must use physical device for Push Notifications');
        }
    };

    componentDidMount() {
        this.registerForPushNotificationsAsync();

        // Handle notifications that are received or selected while the app
        // is open. If the app was closed and then opened by tapping the
        // notification (rather than just tapping the app icon to open it),
        // this function will fire on the next tick after the app starts
        // with the notification data.
        this._notificationSubscription = Notifications.addListener(
            this._handleNotification
        );
    }

    _handleNotification = notification => {
        // console.log(notification);

        if (notification.origin === 'received') {
            Vibration.vibrate();
        }
        if (notification.origin === 'selected') {
            this.setState({notification: notification.data});
        }
    };

    voteUnlock = () => {
        const {expoPushToken, notification} = this.state;
        this.setState({unlockPressed: true});
        fetch('http://192.168.100.90:3020/vote', {
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

    render() {
        const {notification, unlockPressed} = this.state;

        if (!this.state.fontLoaded) {
            return <View style={styles.loading}>
                <ActivityIndicator size="large" color="#0000ff"/>
                <AppLoading
                    startAsync={fetchFonts}
                    onFinish={() => this.setState({fontLoaded: true})}
                />
            </View>
        }
        return <View style={styles.root}>
            <Modal
                style={styles.modal}
                animationType="slide"
                // transparent={true}
                visible={!!notification}
                onRequestClose={() => {
                    this.setState({notification: null})
                }}>
                <View style={styles.modalFull}>
                    {unlockPressed &&
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
                            onPress={() => this.setState({notification: null})}
                        />
                    </View>
                    }

                    <View style={styles.modal}>
                        {!unlockPressed && <Text style={styles.bodyText}>{notification ? notification.text : ''}</Text>}
                        {unlockPressed && <Text style={styles.bodyText}>{notification ? notification.textAfter : 'Thank you for your vote'}</Text>}
                        {!unlockPressed && <Button
                            containerStyle={styles.buttonUnlock}
                            buttonStyle={styles.buttonStyle}
                            raised
                            title={notification ? notification.button : 'UNLOCK'}
                            titleStyle={styles.buttonUnlockText}
                            onPress={this.voteUnlock}
                        />}

                    </View>
                </View>

            </Modal>
            <Navigator/>
        </View>;
    }
}

export default App;


const styles = StyleSheet.create({
    root: {
        flex: 1,
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
    closeMore: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonClose: {
        backgroundColor: 'red',
    },
    buttonUnlock: {
        marginTop: normalize(20),
    },
    buttonUnlockText: {
        color: '#212121',
    },
    bodyText: {
        fontFamily: 'anonymous-pro',
        fontSize: BODY_FONT_SIZE,
        color: 'white',
        textAlign: 'center',
    },
    buttonStyle: {
        backgroundColor: '#fff',
        height: 50,
    },
    loading: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
