import React from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {PanGestureHandler, State} from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get("window");
const {event, Value, multiply, cond, add, set, eq, block, concat} = Animated;

export default class PinchScale extends React.Component{

    constructor(props){
        super(props);

        this._transX = new Value(0);
        this._transY = new Value(0);
        this._offsetTransX = new Value(0);
        this._offsetTransY = new Value(0);

        this._handlerDrag = event([{
            nativeEvent: ({translationX: x, translationY: y, state}) => (
                block([
                    cond(
                        eq(state, State.ACTIVE),
                        [
                            set(this._transX, add(x, this._offsetTransX)),
                            set(this._transY, add(y, this._offsetTransY))
                        ]
                    ),
                    cond(
                        eq(state, State.END),
                        [
                            set(this._offsetTransX, add(x, this._offsetTransX)),
                            set(this._offsetTransY, add(y, this._offsetTransY)),
                        ]
                    )
                ])
            )
        }])
    }

    render() {

        return (
            <View style={styles.container}>
                <PanGestureHandler
                    onGestureEvent={this._handlerDrag}
                    onHandlerStateChange={this._handlerDrag}
                >
                    <Animated.View
                        style={[styles.box, {transform: [{translateX: this._transX}, {translateY: this._transY}]}]}
                    />
                </PanGestureHandler>
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

