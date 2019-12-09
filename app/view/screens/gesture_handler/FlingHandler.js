import React from "react";
import {Dimensions, StyleSheet, View, Alert} from "react-native";
import {FlingGestureHandler, Directions, State} from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get("window");

export default class FlingHandler extends React.Component{

    render() {

        return (
            <View style={styles.container}>
                <FlingGestureHandler
                    direction={Directions.DOWN}
                    onHandlerStateChange={({ nativeEvent }) => {
                        console.log(nativeEvent);
                        if (nativeEvent.state === State.ACTIVE) {
                            Alert.alert("I'm flinged!");
                        }
                    }}
                >
                    <Animated.View
                        style={[styles.box]}
                    />
                </FlingGestureHandler>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: "red"
    }
});

