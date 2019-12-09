import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {Transition} from "react-navigation-fluid-transitions";

const LogoImage = (props) => (
    <Image source={{uri:'https://picsum.photos/100/100?image=56'}} style={props.style}/>
);

export default class Screen2 extends React.Component {

    myCustomTransitionFunction = (transitionInfo) => {
        const { progress, start, end } = transitionInfo;
        const rotate = progress.interpolate({
            inputRange: [start, end],
            outputRange: ["0deg", "90deg"],
            extrapolate: "clamp",
        });
        return { transform: [{ rotate }] };
    };

    render() {
        return (
            <View style={styles.container}>
                <Transition shared="logo">
                    <LogoImage style={styles.smallLogo}/>
                </Transition>
                <Transition appear="horizontal">
                    <Text style={styles.paragraph}>
                        <Text style={{fontWeight:'normal'}}>
                            Now you should have a basic understanding of how this app works.
                            Please sign up and take part in this fantastic user experience!
                        </Text>
                    </Text>
                </Transition>
                <Transition appear="horizontal">
                    <Text style={styles.paragraph}>
                        This is the last page of the onboarding.
                    </Text>
                </Transition>
                <Transition appear={this.myCustomTransitionFunction}>
                    <Button title="Back" onPress={() => this.props.navigation.goBack()} />
                </Transition>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ecf0f1',
    },
    largeLogo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    paragraph: {
        margin: 24,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    smallLogo: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
});