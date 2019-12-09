import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {Transition} from "react-navigation-fluid-transitions";

const LogoImage = (props) => (
    <Image source={{uri:'https://picsum.photos/100/100?image=56'}} style={props.style}/>
);

export default class Screen1 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Transition shared="logo">
                    <LogoImage style={styles.largeLogo}/>
                </Transition>
                <Transition appear="horizontal">
                    <Text style={styles.paragraph}>
                        Welcome to this fantastic app!
                    </Text>
                </Transition>
                <Transition appear="top">
                    <Button title="Next" onPress={() => this.props.navigation.navigate("screen2")} />
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
});