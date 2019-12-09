import React from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {PinchGestureHandler, State} from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get("window");
const {event, Value, multiply, cond, add, set, eq, block, concat} = Animated;

export default class PinchScale extends React.Component{

    constructor(props){
        super(props);

        this._zoom = new Value(1);
        this._zoomOffset = new Value(1);

        this._handleZoom = event([
            {
                nativeEvent: ({ scale: zoom, state }) =>
                    block([
                        cond(eq(state, State.ACTIVE), set(this._zoom, multiply(zoom, this._zoomOffset))),
                        cond(eq(state, State.END), [set(this._zoomOffset, multiply(this._zoomOffset, zoom))]),
                    ]),
            },
        ]);
    }

    render() {

        return (
            <View style={styles.container}>
                <PinchGestureHandler
                    onGestureEvent={this._handleZoom}
                    onHandlerStateChange={this._handleZoom}
                >
                    <Animated.View
                        style={[styles.box, {transform: [{scale: this._zoom}]}]}
                    />
                </PinchGestureHandler>
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

