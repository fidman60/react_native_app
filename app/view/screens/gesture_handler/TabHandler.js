import React from "react";
import {Dimensions, StyleSheet, View, Alert} from "react-native";
import {TapGestureHandler, State} from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get("window");

export default class TabHandler extends React.Component{

    render() {

        return (
            <View style={styles.container}>
                <TapGestureHandler
                    minPointers={2}
                    numberOfTaps={2}
                    onHandlerStateChange={({nativeEvent}) => {
                        if (nativeEvent.state === State.ACTIVE) {
                            Alert.alert("Tab handled");
                        }
                    }}
                >
                    <Animated.View
                        style={[styles.box]}
                    />
                </TapGestureHandler>
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

