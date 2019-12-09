import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get("window");
const {cond, Value, event, add, set, eq} = Animated;

function interaction(gestX, gestureState) {
    const start = new Value(0);
    const dragging = new Value(0);
    const position = new Value(0);

    return cond(
        eq(gestureState, State.ACTIVE),
        [
            cond(eq(dragging, 0),[set(dragging,1),set(start,position)]),
            set(position, add(start, gestX))
        ],
        [set(dragging, 0), position]
    );
}

export default class Screen4 extends React.Component{

    constructor(props){
        super(props);
        this._gestureX = new Value(0);
        this.gestureState = new Value(-1);
        this._onGestureEvent = event([{
            nativeEvent: {
                translationX: this._gestureX,
                state: this.gestureState
            }
        }]);

       this._transX = interaction(this._gestureX, this.gestureState);
    }

    render() {
        return (
            <PanGestureHandler
                onHandlerStateChange={this._onGestureEvent}
                onGestureEvent={this._onGestureEvent}
            >
                <Animated.View
                    style={[styles.box, {transform: [{ translateX: this._transX }]}]}
                />
            </PanGestureHandler>
        );
    }

}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: "red"
    },
});