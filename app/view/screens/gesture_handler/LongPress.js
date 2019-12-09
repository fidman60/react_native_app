import React from "react";
import {Dimensions, StyleSheet, Alert} from "react-native";
import Animated from 'react-native-reanimated';
import ReanimatedCard from "../../../components/ReanimatedCard";
import {LongPressGestureHandler, State} from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const {cond, Value, event, add, set, eq, ScrollView, View, interpolate, Extrapolate, diffClamp} = Animated;

export default class LongPress extends React.Component{

    constructor(props){
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <LongPressGestureHandler
                    minDurationMs={1000}
                    onHandlerStateChange={({ nativeEvent }) => {
                        if (nativeEvent.state === State.ACTIVE) {
                            Alert.alert("I'm being pressed for so long");
                        }
                    }}
                >
                    <View
                        style={styles.box}
                    />
                </LongPressGestureHandler>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "red"
    }
});

